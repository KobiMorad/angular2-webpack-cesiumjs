declare module 'cesium/Widgets/Timeline/Timeline' {
	import Clock = require('cesium/Core/Clock')
	import JulianDate = require('cesium/Core/JulianDate')
	class Timeline 
	{
		constructor(container : Element, clock : Clock);
		//Members
		container: Element


		//Methods
		destroy() : void
		isDestroyed() : boolean
		resize() : void
		zoomTo(startTime : JulianDate, stopTime : JulianDate) : void

	}
	export = Timeline

}