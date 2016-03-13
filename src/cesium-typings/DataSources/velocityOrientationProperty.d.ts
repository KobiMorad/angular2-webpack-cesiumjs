declare module 'cesium/DataSources/VelocityOrientationProperty' {
	import Property = require('cesium/DataSources/Property')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import Event = require('cesium/Core/Event')
	import Quaternion = require('cesium/Core/Quaternion')
	import JulianDate = require('cesium/Core/JulianDate')
	class VelocityOrientationProperty extends Property
	{
		constructor(position? : Property|string, ellipsoid? : Ellipsoid);
		//Members
		definitionChanged: Event
		ellipsoid: Property|string
		isConstant: boolean
		position: Property|string


		//Methods
		equals(other? : Property|string) : boolean
		getValue(time? : JulianDate, result? : Quaternion) : Quaternion

	}
	export = VelocityOrientationProperty

}