declare module 'cesium/DataSources/DataSourceDisplayOptions' {
	import Scene = require('cesium/Scene/Scene')
	import DataSourceCollection = require('cesium/DataSources/DataSourceCollection')
	interface DataSourceDisplayOptions
	{
		scene: Scene;
		dataSourceCollection: DataSourceCollection;
		visualizersCallback?: any;
	}
	export = DataSourceDisplayOptions

}