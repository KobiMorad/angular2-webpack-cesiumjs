declare module 'cesium/Widgets/BaseLayerPicker/BaseLayerPicker' {
	import BaseLayerPickerOptions = require('cesium/Widgets/BaseLayerPicker/BaseLayerPickerOptions')
	import BaseLayerPickerViewModel = require('cesium/Widgets/BaseLayerPicker/BaseLayerPickerViewModel')
	class BaseLayerPicker 
	{
		constructor(container : Element|string, options? : BaseLayerPickerOptions);
		//Members
		container: Element
		viewModel: BaseLayerPickerViewModel


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = BaseLayerPicker

}