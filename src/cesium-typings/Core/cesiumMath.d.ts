declare module 'cesium/Core/CesiumMath' {
	class CesiumMath 
	{
		constructor();
		//Members
		static DEGREES_PER_RADIAN: number
		static EPSILON1: number
		static EPSILON2: number
		static EPSILON3: number
		static EPSILON4: number
		static EPSILON5: number
		static EPSILON6: number
		static EPSILON7: number
		static EPSILON8: number
		static EPSILON9: number
		static EPSILON10: number
		static EPSILON11: number
		static EPSILON12: number
		static EPSILON13: number
		static EPSILON14: number
		static EPSILON15: number
		static EPSILON16: number
		static EPSILON17: number
		static EPSILON18: number
		static EPSILON19: number
		static EPSILON20: number
		static GRAVITATIONALPARAMETER: number
		static LUNAR_RADIUS: number
		static ONE_OVER_PI: number
		static ONE_OVER_TWO_PI: number
		static PI: number
		static PI_OVER_FOUR: number
		static PI_OVER_SIX: number
		static PI_OVER_THREE: number
		static PI_OVER_TWO: number
		static RADIANS_PER_ARCSECOND: number
		static RADIANS_PER_DEGREE: number
		static SIXTY_FOUR_KILOBYTES: number
		static SOLAR_RADIUS: number
		static THREE_PI_OVER_TWO: number
		static TWO_PI: number


		//Methods
		static acosClamped(value : number) : number
		static asinClamped(value : number) : number
		static chordLength(angle : number, radius : number) : number
		static clamp(value : number, min : number, max : number) : number
		static convertLongitudeRange(angle : number) : number
		static cosh(value : number) : number
		static equalsEpsilon(left : number, right : number, relativeEpsilon : number, absoluteEpsilon? : number) : boolean
		static factorial(n : number) : number
		static fromSNorm(value : number) : number
		static incrementWrap(n? : number, maximumValue? : number, minimumValue? : number) : number
		static isPowerOfTwo(n : number) : boolean
		static lerp(p : number, q : number, time : number) : number
		static mod(m : number, n : number) : number
		static negativePiToPi(angle : number) : number
		static nextPowerOfTwo(n : number) : number
		static nextRandomNumber() : number
		static setRandomNumberSeed(seed : number) : void
		static sign(value : number) : number
		static signNotZero(value : number) : number
		static sinh(value : number) : number
		static toDegrees(radians : number) : number
		static toRadians(degrees : number) : number
		static toSNorm(value : number) : number
		static zeroToTwoPi(angle : number) : number

	}
	export = CesiumMath

}