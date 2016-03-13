declare module 'cesium/DataSources/EllipseGraphicsOptions' {
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	interface EllipseGraphicsOptions
	{
		semiMajorAxis?: Property|string;
		semiMinorAxis?: Property|string;
		height?: Property|string;
		extrudedHeight?: Property|string;
		show?: Property|string;
		fill?: Property|string;
		material?: MaterialProperty;
		outline?: Property|string;
		outlineColor?: Property|string;
		outlineWidth?: Property|string;
		numberOfVerticalLines?: Property|string;
		rotation?: Property|string;
		stRotation?: Property|string;
		granularity?: Property|string;
	}
	export = EllipseGraphicsOptions

}