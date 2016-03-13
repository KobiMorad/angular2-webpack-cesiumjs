declare module 'cesium/Scene/ScreenSpaceCameraController' {
	import Scene = require('cesium/Scene/Scene')
	import CameraEventType = require('cesium/Scene/CameraEventType')
	class ScreenSpaceCameraController 
	{
		constructor(scene : Scene);
		//Members
		bounceAnimationTime: number
		enableCollisionDetection: boolean
		enableInputs: boolean
		enableLook: boolean
		enableRotate: boolean
		enableTilt: boolean
		enableTranslate: boolean
		enableZoom: boolean
		inertiaSpin: number
		inertiaTranslate: number
		inertiaZoom: number
		lookEventTypes: CameraEventType|Array<any>|void
		maximumMovementRatio: number
		maximumZoomDistance: number
		minimumCollisionTerrainHeight: number
		minimumPickingTerrainHeight: number
		minimumTrackBallHeight: number
		minimumZoomDistance: number
		rotateEventTypes: CameraEventType|Array<any>|void
		tiltEventTypes: CameraEventType|Array<any>|void
		translateEventTypes: CameraEventType|Array<any>|void
		zoomEventTypes: CameraEventType|Array<any>|void


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = ScreenSpaceCameraController

}