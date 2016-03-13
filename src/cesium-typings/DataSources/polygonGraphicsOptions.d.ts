declare module 'cesium/DataSources/PolygonGraphicsOptions' {
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	interface PolygonGraphicsOptions
	{
		hierarchy?: Property|string;
		height?: Property|string;
		extrudedHeight?: Property|string;
		show?: Property|string;
		fill?: Property|string;
		material?: MaterialProperty;
		outline?: Property|string;
		outlineColor?: Property|string;
		outlineWidth?: Property|string;
		stRotation?: Property|string;
		granularity?: Property|string;
		perPositionHeight?: Property|string;
	}
	export = PolygonGraphicsOptions

}