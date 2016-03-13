declare module 'cesium/Widgets/ClockViewModel' {
	import Clock = require('cesium/Core/Clock')
	import ClockRange = require('cesium/Core/ClockRange')
	import ClockStep = require('cesium/Core/ClockStep')
	import JulianDate = require('cesium/Core/JulianDate')
	class ClockViewModel 
	{
		constructor(clock? : Clock);
		//Members
		canAnimate: boolean
		clock: Clock
		clockRange: ClockRange
		clockStep: ClockStep
		currentTime: JulianDate
		multiplier: number
		shouldAnimate: boolean
		startTime: JulianDate
		stopTime: JulianDate
		systemTime: JulianDate


		//Methods
		destroy() : void
		isDestroyed() : boolean
		synchronize() : void

	}
	export = ClockViewModel

}