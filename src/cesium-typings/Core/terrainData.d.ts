declare module 'cesium/Core/TerrainData' {
	import TerrainMesh = require('cesium/Core/TerrainMesh')
	import Promise = require('cesium/Promise')
	import TilingScheme = require('cesium/Core/TilingScheme')
	import Rectangle = require('cesium/Core/Rectangle')
	class TerrainData 
	{
		constructor();
		//Members
		waterMask: Uint8Array|HTMLImageElement|HTMLCanvasElement


		//Methods
		createMesh(tilingScheme : TilingScheme, x : number, y : number, level : number) : Promise<TerrainMesh>|void
		interpolateHeight(rectangle : Rectangle, longitude : number, latitude : number) : number
		isChildAvailable(thisX : number, thisY : number, childX : number, childY : number) : boolean
		upsample(tilingScheme : TilingScheme, thisX : number, thisY : number, thisLevel : number, descendantX : number, descendantY : number, descendantLevel : number) : Promise<TerrainData>|void
		wasCreatedByUpsampling() : boolean

	}
	export = TerrainData

}