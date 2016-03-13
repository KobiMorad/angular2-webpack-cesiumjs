declare module 'cesium/Widgets/NavigationHelpButton/NavigationHelpButtonViewModel' {
	import Command = require('cesium/Widgets/Command')
	class NavigationHelpButtonViewModel 
	{
		constructor();
		//Members
		command: Command
		showClick: Command
		showInstructions: boolean
		showTouch: Command
		tooltip: string


		//Methods

	}
	export = NavigationHelpButtonViewModel

}