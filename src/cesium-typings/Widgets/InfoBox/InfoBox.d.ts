declare module 'cesium/Widgets/InfoBox/InfoBox' {
	import InfoBoxViewModel = require('cesium/Widgets/InfoBox/InfoBoxViewModel')
	class InfoBox 
	{
		constructor(container : Element|string);
		//Members
		container: Element
		frame: HTMLIFrameElement
		viewModel: InfoBoxViewModel


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = InfoBox

}