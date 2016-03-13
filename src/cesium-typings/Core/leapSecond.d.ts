declare module 'cesium/Core/LeapSecond' {
	import JulianDate = require('cesium/Core/JulianDate')
	class LeapSecond 
	{
		constructor(date? : JulianDate, offset? : number);
		//Members
		julianDate: JulianDate
		offset: number


		//Methods

	}
	export = LeapSecond

}