declare module 'cesium/Widgets/SelectionIndicator/SelectionIndicator' {
	import Scene = require('cesium/Scene/Scene')
	import SelectionIndicatorViewModel = require('cesium/Widgets/SelectionIndicator/SelectionIndicatorViewModel')
	class SelectionIndicator 
	{
		constructor(container : Element|string, scene : Scene);
		//Members
		container: Element
		viewModel: SelectionIndicatorViewModel


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = SelectionIndicator

}