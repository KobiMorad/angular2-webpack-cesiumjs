declare module 'cesium/Widgets/SelectionIndicator/SelectionIndicatorViewModel' {
	import Scene = require('cesium/Scene/Scene')
	import Cartesian3 = require('cesium/Core/Cartesian3')
	class SelectionIndicatorViewModel 
	{
		constructor(scene : Scene, selectionIndicatorElement : Element, container : Element);
		//Members
		computeScreenSpacePosition: any
		container: Element
		isVisible: boolean
		position: Cartesian3
		scene: Scene
		selectionIndicatorElement: Element
		showSelection: boolean


		//Methods
		animateAppear() : void
		animateDepart() : void
		update() : void

	}
	export = SelectionIndicatorViewModel

}