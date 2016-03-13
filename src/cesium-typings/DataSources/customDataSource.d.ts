declare module 'cesium/DataSources/CustomDataSource' {
	import Event = require('cesium/Core/Event')
	import DataSourceClock = require('cesium/DataSources/DataSourceClock')
	import EntityCollection = require('cesium/DataSources/EntityCollection')
	class CustomDataSource 
	{
		constructor(name? : string);
		//Members
		changedEvent: Event
		clock: DataSourceClock
		entities: EntityCollection
		errorEvent: Event
		isLoading: boolean
		loadingEvent: Event
		name: string


		//Methods

	}
	export = CustomDataSource

}