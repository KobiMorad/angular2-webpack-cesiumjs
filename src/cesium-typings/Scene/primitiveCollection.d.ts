declare module 'cesium/Scene/PrimitiveCollection' {
	import PrimitiveCollectionOptions = require('cesium/Scene/PrimitiveCollectionOptions')
	class PrimitiveCollection 
	{
		constructor(options? : PrimitiveCollectionOptions);
		//Members
		destroyPrimitives: boolean
		length: number
		show: boolean


		//Methods
		add(primitive : any) : Object
		contains(primitive? : any) : boolean
		destroy() : void
		get(index : number) : Object
		isDestroyed() : boolean
		lower(primitive? : any) : void
		lowerToBottom(primitive? : any) : void
		raise(primitive? : any) : void
		raiseToTop(primitive? : any) : void
		remove(primitive? : any) : boolean
		removeAll() : void

	}
	export = PrimitiveCollection

}