declare module 'cesium/DataSources/WallGraphics' {
	import WallGraphicsOptions = require('cesium/DataSources/WallGraphicsOptions')
	import Event = require('cesium/Core/Event')
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	class WallGraphics 
	{
		constructor(options? : WallGraphicsOptions);
		//Members
		definitionChanged: Event
		fill: Property|string
		granularity: Property|string
		material: MaterialProperty
		maximumHeights: Property|string
		minimumHeights: Property|string
		outline: Property|string
		outlineColor: Property|string
		outlineWidth: Property|string
		positions: Property|string
		show: Property|string


		//Methods
		clone(result? : WallGraphics) : WallGraphics
		merge(source : WallGraphics) : void

	}
	export = WallGraphics

}