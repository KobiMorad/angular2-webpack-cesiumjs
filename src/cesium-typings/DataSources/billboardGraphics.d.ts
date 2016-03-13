declare module 'cesium/DataSources/BillboardGraphics' {
	import BillboardGraphicsOptions = require('cesium/DataSources/BillboardGraphicsOptions')
	import Property = require('cesium/DataSources/Property')
	import Event = require('cesium/Core/Event')
	class BillboardGraphics 
	{
		constructor(options? : BillboardGraphicsOptions);
		//Members
		alignedAxis: Property|string
		color: Property|string
		definitionChanged: Event
		eyeOffset: Property|string
		height: Property|string
		horizontalOrigin: Property|string
		image: Property|string
		imageSubRegion: Property|string
		pixelOffset: Property|string
		pixelOffsetScaleByDistance: Property|string
		rotation: Property|string
		scale: Property|string
		scaleByDistance: Property|string
		show: Property|string
		sizeInMeters: Property|string
		translucencyByDistance: Property|string
		verticalOrigin: Property|string
		width: Property|string


		//Methods
		clone(result? : BillboardGraphics) : BillboardGraphics
		merge(source : BillboardGraphics) : void

	}
	export = BillboardGraphics

}