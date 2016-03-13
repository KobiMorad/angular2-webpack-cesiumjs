declare module 'cesium/Core/DeveloperError' {
	class DeveloperError 
	{
		constructor(message? : string);
		//Members
		message: string
		name: string
		stack: string


		//Methods

	}
	export = DeveloperError

}