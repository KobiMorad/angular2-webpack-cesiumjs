declare module 'cesium/Scene/ModelMaterial' {
	class ModelMaterial 
	{
		constructor();
		//Members
		id: string
		name: string


		//Methods
		getValue(name : string) : Object
		setValue(name : string, value? : any) : void

	}
	export = ModelMaterial

}