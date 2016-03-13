declare module 'cesium/DataSources/DataSource' {
	import Event = require('cesium/Core/Event')
	import DataSourceClock = require('cesium/DataSources/DataSourceClock')
	import EntityCollection = require('cesium/DataSources/EntityCollection')
	import JulianDate = require('cesium/Core/JulianDate')
	class DataSource 
	{
		constructor();
		//Members
		changedEvent: Event
		clock: DataSourceClock
		entities: EntityCollection
		errorEvent: Event
		isLoading: boolean
		loadingEvent: Event
		name: string


		//Methods
		update(time : JulianDate) : boolean

	}
	export = DataSource

}