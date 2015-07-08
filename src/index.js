// This is the file that's run when referenced, so if you want to expose something import it then export it here

export {ComponentLibrary} from './componentLibrary'
export {ComponentLoader} from './componentLoader'
export {ComponentModelLoader} from './componentModelLoader'

export {BaseComponent} from './components/baseComponent/BaseComponent'
export {ChromeComponent} from './components/chromeComponent/ChromeComponent'

export {BaseLayout} from './layouts/baseLayout/baseLayout'
export {FloatLayout} from './layouts/floatLayout/floatLayout'
export {BaseAreaLoader} from './BaseAreaLoader'

export {AreaConfiguration} from './areas/AreaConfiguration'
export {AreaLayout} from './areas/AreaConfiguration'
export {LayoutConfiguration} from './areas/AreaConfiguration'

export function configure(aurelia){
    //aurelia.globalizeResources('./components/baseComponent/baseComponent');
}

import {ServiceLocator} from 'dash-core'

import {ComponentLoader} from './componentLoader'
import {ComponentModelLoader} from './componentModelLoader'
import {ChromeComponentInfo} from './chromeComponentInfo'
import {BaseAreaLoader} from './BaseAreaLoader'


ServiceLocator.services.componentLoader = new ComponentLoader();
ServiceLocator.services.areaLoader = new BaseAreaLoader();

ServiceLocator.services.componentModelLoader = new ComponentModelLoader();
ServiceLocator.services.chromeComponentInfo = new ChromeComponentInfo();
