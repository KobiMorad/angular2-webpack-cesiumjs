declare module 'cesium/Widgets/Viewer/flyToOptions' {
	import HeadingPitchRange = require('cesium/Scene/HeadingPitchRange')
	interface flyToOptions
	{
		duration?: number;
		maximumHeight?: number;
		offset?: HeadingPitchRange;
	}
	export = flyToOptions

}