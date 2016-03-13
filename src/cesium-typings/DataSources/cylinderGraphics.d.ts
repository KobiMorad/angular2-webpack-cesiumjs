declare module 'cesium/DataSources/CylinderGraphics' {
	import CylinderGraphicsOptions = require('cesium/DataSources/CylinderGraphicsOptions')
	import Property = require('cesium/DataSources/Property')
	import Event = require('cesium/Core/Event')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	class CylinderGraphics 
	{
		constructor(options? : CylinderGraphicsOptions);
		//Members
		bottomRadius: Property|string
		definitionChanged: Event
		fill: Property|string
		length: Property|string
		material: MaterialProperty
		numberOfVerticalLines: Property|string
		outline: Property|string
		outlineColor: Property|string
		outlineWidth: Property|string
		show: Property|string
		slices: Property|string
		topRadius: Property|string


		//Methods
		clone(result? : CylinderGraphics) : CylinderGraphics
		merge(source : CylinderGraphics) : void

	}
	export = CylinderGraphics

}