declare module 'cesium/DataSources/PointGraphicsOptions' {
	import Property = require('cesium/DataSources/Property')
	interface PointGraphicsOptions
	{
		color?: Property|string;
		pixelSize?: Property|string;
		outlineColor?: Property|string;
		outlineWidth?: Property|string;
		show?: Property|string;
		scaleByDistance?: Property|string;
		translucencyByDistance?: Property|string;
	}
	export = PointGraphicsOptions

}