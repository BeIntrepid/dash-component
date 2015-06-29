import {ServiceLocator} from 'dash-core'

export class BaseLayout
{
    components = [];

    constructor()
    {

    }

    activate(dataContext)
    {
        this.dataContext = dataContext;

        var modelLoader =  ServiceLocator.services.componentLoader;
        modelLoader.loadComponentsForCompose(this.dataContext.componentsForCompose)
                    .then((c)=>{
                        c.forEach((com)=> {
                            this.components.push(com);
                        });
                    });
    }
}