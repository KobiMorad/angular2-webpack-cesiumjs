declare module 'cesium/Core/ClockOptions' {
	import JulianDate = require('cesium/Core/JulianDate')
	import ClockStep = require('cesium/Core/ClockStep')
	import ClockRange = require('cesium/Core/ClockRange')
	interface ClockOptions
	{
		startTime?: JulianDate;
		stopTime?: JulianDate;
		currentTime?: JulianDate;
		multiplier?: number;
		clockStep?: ClockStep;
		clockRange?: ClockRange;
		canAnimate?: boolean;
		shouldAnimate?: boolean;
	}
	export = ClockOptions

}