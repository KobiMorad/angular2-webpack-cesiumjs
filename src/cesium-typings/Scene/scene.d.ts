declare module 'cesium/Scene/Scene' {
	import SceneOptions = require('cesium/Scene/SceneOptions')
	import Color = require('cesium/Core/Color')
	import Camera = require('cesium/Scene/Camera')
	import Globe = require('cesium/Scene/Globe')
	import PrimitiveCollection = require('cesium/Scene/PrimitiveCollection')
	import ImageryLayerCollection = require('cesium/Scene/ImageryLayerCollection')
	import MapProjection = require('cesium/Core/MapProjection')
	import SceneMode = require('cesium/Scene/SceneMode')
	import Moon = require('cesium/Scene/Moon')
	import Event = require('cesium/Core/Event')
	import ScreenSpaceCameraController = require('cesium/Scene/ScreenSpaceCameraController')
	import SkyAtmosphere = require('cesium/Scene/SkyAtmosphere')
	import SkyBox = require('cesium/Scene/SkyBox')
	import Sun = require('cesium/Scene/Sun')
	import TerrainProvider = require('cesium/Core/TerrainProvider')
	import Cartesian2 = require('cesium/Core/Cartesian2')
	import Cartesian3 = require('cesium/Core/Cartesian3')
	class Scene 
	{
		constructor(options? : SceneOptions);
		//Members
		backgroundColor: Color
		camera: Camera
		canvas: HTMLCanvasElement
		completeMorphOnUserInput: boolean
		debugCommandFilter: (()=>void)
		debugFrustumStatistics: Object
		debugShowCommands: boolean
		debugShowDepthFrustum: number
		debugShowFramesPerSecond: boolean
		debugShowFrustums: boolean
		debugShowGlobeDepth: boolean
		drawingBufferHeight: number
		drawingBufferWidth: number
		farToNearRatio: number
		fxaa: boolean
		globe: Globe
		groundPrimitives: PrimitiveCollection
		id: string
		imageryLayers: ImageryLayerCollection
		mapProjection: MapProjection
		maximumAliasedLineWidth: number
		maximumCubeMapSize: number
		mode: SceneMode
		moon: Moon
		morphComplete: Event
		morphStart: Event
		morphTime: number
		orderIndependentTranslucency: boolean
		postRender: Event
		preRender: Event
		primitives: PrimitiveCollection
		renderError: Event
		rethrowRenderErrors: boolean
		scene3DOnly: boolean
		screenSpaceCameraController: ScreenSpaceCameraController
		skyAtmosphere: SkyAtmosphere
		skyBox: SkyBox
		sun: Sun
		sunBloom: boolean
		terrainProvider: TerrainProvider


		//Methods
		completeMorph() : void
		destroy() : void
		drillPick(windowPosition : Cartesian2, limit? : number) : Array<Object>
		isDestroyed() : boolean
		morphTo2D(duration? : number) : void
		morphTo3D(duration? : number) : void
		morphToColumbusView(duration? : number) : void
		pick(windowPosition : Cartesian2) : Object
		pickPosition(windowPosition : Cartesian2, result? : Cartesian3) : Cartesian3

	}
	export = Scene

}