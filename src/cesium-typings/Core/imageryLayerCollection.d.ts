declare module 'cesium/Scene/ImageryLayerCollection' {
	import Event = require('cesium/Core/Event')
	import ImageryLayer = require('cesium/Scene/ImageryLayer')
	import ImageryProvider = require('cesium/Scene/ImageryProvider')
	import ImageryLayerFeatureInfo = require('cesium/Scene/ImageryLayerFeatureInfo')
	import Promise = require('cesium/Promise')
	import Ray = require('cesium/Core/Ray')
	import Scene = require('cesium/Scene/Scene')
	class ImageryLayerCollection 
	{
		constructor();
		//Members
		layerAdded: Event
		layerMoved: Event
		layerRemoved: Event
		layerShownOrHidden: Event
		length: number


		//Methods
		add(layer : ImageryLayer, index? : number) : void
		addImageryProvider(imageryProvider : ImageryProvider, index? : number) : ImageryLayer
		contains(layer : ImageryLayer) : boolean
		destroy() : void
		get(index : number) : void
		indexOf(layer : ImageryLayer) : number
		isDestroyed() : boolean
		lower(layer : ImageryLayer) : void
		lowerToBottom(layer : ImageryLayer) : void
		pickImageryLayerFeatures(ray : Ray, scene : Scene) : Promise<Array<ImageryLayerFeatureInfo>>|void
		raise(layer : ImageryLayer) : void
		raiseToTop(layer : ImageryLayer) : void
		remove(layer : ImageryLayer, destroy? : boolean) : boolean
		removeAll(destroy? : boolean) : void

	}
	export = ImageryLayerCollection

}