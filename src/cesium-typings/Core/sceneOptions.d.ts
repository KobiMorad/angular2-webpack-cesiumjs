declare module 'cesium/Scene/SceneOptions' {
	import MapProjection = require('cesium/Core/MapProjection')
	interface SceneOptions
	{
		canvas: HTMLCanvasElement;
		contextOptions?: Object;
		creditContainer?: Element;
		mapProjection?: MapProjection;
		orderIndependentTranslucency?: boolean;
		scene3DOnly?: boolean;
	}
	export = SceneOptions

}