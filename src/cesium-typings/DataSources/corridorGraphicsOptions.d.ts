declare module 'cesium/DataSources/CorridorGraphicsOptions' {
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	interface CorridorGraphicsOptions
	{
		positions?: Property|string;
		width?: Property|string;
		cornerType?: Property|string;
		height?: Property|string;
		extrudedHeight?: Property|string;
		show?: Property|string;
		fill?: Property|string;
		material?: MaterialProperty;
		outline?: Property|string;
		outlineColor?: Property|string;
		outlineWidth?: Property|string;
		granularity?: Property|string;
	}
	export = CorridorGraphicsOptions

}