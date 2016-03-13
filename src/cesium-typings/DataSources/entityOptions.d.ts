declare module 'cesium/DataSources/EntityOptions' {
	import Property = require('cesium/DataSources/Property')
	import PositionProperty = require('cesium/DataSources/PositionProperty')
	import Entity = require('cesium/DataSources/Entity')
	import BillboardGraphics = require('cesium/DataSources/BillboardGraphics')
	import BoxGraphics = require('cesium/DataSources/BoxGraphics')
	import CorridorGraphics = require('cesium/DataSources/CorridorGraphics')
	import CylinderGraphics = require('cesium/DataSources/CylinderGraphics')
	import EllipseGraphics = require('cesium/DataSources/EllipseGraphics')
	import EllipsoidGraphics = require('cesium/DataSources/EllipsoidGraphics')
	import LabelGraphics = require('cesium/DataSources/LabelGraphics')
	import ModelGraphics = require('cesium/DataSources/ModelGraphics')
	import PathGraphics = require('cesium/DataSources/PathGraphics')
	import PointGraphics = require('cesium/DataSources/PointGraphics')
	import PolygonGraphics = require('cesium/DataSources/PolygonGraphics')
	import PolylineGraphics = require('cesium/DataSources/PolylineGraphics')
	import PolylineVolumeGraphics = require('cesium/DataSources/PolylineVolumeGraphics')
	import RectangleGraphics = require('cesium/DataSources/RectangleGraphics')
	import WallGraphics = require('cesium/DataSources/WallGraphics')
	interface EntityOptions
	{
		id?: string;
		name?: string;
		show?: boolean;
		description?: Property|string;
		position?: PositionProperty;
		orientation?: Property|string;
		viewFrom?: Property|string;
		parent?: Entity;
		billboard?: BillboardGraphics;
		box?: BoxGraphics;
		corridor?: CorridorGraphics;
		cylinder?: CylinderGraphics;
		ellipse?: EllipseGraphics;
		ellipsoid?: EllipsoidGraphics;
		label?: LabelGraphics;
		model?: ModelGraphics;
		path?: PathGraphics;
		point?: PointGraphics;
		polygon?: PolygonGraphics;
		polyline?: PolylineGraphics;
		polylineVolume?: PolylineVolumeGraphics;
		rectangle?: RectangleGraphics;
		wall?: WallGraphics;
	}
	export = EntityOptions

}