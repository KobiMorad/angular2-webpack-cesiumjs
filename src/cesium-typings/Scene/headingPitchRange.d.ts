declare module 'cesium/Scene/HeadingPitchRange' {
	class HeadingPitchRange 
	{
		constructor(heading? : number, pitch? : number, range? : number);
		//Members
		heading: number
		pitch: number
		range: number


		//Methods
		static clone(hpr : HeadingPitchRange, result? : HeadingPitchRange) : HeadingPitchRange

	}
	export = HeadingPitchRange

}