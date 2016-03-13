declare module 'cesium/Widgets/Geocoder/GeocoderViewModel' {
	import GeocoderViewModelOptions = require('cesium/Widgets/Geocoder/GeocoderViewModelOptions')
	import Event = require('cesium/Core/Event')
	import Scene = require('cesium/Scene/Scene')
	import Command = require('cesium/Widgets/Command')
	class GeocoderViewModel 
	{
		constructor(options? : GeocoderViewModelOptions);
		//Members
		complete: Event
		flightDuration: number|void
		isSearchInProgress: boolean
		key: string
		scene: Scene
		search: Command
		searchText: string
		url: string


		//Methods

	}
	export = GeocoderViewModel

}