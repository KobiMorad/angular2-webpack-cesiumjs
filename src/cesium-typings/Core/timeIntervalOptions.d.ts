declare module 'cesium/Core/TimeIntervalOptions' {
	import JulianDate = require('cesium/Core/JulianDate')
	interface TimeIntervalOptions
	{
		start?: JulianDate;
		stop?: JulianDate;
		isStartIncluded?: boolean;
		isStopIncluded?: boolean;
		data?: Object;
	}
	export = TimeIntervalOptions

}