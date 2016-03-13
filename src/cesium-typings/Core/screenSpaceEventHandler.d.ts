declare module 'cesium/Core/ScreenSpaceEventHandler' {
	class ScreenSpaceEventHandler 
	{
		constructor(element? : HTMLCanvasElement);
		//Members


		//Methods
		destroy() : void
		getInputAction(type : number, modifier? : number) : void
		isDestroyed() : boolean
		removeInputAction(type : number, modifier? : number) : void
		setInputAction(action : (()=>void), type : number, modifier? : number) : void

	}
	export = ScreenSpaceEventHandler

}