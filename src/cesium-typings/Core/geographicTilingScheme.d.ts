declare module 'cesium/Core/GeographicTilingScheme' {
	import GeographicTilingSchemeOptions = require('cesium/Core/GeographicTilingSchemeOptions')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import MapProjection = require('cesium/Core/MapProjection')
	import Rectangle = require('cesium/Core/Rectangle')
	import Cartesian2 = require('cesium/Core/Cartesian2')
	import Cartographic = require('cesium/Core/Cartographic')
	class GeographicTilingScheme 
	{
		constructor(options? : GeographicTilingSchemeOptions);
		//Members
		ellipsoid: Ellipsoid
		projection: MapProjection
		rectangle: Rectangle


		//Methods
		getNumberOfXTilesAtLevel(level : number) : number
		getNumberOfYTilesAtLevel(level : number) : number
		positionToTileXY(position : Cartographic, level : number, result? : Cartesian2) : Cartesian2
		rectangleToNativeRectangle(rectangle : Rectangle, result? : Rectangle) : Rectangle
		tileXYToNativeRectangle(x : number, y : number, level : number, result? : any) : Rectangle
		tileXYToRectangle(x : number, y : number, level : number, result? : any) : Rectangle

	}
	export = GeographicTilingScheme

}