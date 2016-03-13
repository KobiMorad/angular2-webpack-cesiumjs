declare module 'cesium/Widgets/CesiumWidget/CesiumWidget' {
	import CesiumWidgetOptions = require('cesium/Widgets/CesiumWidget/CesiumWidgetOptions')
	import Camera = require('cesium/Scene/Camera')
	import Clock = require('cesium/Core/Clock')
	import ImageryLayerCollection = require('cesium/Scene/ImageryLayerCollection')
	import Scene = require('cesium/Scene/Scene')
	import ScreenSpaceEventHandler = require('cesium/Core/ScreenSpaceEventHandler')
	import TerrainProvider = require('cesium/Core/TerrainProvider')
	class CesiumWidget 
	{
		constructor(container : Element|string, options? : CesiumWidgetOptions);
		//Members
		camera: Camera
		canvas: HTMLCanvasElement
		clock: Clock
		container: Element
		creditContainer: Element
		imageryLayers: ImageryLayerCollection
		resolutionScale: number
		scene: Scene
		screenSpaceEventHandler: ScreenSpaceEventHandler
		targetFrameRate: number
		terrainProvider: TerrainProvider
		useDefaultRenderLoop: boolean


		//Methods
		destroy() : void
		isDestroyed() : boolean
		render() : void
		resize() : void
		showErrorPanel(title : string, message : string, error? : string) : void

	}
	export = CesiumWidget

}