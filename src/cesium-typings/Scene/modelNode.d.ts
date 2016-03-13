declare module 'cesium/Scene/ModelNode' {
	import Matrix4 = require('cesium/Core/Matrix4')
	class ModelNode 
	{
		constructor();
		//Members
		id: string
		matrix: Matrix4
		name: string
		show: boolean


		//Methods

	}
	export = ModelNode

}