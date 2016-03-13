declare module 'cesium/Core/CesiumTerrainProviderOptions' {
	import DefaultProxy = require('cesium/Core/DefaultProxy')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import Credit = require('cesium/Core/Credit')
	interface CesiumTerrainProviderOptions
	{
		url: string;
		proxy?: DefaultProxy;
		requestVertexNormals?: boolean;
		requestWaterMask?: boolean;
		ellipsoid?: Ellipsoid;
		credit?: Credit|string;
	}
	export = CesiumTerrainProviderOptions

}