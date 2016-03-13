declare module 'cesium/Core/Plane' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Cartesian4 = require('cesium/Core/Cartesian4')
	class Plane 
	{
		constructor(normal : Cartesian3, distance : number);
		//Members
		static ORIGIN_XY_PLANE: Plane
		static ORIGIN_YZ_PLANE: Plane
		static ORIGIN_ZX_PLANE: Plane
		distance: number
		normal: Cartesian3


		//Methods
		static fromCartesian4(coefficients : Cartesian4, result? : Plane) : Plane
		static fromPointNormal(point : Cartesian3, normal : Cartesian3, result? : Plane) : Plane
		static getPointDistance(plane : Plane, point : Cartesian3) : number

	}
	export = Plane

}