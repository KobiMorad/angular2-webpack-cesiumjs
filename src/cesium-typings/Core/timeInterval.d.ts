declare module 'cesium/Core/TimeInterval' {
	import TimeIntervalOptions = require('cesium/Core/TimeIntervalOptions')
	import JulianDate = require('cesium/Core/JulianDate')
	import fromIso8601Options = require('cesium/Core/fromIso8601Options')
	class TimeInterval 
	{
		constructor(options? : TimeIntervalOptions);
		//Members
		static EMPTY: TimeInterval
		data: Object
		isEmpty: boolean
		isStartIncluded: boolean
		isStopIncluded: boolean
		start: JulianDate
		stop: JulianDate


		//Methods
		static clone(timeInterval? : TimeInterval, result? : TimeInterval) : TimeInterval
		static contains(timeInterval : TimeInterval, julianDate : JulianDate) : boolean
		static equals(left? : TimeInterval, right? : TimeInterval, dataComparer? : any) : boolean
		static equalsEpsilon(left? : TimeInterval, right? : TimeInterval, epsilon? : number, dataComparer? : any) : boolean
		static fromIso8601(options? : fromIso8601Options, result? : TimeInterval) : TimeInterval
		static intersect(left : TimeInterval, right? : TimeInterval, result? : TimeInterval, mergeCallback? : any) : TimeInterval
		static toIso8601(timeInterval : TimeInterval, precision? : number) : string
		clone(result? : TimeInterval) : TimeInterval
		equals(right? : TimeInterval, dataComparer? : any) : boolean
		equalsEpsilon(right? : TimeInterval, epsilon? : number, dataComparer? : any) : boolean
		toString() : string

	}
	export = TimeInterval

}