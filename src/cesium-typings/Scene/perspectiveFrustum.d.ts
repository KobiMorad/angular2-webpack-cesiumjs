declare module 'cesium/Scene/PerspectiveFrustum' {
	import Matrix4 = require('cesium/Core/Matrix4')
	import CullingVolume = require('cesium/Scene/CullingVolume')
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Cartesian2 = require('cesium/Core/Cartesian2')
	class PerspectiveFrustum 
	{
		constructor();
		//Members
		aspectRatio: number
		far: number
		fov: number
		fovy: number
		infiniteProjectionMatrix: Matrix4
		near: number
		projectionMatrix: Matrix4


		//Methods
		clone(result? : PerspectiveFrustum) : PerspectiveFrustum
		computeCullingVolume(position : Cartesian3, direction : Cartesian3, up : Cartesian3) : CullingVolume
		equals(other? : PerspectiveFrustum) : boolean
		getPixelSize(drawingBufferDimensions : Cartesian2, distance? : number, result? : Cartesian2) : Cartesian2

	}
	export = PerspectiveFrustum

}