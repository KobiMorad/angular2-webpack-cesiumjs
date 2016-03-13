declare module 'cesium/Widgets/CesiumWidget/CesiumWidgetOptions' {
	import Clock = require('cesium/Core/Clock')
	import ImageryProvider = require('cesium/Scene/ImageryProvider')
	import TerrainProvider = require('cesium/Core/TerrainProvider')
	import SkyBox = require('cesium/Scene/SkyBox')
	import SkyAtmosphere = require('cesium/Scene/SkyAtmosphere')
	import SceneMode = require('cesium/Scene/SceneMode')
	import MapProjection = require('cesium/Core/MapProjection')
	import Globe = require('cesium/Scene/Globe')
	interface CesiumWidgetOptions
	{
		clock?: Clock;
		imageryProvider?: ImageryProvider;
		terrainProvider?: TerrainProvider;
		skyBox?: SkyBox;
		skyAtmosphere?: SkyAtmosphere;
		sceneMode?: SceneMode;
		scene3DOnly?: boolean;
		orderIndependentTranslucency?: boolean;
		mapProjection?: MapProjection;
		globe?: Globe;
		useDefaultRenderLoop?: boolean;
		targetFrameRate?: number;
		showRenderLoopErrors?: boolean;
		contextOptions?: Object;
		creditContainer?: Element|string;
	}
	export = CesiumWidgetOptions

}