declare module 'cesium/Widgets/BaseLayerPicker/ProviderViewModel' {
	import ProviderViewModelOptions = require('cesium/Widgets/BaseLayerPicker/ProviderViewModelOptions')
	import Command = require('cesium/Widgets/Command')
	class ProviderViewModel 
	{
		constructor(options : ProviderViewModelOptions);
		//Members
		creationCommand: Command
		iconUrl: string
		name: string
		tooltip: string


		//Methods

	}
	export = ProviderViewModel

}