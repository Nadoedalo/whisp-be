import { Response } from 'express';
/**
 * Since the function doesn't return anything
 * The res: unknown is justified here -> it can be anything the user of this helper wants it to be
 * Otherwise we might use a generic to pass the type of result along
 * */
export const writeResponse = function(response: Response, res: unknown): void {
    if(res){
        response.json(res);
    }else{
        response.writeHead(400, {'Content-Type': 'text/plain'});
        response.write(JSON.stringify('Something went wrong'));
    }
    response.end();
}
// catch value of type unknown is normal practice
export const writeErrorResponse = function(response: Response, err: unknown): void {
    response.writeHead(400, {'Content-Type': 'text/plain'});
    //FIXME: returning full error to the user response is not advised!
    response.write(JSON.stringify(err));
    response.end();
}