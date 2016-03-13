declare module 'cesium/DataSources/PolylineGraphicsOptions' {
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	interface PolylineGraphicsOptions
	{
		positions?: Property|string;
		followSurface?: Property|string;
		width?: Property|string;
		show?: Property|string;
		material?: MaterialProperty;
		granularity?: Property|string;
	}
	export = PolylineGraphicsOptions

}