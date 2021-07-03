import { TweenService } from "@rbxts/services";

class Notification {
	text: string;
	time?: number;

	constructor(text: string, time?: number) {
		this.text = text;
		this.time = time !== undefined ? time : 5;
	}

	Display(player: Player) {
		const path = {
			gui: {
				Container: (
					player
						.WaitForChild("PlayerGui")
						.WaitForChild("LundstrongOrders")
						.WaitForChild("notification")
						.WaitForChild("notification") as notification
				).Container,
			},
			folder: player.WaitForChild("PlayerGui").WaitForChild("LundstrongOrders").WaitForChild("notification"),
		};
		const clone = path.gui.Container.Demo.Clone();
		clone.Parent = path.gui.Container;
		clone.Name = "Notification";
		clone.Frame.textFrame.TextLabel.Text = this.text;

		const fadeInTween = TweenService.Create(clone.Frame, new TweenInfo(1), {
			Position: new UDim2(0.1, 0, 0.1, 0),
		});
		const timetween = TweenService.Create(
			clone.Frame.Frame,
			new TweenInfo(this.time, Enum.EasingStyle.Linear, Enum.EasingDirection.Out),
			{
				BackgroundColor3: Color3.fromRGB(90, 137, 149),
				Size: new UDim2(0.1, 0, 1.1, 0),
			},
		);
		const fadeOutTween = TweenService.Create(clone.Frame, new TweenInfo(1), {
			Position: new UDim2(0.1, 0, 1.1, 0),
		});

		(path.folder.WaitForChild("Sound") as Sound).Play();
		fadeInTween.Play();
		fadeInTween.Completed.Connect(() => {
			timetween.Play();
		});
		timetween.Completed.Connect(() => {
			fadeOutTween.Play();
		});
		fadeOutTween.Completed.Connect(() => {
			clone.Destroy();
		});
	}
}

export = Notification;
