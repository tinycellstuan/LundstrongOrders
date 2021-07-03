import { Definitions } from "@rbxts/net";
import Order from "ReplicatedStorage/order";
import Notification from "ReplicatedStorage/notification";

const Remotes = Definitions.Create({
	createOrder: Definitions.ServerFunction<() => Order | string>(),
	claimOrder: Definitions.ServerFunction<(currentOrder: Order) => Order | string>(),
	completeOrder: Definitions.ServerFunction<(currentOrder: Order) => Order | string>(),
	deleteOrder: Definitions.ServerFunction<(currentOrder: Order) => Order | string>(),
});

export { Remotes };
