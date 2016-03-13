declare module 'cesium/Core/fromIso8601Options' {
	interface fromIso8601Options
	{
		iso8601: string;
		isStartIncluded?: boolean;
		isStopIncluded?: boolean;
		data?: Object;
	}
	export = fromIso8601Options

}