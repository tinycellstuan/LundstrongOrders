type chefGui = ScreenGui & {
	["main"]: Frame & {
		["UICorner"]: UICorner;
		["Frame"]: Frame & {
			["UICorner"]: UICorner;
			["TextButton"]: TextButton;
		};
		["username"]: TextLabel;
		["UIAspectRatioConstraint"]: UIAspectRatioConstraint;
		["Items"]: Frame & {
			["UICorner"]: UICorner;
			["ScrollingFrame"]: ScrollingFrame & {
				["UIListLayout"]: UIListLayout;
				["cloneFrame"]: Frame & {
					["UICorner"]: UICorner;
					["TextLabel"]: TextLabel;
				};
				["topPadding"]: Frame;
			};
		};
		["lundstrongOrdersLogo"]: ImageLabel & {
			["UIAspectRatioConstraint"]: UIAspectRatioConstraint;
		};
	};
}