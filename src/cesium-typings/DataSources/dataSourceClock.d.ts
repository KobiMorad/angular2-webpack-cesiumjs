declare module 'cesium/DataSources/DataSourceClock' {
	import ClockRange = require('cesium/Core/ClockRange')
	import ClockStep = require('cesium/Core/ClockStep')
	import JulianDate = require('cesium/Core/JulianDate')
	import Event = require('cesium/Core/Event')
	import Clock = require('cesium/Core/Clock')
	class DataSourceClock 
	{
		constructor();
		//Members
		clockRange: ClockRange
		clockStep: ClockStep
		currentTime: JulianDate
		definitionChanged: Event
		multiplier: number
		startTime: JulianDate
		stopTime: JulianDate


		//Methods
		clone(result? : DataSourceClock) : DataSourceClock
		equals(other : DataSourceClock) : boolean
		getValue() : Clock
		merge(source : DataSourceClock) : void

	}
	export = DataSourceClock

}