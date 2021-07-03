import { t } from "@rbxts/t";
import { Players } from "@rbxts/services";
import DataStore2 from "@rbxts/datastore2";
import config from "Workspace/config";

class Order {
	creator: Player;
	receiver: Player;
	items: string[];
	orderClaimer?: Player;
	id: number;
	isClaimed: boolean;
	isCompleted: boolean;

	constructor(creator: Player, receiver: string | Player, items: string[], id: number) {
		// Init. values
		this.creator = creator;
		this.items = items;
		if (t.userdata(receiver)) {
			this.receiver = receiver;
		} else {
			let receiverPlayer: Player | undefined;
			for (const plr of Players.GetPlayers()) {
				if (plr.Name === receiver) {
					receiverPlayer = plr;
				}
			}
			if (receiverPlayer) {
				this.receiver = receiverPlayer;
			} else {
				error(`[LundstrongOrders] Unable to find player ${receiver}`);
			}
		}
		this.isClaimed = false;
		this.isCompleted = false;
		this.id = id;

		// Points
		if (creator.Name !== receiver) {
			if (config.PointsSettings.PointsEnabled) {
				const dataStore = DataStore2("points", creator);
				dataStore.Increment(config.PointsSettings.PointsAwarded);
			}
		}
	}
}

export = Order;
