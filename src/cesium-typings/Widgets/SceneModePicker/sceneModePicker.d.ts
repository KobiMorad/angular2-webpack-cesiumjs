declare module 'cesium/Widgets/SceneModePicker/SceneModePicker' {
	import Scene = require('cesium/Scene/Scene')
	import SceneModePickerViewModel = require('cesium/Widgets/SceneModePicker/SceneModePickerViewModel')
	class SceneModePicker 
	{
		constructor(container : Element|string, scene : Scene, duration? : number);
		//Members
		container: Element
		viewModel: SceneModePickerViewModel


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = SceneModePicker

}