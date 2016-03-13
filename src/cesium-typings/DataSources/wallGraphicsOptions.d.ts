declare module 'cesium/DataSources/WallGraphicsOptions' {
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	interface WallGraphicsOptions
	{
		positions?: Property|string;
		maximumHeights?: Property|string;
		minimumHeights?: Property|string;
		show?: Property|string;
		fill?: Property|string;
		material?: MaterialProperty;
		outline?: Property|string;
		outlineColor?: Property|string;
		outlineWidth?: Property|string;
		granularity?: Property|string;
	}
	export = WallGraphicsOptions

}