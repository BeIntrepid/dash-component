import {ServiceLocator} from 'dash-core'

export class BasePage
{
    layout = {};

    constructor()
    {

    }

    attached()
    {
        var areaLoader = ServiceLocator.services.areaLoader;
        areaLoader.loadAreaConfiguration('IDNOTWORKINGYET').then((areaConfig)=>{
            this.layout.path = areaConfig.areaLayout.viewModel;
            this.layout.model = areaConfig;
        });
    }
}