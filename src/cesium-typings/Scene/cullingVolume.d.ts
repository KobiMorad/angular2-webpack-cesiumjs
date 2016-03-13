declare module 'cesium/Scene/CullingVolume' {
	import Cartesian4 = require('cesium/Core/Cartesian4')
	import Intersect = require('cesium/Core/Intersect')
	class CullingVolume 
	{
		constructor(planes : Array<Cartesian4>);
		//Members
		planes: Array<Cartesian4>


		//Methods
		computeVisibility(boundingVolume : any) : Intersect

	}
	export = CullingVolume

}