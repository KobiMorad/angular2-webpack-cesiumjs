declare module 'cesium/Scene/Sun' {
	class Sun 
	{
		constructor();
		//Members
		glowFactor: number
		show: boolean


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = Sun

}