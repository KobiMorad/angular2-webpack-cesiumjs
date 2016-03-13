declare module 'cesium/DataSources/Property' {
	import Event = require('cesium/Core/Event')
	import JulianDate = require('cesium/Core/JulianDate')
	class Property 
	{
		constructor();
		//Members
		definitionChanged: Event
		isConstant: boolean


		//Methods
		equals(other? : Property|string) : boolean
		getValue(time : JulianDate, result? : any) : Object

	}
	export = Property

}