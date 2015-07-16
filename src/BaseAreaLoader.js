import {AreaConfiguration} from './areas/AreaConfiguration'
import {AreaLayout} from './areas/AreaConfiguration'
import {LayoutConfiguration} from './areas/AreaConfiguration'


export class BaseAreaLoader
{

    _areaConfigurations = {};

    addAreaConfiguration(id,areaConfig)
    {
        this._areaConfigurations[id] = areaConfig;
    }

    loadAreaConfiguration(id)
    {
        return Promise.resolve(this._areaConfigurations[id]);
    }
}