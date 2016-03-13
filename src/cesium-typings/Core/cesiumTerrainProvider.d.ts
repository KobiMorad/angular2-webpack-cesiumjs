declare module 'cesium/Core/CesiumTerrainProvider' {
	import CesiumTerrainProviderOptions = require('cesium/Core/CesiumTerrainProviderOptions')
	import Credit = require('cesium/Core/Credit')
	import Event = require('cesium/Core/Event')
	import GeographicTilingScheme = require('cesium/Core/GeographicTilingScheme')
	import TerrainData = require('cesium/Core/TerrainData')
	import Promise = require('cesium/Promise')
	class CesiumTerrainProvider 
	{
		constructor(options? : CesiumTerrainProviderOptions);
		//Members
		credit: Credit
		errorEvent: Event
		hasVertexNormals: boolean
		hasWaterMask: boolean
		ready: boolean
		requestVertexNormals: boolean
		requestWaterMask: boolean
		tilingScheme: GeographicTilingScheme


		//Methods
		getLevelMaximumGeometricError(level : number) : number
		getTileDataAvailable(x : number, y : number, level : number) : boolean
		requestTileGeometry(x : number, y : number, level : number, throttleRequests? : boolean) : Promise<TerrainData>|void

	}
	export = CesiumTerrainProvider

}