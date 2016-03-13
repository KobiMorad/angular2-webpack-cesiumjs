declare module 'cesium/Widgets/ToggleButtonViewModel' {
	import Command = require('cesium/Widgets/Command')
	import ToggleButtonViewModelOptions = require('cesium/Widgets/ToggleButtonViewModelOptions')
	class ToggleButtonViewModel 
	{
		constructor(command : Command, options? : ToggleButtonViewModelOptions);
		//Members
		command: Command
		toggled: boolean
		tooltip: string


		//Methods

	}
	export = ToggleButtonViewModel

}