declare module 'cesium/Core/Cartesian2' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Cartesian4 = require('cesium/Core/Cartesian4')
	class Cartesian2 
	{
		constructor(x? : number, y? : number);
		//Members
		x: number
		y: number
		static packedLength: number
		static UNIT_X: Cartesian2
		static UNIT_Y: Cartesian2
		static ZERO: Cartesian2


		//Methods
		clone(result? : Cartesian2) : Cartesian2
		equals(right? : Cartesian2) : boolean
		equalsEpsilon(right? : Cartesian2, relativeEpsilon? : number, absoluteEpsilon? : number) : boolean
		toString() : string
		static abs(cartesian : Cartesian2, result : Cartesian2) : Cartesian2
		static add(left : Cartesian2, right : Cartesian2, result : Cartesian2) : Cartesian2
		static angleBetween(left : Cartesian2, right : Cartesian2) : number
		static clone(cartesian : Cartesian2, result? : Cartesian2) : Cartesian2
		static distance(left : Cartesian2, right : Cartesian2) : number
		static distanceSquared(left : Cartesian2, right : Cartesian2) : number
		static divideByScalar(cartesian : Cartesian2, scalar : number, result : Cartesian2) : Cartesian2
		static dot(left : Cartesian2, right : Cartesian2) : number
		static equals(left? : Cartesian2, right? : Cartesian2) : boolean
		static equalsEpsilon(left? : Cartesian2, right? : Cartesian2, relativeEpsilon? : number, absoluteEpsilon? : number) : boolean
		static fromArray(array : Array<number>, startingIndex? : number, result? : Cartesian2) : Cartesian2
		static fromCartesian3(cartesian : Cartesian3, result? : Cartesian2) : Cartesian2
		static fromCartesian4(cartesian : Cartesian4, result? : Cartesian2) : Cartesian2
		static fromElements(x : number, y : number, result? : Cartesian2) : Cartesian2
		static lerp(start : Cartesian2, end : Cartesian2, t : number, result : Cartesian2) : Cartesian2
		static magnitude(cartesian : Cartesian2) : number
		static magnitudeSquared(cartesian : Cartesian2) : number
		static maximumByComponent(first : Cartesian2, second : Cartesian2, result : Cartesian2) : Cartesian2
		static maximumComponent(cartesian : Cartesian2) : number
		static minimumByComponent(first : Cartesian2, second : Cartesian2, result : Cartesian2) : Cartesian2
		static minimumComponent(cartesian : Cartesian2) : number
		static mostOrthogonalAxis(cartesian : Cartesian2, result : Cartesian2) : Cartesian2
		static multiplyByScalar(cartesian : Cartesian2, scalar : number, result : Cartesian2) : Cartesian2
		static multiplyComponents(left : Cartesian2, right : Cartesian2, result : Cartesian2) : Cartesian2
		static negate(cartesian : Cartesian2, result : Cartesian2) : Cartesian2
		static normalize(cartesian : Cartesian2, result : Cartesian2) : Cartesian2
		static pack(value : Cartesian2, array : Array<number>, startingIndex? : number) : void
		static subtract(left : Cartesian2, right : Cartesian2, result : Cartesian2) : Cartesian2
		static unpack(array : Array<number>, startingIndex? : number, result? : Cartesian2) : Cartesian2

	}
	export = Cartesian2

}