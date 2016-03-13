declare module 'cesium/Widgets/InfoBox/InfoBoxViewModel' {
	import Event = require('cesium/Core/Event')
	class InfoBoxViewModel 
	{
		constructor();
		//Members
		cameraClicked: Event
		cameraIconPath: string
		closeClicked: Event
		description: string
		enableCamera: boolean
		isCameraTracking: boolean
		maxHeight: number
		showInfo: boolean
		titleText: string


		//Methods
		maxHeightOffset(offset : number) : string

	}
	export = InfoBoxViewModel

}