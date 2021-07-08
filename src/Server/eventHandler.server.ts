import Order from "ReplicatedStorage/order";
import DataStore2 from "@rbxts/datastore2";
import config from "Workspace/config";
import { Players, RunService, ServerScriptService } from "@rbxts/services";
import { apiEvents } from "./apiEvents";
import { Remotes } from "ReplicatedStorage/remotes";
import Notification from "ReplicatedStorage/notification";

const createOrder = Remotes.Server.Create("createOrder");
const claimOrder = Remotes.Server.Create("claimOrder");
const completeOrder = Remotes.Server.Create("completeOrder");
const deleteOrder = Remotes.Server.Create("deleteOrder");
const enableGui = Remotes.Server.Create("enableGui");
const orderList = Remotes.Server.Create("orderList");

const apiEventsFolder = ServerScriptService.WaitForChild("apiEvents") as apiEvents;

DataStore2.Combine("DATA", "points" /* TBD: , "settings" */);

const debounce: { [key: string]: number } = {};
const orders: Order[] = [];

createOrder.SetCallback((creator: Player, receiver: string, items: string[]) => {
	if (debounce[creator.Name] === undefined || debounce[creator.Name] < os.time()) {
		if (items[0] !== undefined) {
			debounce[creator.Name] =
				os.time() + creator.Name === receiver
					? config.KioskSettings.OrderCooldown
					: config.CashierSettings.OrderCooldown;
			const newOrder = new Order(
				creator,
				receiver,
				items,
				orders.size() /* this is one higher than the index, therefore meaning that it can be the ID. */,
			);
			orders[newOrder.id] = newOrder;
			orderList.SendToAllPlayers(orders);
			apiEventsFolder.orderCreated.Fire(newOrder);
			print("NEW ORDER:", newOrder.id);
			if (creator.Name !== receiver) {
				new Notification(`${creator.Name} has created an order for you.`, 10).Display(newOrder.receiver);
			}
			return newOrder;
		} else {
			return new Notification("You can't submit an empty order!", 5);
		}
	} else {
		return new Notification(
			"Slow down! Your order cooldown hasn't expired!",
			os.difftime(debounce[creator.Name], os.time()),
		);
	}
});

claimOrder.SetCallback((player, order) => {
	order.isClaimed = true;
	order.orderClaimer = player;
	orders[order.id] = order;
	return order;
});
