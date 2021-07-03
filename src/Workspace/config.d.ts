import menuItemsConfig from "Workspace/menuItemsConfig";

interface config {
	Branding: {
		Name: "Baker's Kitchen";
		ImageId: "http://www.roblox.com/asset/?id=952441662"; // Make sure this image is Square-Shaped.
	};

	CashierSettings: {
		GroupID: false; // Keep as false if you arent using a group. If using a group, change false to your group ID eg. {1815715},
		MinimumRankEnabled: false; // If you want a minimum rank ID in your group to be able to use cashier, keep the value as true. if you want to use a rank table, set this value to false.
		MinimumRank: 0; // If the above value is true, input the minimum rank ID here (wont work if value is false)
		RankTable: [1, 4, 7, 42]; // Will work if MinimumRankEnabled is set to false, input all rank ID's that can use the Cashier.
		OrderCooldown: 7; // The cooldown for making orders with cashier. Value is in seconds.
		// 'CustomerPrompt': true, // Set to true to allow the custom to confirm the order can be made (getting permission from customer). Set to false if you want to disable.
	};

	OrderBoardSettings: {
		GroupID: false; // Keep as false if you arent using a group. If using a group, change false to your group ID eg. {1815715},
		MinimumRankEnabled: false; // If you want a minimum rank ID in your group to be able to use the Order Board, keep the value as true. if you want to use a rank table, set this value to false.
		MinimumRank: 0; // If above value is true, input the minimum rank ID here (wont work if value is false)
		RankTable: {}; // Will work if MinimumRankEnabled is set to false, input all rank ID's that can use the Order board.
	};
	PointsSettings: {
		PointsEnabled: true; // Set to false if you dont want to use the points system.
		PointsAwarded: 1; // Change this value to what amount of points you want awarded. Only works if the above value is set to true.
	};

	KioskSettings: {
		GamepassRequired: false; // If you want to require a gamepass for Kiosk, keep this value as true. If not, set to false.
		GamepassID: 111; // Put gamepass ID here. Only works if above value is set to true.
		PromptPurchase: false; // If a user doesnt have the kiosk gamepass, set this to true to prompt to purchase it, set to false to disable that setting.
		OrderCooldown: 5; // The cooldown for making orders with Kiosk. Value is in seconds.
	};

	PickupScreenSettings: {
		CompletedOrdersTime: 15; // Show how long completed orders stay on the board. Value is in seconds.
	};

	hrScreenSettings: {
		GroupID: false; // Keep as false if you arent using a group. If using a group, change false to your group ID eg. {1815715},
		MinimumRankEnabled: false; // If you want a minimum rank ID in your group to be able to use cashier, keep the value as true. if you want to use a rank table, set this value to false.
		MinimumRank: 0; // If the above value is true, input the minimum rank ID here (wont work if value is false)
		RankTable: {}; // Will work if MinimumRankEnabled is set to false, input all rank ID's that can use the Cashier.
	};

	// Loading on Menu Items

	MenuItems: menuItemsConfig;
}

declare const config: config;

export = config;
