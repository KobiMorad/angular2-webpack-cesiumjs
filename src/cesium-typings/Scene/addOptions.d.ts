declare module 'cesium/Scene/addOptions' {
	import JulianDate = require('cesium/Core/JulianDate')
	import ModelAnimationLoop = require('cesium/Scene/ModelAnimationLoop')
	interface addOptions
	{
		name: string;
		startTime?: JulianDate;
		delay?: number;
		stopTime?: JulianDate;
		removeOnStop?: boolean;
		speedup?: number;
		reverse?: boolean;
		loop?: ModelAnimationLoop;
	}
	export = addOptions

}