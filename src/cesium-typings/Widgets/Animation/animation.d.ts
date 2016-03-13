declare module 'cesium/Widgets/Animation/Animation' {
	import AnimationViewModel = require('cesium/Widgets/Animation/AnimationViewModel')
	class Animation 
	{
		constructor(container : Element|string, viewModel : AnimationViewModel);
		//Members
		container: Element
		viewModel: AnimationViewModel


		//Methods
		applyThemeChanges() : void
		destroy() : void
		isDestroyed() : boolean
		resize() : void

	}
	export = Animation

}