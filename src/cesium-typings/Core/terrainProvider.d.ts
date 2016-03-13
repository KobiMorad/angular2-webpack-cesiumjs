declare module 'cesium/Core/TerrainProvider' {
	import Credit = require('cesium/Core/Credit')
	import Event = require('cesium/Core/Event')
	import TilingScheme = require('cesium/Core/TilingScheme')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import TerrainData = require('cesium/Core/TerrainData')
	import Promise = require('cesium/Promise')
	class TerrainProvider 
	{
		constructor();
		//Members
		static heightmapTerrainQuality: number
		credit: Credit
		errorEvent: Event
		hasVertexNormals: boolean
		hasWaterMask: boolean
		ready: boolean
		tilingScheme: TilingScheme


		//Methods
		static getEstimatedLevelZeroGeometricErrorForAHeightmap(ellipsoid : Ellipsoid, tileImageWidth : number, numberOfTilesAtLevelZero : number) : number
		static getRegularGridIndices(width : number, height : number) : Uint16Array
		getLevelMaximumGeometricError(level : number) : number
		getTileDataAvailable(x : number, y : number, level : number) : boolean
		requestTileGeometry(x : number, y : number, level : number, throttleRequests? : boolean) : Promise<TerrainData>|void

	}
	export = TerrainProvider

}