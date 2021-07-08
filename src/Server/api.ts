import { ServerScriptService, Players, StarterGui } from "@rbxts/services";
import { apiEvents } from "./apiEvents";
import { t } from "@rbxts/t";

const events = ServerScriptService.WaitForChild("apiEvents") as apiEvents;

namespace API {
	const onOrderCreated = events.orderCreated;
	const onOrderClaimed = events.orderClaimed;
	const onOrderCompleted = events.orderCompleted;

	export function EnableGui(Player: Player, gui: "cashierGui" | "kioskGui" | "hrScreenGui") {
		if (t.match("cashierGui|kioskGui|hrScreenGui")) {
			events.enableGui.Fire(Player, gui);
		} else {
			warn(`Invalid GUI argument "${gui}" for LundstrongOrders API.EnableGui (for ${Player.Name})`);
		}
	}

	export function RegisterPluginGuiWithHrScreen(gui: GuiObject) {
		for (const plr of Players.GetPlayers()) {
			const hrScreen = plr
				.WaitForChild("playerGui")
				.WaitForChild("LundstrongOrders")
				.WaitForChild("hrScreenGui")
				.WaitForChild("hrScreenGui") as hrScreenGui;
			hrScreen.plugins.ScrollingFrame.noPlugins.Visible = false;
			gui.Clone().Parent = hrScreen.plugins.ScrollingFrame;
		}
		const hrScreen = StarterGui.WaitForChild("LundstrongOrders")
			.WaitForChild("hrScreenGui")
			.WaitForChild("hrScreenGui") as hrScreenGui;
		hrScreen.plugins.ScrollingFrame.noPlugins.Visible = false;
		gui.Clone().Parent = hrScreen.plugins.ScrollingFrame;
	}
}

export = API;
