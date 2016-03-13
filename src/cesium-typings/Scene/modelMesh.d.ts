declare module 'cesium/Scene/ModelMesh' {
	import ModelMaterial = require('cesium/Scene/ModelMaterial')
	class ModelMesh 
	{
		constructor();
		//Members
		id: string
		materials: Array<ModelMaterial>
		name: string


		//Methods

	}
	export = ModelMesh

}