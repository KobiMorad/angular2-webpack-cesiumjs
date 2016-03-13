declare module 'cesium/Core/InterpolationAlgorithm' {
	class InterpolationAlgorithm 
	{
		constructor();
		//Members
		static type: string


		//Methods
		static getRequiredDataPoints(degree : number) : number
		static interpolate(x : number, xTable : Array<number>, yTable : Array<number>, yStride : number, inputOrder : number, outputOrder : number, result? : Array<number>) : Array<number>
		static interpolateOrderZero(x : number, xTable : Array<number>, yTable : Array<number>, yStride : number, result? : Array<number>) : Array<number>

	}
	export = InterpolationAlgorithm

}