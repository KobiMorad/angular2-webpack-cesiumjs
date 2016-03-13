declare module 'cesium/Widgets/BaseLayerPicker/ProviderViewModelOptions' {
	import Command = require('cesium/Widgets/Command')
	interface ProviderViewModelOptions
	{
		name: string;
		tooltip: string;
		iconUrl: string;
		creationFunction: any|Command;
	}
	export = ProviderViewModelOptions

}