import { Express, Request, Response } from 'express';
import continents from "./Continents";
import { writeResponse, writeErrorResponse } from "../../helpers";

module.exports = function(app: Express){
    app.get('/api/continents/:name', async function(request: Request<{name: string}>, response: Response): Promise<void> {
        const name = request.params.name;
        try{
            const res = await continents.getContinentByName(name);
            writeResponse(response, res);
        } catch(e) {
            writeErrorResponse(response, e);
        }
    });
    /*
    * This endpoint isn't used in FE
    * Because I thought that search by continent name is a lot more convenient
    * */
    app.get('/api/continents/', async function(request: Request, response: Response): Promise<void> {
        try{
            const res = await continents.getContinents();
            writeResponse(response, res);
        } catch(e) {
            writeErrorResponse(response, e);
        }
    });
};