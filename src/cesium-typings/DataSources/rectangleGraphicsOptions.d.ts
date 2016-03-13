declare module 'cesium/DataSources/RectangleGraphicsOptions' {
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	interface RectangleGraphicsOptions
	{
		coordinates?: Property|string;
		height?: Property|string;
		extrudedHeight?: Property|string;
		closeTop?: Property|string;
		closeBottom?: Property|string;
		show?: Property|string;
		fill?: Property|string;
		material?: MaterialProperty;
		outline?: Property|string;
		outlineColor?: Property|string;
		outlineWidth?: Property|string;
		rotation?: Property|string;
		stRotation?: Property|string;
		granularity?: Property|string;
	}
	export = RectangleGraphicsOptions

}