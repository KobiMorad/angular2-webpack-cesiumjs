declare module 'cesium/Scene/flyToOptions' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Rectangle = require('cesium/Core/Rectangle')
	import Matrix4 = require('cesium/Core/Matrix4')
	import EasingFunction = require('cesium/Core/EasingFunction')
	interface flyToOptions
	{
		destination: Cartesian3|Rectangle;
		orientation?: Object;
		duration?: number;
		complete?: any;
		cancel?: any;
		endTransform?: Matrix4;
		convert?: boolean;
		maximumHeight?: number;
		easingFunction?: EasingFunction|any;
	}
	export = flyToOptions

}