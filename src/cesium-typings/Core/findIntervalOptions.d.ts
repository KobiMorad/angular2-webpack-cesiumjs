declare module 'cesium/Core/findIntervalOptions' {
	import JulianDate = require('cesium/Core/JulianDate')
	interface findIntervalOptions
	{
		start?: JulianDate;
		stop?: JulianDate;
		isStartIncluded?: boolean;
		isStopIncluded?: boolean;
	}
	export = findIntervalOptions

}