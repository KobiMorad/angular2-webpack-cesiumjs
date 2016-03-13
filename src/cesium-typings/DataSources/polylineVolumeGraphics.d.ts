declare module 'cesium/DataSources/PolylineVolumeGraphics' {
	import PolylineVolumeGraphicsOptions = require('cesium/DataSources/PolylineVolumeGraphicsOptions')
	import Property = require('cesium/DataSources/Property')
	import Event = require('cesium/Core/Event')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	class PolylineVolumeGraphics 
	{
		constructor(options? : PolylineVolumeGraphicsOptions);
		//Members
		cornerType: Property|string
		definitionChanged: Event
		fill: Property|string
		granularity: Property|string
		material: MaterialProperty
		outline: Property|string
		outlineColor: Property|string
		outlineWidth: Property|string
		positions: Property|string
		shape: Property|string
		show: Property|string


		//Methods
		clone(result? : PolylineVolumeGraphics) : PolylineVolumeGraphics
		merge(source : PolylineVolumeGraphics) : void

	}
	export = PolylineVolumeGraphics

}