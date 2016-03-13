declare module 'cesium/Widgets/FullscreenButton/FullscreenButton' {
	import FullscreenButtonViewModel = require('cesium/Widgets/FullscreenButton/FullscreenButtonViewModel')
	class FullscreenButton 
	{
		constructor(container : Element|string, fullscreenElement? : Element|string);
		//Members
		container: Element
		viewModel: FullscreenButtonViewModel


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = FullscreenButton

}