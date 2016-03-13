declare module 'cesium/DataSources/Entity' {
	import EntityOptions = require('cesium/DataSources/EntityOptions')
	import TimeIntervalCollection = require('cesium/Core/TimeIntervalCollection')
	import BillboardGraphics = require('cesium/DataSources/BillboardGraphics')
	import BoxGraphics = require('cesium/DataSources/BoxGraphics')
	import CorridorGraphics = require('cesium/DataSources/CorridorGraphics')
	import CylinderGraphics = require('cesium/DataSources/CylinderGraphics')
	import Event = require('cesium/Core/Event')
	import Property = require('cesium/DataSources/Property')
	import EllipseGraphics = require('cesium/DataSources/EllipseGraphics')
	import EllipsoidGraphics = require('cesium/DataSources/EllipsoidGraphics')
	import LabelGraphics = require('cesium/DataSources/LabelGraphics')
	import ModelGraphics = require('cesium/DataSources/ModelGraphics')
	import PathGraphics = require('cesium/DataSources/PathGraphics')
	import PointGraphics = require('cesium/DataSources/PointGraphics')
	import PolygonGraphics = require('cesium/DataSources/PolygonGraphics')
	import PolylineGraphics = require('cesium/DataSources/PolylineGraphics')
	import PolylineVolumeGraphics = require('cesium/DataSources/PolylineVolumeGraphics')
	import PositionProperty = require('cesium/DataSources/PositionProperty')
	import RectangleGraphics = require('cesium/DataSources/RectangleGraphics')
	import WallGraphics = require('cesium/DataSources/WallGraphics')
	import JulianDate = require('cesium/Core/JulianDate')
	class Entity 
	{
		constructor(options? : EntityOptions);
		//Members
		availability: TimeIntervalCollection
		billboard: BillboardGraphics
		box: BoxGraphics
		corridor: CorridorGraphics
		cylinder: CylinderGraphics
		definitionChanged: Event
		description: Property|string
		ellipse: EllipseGraphics
		ellipsoid: EllipsoidGraphics
		id: string
		isShowing: boolean
		label: LabelGraphics
		model: ModelGraphics
		name: string
		orientation: Property|string
		parent: Entity
		path: PathGraphics
		point: PointGraphics
		polygon: PolygonGraphics
		polyline: PolylineGraphics
		polylineVolume: PolylineVolumeGraphics
		position: PositionProperty
		propertyNames: Event
		rectangle: RectangleGraphics
		show: boolean
		viewFrom: Property|string
		wall: WallGraphics


		//Methods
		addProperty(propertyName : string) : void
		isAvailable(time : JulianDate) : boolean
		merge(source : Entity) : void
		removeProperty(propertyName : string) : void

	}
	export = Entity

}