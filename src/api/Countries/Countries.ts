import * as fs from "fs";
import { ICountries } from "./types";
export default {
    getCountries(): Promise<ICountries> {
        return new Promise((resolve, reject) => {
            /**
             * I don't think that readFileAsync is a standard
             * We could use a library Promisify to make it so
             * in that case it would look like this: const readFileAsync = promisify(fs.readFile); await readFileAsync;
             * Buuuuuuuut for a couple of examples I'm alright just returning a promise
            * */
            fs.readFile(__dirname + '../../../assets/countries.json', {
                encoding: 'utf8',
            }, (err, data) => {
                if(err) {
                    reject(err);
                } else {
                    /**
                     * parse is needed since usually we work with JS objects in Node
                     * and responses are in JSON
                     * so this avoids the need to re-write the response helper and double-JSONing
                     */
                    const countriesData = JSON.parse(data);
                    resolve(countriesData);
                }
            });
        });
    },
};