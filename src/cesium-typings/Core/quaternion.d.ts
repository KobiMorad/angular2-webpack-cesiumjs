declare module 'cesium/Core/Quaternion' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Matrix3 = require('cesium/Core/Matrix3')
	class Quaternion 
	{
		constructor(x? : number, y? : number, z? : number, w? : number);
		//Members
		static IDENTITY: Quaternion
		static packedInterpolationLength: number
		static packedLength: number
		static ZERO: Quaternion
		w: number
		x: number
		y: number
		z: number


		//Methods
		static add(left : Quaternion, right : Quaternion, result : Quaternion) : Quaternion
		static clone(quaternion : Quaternion, result? : Quaternion) : Quaternion
		static computeAngle(quaternion : Quaternion) : number
		static computeAxis(quaternion : Quaternion, result : Cartesian3) : Cartesian3
		static computeInnerQuadrangle(q0 : Quaternion, q1 : Quaternion, q2 : Quaternion, result : Quaternion) : Quaternion
		static conjugate(quaternion : Quaternion, result : Quaternion) : Quaternion
		static convertPackedArrayForInterpolation(packedArray : Array<number>, startingIndex? : number, lastIndex? : number, result? : Array<number>) : void
		static divideByScalar(quaternion : Quaternion, scalar : number, result : Quaternion) : Quaternion
		static dot(left : Quaternion, right : Quaternion) : number
		static equals(left? : Quaternion, right? : Quaternion) : boolean
		static equalsEpsilon(left? : Quaternion, right? : Quaternion, epsilon? : number) : boolean
		static exp(cartesian : Cartesian3, result : Quaternion) : Quaternion
		static fastSlerp(start : Quaternion, end : Quaternion, t : number, result : Quaternion) : Quaternion
		static fastSquad(q0 : Quaternion, q1 : Quaternion, s0 : Quaternion, s1 : Quaternion, t : number, result : Quaternion) : Quaternion
		static fromAxisAngle(axis : Cartesian3, angle : number, result? : Quaternion) : Quaternion
		static fromHeadingPitchRoll(heading : number, pitch : number, roll : number, result? : Quaternion) : Quaternion
		static fromRotationMatrix(matrix : Matrix3, result? : Quaternion) : Quaternion
		static inverse(quaternion : Quaternion, result : Quaternion) : Quaternion
		static lerp(start : Quaternion, end : Quaternion, t : number, result : Quaternion) : Quaternion
		static log(quaternion : Quaternion, result : Cartesian3) : Cartesian3
		static magnitude(quaternion : Quaternion) : number
		static magnitudeSquared(quaternion : Quaternion) : number
		static multiply(left : Quaternion, right : Quaternion, result : Quaternion) : Quaternion
		static multiplyByScalar(quaternion : Quaternion, scalar : number, result : Quaternion) : Quaternion
		static negate(quaternion : Quaternion, result : Quaternion) : Quaternion
		static normalize(quaternion : Quaternion, result : Quaternion) : Quaternion
		static pack(value : Quaternion, array : Array<number>, startingIndex? : number) : void
		static slerp(start : Quaternion, end : Quaternion, t : number, result : Quaternion) : Quaternion
		static squad(q0 : Quaternion, q1 : Quaternion, s0 : Quaternion, s1 : Quaternion, t : number, result : Quaternion) : Quaternion
		static subtract(left : Quaternion, right : Quaternion, result : Quaternion) : Quaternion
		static unpack(array : Array<number>, startingIndex? : number, result? : Quaternion) : Quaternion
		static unpackInterpolationResult(array : Array<number>, sourceArray : Array<number>, startingIndex? : number, lastIndex? : number, result? : Quaternion) : Quaternion
		clone(result? : Quaternion) : Quaternion
		equals(right? : Quaternion) : boolean
		equalsEpsilon(right? : Quaternion, epsilon? : number) : boolean
		toString() : string

	}
	export = Quaternion

}