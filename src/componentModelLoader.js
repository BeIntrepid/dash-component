import {componentLibrary} from './componentLibrary'
import {systemComponentLibrary} from './componentLibrary'
import {serviceLocator} from 'dash-core'


export class componentModelLoader
{
    models = {};

    constructor()
    {
    }

    loadComponentModel(componentConfig)
    {
        var p = new Promise((res,rej)=>{
            res(models[componentConfig.id]);
        });

        return p;
    }

    loadComponentModels(componentConfigs)
    {
        var p = new Promise((res,rej)=>{

            var modelsToReturn = [];

            componentConfigs.forEach((c)=>{
                modelsToReturn.push({config : c, model : this.models[c.id]} );
            });
            res(modelsToReturn);
        });

        return p;
    }
}