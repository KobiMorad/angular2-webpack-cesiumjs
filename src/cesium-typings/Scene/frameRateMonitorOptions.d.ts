declare module 'cesium/Scene/FrameRateMonitorOptions' {
	import Scene = require('cesium/Scene/Scene')
	interface FrameRateMonitorOptions
	{
		scene: Scene;
		samplingWindow?: number;
		quietPeriod?: number;
		warmupPeriod?: number;
		minimumFrameRateDuringWarmup?: number;
		minimumFrameRateAfterWarmup?: number;
	}
	export = FrameRateMonitorOptions

}