declare module 'cesium/DataSources/LabelGraphicsOptions' {
	import Property = require('cesium/DataSources/Property')
	interface LabelGraphicsOptions
	{
		text?: Property|string;
		font?: Property|string;
		style?: Property|string;
		fillColor?: Property|string;
		outlineColor?: Property|string;
		outlineWidth?: Property|string;
		show?: Property|string;
		scale?: Property|string;
		horizontalOrigin?: Property|string;
		verticalOrigin?: Property|string;
		eyeOffset?: Property|string;
		pixelOffset?: Property|string;
		translucencyByDistance?: Property|string;
		pixelOffsetScaleByDistance?: Property|string;
	}
	export = LabelGraphicsOptions

}