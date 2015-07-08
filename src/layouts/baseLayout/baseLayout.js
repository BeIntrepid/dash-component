import {ServiceLocator} from 'dash-core'
import {AreaConfiguration} from '../../areas/AreaConfiguration'
import {LayoutConfiguration} from '../../areas/AreaConfiguration'

export class BaseLayout
{
    components = [];

    constructor()
    {

    }

    activate(dataContext)
    {
        this.dataContext = dataContext;

        if(dataContext instanceof AreaConfiguration)
        {
            dataContext.layouts.forEach((com)=> {
                this.components.push({viewModel : com.viewModel, model : com});
            });
            return;
        }

        //if(dataContext instanceof LayoutConfiguration)
        //{
        //    dataContext.componentsForCompose.forEach((com)=> {
        //        this.components.push({viewModel : com.viewModel, model : com});
        //    });
        //    return;
        //}

        var modelLoader =  ServiceLocator.services.componentLoader;
        modelLoader.loadComponentsForCompose(this.dataContext.componentsForCompose)
                    .then((c)=>{
                        c.forEach((com)=> {
                            this.components.push(com);
                        });
                    });
    }
}