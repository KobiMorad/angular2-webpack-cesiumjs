declare module 'cesium/Widgets/Viewer/ViewerOptions' {
	import Clock = require('cesium/Core/Clock')
	import ProviderViewModel = require('cesium/Widgets/BaseLayerPicker/ProviderViewModel')
	import ImageryProvider = require('cesium/Scene/ImageryProvider')
	import TerrainProvider = require('cesium/Core/TerrainProvider')
	import SkyBox = require('cesium/Scene/SkyBox')
	import SkyAtmosphere = require('cesium/Scene/SkyAtmosphere')
	import SceneMode = require('cesium/Scene/SceneMode')
	import MapProjection = require('cesium/Core/MapProjection')
	import Globe = require('cesium/Scene/Globe')
	import DataSourceCollection = require('cesium/DataSources/DataSourceCollection')
	interface ViewerOptions
	{
		animation?: boolean;
		baseLayerPicker?: boolean;
		fullscreenButton?: boolean;
		geocoder?: boolean;
		homeButton?: boolean;
		infoBox?: boolean;
		sceneModePicker?: boolean;
		selectionIndicator?: boolean;
		timeline?: boolean;
		navigationHelpButton?: boolean;
		navigationInstructionsInitiallyVisible?: boolean;
		scene3DOnly?: boolean;
		clock?: Clock;
		selectedImageryProviderViewModel?: ProviderViewModel;
		imageryProviderViewModels?: Array<ProviderViewModel>;
		selectedTerrainProviderViewModel?: ProviderViewModel;
		terrainProviderViewModels?: Array<ProviderViewModel>;
		imageryProvider?: ImageryProvider;
		terrainProvider?: TerrainProvider;
		skyBox?: SkyBox;
		skyAtmosphere?: SkyAtmosphere;
		fullscreenElement?: Element|string;
		useDefaultRenderLoop?: boolean;
		targetFrameRate?: number;
		showRenderLoopErrors?: boolean;
		automaticallyTrackDataSourceClocks?: boolean;
		contextOptions?: Object;
		sceneMode?: SceneMode;
		mapProjection?: MapProjection;
		globe?: Globe;
		orderIndependentTranslucency?: boolean;
		creditContainer?: Element|string;
		dataSources?: DataSourceCollection;
	}
	export = ViewerOptions

}