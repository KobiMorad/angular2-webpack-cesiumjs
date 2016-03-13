declare module 'cesium/Core/Ellipsoid' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Cartographic = require('cesium/Core/Cartographic')
	class Ellipsoid 
	{
		constructor(x? : number, y? : number, z? : number);
		//Members
		static MOON: Ellipsoid
		static packedLength: number
		static UNIT_SPHERE: Ellipsoid
		static WGS84: Ellipsoid
		maximumRadius: number
		minimumRadius: number
		oneOverRadii: Cartesian3
		oneOverRadiiSquared: Cartesian3
		radii: Cartesian3
		radiiSquared: Cartesian3
		radiiToTheFourth: Cartesian3


		//Methods
		static clone(ellipsoid : Ellipsoid, result? : Ellipsoid) : Ellipsoid
		static fromCartesian3(radii? : Cartesian3) : Ellipsoid
		static pack(value : Ellipsoid, array : Array<number>, startingIndex? : number) : void
		static unpack(array : Array<number>, startingIndex? : number, result? : Ellipsoid) : Ellipsoid
		cartesianArrayToCartographicArray(cartesians : Array<Cartesian3>, result? : Array<Cartographic>) : Array<Cartographic>
		cartesianToCartographic(cartesian : Cartesian3, result? : Cartographic) : Cartographic
		cartographicArrayToCartesianArray(cartographics : Array<Cartographic>, result? : Array<Cartesian3>) : Array<Cartesian3>
		cartographicToCartesian(cartographic : Cartographic, result? : Cartesian3) : Cartesian3
		clone(result? : Ellipsoid) : Ellipsoid
		equals(right? : Ellipsoid) : boolean
		geocentricSurfaceNormal(cartesian : Cartesian3, result? : Cartesian3) : Cartesian3
		geodeticSurfaceNormal(cartesian : Cartesian3, result? : Cartesian3) : Cartesian3
		geodeticSurfaceNormalCartographic(cartographic : Cartographic, result? : Cartesian3) : Cartesian3
		scaleToGeocentricSurface(cartesian : Cartesian3, result? : Cartesian3) : Cartesian3
		scaleToGeodeticSurface(cartesian : Cartesian3, result? : Cartesian3) : Cartesian3
		toString() : string
		transformPositionFromScaledSpace(position : Cartesian3, result? : Cartesian3) : Cartesian3
		transformPositionToScaledSpace(position : Cartesian3, result? : Cartesian3) : Cartesian3

	}
	export = Ellipsoid

}