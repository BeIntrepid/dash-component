import {componentLibrary} from './componentLibrary'
import {systemComponentLibrary} from './componentLibrary'
import {serviceLocator} from 'dash-core'

export class componentLoader
{

    library = new componentLibrary();

    getComponent(name)
    {
        return this.library.getComponent(name);
    }

    loadComponentsForCompose(componentList)
    {

        var p = new Promise((res,rej)=> {

            var modelLoader = serviceLocator.services.componentModelLoader;
            // Load the models and return them with the view info
            modelLoader.loadComponentModels(componentList).then((modelLoadResult)=> {
                var composeResult = [];

                modelLoadResult.forEach((m) => {
                    composeResult.push({viewModel:m.config.viewModel, model : m.model});
                });

                res(composeResult);
            });
        });

        return p;
    }

    loadComponent(componentConfig)
    {
        var p = new Promise((res,rej)=>{

            this.library.getComponent(componentConfig.type).then((module)=>{
                var component = new module[componentConfig.name]();
                res(component);
            });

        });

        return p;

    }
}