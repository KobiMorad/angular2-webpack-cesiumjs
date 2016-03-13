declare module 'cesium/Core/BoundingSphere' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Interval = require('cesium/Core/Interval')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import Rectangle = require('cesium/Core/Rectangle')
	import Intersect = require('cesium/Core/Intersect')
	import Plane = require('cesium/Core/Plane')
	import Occluder = require('cesium/Core/Occluder')
	import Matrix4 = require('cesium/Core/Matrix4')
	class BoundingSphere 
	{
		constructor(center? : Cartesian3, radius? : number);
		//Members
		static packedLength: number
		center: Cartesian3
		radius: number


		//Methods
		static clone(sphere : BoundingSphere, result? : BoundingSphere) : BoundingSphere
		static computePlaneDistances(sphere : BoundingSphere, position : Cartesian3, direction : Cartesian3, result? : Interval) : Interval
		static distanceSquaredTo(sphere : BoundingSphere, cartesian : Cartesian3) : number
		static equals(left? : BoundingSphere, right? : BoundingSphere) : boolean
		static expand(sphere : BoundingSphere, point : Cartesian3, result? : BoundingSphere) : BoundingSphere
		static fromBoundingSpheres(boundingSpheres : Array<BoundingSphere>, result? : BoundingSphere) : BoundingSphere
		static fromCornerPoints(corner? : Cartesian3, oppositeCorner? : Cartesian3, result? : BoundingSphere) : BoundingSphere
		static fromEllipsoid(ellipsoid : Ellipsoid, result? : BoundingSphere) : BoundingSphere
		static fromPoints(positions : Array<Cartesian3>, result? : BoundingSphere) : BoundingSphere
		static fromRectangle2D(rectangle : Rectangle, projection? : any, result? : BoundingSphere) : BoundingSphere
		static fromRectangle3D(rectangle : Rectangle, ellipsoid? : Ellipsoid, surfaceHeight? : number, result? : BoundingSphere) : BoundingSphere
		static fromRectangleWithHeights2D(rectangle : Rectangle, projection? : any, minimumHeight? : number, maximumHeight? : number, result? : BoundingSphere) : BoundingSphere
		static fromVertices(positions : Array<number>, center? : Cartesian3, stride? : number, result? : BoundingSphere) : BoundingSphere
		static intersectPlane(sphere : BoundingSphere, plane : Plane) : Intersect
		static isOccluded(sphere : BoundingSphere, occluder : Occluder) : boolean
		static pack(value : BoundingSphere, array : Array<number>, startingIndex? : number) : void
		static projectTo2D(sphere : BoundingSphere, projection? : any, result? : BoundingSphere) : BoundingSphere
		static transform(sphere : BoundingSphere, transform : Matrix4, result? : BoundingSphere) : BoundingSphere
		static transformWithoutScale(sphere : BoundingSphere, transform : Matrix4, result? : BoundingSphere) : BoundingSphere
		static union(left : BoundingSphere, right : BoundingSphere, result? : BoundingSphere) : BoundingSphere
		static unpack(array : Array<number>, startingIndex? : number, result? : BoundingSphere) : BoundingSphere
		clone(result? : BoundingSphere) : BoundingSphere
		computePlaneDistances(position : Cartesian3, direction : Cartesian3, result? : Interval) : Interval
		distanceSquaredTo(cartesian : Cartesian3) : number
		equals(right? : BoundingSphere) : boolean
		intersectPlane(plane : Plane) : Intersect
		isOccluded(occluder : Occluder) : boolean

	}
	export = BoundingSphere

}