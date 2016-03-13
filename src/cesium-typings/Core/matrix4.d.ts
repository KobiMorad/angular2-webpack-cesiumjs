declare module 'cesium/Core/Matrix4' {
	import Camera = require('cesium/Scene/Camera')
	import Matrix3 = require('cesium/Core/Matrix3')
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Quaternion = require('cesium/Core/Quaternion')
	import Cartesian4 = require('cesium/Core/Cartesian4')
	class Matrix4 
	{
		constructor(column0Row0? : number, column1Row0? : number, column2Row0? : number, column3Row0? : number, column0Row1? : number, column1Row1? : number, column2Row1? : number, column3Row1? : number, column0Row2? : number, column1Row2? : number, column2Row2? : number, column3Row2? : number, column0Row3? : number, column1Row3? : number, column2Row3? : number, column3Row3? : number);
		//Members
		static COLUMN0ROW0: number
		static COLUMN0ROW1: number
		static COLUMN0ROW2: number
		static COLUMN0ROW3: number
		static COLUMN1ROW0: number
		static COLUMN1ROW1: number
		static COLUMN1ROW2: number
		static COLUMN1ROW3: number
		static COLUMN2ROW0: number
		static COLUMN2ROW1: number
		static COLUMN2ROW2: number
		static COLUMN2ROW3: number
		static COLUMN3ROW0: number
		static COLUMN3ROW1: number
		static COLUMN3ROW2: number
		static COLUMN3ROW3: number
		static IDENTITY: Matrix4
		static packedLength: number
		static ZERO: Matrix4


		//Methods
		clone(result? : Matrix4) : Matrix4
		equals(right? : Matrix4) : boolean
		equalsEpsilon(right? : Matrix4, epsilon? : number) : boolean
		toString() : string
		static abs(matrix : Matrix4, result : Matrix4) : Matrix4
		static add(left : Matrix4, right : Matrix4, result : Matrix4) : Matrix4
		static clone(matrix : Matrix4, result? : Matrix4) : Matrix4
		static computeInfinitePerspectiveOffCenter(left : number, right : number, bottom : number, top : number, near : number, far : number, result : Matrix4) : Matrix4
		static computeOrthographicOffCenter(left : number, right : number, bottom : number, top : number, near : number, far : number, result : Matrix4) : Matrix4
		static computePerspectiveFieldOfView(fovY : number, aspectRatio : number, near : number, far : number, result : Matrix4) : Matrix4
		static computePerspectiveOffCenter(left : number, right : number, bottom : number, top : number, near : number, far : number, result : Matrix4) : Matrix4
		static computeViewportTransformation(viewport? : any, nearDepthRange? : number, farDepthRange? : number, result? : Matrix4) : Matrix4
		static equals(left? : Matrix4, right? : Matrix4) : boolean
		static equalsEpsilon(left? : Matrix4, right? : Matrix4, epsilon? : number) : boolean
		static fromArray(array : Array<number>, startingIndex? : number, result? : Matrix4) : Matrix4
		static fromCamera(camera : Camera, result? : Matrix4) : Matrix4
		static fromColumnMajorArray(values : Array<number>, result? : Matrix4) : Matrix4
		static fromRotationTranslation(rotation : Matrix3, translation? : Cartesian3, result? : Matrix4) : Matrix4
		static fromRowMajorArray(values : Array<number>, result? : Matrix4) : Matrix4
		static fromScale(scale : Cartesian3, result? : Matrix4) : Matrix4
		static fromTranslation(translation : Cartesian3, result? : Matrix4) : Matrix4
		static fromTranslationQuaternionRotationScale(translation : Cartesian3, rotation : Quaternion, scale : Cartesian3, result? : Matrix4) : Matrix4
		static fromUniformScale(scale : number, result? : Matrix4) : Matrix4
		static getColumn(matrix : Matrix4, index : number, result : Cartesian4) : Cartesian4
		static getElementIndex(row : number, column : number) : number
		static getMaximumScale(matrix : Matrix4) : number
		static getRotation(matrix : Matrix4, result : Matrix3) : Matrix3
		static getRow(matrix : Matrix4, index : number, result : Cartesian4) : Cartesian4
		static getScale(matrix : Matrix4, result : Cartesian3) : Cartesian3
		static getTranslation(matrix : Matrix4, result : Cartesian3) : Cartesian3
		static inverse(matrix : Matrix4, result : Matrix4) : Matrix4
		static inverseTransformation(matrix : Matrix4, result : Matrix4) : Matrix4
		static multiply(left : Matrix4, right : Matrix4, result : Matrix4) : Matrix4
		static multiplyByMatrix3(matrix : Matrix4, rotation : Matrix3, result : Matrix4) : Matrix4
		static multiplyByPoint(matrix : Matrix4, cartesian : Cartesian3, result : Cartesian3) : Cartesian3
		static multiplyByPointAsVector(matrix : Matrix4, cartesian : Cartesian3, result : Cartesian3) : Cartesian3
		static multiplyByScalar(matrix : Matrix4, scalar : number, result : Matrix4) : Matrix4
		static multiplyByScale(matrix : Matrix4, scale : Cartesian3, result : Matrix4) : Matrix4
		static multiplyByTranslation(matrix : Matrix4, translation : Cartesian3, result : Matrix4) : Matrix4
		static multiplyByUniformScale(matrix : Matrix4, scale : number, result : Matrix4) : Matrix4
		static multiplyByVector(matrix : Matrix4, cartesian : Cartesian4, result : Cartesian4) : Cartesian4
		static multiplyTransformation(left : Matrix4, right : Matrix4, result : Matrix4) : Matrix4
		static negate(matrix : Matrix4, result : Matrix4) : Matrix4
		static pack(value : Matrix4, array : Array<number>, startingIndex? : number) : void
		static setColumn(matrix : Matrix4, index : number, cartesian : Cartesian4, result : Matrix4) : Matrix4
		static setRow(matrix : Matrix4, index : number, cartesian : Cartesian4, result : Matrix4) : Matrix4
		static setTranslation(matrix : Matrix4, translation : Cartesian3, result : Cartesian4) : Matrix4
		static subtract(left : Matrix4, right : Matrix4, result : Matrix4) : Matrix4
		static toArray(matrix : Matrix4, result? : Array<number>) : Array<number>
		static transpose(matrix : Matrix4, result : Matrix4) : Matrix4
		static unpack(array : Array<number>, startingIndex? : number, result? : Matrix4) : Matrix4

	}
	export = Matrix4

}