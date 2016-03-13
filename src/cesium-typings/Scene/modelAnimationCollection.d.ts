declare module 'cesium/Scene/ModelAnimationCollection' {
	import Event = require('cesium/Core/Event')
	import ModelAnimation = require('cesium/Scene/ModelAnimation')
	import addOptions = require('cesium/Scene/addOptions')
	import addAllOptions = require('cesium/Scene/addAllOptions')
	class ModelAnimationCollection 
	{
		constructor();
		//Members
		animationAdded: Event
		animationRemoved: Event
		length: number


		//Methods
		add(options? : addOptions) : ModelAnimation
		addAll(options? : addAllOptions) : Array<ModelAnimation>
		contains(animation : ModelAnimation) : boolean
		get(index : number) : ModelAnimation
		remove(animation : ModelAnimation) : boolean
		removeAll() : void

	}
	export = ModelAnimationCollection

}