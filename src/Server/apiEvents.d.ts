import Order from "ReplicatedStorage/order";

type apiEvents = Folder & {
	["orderClaimed"]: BindableEvent<(Order: Order) => void>;
	["orderCompleted"]: BindableEvent<(Order: Order) => void>;
	["orderCreated"]: BindableEvent<(Order: Order) => void>;
	["enableGui"]: BindableEvent<(Player: Player, guiName: "cashierGui" | "kioskGui" | "hrScreenGui") => void>;
};
