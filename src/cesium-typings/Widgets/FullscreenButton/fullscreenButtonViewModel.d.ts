declare module 'cesium/Widgets/FullscreenButton/FullscreenButtonViewModel' {
	import Command = require('cesium/Widgets/Command')
	class FullscreenButtonViewModel 
	{
		constructor(fullscreenElement? : Element|string);
		//Members
		command: Command
		fullscreenElement: Element
		isFullscreen: boolean
		isFullscreenEnabled: boolean
		tooltip: string


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = FullscreenButtonViewModel

}