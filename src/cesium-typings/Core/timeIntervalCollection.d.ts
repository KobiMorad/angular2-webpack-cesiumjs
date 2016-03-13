declare module 'cesium/Core/TimeIntervalCollection' {
	import TimeInterval = require('cesium/Core/TimeInterval')
	import Event = require('cesium/Core/Event')
	import JulianDate = require('cesium/Core/JulianDate')
	import findIntervalOptions = require('cesium/Core/findIntervalOptions')
	class TimeIntervalCollection 
	{
		constructor(intervals? : Array<TimeInterval>);
		//Members
		changedEvent: Event
		isEmpty: boolean
		isStartIncluded: boolean
		isStopIncluded: boolean
		length: number
		start: JulianDate
		stop: JulianDate


		//Methods
		addInterval(interval : TimeInterval, dataComparer? : any) : void
		contains(julianDate : JulianDate) : boolean
		equals(right? : TimeIntervalCollection, dataComparer? : any) : boolean
		findDataForIntervalContainingDate(date : JulianDate) : Object
		findInterval(options? : findIntervalOptions) : TimeInterval
		findIntervalContainingDate(date : JulianDate) : TimeInterval|void
		get(index : number) : TimeInterval
		indexOf(date : JulianDate) : number
		intersect(other : TimeIntervalCollection, dataComparer? : any, mergeCallback? : any) : TimeIntervalCollection
		removeAll() : void
		removeInterval(interval : TimeInterval) : void

	}
	export = TimeIntervalCollection

}