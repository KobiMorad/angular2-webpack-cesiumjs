declare module 'cesium/DataSources/PolygonGraphics' {
	import PolygonGraphicsOptions = require('cesium/DataSources/PolygonGraphicsOptions')
	import Event = require('cesium/Core/Event')
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	class PolygonGraphics 
	{
		constructor(options? : PolygonGraphicsOptions);
		//Members
		definitionChanged: Event
		extrudedHeight: Property|string
		fill: Property|string
		granularity: Property|string
		height: Property|string
		hierarchy: Property|string
		material: MaterialProperty
		outline: Property|string
		outlineColor: Property|string
		outlineWidth: Property|string
		perPositionHeight: Property|string
		show: Property|string
		stRotation: Property|string


		//Methods
		clone(result? : PolygonGraphics) : PolygonGraphics
		merge(source : PolygonGraphics) : void

	}
	export = PolygonGraphics

}