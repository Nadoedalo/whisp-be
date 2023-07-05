import * as fs from "fs";
import { IContinents, IContinent } from "./types";
export default {
    getContinentByName(name: string): Promise<IContinent | undefined> {
        return new Promise((resolve, reject) => {
            fs.readFile(__dirname + '../../../db/continents.json', {
                encoding: 'utf8',
            }, (err, data) => {
                if(err) {
                    reject(err);
                } else {
                    const continentsData: IContinents = JSON.parse(data);
                    const continent = continentsData.continents.find((continent) => continent.name === name);
                    resolve(continent);
                }
            });
        });
    },
    getContinents(): Promise<IContinents | undefined> {
        return new Promise((resolve, reject) => {
            fs.readFile(__dirname + '../../../db/continents.json', {
                encoding: 'utf8',
            }, (err, data) => {
                if(err) {
                    reject(err);
                } else {
                    const continentsData: IContinents = JSON.parse(data);
                    resolve(continentsData);
                }
            });
        });
    },
};