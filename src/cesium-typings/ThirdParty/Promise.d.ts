declare module 'cesium/Promise' {
	class Promise<T>
	{
	constructor(doneHandler?:(obj:T)=>void,errorHandler?:(obj:any)=>void)
	then(result:T);
	}
	export = Promise

}