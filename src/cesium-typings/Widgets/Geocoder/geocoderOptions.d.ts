declare module 'cesium/Widgets/Geocoder/GeocoderOptions' {
	import Scene = require('cesium/Scene/Scene')
	interface GeocoderOptions
	{
		container: Element|string;
		scene: Scene;
		url?: string;
		key?: string;
		flightDuration?: number;
	}
	export = GeocoderOptions

}