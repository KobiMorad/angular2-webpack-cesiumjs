declare module 'cesium/Scene/Globe' {
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import Color = require('cesium/Core/Color')
	import ImageryLayerCollection = require('cesium/Scene/ImageryLayerCollection')
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import TerrainProvider = require('cesium/Core/TerrainProvider')
	import Cartographic = require('cesium/Core/Cartographic')
	import Ray = require('cesium/Core/Ray')
	import Scene = require('cesium/Scene/Scene')
	class Globe 
	{
		constructor(ellipsoid? : Ellipsoid);
		//Members
		baseColor: Color
		depthTestAgainstTerrain: boolean
		ellipsoid: Ellipsoid
		enableLighting: boolean
		imageryLayers: ImageryLayerCollection
		lightingFadeInDistance: number
		lightingFadeOutDistance: number
		maximumScreenSpaceError: number
		northPoleColor: Cartesian3
		oceanNormalMapUrl: string
		show: boolean
		showWaterEffect: boolean
		southPoleColor: Cartesian3
		terrainProvider: TerrainProvider
		tileCacheSize: number


		//Methods
		destroy() : void
		getHeight(cartographic : Cartographic) : number|void
		isDestroyed() : boolean
		pick(ray : Ray, scene : Scene, result? : Cartesian3) : Cartesian3|void

	}
	export = Globe

}