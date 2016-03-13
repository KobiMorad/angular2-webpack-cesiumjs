declare module 'cesium/DataSources/DataSourceDisplay' {
	import DataSourceDisplayOptions = require('cesium/DataSources/DataSourceDisplayOptions')
	import DataSourceCollection = require('cesium/DataSources/DataSourceCollection')
	import CustomDataSource = require('cesium/DataSources/CustomDataSource')
	import Scene = require('cesium/Scene/Scene')
	import JulianDate = require('cesium/Core/JulianDate')
	class DataSourceDisplay 
	{
		constructor(options? : DataSourceDisplayOptions);
		//Members
		static defaultVisualizersCallback: any
		dataSources: DataSourceCollection
		defaultDataSource: CustomDataSource
		scene: Scene


		//Methods
		destroy() : void
		isDestroyed() : boolean
		update(time : JulianDate) : boolean

	}
	export = DataSourceDisplay

}