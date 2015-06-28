import {serviceLocator} from 'dash-core'

export class baseComponent
{
    configurationProperties = {};
    layoutInfo = null;

    constructor()
    {
        this.componentConfigurationSaver = new serviceLocator().getServices()["componentConfigurationSaver"];
    }

    activate(model)
    {
        this.model = model;
    }
}