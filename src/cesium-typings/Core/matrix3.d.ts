declare module 'cesium/Core/Matrix3' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Quaternion = require('cesium/Core/Quaternion')
	class Matrix3 
	{
		constructor(column0Row0? : number, column1Row0? : number, column2Row0? : number, column0Row1? : number, column1Row1? : number, column2Row1? : number, column0Row2? : number, column1Row2? : number, column2Row2? : number);
		//Members
		static COLUMN0ROW0: number
		static COLUMN0ROW1: number
		static COLUMN0ROW2: number
		static COLUMN1ROW0: number
		static COLUMN1ROW1: number
		static COLUMN1ROW2: number
		static COLUMN2ROW0: number
		static COLUMN2ROW1: number
		static COLUMN2ROW2: number
		static IDENTITY: Matrix3
		static packedLength: number
		static ZERO: Matrix3


		//Methods
		clone(result? : Matrix3) : Matrix3
		equals(right? : Matrix3) : boolean
		equalsEpsilon(right? : Matrix3, epsilon? : number) : boolean
		toString() : string
		static abs(matrix : Matrix3, result : Matrix3) : Matrix3
		static add(left : Matrix3, right : Matrix3, result : Matrix3) : Matrix3
		static clone(matrix : Matrix3, result? : Matrix3) : Matrix3
		static computeEigenDecomposition(matrix : Matrix3, result? : any) : Object
		static determinant(matrix : Matrix3) : number
		static equals(left? : Matrix3, right? : Matrix3) : boolean
		static equalsEpsilon(left? : Matrix3, right? : Matrix3, epsilon? : number) : boolean
		static fromArray(array : Array<number>, startingIndex? : number, result? : Matrix3) : Matrix3
		static fromColumnMajorArray(values : Array<number>, result? : Matrix3) : Matrix3
		static fromCrossProduct(the : Cartesian3, result? : Matrix3) : Matrix3
		static fromQuaternion(quaternion : Quaternion, result? : Matrix3) : Matrix3
		static fromRotationX(angle : number, result? : Matrix3) : Matrix3
		static fromRotationY(angle : number, result? : Matrix3) : Matrix3
		static fromRotationZ(angle : number, result? : Matrix3) : Matrix3
		static fromRowMajorArray(values : Array<number>, result? : Matrix3) : Matrix3
		static fromScale(scale : Cartesian3, result? : Matrix3) : Matrix3
		static fromUniformScale(scale : number, result? : Matrix3) : Matrix3
		static getColumn(matrix : Matrix3, index : number, result : Cartesian3) : Cartesian3
		static getElementIndex(row : number, column : number) : number
		static getMaximumScale(matrix : Matrix3) : number
		static getRow(matrix : Matrix3, index : number, result : Cartesian3) : Cartesian3
		static getScale(matrix : Matrix3, result : Cartesian3) : Cartesian3
		static inverse(matrix : Matrix3, result : Matrix3) : Matrix3
		static multiply(left : Matrix3, right : Matrix3, result : Matrix3) : Matrix3
		static multiplyByScalar(matrix : Matrix3, scalar : number, result : Matrix3) : Matrix3
		static multiplyByScale(matrix : Matrix3, scale : Cartesian3, result : Matrix3) : Matrix3
		static multiplyByVector(matrix : Matrix3, cartesian : Cartesian3, result : Cartesian3) : Cartesian3
		static negate(matrix : Matrix3, result : Matrix3) : Matrix3
		static pack(value : Matrix3, array : Array<number>, startingIndex? : number) : void
		static setColumn(matrix : Matrix3, index : number, cartesian : Cartesian3, result : Matrix3) : Matrix3
		static setRow(matrix : Matrix3, index : number, cartesian : Cartesian3, result : Matrix3) : Matrix3
		static subtract(left : Matrix3, right : Matrix3, result : Matrix3) : Matrix3
		static toArray(matrix : Matrix3, result? : Array<number>) : Array<number>
		static transpose(matrix : Matrix3, result : Matrix3) : Matrix3
		static unpack(array : Array<number>, startingIndex? : number, result? : Matrix3) : Matrix3

	}
	export = Matrix3

}