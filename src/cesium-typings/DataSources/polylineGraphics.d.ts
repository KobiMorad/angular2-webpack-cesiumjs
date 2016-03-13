declare module 'cesium/DataSources/PolylineGraphics' {
	import PolylineGraphicsOptions = require('cesium/DataSources/PolylineGraphicsOptions')
	import Event = require('cesium/Core/Event')
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	class PolylineGraphics 
	{
		constructor(options? : PolylineGraphicsOptions);
		//Members
		definitionChanged: Event
		followSurface: Property|string
		granularity: Property|string
		material: MaterialProperty
		positions: Property|string
		show: Property|string
		width: Property|string


		//Methods
		clone(result? : PolylineGraphics) : PolylineGraphics
		merge(source : PolylineGraphics) : void

	}
	export = PolylineGraphics

}