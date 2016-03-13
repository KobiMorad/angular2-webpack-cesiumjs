declare module 'cesium/DataSources/CylinderGraphicsOptions' {
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	interface CylinderGraphicsOptions
	{
		length?: Property|string;
		topRadius?: Property|string;
		bottomRadius?: Property|string;
		show?: Property|string;
		fill?: Property|string;
		material?: MaterialProperty;
		outline?: Property|string;
		outlineColor?: Property|string;
		outlineWidth?: Property|string;
		numberOfVerticalLines?: Property|string;
		slices?: Property|string;
	}
	export = CylinderGraphicsOptions

}