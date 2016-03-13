declare module 'cesium/DataSources/BoxGraphics' {
	import BoxGraphicsOptions = require('cesium/DataSources/BoxGraphicsOptions')
	import Event = require('cesium/Core/Event')
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	class BoxGraphics 
	{
		constructor(options? : BoxGraphicsOptions);
		//Members
		definitionChanged: Event
		dimensions: Property|string
		fill: Property|string
		material: MaterialProperty
		outline: Property|string
		outlineColor: Property|string
		outlineWidth: Property|string
		show: Property|string


		//Methods
		clone(result? : BoxGraphics) : BoxGraphics
		merge(source : BoxGraphics) : void

	}
	export = BoxGraphics

}