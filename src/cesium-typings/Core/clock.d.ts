declare module 'cesium/Core/Clock' {
	import ClockOptions = require('cesium/Core/ClockOptions')
	import ClockRange = require('cesium/Core/ClockRange')
	import ClockStep = require('cesium/Core/ClockStep')
	import JulianDate = require('cesium/Core/JulianDate')
	import Event = require('cesium/Core/Event')
	class Clock 
	{
		constructor(options? : ClockOptions);
		//Members
		canAnimate: boolean
		clockRange: ClockRange
		clockStep: ClockStep
		currentTime: JulianDate
		multiplier: number
		onTick: Event
		shouldAnimate: boolean
		startTime: JulianDate
		stopTime: JulianDate


		//Methods
		tick() : JulianDate

	}
	export = Clock

}