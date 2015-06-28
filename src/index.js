// This is the file that's run when referenced, so if you want to expose something import it then export it here

export {componentLibrary} from './componentLibrary'
export {componentLoader} from './componentLoader'
export {componentModelLoader} from './componentModelLoader'
export {baseComponent} from './components/baseComponent/baseComponent'
export {chromeComponent} from './components/chromeComponent/chromeComponent'

export function configure(aurelia){
    //aurelia.globalizeResources('./components/baseComponent/baseComponent');
}

import {serviceLocator} from 'dash-core'
import {componentLoader} from './componentLoader'
import {componentModelLoader} from './componentModelLoader'

serviceLocator.services.componentLoader = new componentLoader();
serviceLocator.services.componentModelLoader = new componentModelLoader();