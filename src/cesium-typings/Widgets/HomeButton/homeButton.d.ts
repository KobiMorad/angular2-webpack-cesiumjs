declare module 'cesium/Widgets/HomeButton/HomeButton' {
	import Scene = require('cesium/Scene/Scene')
	import HomeButtonViewModel = require('cesium/Widgets/HomeButton/HomeButtonViewModel')
	class HomeButton 
	{
		constructor(container : Element|string, scene : Scene, duration? : number);
		//Members
		container: Element
		viewModel: HomeButtonViewModel


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = HomeButton

}