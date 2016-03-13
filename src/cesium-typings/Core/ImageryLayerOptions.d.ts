declare module 'cesium/Scene/ImageryLayerOptions' {
	import Rectangle = require('cesium/Core/Rectangle')
	interface ImageryLayerOptions
	{
		rectangle?: Rectangle;
		alpha?: number|(()=>void);
		brightness?: number|(()=>void);
		contrast?: number|(()=>void);
		hue?: number|(()=>void);
		saturation?: number|(()=>void);
		gamma?: number|(()=>void);
		show?: boolean;
		maximumAnisotropy?: number;
		minimumTerrainLevel?: number;
		maximumTerrainLevel?: number;
	}
	export = ImageryLayerOptions

}