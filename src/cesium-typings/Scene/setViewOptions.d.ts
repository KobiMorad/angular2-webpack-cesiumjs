declare module 'cesium/Scene/setViewOptions' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Cartographic = require('cesium/Core/Cartographic')
	interface setViewOptions
	{
		position?: Cartesian3;
		positionCartographic?: Cartographic;
		heading?: number;
		pitch?: number;
		roll?: number;
	}
	export = setViewOptions

}