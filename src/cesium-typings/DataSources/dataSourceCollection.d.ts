declare module 'cesium/DataSources/DataSourceCollection' {
	import Event = require('cesium/Core/Event')
	import DataSource = require('cesium/DataSources/DataSource')
	import Promise = require('cesium/Promise')
	class DataSourceCollection 
	{
		constructor();
		//Members
		dataSourceAdded: Event
		dataSourceRemoved: Event
		length: number


		//Methods
		add(dataSource : DataSource|Promise<DataSource>) : Promise<DataSource>
		contains(dataSource : DataSource) : boolean
		destroy() : void
		get(index : number) : void
		indexOf(dataSource : DataSource) : number
		isDestroyed() : boolean
		remove(dataSource : DataSource, destroy? : boolean) : boolean
		removeAll(destroy? : boolean) : void

	}
	export = DataSourceCollection

}