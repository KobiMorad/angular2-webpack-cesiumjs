declare module 'cesium/Scene/WebMapTileServiceImageryProvider' {
	import WebMapTileServiceImageryProviderOptions = require('cesium/Scene/WebMapTileServiceImageryProviderOptions')
	import Credit = require('cesium/Core/Credit')
	import Event = require('cesium/Core/Event')
	import DefaultProxy = require('cesium/Core/DefaultProxy')
	import Rectangle = require('cesium/Core/Rectangle')
	import TileDiscardPolicy = require('cesium/Scene/TileDiscardPolicy')
	import TilingScheme = require('cesium/Core/TilingScheme')
	import ImageryLayerFeatureInfo = require('cesium/Scene/ImageryLayerFeatureInfo')
	import Promise = require('cesium/Promise')
	class WebMapTileServiceImageryProvider 
	{
		constructor(options? : WebMapTileServiceImageryProviderOptions);
		//Members
		credit: Credit
		errorEvent: Event
		format: string
		hasAlphaChannel: boolean
		maximumLevel: number
		minimumLevel: number
		proxy: DefaultProxy
		ready: boolean
		rectangle: Rectangle
		tileDiscardPolicy: TileDiscardPolicy
		tileHeight: number
		tileWidth: number
		tilingScheme: TilingScheme
		url: string


		//Methods
		getTileCredits(x : number, y : number, level : number) : Array<Credit>
		pickFeatures(x : number, y : number, level : number, longitude : number, latitude : number) : Promise<Array<ImageryLayerFeatureInfo>>|void
		requestImage(x : number, y : number, level : number) : Promise<HTMLImageElement|HTMLCanvasElement>|void

	}
	export = WebMapTileServiceImageryProvider

}