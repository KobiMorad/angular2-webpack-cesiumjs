declare module 'cesium/Widgets/HomeButton/HomeButtonViewModel' {
	import Scene = require('cesium/Scene/Scene')
	import Command = require('cesium/Widgets/Command')
	class HomeButtonViewModel 
	{
		constructor(scene : Scene, duration? : number);
		//Members
		command: Command
		duration: number|void
		scene: Scene
		tooltip: string


		//Methods

	}
	export = HomeButtonViewModel

}