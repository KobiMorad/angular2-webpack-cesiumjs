declare module 'cesium/Widgets/Command' {
	import Event = require('cesium/Core/Event')
	class Command 
	{
		constructor();
		//Members
		afterExecute: Event
		beforeExecute: Event
		canExecute: boolean


		//Methods

	}
	export = Command

}