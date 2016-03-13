declare module 'cesium/DataSources/PathGraphics' {
	import PathGraphicsOptions = require('cesium/DataSources/PathGraphicsOptions')
	import Event = require('cesium/Core/Event')
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	class PathGraphics 
	{
		constructor(options? : PathGraphicsOptions);
		//Members
		definitionChanged: Event
		leadTime: Property|string
		material: MaterialProperty
		resolution: Property|string
		show: Property|string
		trailTime: Property|string
		width: Property|string


		//Methods
		clone(result? : PathGraphics) : PathGraphics
		merge(source : PathGraphics) : void

	}
	export = PathGraphics

}