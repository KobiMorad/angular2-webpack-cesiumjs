declare module 'cesium/Scene/addAllOptions' {
	import JulianDate = require('cesium/Core/JulianDate')
	import ModelAnimationLoop = require('cesium/Scene/ModelAnimationLoop')
	interface addAllOptions
	{
		startTime?: JulianDate;
		delay?: number;
		stopTime?: JulianDate;
		removeOnStop?: boolean;
		speedup?: number;
		reverse?: boolean;
		loop?: ModelAnimationLoop;
	}
	export = addAllOptions

}