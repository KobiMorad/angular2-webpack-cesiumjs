declare module 'cesium/Core/JulianDate' {
	import TimeStandard = require('cesium/Core/TimeStandard')
	import LeapSecond = require('cesium/Core/LeapSecond')
	import GregorianDate = require('cesium/Core/GregorianDate')
	class JulianDate 
	{
		constructor(julianDayNumber : number, secondsOfDay : number, timeStandard? : TimeStandard);
		//Members
		static leapSeconds: Array<LeapSecond>
		dayNumber: number
		secondsOfDay: number


		//Methods
		static addDays(julianDate : JulianDate, days : number, result : JulianDate) : JulianDate
		static addHours(julianDate : JulianDate, hours : number, result : JulianDate) : JulianDate
		static addMinutes(julianDate : JulianDate, minutes : number, result : JulianDate) : JulianDate
		static addSeconds(julianDate : JulianDate, seconds : number, result : JulianDate) : JulianDate
		static clone(julianDate : JulianDate, result? : JulianDate) : JulianDate
		static compare(left : JulianDate, right : JulianDate) : number
		static computeTaiMinusUtc(julianDate : JulianDate) : number
		static daysDifference(left : JulianDate, right : JulianDate) : number
		static equals(left? : JulianDate, right? : JulianDate) : boolean
		static equalsEpsilon(left? : JulianDate, right? : JulianDate, epsilon? : number) : boolean
		static fromDate(date : Date, result? : JulianDate) : JulianDate
		static fromIso8601(iso8601String : string, result? : JulianDate) : JulianDate
		static greaterThan(left : JulianDate, right : JulianDate) : boolean
		static greaterThanOrEquals(left : JulianDate, right : JulianDate) : boolean
		static lessThan(left : JulianDate, right : JulianDate) : boolean
		static lessThanOrEquals(left : JulianDate, right : JulianDate) : boolean
		static now(result? : JulianDate) : JulianDate
		static secondsDifference(left : JulianDate, right : JulianDate) : number
		static toDate(julianDate : JulianDate) : Date
		static toGregorianDate(julianDate : JulianDate, result? : GregorianDate) : GregorianDate
		static toIso8601(julianDate : JulianDate, precision? : number) : string
		static totalDays(julianDate : JulianDate) : number
		clone(result? : JulianDate) : JulianDate
		equals(right? : JulianDate) : boolean
		equalsEpsilon(right? : JulianDate, epsilon? : number) : boolean
		toString() : string

	}
	export = JulianDate

}