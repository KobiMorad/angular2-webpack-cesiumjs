declare module 'cesium/Widgets/BaseLayerPicker/BaseLayerPickerOptions' {
	import Globe = require('cesium/Scene/Globe')
	import ProviderViewModel = require('cesium/Widgets/BaseLayerPicker/ProviderViewModel')
	interface BaseLayerPickerOptions
	{
		globe: Globe;
		imageryProviderViewModels?: Array<ProviderViewModel>;
		selectedImageryProviderViewModel?: ProviderViewModel;
		terrainProviderViewModels?: Array<ProviderViewModel>;
		selectedTerrainProviderViewModel?: ProviderViewModel;
	}
	export = BaseLayerPickerOptions

}