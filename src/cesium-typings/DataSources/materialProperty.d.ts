declare module 'cesium/DataSources/MaterialProperty' {
	import Event = require('cesium/Core/Event')
	import Property = require('cesium/DataSources/Property')
	import JulianDate = require('cesium/Core/JulianDate')
	class MaterialProperty 
	{
		constructor();
		//Members
		definitionChanged: Event
		isConstant: boolean


		//Methods
		equals(other? : Property|string) : boolean
		getType(time : JulianDate) : string
		getValue(time : JulianDate, result? : any) : Object

	}
	export = MaterialProperty

}