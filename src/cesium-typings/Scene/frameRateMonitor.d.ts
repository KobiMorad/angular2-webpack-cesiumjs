declare module 'cesium/Scene/FrameRateMonitor' {
	import FrameRateMonitorOptions = require('cesium/Scene/FrameRateMonitorOptions')
	import Event = require('cesium/Core/Event')
	import Scene = require('cesium/Scene/Scene')
	class FrameRateMonitor 
	{
		constructor(options? : FrameRateMonitorOptions);
		//Members
		static defaultSettings: Object
		lastFramesPerSecond: number
		lowFrameRate: Event
		minimumFrameRateAfterWarmup: number
		minimumFrameRateDuringWarmup: number
		nominalFrameRate: Event
		quietPeriod: number
		samplingWindow: number
		scene: Scene
		warmupPeriod: number


		//Methods
		static fromScene(scene : Scene) : FrameRateMonitor
		destroy() : void
		isDestroyed() : boolean
		pause() : void
		unpause() : void

	}
	export = FrameRateMonitor

}