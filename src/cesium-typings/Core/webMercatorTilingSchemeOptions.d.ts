declare module 'cesium/Core/WebMercatorTilingSchemeOptions' {
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import Cartesian2 = require('cesium/Core/Cartesian2')
	interface WebMercatorTilingSchemeOptions
	{
		ellipsoid?: Ellipsoid;
		numberOfLevelZeroTilesX?: number;
		numberOfLevelZeroTilesY?: number;
		rectangleSouthwestInMeters?: Cartesian2;
		rectangleNortheastInMeters?: Cartesian2;
	}
	export = WebMercatorTilingSchemeOptions

}