declare module 'cesium/DataSources/EllipsoidGraphicsOptions' {
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	interface EllipsoidGraphicsOptions
	{
		radii?: Property|string;
		show?: Property|string;
		fill?: Property|string;
		material?: MaterialProperty;
		outline?: Property|string;
		outlineColor?: Property|string;
		outlineWidth?: Property|string;
		subdivisions?: Property|string;
		stackPartitions?: Property|string;
		slicePartitions?: Property|string;
	}
	export = EllipsoidGraphicsOptions

}