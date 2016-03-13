declare module 'cesium/DataSources/PositionProperty' {
	import Event = require('cesium/Core/Event')
	import ReferenceFrame = require('cesium/Core/ReferenceFrame')
	import Property = require('cesium/DataSources/Property')
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import JulianDate = require('cesium/Core/JulianDate')
	class PositionProperty 
	{
		constructor();
		//Members
		definitionChanged: Event
		isConstant: boolean
		referenceFrame: ReferenceFrame


		//Methods
		equals(other? : Property|string) : boolean
		getValue(time : JulianDate, result? : Cartesian3) : Cartesian3
		getValueInReferenceFrame(time : JulianDate, referenceFrame : ReferenceFrame, result? : Cartesian3) : Cartesian3

	}
	export = PositionProperty

}