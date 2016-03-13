declare module 'cesium/Scene/flyToBoundingSphereOptions' {
	import HeadingPitchRange = require('cesium/Scene/HeadingPitchRange')
	import Matrix4 = require('cesium/Core/Matrix4')
	import EasingFunction = require('cesium/Core/EasingFunction')
	interface flyToBoundingSphereOptions
	{
		duration?: number;
		offset?: HeadingPitchRange;
		complete?: any;
		cancel?: any;
		endTransform?: Matrix4;
		maximumHeight?: number;
		easingFunction?: EasingFunction|any;
	}
	export = flyToBoundingSphereOptions

}