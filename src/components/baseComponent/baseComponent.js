import {serviceLocator} from 'dash-core'

export class baseComponent
{
    ConfigurationProperties = {};
    LayoutInfo = null;

    constructor()
    {
        this.componentConfigurationSaver = new serviceLocator().getServices()["componentConfigurationSaver"];
    }

    activate(model)
    {
        this.model = model;
    }
}