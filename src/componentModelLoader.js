import {ComponentLibrary} from './componentLibrary'
import {ServiceLocator} from 'dash-core'


export class ComponentModelLoader
{
    _models = {};

    constructor()
    {
    }

    getModels()
    {
        return this._models;
    }

    loadComponentModel(componentConfig)
    {
        var p = new Promise((res,rej)=>{
            res(this._models[componentConfig.id]);
        });

        return p;
    }

    loadComponentModels(componentConfigs)
    {
        var p = new Promise((res,rej)=>{

            var modelsToReturn = [];

            componentConfigs.forEach((c)=>{
                modelsToReturn.push({config : c, model : this._models[c.id]} );
            });
            res(modelsToReturn);
        });

        return p;
    }
}