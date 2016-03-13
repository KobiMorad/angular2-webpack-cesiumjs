declare module 'cesium/Core/Spherical' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	class Spherical 
	{
		constructor(clock? : number, cone? : number, magnitude? : number);
		//Members


		//Methods
		static clone(spherical : Spherical, result? : Spherical) : Spherical
		static equals(left : Spherical, right : Spherical) : boolean
		static equalsEpsilon(left : Spherical, right : Spherical, epsilon? : number) : boolean
		static fromCartesian3(cartesian3 : Cartesian3, spherical? : Spherical) : Spherical
		static normalize(spherical : Spherical, result? : Spherical) : Spherical
		clone(result? : Spherical) : Spherical
		equals(other : Spherical) : boolean
		equalsEpsilon(other : Spherical, epsilon : number) : boolean
		toString() : string

	}
	export = Spherical

}