declare module 'cesium/Scene/ModelAnimation' {
	import ModelAnimationLoop = require('cesium/Scene/ModelAnimationLoop')
	import Event = require('cesium/Core/Event')
	import JulianDate = require('cesium/Core/JulianDate')
	class ModelAnimation 
	{
		constructor();
		//Members
		delay: number
		loop: ModelAnimationLoop
		name: string
		removeOnStop: boolean
		reverse: boolean
		speedup: number
		start: Event
		startTime: JulianDate
		stop: Event
		stopTime: JulianDate
		update: Event


		//Methods

	}
	export = ModelAnimation

}