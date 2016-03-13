declare module 'cesium/Scene/fromGltfOptions' {
	import Matrix4 = require('cesium/Core/Matrix4')
	interface fromGltfOptions
	{
		url: string;
		headers?: Object;
		show?: boolean;
		modelMatrix?: Matrix4;
		scale?: number;
		minimumPixelSize?: number;
		allowPicking?: boolean;
		asynchronous?: boolean;
		debugShowBoundingVolume?: boolean;
		debugWireframe?: boolean;
	}
	export = fromGltfOptions

}