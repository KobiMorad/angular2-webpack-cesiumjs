declare module 'cesium/DataSources/BillboardGraphicsOptions' {
	import Property = require('cesium/DataSources/Property')
	interface BillboardGraphicsOptions
	{
		image?: Property|string;
		show?: Property|string;
		scale?: Property|string;
		horizontalOrigin?: Property|string;
		verticalOrigin?: Property|string;
		eyeOffset?: Property|string;
		pixelOffset?: Property|string;
		rotation?: Property|string;
		alignedAxis?: Property|string;
		width?: Property|string;
		height?: Property|string;
		color?: Property|string;
		scaleByDistance?: Property|string;
		translucencyByDistance?: Property|string;
		pixelOffsetScaleByDistance?: Property|string;
		imageSubRegion?: Property|string;
		sizeInMeters?: Property|string;
	}
	export = BillboardGraphicsOptions

}