declare module 'cesium/DataSources/setInterpolationOptionsOptions' {
	import InterpolationAlgorithm = require('cesium/Core/InterpolationAlgorithm')
	interface setInterpolationOptionsOptions
	{
		interpolationAlgorithm?: InterpolationAlgorithm;
		interpolationDegree?: number;
	}
	export = setInterpolationOptionsOptions

}