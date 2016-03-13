declare module 'cesium/DataSources/TimeIntervalCollectionProperty' {
	import Event = require('cesium/Core/Event')
	import TimeIntervalCollection = require('cesium/Core/TimeIntervalCollection')
	import Property = require('cesium/DataSources/Property')
	import JulianDate = require('cesium/Core/JulianDate')
	class TimeIntervalCollectionProperty extends Property
	{
		constructor();
		//Members
		definitionChanged: Event
		intervals: TimeIntervalCollection
		isConstant: boolean


		//Methods
		equals(other? : Property|string) : boolean
		getValue(time : JulianDate, result? : any) : Object

	}
	export = TimeIntervalCollectionProperty

}