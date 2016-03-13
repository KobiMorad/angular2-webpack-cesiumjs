declare module 'cesium/DataSources/EllipseGraphics' {
	import EllipseGraphicsOptions = require('cesium/DataSources/EllipseGraphicsOptions')
	import Event = require('cesium/Core/Event')
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	class EllipseGraphics 
	{
		constructor(options? : EllipseGraphicsOptions);
		//Members
		definitionChanged: Event
		extrudedHeight: Property|string
		fill: Property|string
		granularity: Property|string
		height: Property|string
		material: MaterialProperty
		numberOfVerticalLines: Property|string
		outline: Property|string
		outlineColor: Property|string
		outlineWidth: Property|string
		rotation: Property|string
		semiMajorAxis: Property|string
		semiMinorAxis: Property|string
		show: Property|string
		stRotation: Property|string


		//Methods
		clone(result? : EllipseGraphics) : EllipseGraphics
		merge(source : EllipseGraphics) : void

	}
	export = EllipseGraphics

}