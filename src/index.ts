import express, { Express, Request, Response } from 'express';
import { createServer, Server } from "http"
import * as bodyParser from "body-parser";
import mainConfig from "./config/main";
import { writeErrorResponse } from "./helpers";

//doesn't need explicit typing, but I'm being strict here
const app: Express = express();
const server: Server = createServer(app);
app.use(bodyParser.json());

/*
* failing 40% of the time
* */
app.use((req, res, next) => {
	const randomFailure = Math.floor(Math.random() * 11);
	if(randomFailure < 5) {
		writeErrorResponse(res, "Resource unavailable due to random error");
	} else {
		next();
	}
});
require('./routes')(app);
app.use(function (req: Request, response: Response) { //all other requests will respond with 404
	console.log(`404: ${req.url}`);
	response.writeHead(404, { "Content-Type": "text/plain" });
	response.end('API not found');
});
server.listen(mainConfig.port, function(){
	console.log('Web server live on ' + mainConfig.port);
});