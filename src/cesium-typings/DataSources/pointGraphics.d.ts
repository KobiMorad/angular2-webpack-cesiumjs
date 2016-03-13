declare module 'cesium/DataSources/PointGraphics' {
	import PointGraphicsOptions = require('cesium/DataSources/PointGraphicsOptions')
	import Property = require('cesium/DataSources/Property')
	import Event = require('cesium/Core/Event')
	class PointGraphics 
	{
		constructor(options? : PointGraphicsOptions);
		//Members
		color: Property|string
		definitionChanged: Event
		outlineColor: Property|string
		outlineWidth: Property|string
		pixelSize: Property|string
		scaleByDistance: Property|string
		show: Property|string
		translucencyByDistance: Property|string


		//Methods
		clone(result? : PointGraphics) : PointGraphics
		merge(source : PointGraphics) : void

	}
	export = PointGraphics

}