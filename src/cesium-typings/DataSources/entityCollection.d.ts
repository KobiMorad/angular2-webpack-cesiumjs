declare module 'cesium/DataSources/EntityCollection' {
	import Event = require('cesium/Core/Event')
	import Entity = require('cesium/DataSources/Entity')
	import TimeInterval = require('cesium/Core/TimeInterval')
	class EntityCollection 
	{
		constructor();
		//Members
		collectionChanged: Event
		id: string
		values: Array<Entity>


		//Methods
		static collectionChangedEventCallback(collection : EntityCollection, added : Array<Entity>, removed : Array<Entity>, changed : Array<Entity>) : void
		add(entity : Entity) : Entity
		computeAvailability() : TimeInterval
		contains(entity : Entity) : boolean
		getById(id : any) : Entity
		getOrCreateEntity(id : any) : Entity
		remove(entity : Entity) : boolean
		removeAll() : void
		removeById(id : any) : boolean
		resumeEvents() : void
		suspendEvents() : void

	}
	export = EntityCollection

}