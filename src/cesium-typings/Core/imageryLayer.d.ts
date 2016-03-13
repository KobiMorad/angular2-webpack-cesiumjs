declare module 'cesium/Scene/ImageryLayer' {
	import ImageryProvider = require('cesium/Scene/ImageryProvider')
	import ImageryLayerOptions = require('cesium/Scene/ImageryLayerOptions')
	import Rectangle = require('cesium/Core/Rectangle')
	class ImageryLayer 
	{
		constructor(imageryProvider : ImageryProvider, options? : ImageryLayerOptions);
		//Members
		static DEFAULT_BRIGHTNESS: number
		static DEFAULT_CONTRAST: number
		static DEFAULT_GAMMA: number
		static DEFAULT_HUE: number
		static DEFAULT_SATURATION: number
		alpha: number
		brightness: number
		contrast: number
		gamma: number
		hue: number
		imageryProvider: ImageryProvider
		rectangle: Rectangle
		saturation: number
		show: boolean


		//Methods
		destroy() : void
		isBaseLayer() : boolean
		isDestroyed() : boolean

	}
	export = ImageryLayer

}