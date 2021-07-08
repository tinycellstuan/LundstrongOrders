import { Definitions } from "@rbxts/net";
import Order from "ReplicatedStorage/order";
import Notification from "ReplicatedStorage/notification";

const Remotes = Definitions.Create({
	createOrder: Definitions.ServerFunction<(receiver: string, items: string[]) => Order | Notification>(),
	claimOrder: Definitions.ServerFunction<(currentOrder: Order) => Order | Notification>(),
	completeOrder: Definitions.ServerFunction<(currentOrder: Order) => Order | Notification>(),
	deleteOrder: Definitions.ServerFunction<(currentOrder: Order) => Order | Notification>(),
	enableGui: Definitions.ServerToClientEvent<[gui: "cashierGui" | "kioskGui" | "hrScreenGui"]>(),
	orderList: Definitions.ServerToClientEvent<[orders: Order[]]>(),
});

export { Remotes };
