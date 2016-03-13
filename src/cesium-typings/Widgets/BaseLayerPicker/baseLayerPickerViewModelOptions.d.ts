declare module 'cesium/Widgets/BaseLayerPicker/BaseLayerPickerViewModelOptions' {
	import Globe = require('cesium/Scene/Globe')
	import ProviderViewModel = require('cesium/Widgets/BaseLayerPicker/ProviderViewModel')
	interface BaseLayerPickerViewModelOptions
	{
		globe: Globe;
		imageryProviderViewModels?: Array<ProviderViewModel>;
		selectedImageryProviderViewModel?: ProviderViewModel;
		terrainProviderViewModels?: Array<ProviderViewModel>;
		selectedTerrainProviderViewModel?: ProviderViewModel;
	}
	export = BaseLayerPickerViewModelOptions

}