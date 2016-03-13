declare module 'cesium/Widgets/Geocoder/GeocoderViewModelOptions' {
	import Scene = require('cesium/Scene/Scene')
	interface GeocoderViewModelOptions
	{
		scene: Scene;
		url?: string;
		key?: string;
		flightDuration?: number;
	}
	export = GeocoderViewModelOptions

}