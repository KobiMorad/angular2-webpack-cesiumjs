declare module 'cesium/Scene/SceneMode' {
	class SceneMode 
	{
		constructor();
		//Members
		static COLUMBUS_VIEW: number
		static MORPHING: number
		static SCENE2D: number
		static SCENE3D: number


		//Methods
		static getMorphTime(value : SceneMode) : number

	}
	export = SceneMode

}