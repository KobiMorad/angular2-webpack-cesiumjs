declare module 'cesium/DataSources/CzmlDataSource' {
	import DataSource = require('cesium/DataSources/DataSource')
	import Event = require('cesium/Core/Event')
	import DataSourceClock = require('cesium/DataSources/DataSourceClock')
	import EntityCollection = require('cesium/DataSources/EntityCollection')
	import Promise = require('cesium/Promise')
	import loadOptions = require('cesium/DataSources/loadOptions')
	import TimeInterval = require('cesium/Core/TimeInterval')
	import processOptions = require('cesium/DataSources/processOptions')
	class CzmlDataSource extends DataSource
	{
		constructor(name? : string);
		//Members
		static updaters: Array<any>
		changedEvent: Event
		clock: DataSourceClock
		entities: EntityCollection
		errorEvent: Event
		isLoading: boolean
		loadingEvent: Event
		name: string


		//Methods
		static load(data : string|any, options? : loadOptions) : Promise<CzmlDataSource>
		static processMaterialPacketData(object : any, propertyName : string, packetData : any, interval : TimeInterval, sourceUri : string, entityCollection : EntityCollection) : void
		static processPacketData(type : (()=>void), object : any, propertyName : string, packetData : any, interval : TimeInterval, sourceUri : string, entityCollection : EntityCollection) : void
		static processPositionPacketData(object : any, propertyName : string, packetData : any, interval : TimeInterval, sourceUri : string, entityCollection : EntityCollection) : void
		load(czml : string|any, options? : loadOptions) : Promise<CzmlDataSource>
		process(czml : string|any, options? : processOptions) : Promise<CzmlDataSource>

	}
	export = CzmlDataSource

}