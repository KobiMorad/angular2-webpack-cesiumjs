declare module 'cesium/DataSources/ModelGraphics' {
	import ModelGraphicsOptions = require('cesium/DataSources/ModelGraphicsOptions')
	import Event = require('cesium/Core/Event')
	import Property = require('cesium/DataSources/Property')
	class ModelGraphics 
	{
		constructor(options? : ModelGraphicsOptions);
		//Members
		definitionChanged: Event
		minimumPixelSize: Property|string
		scale: Property|string
		show: Property|string
		uri: Property|string


		//Methods
		clone(result? : ModelGraphics) : ModelGraphics
		merge(source : ModelGraphics) : void

	}
	export = ModelGraphics

}