declare module 'cesium/DataSources/LabelGraphics' {
	import LabelGraphicsOptions = require('cesium/DataSources/LabelGraphicsOptions')
	import Event = require('cesium/Core/Event')
	import Property = require('cesium/DataSources/Property')
	class LabelGraphics 
	{
		constructor(options? : LabelGraphicsOptions);
		//Members
		definitionChanged: Event
		eyeOffset: Property|string
		fillColor: Property|string
		font: Property|string
		horizontalOrigin: Property|string
		outlineColor: Property|string
		outlineWidth: Property|string
		pixelOffset: Property|string
		pixelOffsetScaleByDistance: Property|string
		scale: Property|string
		show: Property|string
		style: Property|string
		text: Property|string
		translucencyByDistance: Property|string
		verticalOrigin: Property|string


		//Methods
		clone(result? : LabelGraphics) : LabelGraphics
		merge(source : LabelGraphics) : void

	}
	export = LabelGraphics

}