declare module 'cesium/DataSources/SampledPositionProperty' {
	import ReferenceFrame = require('cesium/Core/ReferenceFrame')
	import ExtrapolationType = require('cesium/Core/ExtrapolationType')
	import Event = require('cesium/Core/Event')
	import InterpolationAlgorithm = require('cesium/Core/InterpolationAlgorithm')
	import JulianDate = require('cesium/Core/JulianDate')
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Property = require('cesium/DataSources/Property')
	import setInterpolationOptionsOptions = require('cesium/DataSources/setInterpolationOptionsOptions')
	class SampledPositionProperty 
	{
		constructor(referenceFrame? : ReferenceFrame, numberOfDerivatives? : number);
		//Members
		backwardExtrapolationDuration: number
		backwardExtrapolationType: ExtrapolationType
		definitionChanged: Event
		forwardExtrapolationDuration: number
		forwardExtrapolationType: ExtrapolationType
		interpolationAlgorithm: InterpolationAlgorithm
		interpolationDegree: number
		isConstant: boolean
		numberOfDerivatives: boolean
		referenceFrame: ReferenceFrame


		//Methods
		addSample(time : JulianDate, position : Cartesian3, derivatives? : Array<Cartesian3>) : void
		addSamples(times : Array<JulianDate>, positions : Array<Cartesian3>, derivatives? : Array<Array<any>>) : void
		addSamplesPackedArray(packedSamples : Array<number>, epoch? : JulianDate) : void
		equals(other? : Property|string) : boolean
		getValue(time : JulianDate, result? : Cartesian3) : Cartesian3
		getValueInReferenceFrame(time : JulianDate, referenceFrame : ReferenceFrame, result? : Cartesian3) : Cartesian3
		setInterpolationOptions(options? : setInterpolationOptionsOptions) : void

	}
	export = SampledPositionProperty

}