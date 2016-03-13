declare module 'cesium/Scene/Moon' {
	import MoonOptions = require('cesium/Scene/MoonOptions')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	class Moon 
	{
		constructor(options? : MoonOptions);
		//Members
		ellipsoid: Ellipsoid
		onlySunLighting: boolean
		show: boolean
		textureUrl: string


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = Moon

}