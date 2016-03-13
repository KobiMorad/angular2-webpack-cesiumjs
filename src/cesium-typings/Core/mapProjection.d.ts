declare module 'cesium/Core/MapProjection' {
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Cartographic = require('cesium/Core/Cartographic')
	class MapProjection 
	{
		constructor();
		//Members
		ellipsoid: Ellipsoid


		//Methods
		project(cartographic : Cartographic, result? : Cartesian3) : Cartesian3
		unproject(cartesian : Cartesian3, result? : Cartographic) : Cartographic

	}
	export = MapProjection

}