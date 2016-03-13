declare module 'cesium/Scene/SkyAtmosphere' {
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	class SkyAtmosphere 
	{
		constructor(ellipsoid? : Ellipsoid);
		//Members
		ellipsoid: Ellipsoid
		show: boolean


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = SkyAtmosphere

}