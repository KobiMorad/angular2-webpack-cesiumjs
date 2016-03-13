declare module 'cesium/Core/Cartographic' {
	class Cartographic 
	{
		constructor(longitude? : number, latitude? : number, height? : number);
		//Members
		static ZERO: Cartographic
		height: number
		latitude: number
		longitude: number


		//Methods
		static clone(cartographic : Cartographic, result? : Cartographic) : Cartographic
		static equals(left? : Cartographic, right? : Cartographic) : boolean
		static equalsEpsilon(left? : Cartographic, right? : Cartographic, epsilon? : number) : boolean
		static fromDegrees(longitude : number, latitude : number, height? : number, result? : Cartographic) : Cartographic
		static fromRadians(longitude : number, latitude : number, height? : number, result? : Cartographic) : Cartographic
		clone(result? : Cartographic) : Cartographic
		equals(right? : Cartographic) : boolean
		equalsEpsilon(right? : Cartographic, epsilon? : number) : boolean
		toString() : string

	}
	export = Cartographic

}