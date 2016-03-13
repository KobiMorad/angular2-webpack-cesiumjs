declare module 'cesium/Core/WebMercatorProjection' {
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Cartographic = require('cesium/Core/Cartographic')
	class WebMercatorProjection 
	{
		constructor(ellipsoid? : Ellipsoid);
		//Members
		static MaximumLatitude: number
		ellipsoid: Ellipsoid


		//Methods
		static geodeticLatitudeToMercatorAngle(latitude : number) : number
		static mercatorAngleToGeodeticLatitude(mercatorAngle : number) : number
		project(cartographic : Cartographic, result? : Cartesian3) : Cartesian3
		unproject(cartesian : Cartesian3, result? : Cartographic) : Cartographic

	}
	export = WebMercatorProjection

}