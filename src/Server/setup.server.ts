import config from "Workspace/config";
import { Workspace, Players, MarketplaceService } from "@rbxts/services";
import { Remotes } from "ReplicatedStorage/remotes";

const enableGui = Remotes.Server.Create("enableGui");

const Models = Workspace.WaitForChild("LundstrongOrders").FindFirstChild("Models");

declare type modelSurfaceGui = SurfaceGui & {
	["Frame"]: Frame & {
		["UICorner"]: UICorner;
		["ImageLabel"]: ImageLabel;
	};
};

if (Models !== undefined) {
	for (const model of Models.GetChildren()) {
		if (model.Name === "Register") {
			(model.WaitForChild("mainPart").WaitForChild("MainGui") as modelSurfaceGui).Enabled = true;
			(model.WaitForChild("mainPart").WaitForChild("MainGui") as modelSurfaceGui).Frame.ImageLabel.Image =
				config.Branding.ImageId;
			const clickDetector = new Instance("ClickDetector");
			clickDetector.Parent = model.WaitForChild("mainPart");
			clickDetector.MouseClick.Connect((plr) => {
				if (config.CashierSettings.GroupID) {
				} else {
					enableGui.SendToPlayer(plr, "cashierGui");
				}
			});
		}
	}
}
