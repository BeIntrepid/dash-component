import {ServiceLocator} from 'dash-core'

export class BasePage
{
    layout = {};

    constructor()
    {

    }

    attached()
    {

    }

    activate(params)
    {
        var areaLoader = ServiceLocator.services.areaLoader;
        areaLoader.loadAreaConfiguration(params.areaId).then((areaConfig)=>{
            this.layout.path = areaConfig.areaLayout.viewModel;
            this.layout.model = areaConfig;
        });
    }
}