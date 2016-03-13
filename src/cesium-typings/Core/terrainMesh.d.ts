declare module 'cesium/Core/TerrainMesh' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import BoundingSphere = require('cesium/Core/BoundingSphere')
	import OrientedBoundingBox = require('cesium/Core/OrientedBoundingBox')
	class TerrainMesh 
	{
		constructor(center : Cartesian3, vertices : Float32Array, indices : Uint16Array|Uint32Array, minimumHeight : number, maximumHeight : number, boundingSphere3D : BoundingSphere, occludeePointInScaledSpace : Cartesian3, vertexStride? : number, orientedBoundingBox? : OrientedBoundingBox);
		//Members
		boundingSphere3D: BoundingSphere
		center: Cartesian3
		indices: Uint16Array|Uint32Array
		maximumHeight: number
		minimumHeight: number
		occludeePointInScaledSpace: Cartesian3
		orientedBoundingBox: OrientedBoundingBox
		stride: number
		vertices: Float32Array


		//Methods

	}
	export = TerrainMesh

}