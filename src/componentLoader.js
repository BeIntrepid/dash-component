import {ComponentLibrary} from './componentLibrary'
import {ServiceLocator} from 'dash-core'

export class ComponentLoader
{

    library = new ComponentLibrary();

    getComponent(name)
    {
        return this.library.getComponent(name);
    }

    wrapComponentInChrome(innerComponent)
    {
        return {viewModel:ServiceLocator.services.chromeComponentInfo.path, model : innerComponent};
    }

    loadComponentsForCompose(componentList)
    {
        var p = new Promise((res,rej)=> {

            var modelLoader = ServiceLocator.services.componentModelLoader;
            // Load the models and return them with the view info
            modelLoader.loadComponentModels(componentList).then((modelLoadResult)=> {
                var composeResult = [];

                modelLoadResult.forEach((m) => {
                    composeResult.push(this.wrapComponentInChrome({viewModel:m.config.viewModel, model : m.model}));
                });

                res(composeResult);
            });
        });

        return p;
    }
}