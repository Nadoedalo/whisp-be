import { Express } from 'express';
export default function (app: Express): void {
	const includedAPIs = [ //folder parsing can be added
		'../api/Countries',
		'../api/Continents',
	];
	const length = includedAPIs.length;
	for(let i = 0; i < length; i++){ //initializing APIs
		require(includedAPIs[i])(app);
	}
};