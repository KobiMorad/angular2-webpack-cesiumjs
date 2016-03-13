declare module 'cesium/Core/Event' {
	class Event 
	{
		constructor();
		//Members
		numberOfListeners: number


		//Methods
		addEventListener(listener : (()=>void), scope? : any) : any
		raiseEvent(args : any) : void
		removeEventListener(listener : (()=>void), scope? : any) : boolean

	}
	export = Event

}