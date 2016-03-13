declare module 'cesium/Widgets/SceneModePicker/SceneModePickerViewModel' {
	import Scene = require('cesium/Scene/Scene')
	import Command = require('cesium/Widgets/Command')
	import SceneMode = require('cesium/Scene/SceneMode')
	class SceneModePickerViewModel 
	{
		constructor(scene : Scene, duration? : number);
		//Members
		dropDownVisible: boolean
		duration: number
		morphTo2D: Command
		morphTo3D: Command
		morphToColumbusView: Command
		scene: Scene
		sceneMode: SceneMode
		selectedTooltip: string
		toggleDropDown: Command
		tooltip2D: string
		tooltip3D: string
		tooltipColumbusView: string


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = SceneModePickerViewModel

}