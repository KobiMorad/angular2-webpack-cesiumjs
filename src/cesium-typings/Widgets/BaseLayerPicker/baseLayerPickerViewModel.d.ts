declare module 'cesium/Widgets/BaseLayerPicker/BaseLayerPickerViewModel' {
	import BaseLayerPickerViewModelOptions = require('cesium/Widgets/BaseLayerPicker/BaseLayerPickerViewModelOptions')
	import Globe = require('cesium/Scene/Globe')
	import ProviderViewModel = require('cesium/Widgets/BaseLayerPicker/ProviderViewModel')
	import Command = require('cesium/Widgets/Command')
	class BaseLayerPickerViewModel 
	{
		constructor(options? : BaseLayerPickerViewModelOptions);
		//Members
		buttonImageUrl: string
		buttonTooltip: string
		dropDownVisible: boolean
		globe: Globe
		imageryProviderViewModels: Array<ProviderViewModel>
		selectedImagery: ProviderViewModel
		selectedTerrain: ProviderViewModel
		terrainProviderViewModels: Array<ProviderViewModel>
		toggleDropDown: Command


		//Methods

	}
	export = BaseLayerPickerViewModel

}