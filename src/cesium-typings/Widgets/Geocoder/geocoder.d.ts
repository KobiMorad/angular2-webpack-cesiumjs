declare module 'cesium/Widgets/Geocoder/Geocoder' {
	import GeocoderOptions = require('cesium/Widgets/Geocoder/GeocoderOptions')
	import GeocoderViewModel = require('cesium/Widgets/Geocoder/GeocoderViewModel')
	class Geocoder 
	{
		constructor(options? : GeocoderOptions);
		//Members
		container: Element
		viewModel: GeocoderViewModel


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = Geocoder

}