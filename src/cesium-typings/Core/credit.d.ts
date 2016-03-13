declare module 'cesium/Core/Credit' {
	class Credit 
	{
		constructor(text? : string, imageUrl? : string, link? : string);
		//Members
		imageUrl: string
		link: string
		text: string


		//Methods
		static equals(left : Credit, right : Credit) : boolean
		equals(credits : Credit) : boolean
		hasImage() : boolean
		hasLink() : boolean

	}
	export = Credit

}