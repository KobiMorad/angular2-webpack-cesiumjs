declare module 'cesium/Scene/ImageryLayerFeatureInfo' {
	import Cartographic = require('cesium/Core/Cartographic')
	class ImageryLayerFeatureInfo 
	{
		constructor();
		//Members
		data: Object
		description: string
		name: string
		position: Cartographic


		//Methods
		configureDescriptionFromProperties(properties : any) : void
		configureNameFromProperties(properties : any) : void

	}
	export = ImageryLayerFeatureInfo

}