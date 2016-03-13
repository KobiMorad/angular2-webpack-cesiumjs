
declare module 'cesium/Scene/SkyBox' {
	import SkyBoxOptions = require('cesium/Scene/SkyBoxOptions')
	class SkyBox 
	{
		constructor(options? : SkyBoxOptions);
		//Members
		show: boolean
		sources: Object


		//Methods
		destroy() : void
		isDestroyed() : boolean
		update() : void

	}
	export = SkyBox

}