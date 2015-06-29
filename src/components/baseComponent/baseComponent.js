import {ServiceLocator} from 'dash-core'

export class BaseComponent
{
    configurationProperties = {};
    layoutInfo = null;

    constructor()
    {
        this.componentConfigurationSaver = new ServiceLocator().getServices()["componentConfigurationSaver"];
    }

    activate(model)
    {
        this.model = model;
    }
}