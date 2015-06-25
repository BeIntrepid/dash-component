import {componentLibrary} from './componentLibrary'
import {systemComponentLibrary} from './componentLibrary'
import {serviceLocator} from 'dash-core'

export class componentLoader
{

    library = new systemComponentLibrary();

    getComponent(name)
    {
        return this.library.getComponent(name);
    }
}