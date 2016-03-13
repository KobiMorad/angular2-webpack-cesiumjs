declare module 'cesium/Scene/ModelOptions' {
	import Matrix4 = require('cesium/Core/Matrix4')
	interface ModelOptions
	{
		gltf?: Object|ArrayBuffer|Uint8Array;
		basePath?: string;
		show?: boolean;
		modelMatrix?: Matrix4;
		scale?: number;
		minimumPixelSize?: number;
		id?: Object;
		allowPicking?: boolean;
		asynchronous?: boolean;
		debugShowBoundingVolume?: boolean;
		debugWireframe?: boolean;
	}
	export = ModelOptions

}