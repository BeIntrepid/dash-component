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
        modelLoader.loadComponentsForCompose(this.dataContext.componentsForCompose)
                    .then((c)=>{
                        c.forEach((com)=> {
                            this.components.push(com);
                        });
                    });
    }
}