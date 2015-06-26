// This is the file that's run when referenced, so if you want to expose something import it then export it here

export {componentLibrary} from './componentLibrary'
export {componentLoader} from './componentLoader'
export {componentModelLoader} from './componentModelLoader'

export {baseComponent} from './components/baseComponent/baseComponent'

export function configure(aurelia){
    aurelia.globalizeResources('./components/baseComponent');
}