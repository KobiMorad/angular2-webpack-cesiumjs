declare module 'cesium/Scene/Camera' {
	import Scene = require('cesium/Scene/Scene')
	import Rectangle = require('cesium/Core/Rectangle')
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import PerspectiveFrustum = require('cesium/Scene/PerspectiveFrustum')
	import Matrix4 = require('cesium/Core/Matrix4')
	import Event = require('cesium/Core/Event')
	import Cartographic = require('cesium/Core/Cartographic')
	import Cartesian4 = require('cesium/Core/Cartesian4')
	import flyToOptions = require('cesium/Scene/flyToOptions')
	import BoundingSphere = require('cesium/Core/BoundingSphere')
	import flyToBoundingSphereOptions = require('cesium/Scene/flyToBoundingSphereOptions')
	import Ray = require('cesium/Core/Ray')
	import Cartesian2 = require('cesium/Core/Cartesian2')
	import HeadingPitchRange = require('cesium/Scene/HeadingPitchRange')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import setViewOptions = require('cesium/Scene/setViewOptions')
	class Camera 
	{
		constructor(scene : Scene);
		//Members
		static DEFAULT_VIEW_FACTOR: number
		static DEFAULT_VIEW_RECTANGLE: Rectangle
		constrainedAxis: Cartesian3
		defaultLookAmount: number
		defaultMoveAmount: number
		defaultRotateAmount: number
		defaultZoomAmount: number
		direction: Cartesian3
		directionWC: Cartesian3
		frustum: PerspectiveFrustum
		heading: number
		inverseTransform: Matrix4
		inverseViewMatrix: Matrix4
		maximumTranslateFactor: number
		maximumZoomFactor: number
		moveEnd: Event
		moveStart: Event
		pitch: number
		position: Cartesian3
		positionCartographic: Cartographic
		positionWC: Cartesian3
		right: Cartesian3
		rightWC: Cartesian3
		roll: number
		transform: Matrix4
		up: Cartesian3
		upWC: Cartesian3
		viewMatrix: Matrix4


		//Methods
		cameraToWorldCoordinates(cartesian : Cartesian4, result? : Cartesian4) : Cartesian4
		cameraToWorldCoordinatesPoint(cartesian : Cartesian3, result? : Cartesian3) : Cartesian3
		cameraToWorldCoordinatesVector(cartesian : Cartesian3, result? : Cartesian3) : Cartesian3
		flyTo(options? : flyToOptions) : void
		flyToBoundingSphere(boundingSphere : BoundingSphere, options? : flyToBoundingSphereOptions) : void
		getMagnitude() : number
		getPickRay(windowPosition : Cartesian2, result? : Ray) : Ray
		getRectangleCameraCoordinates(rectangle : Rectangle, result? : Cartesian3) : Cartesian3
		look(axis : Cartesian3, angle? : number) : void
		lookAt(target : Cartesian3, offset : Cartesian3|HeadingPitchRange) : void
		lookAtTransform(transform : Matrix4, offset? : Cartesian3|HeadingPitchRange) : void
		lookDown(amount? : number) : void
		lookLeft(amount? : number) : void
		lookRight(amount? : number) : void
		lookUp(amount? : number) : void
		move(direction : Cartesian3, amount? : number) : void
		moveBackward(amount? : number) : void
		moveDown(amount? : number) : void
		moveForward(amount? : number) : void
		moveLeft(amount? : number) : void
		moveRight(amount? : number) : void
		moveUp(amount? : number) : void
		pickEllipsoid(windowPosition : Cartesian2, ellipsoid? : Ellipsoid, result? : Cartesian3) : Cartesian3
		rotate(axis : Cartesian3, angle? : number) : void
		rotateDown(angle? : number) : void
		rotateLeft(angle? : number) : void
		rotateRight(angle? : number) : void
		rotateUp(angle? : number) : void
		setView(options? : setViewOptions) : void
		twistLeft(amount? : number) : void
		twistRight(amount? : number) : void
		viewBoundingSphere(boundingSphere : BoundingSphere, offset? : HeadingPitchRange) : void
		viewRectangle(rectangle : Rectangle, ellipsoid? : Ellipsoid) : void
		worldToCameraCoordinates(cartesian : Cartesian4, result? : Cartesian4) : Cartesian4
		worldToCameraCoordinatesPoint(cartesian : Cartesian3, result? : Cartesian3) : Cartesian3
		worldToCameraCoordinatesVector(cartesian : Cartesian3, result? : Cartesian3) : Cartesian3
		zoomIn(amount? : number) : void
		zoomOut(amount? : number) : void

	}
	export = Camera

}