declare module 'cesium/Core/Occluder' {
	import BoundingSphere = require('cesium/Core/BoundingSphere')
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Rectangle = require('cesium/Core/Rectangle')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	class Occluder 
	{
		constructor(occluderBoundingSphere : BoundingSphere, cameraPosition : Cartesian3);
		//Members
		cameraPosition: Cartesian3
		position: Cartesian3
		radius: number


		//Methods
		static computeOccludeePoint(occluderBoundingSphere : BoundingSphere, occludeePosition : Cartesian3, positions : Array<Cartesian3>) : Object
		static computeOccludeePointFromRectangle(rectangle : Rectangle, ellipsoid? : Ellipsoid) : Object
		static fromBoundingSphere(occluderBoundingSphere : BoundingSphere, cameraPosition : Cartesian3, result? : Occluder) : Occluder
		computeVisibility(occludeeBS : BoundingSphere) : number
		isBoundingSphereVisible(occludee : BoundingSphere) : boolean
		isPointVisible(occludee : Cartesian3) : boolean

	}
	export = Occluder

}