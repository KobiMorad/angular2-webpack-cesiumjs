declare module 'cesium/Core/GeographicTilingSchemeOptions' {
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import Rectangle = require('cesium/Core/Rectangle')
	interface GeographicTilingSchemeOptions
	{
		ellipsoid?: Ellipsoid;
		rectangle?: Rectangle;
		numberOfLevelZeroTilesX?: number;
		numberOfLevelZeroTilesY?: number;
	}
	export = GeographicTilingSchemeOptions

}