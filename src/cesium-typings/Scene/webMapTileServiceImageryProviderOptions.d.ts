declare module 'cesium/Scene/WebMapTileServiceImageryProviderOptions' {
	import TilingScheme = require('cesium/Core/TilingScheme')
	import Rectangle = require('cesium/Core/Rectangle')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import Credit = require('cesium/Core/Credit')
	interface WebMapTileServiceImageryProviderOptions
	{
		url: string;
		format?: string;
		layer: string;
		style: string;
		tileMatrixSetID: string;
		tileMatrixLabels?: Array<any>;
		tileWidth?: number;
		tileHeight?: number;
		tilingScheme?: TilingScheme;
		proxy?: Object;
		rectangle?: Rectangle;
		minimumLevel?: number;
		maximumLevel?: number;
		ellipsoid?: Ellipsoid;
		credit?: Credit|string;
		subdomains?: string|Array<string>;
	}
	export = WebMapTileServiceImageryProviderOptions

}