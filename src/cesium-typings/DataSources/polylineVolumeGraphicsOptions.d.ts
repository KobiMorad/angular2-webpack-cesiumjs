declare module 'cesium/DataSources/PolylineVolumeGraphicsOptions' {
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	interface PolylineVolumeGraphicsOptions
	{
		positions?: Property|string;
		shape?: Property|string;
		cornerType?: Property|string;
		show?: Property|string;
		fill?: Property|string;
		material?: MaterialProperty;
		outline?: Property|string;
		outlineColor?: Property|string;
		outlineWidth?: Property|string;
		granularity?: Property|string;
	}
	export = PolylineVolumeGraphicsOptions

}