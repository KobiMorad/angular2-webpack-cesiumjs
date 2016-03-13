declare module 'cesium/Core/Transforms' {
	import Matrix3 = require('cesium/Core/Matrix3')
	import JulianDate = require('cesium/Core/JulianDate')
	import Matrix4 = require('cesium/Core/Matrix4')
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import Quaternion = require('cesium/Core/Quaternion')
	import Cartesian2 = require('cesium/Core/Cartesian2')
	import Promise = require('cesium/Promise')
	import TimeInterval = require('cesium/Core/TimeInterval')
	class Transforms 
	{
		constructor();
		//Members


		//Methods
		static computeFixedToIcrfMatrix(date : JulianDate, result? : Matrix3) : Matrix3
		static computeIcrfToFixedMatrix(date : JulianDate, result? : Matrix3) : Matrix3
		static computeTemeToPseudoFixedMatrix(date : JulianDate, result? : Matrix3) : Matrix3
		static eastNorthUpToFixedFrame(origin : Cartesian3, ellipsoid? : Ellipsoid, result? : Matrix4) : Matrix4
		static headingPitchRollQuaternion(origin : Cartesian3, heading : number, pitch : number, roll : number, ellipsoid? : Ellipsoid, result? : Quaternion) : Quaternion
		static headingPitchRollToFixedFrame(origin : Cartesian3, heading : number, pitch : number, roll : number, ellipsoid? : Ellipsoid, result? : Matrix4) : Matrix4
		static northEastDownToFixedFrame(origin : Cartesian3, ellipsoid? : Ellipsoid, result? : Matrix4) : Matrix4
		static northUpEastToFixedFrame(origin : Cartesian3, ellipsoid? : Ellipsoid, result? : Matrix4) : Matrix4
		static pointToWindowCoordinates(modelViewProjectionMatrix : Matrix4, viewportTransformation : Matrix4, point : Cartesian3, result? : Cartesian2) : Cartesian2
		static preloadIcrfFixed(timeInterval : TimeInterval) : Promise<void>

	}
	export = Transforms

}