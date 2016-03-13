declare module 'cesium/DataSources/CorridorGraphics' {
	import CorridorGraphicsOptions = require('cesium/DataSources/CorridorGraphicsOptions')
	import Property = require('cesium/DataSources/Property')
	import Event = require('cesium/Core/Event')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	class CorridorGraphics 
	{
		constructor(options? : CorridorGraphicsOptions);
		//Members
		cornerType: Property|string
		definitionChanged: Event
		extrudedHeight: Property|string
		fill: Property|string
		granularity: Property|string
		height: Property|string
		material: MaterialProperty
		outline: Property|string
		outlineColor: Property|string
		outlineWidth: Property|string
		positions: Property|string
		show: Property|string
		width: Property|string


		//Methods
		clone(result? : CorridorGraphics) : CorridorGraphics
		merge(source : CorridorGraphics) : void

	}
	export = CorridorGraphics

}