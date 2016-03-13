declare module 'cesium/DataSources/EllipsoidGraphics' {
	import EllipsoidGraphicsOptions = require('cesium/DataSources/EllipsoidGraphicsOptions')
	import Event = require('cesium/Core/Event')
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	class EllipsoidGraphics 
	{
		constructor(options? : EllipsoidGraphicsOptions);
		//Members
		definitionChanged: Event
		fill: Property|string
		material: MaterialProperty
		outline: Property|string
		outlineColor: Property|string
		outlineWidth: Property|string
		radii: Property|string
		show: Property|string
		slicePartitions: Property|string
		stackPartitions: Property|string
		subdivisions: Property|string


		//Methods
		clone(result? : EllipsoidGraphics) : EllipsoidGraphics
		merge(source : EllipsoidGraphics) : void

	}
	export = EllipsoidGraphics

}