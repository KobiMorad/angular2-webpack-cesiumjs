declare module 'cesium/Core/OrientedBoundingBox' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Matrix3 = require('cesium/Core/Matrix3')
	import Interval = require('cesium/Core/Interval')
	import Rectangle = require('cesium/Core/Rectangle')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import Intersect = require('cesium/Core/Intersect')
	import Plane = require('cesium/Core/Plane')
	import Occluder = require('cesium/Core/Occluder')
	class OrientedBoundingBox 
	{
		constructor(center? : Cartesian3, halfAxes? : Matrix3);
		//Members
		center: Cartesian3
		halfAxes: Matrix3


		//Methods
		static clone(box : OrientedBoundingBox, result? : OrientedBoundingBox) : OrientedBoundingBox
		static computePlaneDistances(box : OrientedBoundingBox, position : Cartesian3, direction : Cartesian3, result? : Interval) : Interval
		static distanceSquaredTo(box : OrientedBoundingBox, cartesian : Cartesian3) : number
		static equals(left : OrientedBoundingBox, right : OrientedBoundingBox) : boolean
		static fromPoints(positions : Array<Cartesian3>, result? : OrientedBoundingBox) : OrientedBoundingBox
		static fromRectangle(rectangle : Rectangle, minimumHeight? : number, maximumHeight? : number, ellipsoid? : Ellipsoid, result? : OrientedBoundingBox) : OrientedBoundingBox
		static intersectPlane(box : OrientedBoundingBox, plane : Plane) : Intersect
		static isOccluded(sphere : OrientedBoundingBox, occluder : Occluder) : boolean
		clone(result? : OrientedBoundingBox) : OrientedBoundingBox
		computePlaneDistances(position : Cartesian3, direction : Cartesian3, result? : Interval) : Interval
		distanceSquaredTo(cartesian : Cartesian3) : number
		equals(right? : OrientedBoundingBox) : boolean
		intersectPlane(plane : Plane) : Intersect
		isOccluded(occluder : Occluder) : boolean

	}
	export = OrientedBoundingBox

}