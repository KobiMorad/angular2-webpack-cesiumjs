declare module 'cesium/DataSources/PathGraphicsOptions' {
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	interface PathGraphicsOptions
	{
		leadTime?: Property|string;
		trailTime?: Property|string;
		show?: Property|string;
		width?: Property|string;
		material?: MaterialProperty;
		resolution?: Property|string;
	}
	export = PathGraphicsOptions

}