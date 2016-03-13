declare module 'cesium/DataSources/RectangleGraphics' {
	import RectangleGraphicsOptions = require('cesium/DataSources/RectangleGraphicsOptions')
	import Property = require('cesium/DataSources/Property')
	import Event = require('cesium/Core/Event')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	class RectangleGraphics 
	{
		constructor(options? : RectangleGraphicsOptions);
		//Members
		closeBottom: Property|string
		closeTop: Property|string
		coordinates: Property|string
		definitionChanged: Event
		extrudedHeight: Property|string
		fill: Property|string
		granularity: Property|string
		height: Property|string
		material: MaterialProperty
		outline: Property|string
		outlineColor: Property|string
		outlineWidth: Property|string
		rotation: Property|string
		show: Property|string
		stRotation: Property|string


		//Methods
		clone(result? : RectangleGraphics) : RectangleGraphics
		merge(source : RectangleGraphics) : void

	}
	export = RectangleGraphics

}