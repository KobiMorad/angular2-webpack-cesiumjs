declare module 'cesium/DataSources/BoxGraphicsOptions' {
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	interface BoxGraphicsOptions
	{
		dimensions?: Property|string;
		show?: Property|string;
		fill?: Property|string;
		material?: MaterialProperty;
		outline?: Property|string;
		outlineColor?: Property|string;
		outlineWidth?: Property|string;
	}
	export = BoxGraphicsOptions

}