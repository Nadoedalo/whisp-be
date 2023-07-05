import { Express } from 'express';
import routes from "./routes";
module.exports = function(app: Express): void {
	routes(app);
};