declare module 'cesium/Core/Cartesian4' {
	import Color = require('cesium/Core/Color')
	class Cartesian4 
	{
		constructor(x? : number, y? : number, z? : number, w? : number);
		//Members
		w: number
		x: number
		y: number
		z: number
		static packedLength: number
		static UNIT_W: Cartesian4
		static UNIT_X: Cartesian4
		static UNIT_Y: Cartesian4
		static UNIT_Z: Cartesian4
		static ZERO: Cartesian4


		//Methods
		clone(result? : Cartesian4) : Cartesian4
		equals(right? : Cartesian4) : boolean
		equalsEpsilon(right? : Cartesian4, relativeEpsilon? : number, absoluteEpsilon? : number) : boolean
		toString() : string
		static abs(cartesian : Cartesian4, result : Cartesian4) : Cartesian4
		static add(left : Cartesian4, right : Cartesian4, result : Cartesian4) : Cartesian4
		static clone(cartesian : Cartesian4, result? : Cartesian4) : Cartesian4
		static distance(left : Cartesian4, right : Cartesian4) : number
		static distanceSquared(left : Cartesian4, right : Cartesian4) : number
		static divideByScalar(cartesian : Cartesian4, scalar : number, result : Cartesian4) : Cartesian4
		static dot(left : Cartesian4, right : Cartesian4) : number
		static equals(left? : Cartesian4, right? : Cartesian4) : boolean
		static equalsEpsilon(left? : Cartesian4, right? : Cartesian4, relativeEpsilon? : number, absoluteEpsilon? : number) : boolean
		static fromArray(array : Array<number>, startingIndex? : number, result? : Cartesian4) : Cartesian4
		static fromColor(color : Color, result? : Cartesian4) : Cartesian4
		static fromElements(x : number, y : number, z : number, w : number, result? : Cartesian4) : Cartesian4
		static lerp(start : Cartesian4, end : Cartesian4, t : number, result : Cartesian4) : Cartesian4
		static magnitude(cartesian : Cartesian4) : number
		static magnitudeSquared(cartesian : Cartesian4) : number
		static maximumByComponent(first : Cartesian4, second : Cartesian4, result : Cartesian4) : Cartesian4
		static maximumComponent(cartesian : Cartesian4) : number
		static minimumByComponent(first : Cartesian4, second : Cartesian4, result : Cartesian4) : Cartesian4
		static minimumComponent(cartesian : Cartesian4) : number
		static mostOrthogonalAxis(cartesian : Cartesian4, result : Cartesian4) : Cartesian4
		static multiplyByScalar(cartesian : Cartesian4, scalar : number, result : Cartesian4) : Cartesian4
		static multiplyComponents(left : Cartesian4, right : Cartesian4, result : Cartesian4) : Cartesian4
		static negate(cartesian : Cartesian4, result : Cartesian4) : Cartesian4
		static normalize(cartesian : Cartesian4, result : Cartesian4) : Cartesian4
		static pack(value : Cartesian4, array : Array<number>, startingIndex? : number) : void
		static subtract(left : Cartesian4, right : Cartesian4, result : Cartesian4) : Cartesian4
		static unpack(array : Array<number>, startingIndex? : number, result? : Cartesian4) : Cartesian4

	}
	export = Cartesian4

}