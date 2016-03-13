declare module 'cesium/Widgets/Viewer/Viewer' {
	import ViewerOptions = require('cesium/Widgets/Viewer/ViewerOptions')
	import Animation = require('cesium/Widgets/Animation/Animation')
	import BaseLayerPicker = require('cesium/Widgets/BaseLayerPicker/BaseLayerPicker')
	import Camera = require('cesium/Scene/Camera')
	import CesiumWidget = require('cesium/Widgets/CesiumWidget/CesiumWidget')
	import Clock = require('cesium/Core/Clock')
	import DataSourceDisplay = require('cesium/DataSources/DataSourceDisplay')
	import DataSourceCollection = require('cesium/DataSources/DataSourceCollection')
	import EntityCollection = require('cesium/DataSources/EntityCollection')
	import FullscreenButton = require('cesium/Widgets/FullscreenButton/FullscreenButton')
	import Geocoder = require('cesium/Widgets/Geocoder/Geocoder')
	import HomeButton = require('cesium/Widgets/HomeButton/HomeButton')
	import ImageryLayerCollection = require('cesium/Scene/ImageryLayerCollection')
	import InfoBox = require('cesium/Widgets/InfoBox/InfoBox')
	import NavigationHelpButton = require('cesium/Widgets/NavigationHelpButton/NavigationHelpButton')
	import Scene = require('cesium/Scene/Scene')
	import SceneModePicker = require('cesium/Widgets/SceneModePicker/SceneModePicker')
	import ScreenSpaceEventHandler = require('cesium/Core/ScreenSpaceEventHandler')
	import Entity = require('cesium/DataSources/Entity')
	import SelectionIndicator = require('cesium/Widgets/SelectionIndicator/SelectionIndicator')
	import TerrainProvider = require('cesium/Core/TerrainProvider')
	import Timeline = require('cesium/Widgets/Timeline/Timeline')
	import Promise = require('cesium/Promise')
	import DataSource = require('cesium/DataSources/DataSource')
	import flyToOptions = require('cesium/Widgets/Viewer/flyToOptions')
	import HeadingPitchRange = require('cesium/Scene/HeadingPitchRange')
	class Viewer 
	{
		constructor(container : Element|string, options? : ViewerOptions);
		//Members
		allowDataSourcesToSuspendAnimation: boolean
		animation: Animation
		baseLayerPicker: BaseLayerPicker
		bottomContainer: Element
		camera: Camera
		canvas: HTMLCanvasElement
		cesiumLogo: Element
		cesiumWidget: CesiumWidget
		clock: Clock
		container: Element
		dataSourceDisplay: DataSourceDisplay
		dataSources: DataSourceCollection
		entities: EntityCollection
		fullscreenButton: FullscreenButton
		geocoder: Geocoder
		homeButton: HomeButton
		imageryLayers: ImageryLayerCollection
		infoBox: InfoBox
		navigationHelpButton: NavigationHelpButton
		resolutionScale: number
		scene: Scene
		sceneModePicker: SceneModePicker
		screenSpaceEventHandler: ScreenSpaceEventHandler
		selectedEntity: Entity
		selectionIndicator: SelectionIndicator
		targetFrameRate: number
		terrainProvider: TerrainProvider
		timeline: Timeline
		trackedEntity: Entity
		useDefaultRenderLoop: boolean


		//Methods
		destroy() : void
		extend(mixin : any, options? : any) : void
		flyTo(target : Entity|Array<Entity>|EntityCollection|DataSource|Promise<Entity|Array<Entity>|EntityCollection|DataSource>, options? : flyToOptions) : Promise<boolean>
		forceResize() : void
		isDestroyed() : boolean
		render() : void
		resize() : void
		zoomTo(target : Entity|Array<Entity>|EntityCollection|DataSource|Promise<Entity|Array<Entity>|EntityCollection|DataSource>, offset? : HeadingPitchRange) : Promise<boolean>

	}
	export = Viewer

}