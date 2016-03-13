declare module 'cesium/Core/Ray' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	class Ray 
	{
		constructor(origin? : Cartesian3, direction? : Cartesian3);
		//Members
		direction: Cartesian3
		origin: Cartesian3


		//Methods
		static getPoint(ray : Ray, t : number, result? : Cartesian3) : Cartesian3

	}
	export = Ray

}