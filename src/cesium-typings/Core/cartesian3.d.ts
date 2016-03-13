declare module 'cesium/Core/Cartesian3' {
	import Cartesian4 = require('cesium/Core/Cartesian4')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import Spherical = require('cesium/Core/Spherical')
	class Cartesian3 
	{
		constructor(x? : number, y? : number, z? : number);
		//Members
		x: number
		y: number
		z: number
		static packedLength: number
		static UNIT_X: Cartesian3
		static UNIT_Y: Cartesian3
		static UNIT_Z: Cartesian3
		static ZERO: Cartesian3


		//Methods
		clone(result? : Cartesian3) : Cartesian3
		equals(right? : Cartesian3) : boolean
		equalsEpsilon(right? : Cartesian3, relativeEpsilon? : number, absoluteEpsilon? : number) : boolean
		toString() : string
		static abs(cartesian : Cartesian3, result : Cartesian3) : Cartesian3
		static add(left : Cartesian3, right : Cartesian3, result : Cartesian3) : Cartesian3
		static angleBetween(left : Cartesian3, right : Cartesian3) : number
		static clone(cartesian : Cartesian3, result? : Cartesian3) : Cartesian3
		static cross(left : Cartesian3, right : Cartesian3, result : Cartesian3) : Cartesian3
		static distance(left : Cartesian3, right : Cartesian3) : number
		static distanceSquared(left : Cartesian3, right : Cartesian3) : number
		static divideByScalar(cartesian : Cartesian3, scalar : number, result : Cartesian3) : Cartesian3
		static dot(left : Cartesian3, right : Cartesian3) : number
		static equals(left? : Cartesian3, right? : Cartesian3) : boolean
		static equalsEpsilon(left? : Cartesian3, right? : Cartesian3, relativeEpsilon? : number, absoluteEpsilon? : number) : boolean
		static fromArray(array : Array<number>, startingIndex? : number, result? : Cartesian3) : Cartesian3
		static fromCartesian4(cartesian : Cartesian4, result? : Cartesian3) : Cartesian3
		static fromDegrees(longitude : number, latitude : number, height? : number, ellipsoid? : Ellipsoid, result? : Cartesian3) : Cartesian3
		static fromDegreesArray(coordinates : Array<number>, ellipsoid? : Ellipsoid, result? : Array<Cartesian3>) : Array<Cartesian3>
		static fromDegreesArrayHeights(coordinates : Array<number>, ellipsoid? : Ellipsoid, result? : Array<Cartesian3>) : Array<Cartesian3>
		static fromElements(x : number, y : number, z : number, result? : Cartesian3) : Cartesian3
		static fromRadians(longitude : number, latitude : number, height? : number, ellipsoid? : Ellipsoid, result? : Cartesian3) : Cartesian3
		static fromRadiansArray(coordinates : Array<number>, ellipsoid? : Ellipsoid, result? : Array<Cartesian3>) : Array<Cartesian3>
		static fromRadiansArrayHeights(coordinates : Array<number>, ellipsoid? : Ellipsoid, result? : Array<Cartesian3>) : Array<Cartesian3>
		static fromSpherical(spherical : Spherical, result? : Cartesian3) : Cartesian3
		static lerp(start : Cartesian3, end : Cartesian3, t : number, result : Cartesian3) : Cartesian3
		static magnitude(cartesian : Cartesian3) : number
		static magnitudeSquared(cartesian : Cartesian3) : number
		static maximumByComponent(first : Cartesian3, second : Cartesian3, result : Cartesian3) : Cartesian3
		static maximumComponent(cartesian : Cartesian3) : number
		static minimumByComponent(first : Cartesian3, second : Cartesian3, result : Cartesian3) : Cartesian3
		static minimumComponent(cartesian : Cartesian3) : number
		static mostOrthogonalAxis(cartesian : Cartesian3, result : Cartesian3) : Cartesian3
		static multiplyByScalar(cartesian : Cartesian3, scalar : number, result : Cartesian3) : Cartesian3
		static multiplyComponents(left : Cartesian3, right : Cartesian3, result : Cartesian3) : Cartesian3
		static negate(cartesian : Cartesian3, result : Cartesian3) : Cartesian3
		static normalize(cartesian : Cartesian3, result : Cartesian3) : Cartesian3
		static pack(value : Cartesian3, array : Array<number>, startingIndex? : number) : void
		static subtract(left : Cartesian3, right : Cartesian3, result : Cartesian3) : Cartesian3
		static unpack(array : Array<number>, startingIndex? : number, result? : Cartesian3) : Cartesian3

	}
	export = Cartesian3

}