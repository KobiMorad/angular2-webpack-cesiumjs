declare module 'cesium/Widgets/Animation/AnimationViewModel' {
	import ClockViewModel = require('cesium/Widgets/ClockViewModel')
	import Command = require('cesium/Widgets/Command')
	import ToggleButtonViewModel = require('cesium/Widgets/ToggleButtonViewModel')
	class AnimationViewModel 
	{
		constructor(clockViewModel : ClockViewModel);
		//Members
		static defaultDateFormatter: any
		static defaultTicks: Array<number>
		static defaultTimeFormatter: any
		clockViewModel: ClockViewModel
		dateFormatter: any
		dateLabel: string
		faster: Command
		multiplierLabel: string
		pauseViewModel: ToggleButtonViewModel
		playForwardViewModel: ToggleButtonViewModel
		playRealtimeViewModel: ToggleButtonViewModel
		playReverseViewModel: ToggleButtonViewModel
		shuttleRingAngle: number
		shuttleRingDragging: boolean
		slower: Command
		snapToTicks: boolean
		timeFormatter: any
		timeLabel: string


		//Methods
		getShuttleRingTicks() : Array<number>
		setShuttleRingTicks(positiveTicks : Array<number>) : void

	}
	export = AnimationViewModel

}