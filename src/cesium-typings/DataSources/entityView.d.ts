declare module 'cesium/DataSources/EntityView' {
	import Entity = require('cesium/DataSources/Entity')
	import Scene = require('cesium/Scene/Scene')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import BoundingSphere = require('cesium/Core/BoundingSphere')
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import JulianDate = require('cesium/Core/JulianDate')
	class EntityView 
	{
		constructor(entity : Entity, scene : Scene, ellipsoid? : Ellipsoid, boundingSphere? : BoundingSphere);
		//Members
		static defaultOffset3D: Cartesian3
		boundingSphere: Entity
		ellipsoid: Ellipsoid
		entity: Entity
		scene: Scene


		//Methods
		update(time : JulianDate) : void

	}
	export = EntityView

}