import { Express, Request, Response } from 'express';
import countries from "./Countries";
import {writeErrorResponse, writeResponse} from "../../helpers";

module.exports = function(app: Express){
    app.get('/api/countries', async function(request: Request, response: Response): Promise<void> {
        try {
            const res = await countries.getCountries();
            writeResponse(response, res);
        } catch (e) {
            writeErrorResponse(response, e);
        }

    });
};