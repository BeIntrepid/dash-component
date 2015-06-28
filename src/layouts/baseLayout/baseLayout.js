import {serviceLocator} from 'dash-core'

export class baseLayout
{
    components = [];

    constructor()
    {

    }

    activate(dataContext)
    {
        this.dataContext = dataContext;

        var modelLoader =  serviceLocator.services.componentLoader;
        var componentPromise = modelLoader
            .loadComponentsForCompose(dataContext.componentsForCompose)
            .then((c)=>{
                c.forEach((com)=> {
                    this.components.push(com);
                });
            });
    }
}