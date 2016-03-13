declare module 'cesium/Scene/Model' {
	import ModelOptions = require('cesium/Scene/ModelOptions')
	import ModelAnimationCollection = require('cesium/Scene/ModelAnimationCollection')
	import BoundingSphere = require('cesium/Core/BoundingSphere')
	import Matrix4 = require('cesium/Core/Matrix4')
	import Promise = require('cesium/Promise')
	import fromGltfOptions = require('cesium/Scene/fromGltfOptions')
	import ModelMaterial = require('cesium/Scene/ModelMaterial')
	import ModelMesh = require('cesium/Scene/ModelMesh')
	import ModelNode = require('cesium/Scene/ModelNode')
	class Model 
	{
		constructor(options? : ModelOptions);
		//Members
		activeAnimations: ModelAnimationCollection
		allowPicking: boolean
		asynchronous: boolean
		basePath: string
		boundingSphere: BoundingSphere
		debugShowBoundingVolume: boolean
		debugWireframe: boolean
		gltf: Object
		id: Object
		minimumPixelSize: number
		modelMatrix: Matrix4
		ready: boolean
		readyPromise: Promise<Model>
		scale: number
		show: boolean


		//Methods
		static fromGltf(options? : fromGltfOptions) : Model
		destroy() : void
		getMaterial(name : string) : ModelMaterial
		getMesh(name : string) : ModelMesh
		getNode(name : string) : ModelNode
		isDestroyed() : boolean
		update() : void

	}
	export = Model

}