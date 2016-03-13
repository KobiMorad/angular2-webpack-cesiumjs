declare module 'cesium/DataSources/ModelGraphicsOptions' {
	import Property = require('cesium/DataSources/Property')
	interface ModelGraphicsOptions
	{
		uri?: Property|string;
		show?: Property|string;
		scale?: Property|string;
		minimumPixelSize?: Property|string;
	}
	export = ModelGraphicsOptions

}