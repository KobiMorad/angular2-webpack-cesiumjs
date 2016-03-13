declare module 'cesium/Core/Rectangle' {
	import Cartographic = require('cesium/Core/Cartographic')
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	class Rectangle 
	{
		constructor(west? : number, south? : number, east? : number, north? : number);
		//Members
		static MAX_VALUE: Rectangle
		static packedLength: number
		east: number
		height: number
		north: number
		south: number
		west: number
		width: number


		//Methods
		static center(rectangle : Rectangle, result? : Cartographic) : Cartographic
		static clone(rectangle : Rectangle, result? : Rectangle) : Rectangle
		static computeHeight(rectangle : Rectangle) : number
		static computeWidth(rectangle : Rectangle) : number
		static contains(rectangle : Rectangle, cartographic : Cartographic) : boolean
		static equals(left? : Rectangle, right? : Rectangle) : boolean
		static fromCartographicArray(cartographics : Array<Cartographic>, result? : Rectangle) : Rectangle
		static fromDegrees(west? : number, south? : number, east? : number, north? : number, result? : Rectangle) : Rectangle
		static intersection(rectangle : Rectangle, otherRectangle : Rectangle, result? : Rectangle) : Rectangle|void
		static northeast(rectangle : Rectangle, result? : Cartographic) : Cartographic
		static northwest(rectangle : Rectangle, result? : Cartographic) : Cartographic
		static pack(value : Rectangle, array : Array<number>, startingIndex? : number) : void
		static southeast(rectangle : Rectangle, result? : Cartographic) : Cartographic
		static southwest(rectangle : Rectangle, result? : Cartographic) : Cartographic
		static subsample(rectangle : Rectangle, ellipsoid? : Ellipsoid, surfaceHeight? : number, result? : Array<Cartesian3>) : Array<Cartesian3>
		static unpack(array : Array<number>, startingIndex? : number, result? : Rectangle) : Rectangle
		static validate(rectangle : Rectangle) : void
		clone(result? : Rectangle) : Rectangle
		equals(other? : Rectangle) : boolean
		equalsEpsilon(other? : Rectangle, epsilon? : number) : boolean

	}
	export = Rectangle

}