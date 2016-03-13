declare module 'cesium/Widgets/NavigationHelpButton/NavigationHelpButton' {
	import NavigationHelpButtonOptions = require('cesium/Widgets/NavigationHelpButton/NavigationHelpButtonOptions')
	import NavigationHelpButtonViewModel = require('cesium/Widgets/NavigationHelpButton/NavigationHelpButtonViewModel')
	class NavigationHelpButton 
	{
		constructor(options? : NavigationHelpButtonOptions);
		//Members
		container: Element
		viewModel: NavigationHelpButtonViewModel


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = NavigationHelpButton

}