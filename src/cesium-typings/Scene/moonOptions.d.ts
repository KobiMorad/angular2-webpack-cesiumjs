declare module 'cesium/Scene/MoonOptions' {
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	interface MoonOptions
	{
		show?: boolean;
		textureUrl?: string;
		ellipsoid?: Ellipsoid;
		onlySunLighting?: boolean;
	}
	export = MoonOptions

}