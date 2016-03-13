declare module 'cesium/Scene/ImageryProvider' {
	import Credit = require('cesium/Core/Credit')
	import Event = require('cesium/Core/Event')
	import DefaultProxy = require('cesium/Core/DefaultProxy')
	import Rectangle = require('cesium/Core/Rectangle')
	import TileDiscardPolicy = require('cesium/Scene/TileDiscardPolicy')
	import TilingScheme = require('cesium/Core/TilingScheme')
	import Promise = require('cesium/Promise')
	import ImageryLayerFeatureInfo = require('cesium/Scene/ImageryLayerFeatureInfo')
	class ImageryProvider 
	{
		constructor();
		//Members
		credit: Credit
		defaultAlpha: number
		defaultBrightness: number
		defaultContrast: number
		defaultGamma: number
		defaultHue: number
		defaultSaturation: number
		errorEvent: Event
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


		//Methods
		static loadImage(url : string) : Promise<HTMLImageElement|HTMLCanvasElement>|void
		getTileCredits(x : number, y : number, level : number) : Array<Credit>
		pickFeatures(x : number, y : number, level : number, longitude : number, latitude : number) : Promise<Array<ImageryLayerFeatureInfo>>|void
		requestImage(x : number, y : number, level : number) : Promise<HTMLImageElement|HTMLCanvasElement>|void

	}
	export = ImageryProvider

}