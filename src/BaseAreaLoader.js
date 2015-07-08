import {AreaConfiguration} from './areas/AreaConfiguration'
import {AreaLayout} from './areas/AreaConfiguration'
import {LayoutConfiguration} from './areas/AreaConfiguration'


export class BaseAreaLoader
{
    loadAreaConfiguration(id)
    {
        var mockAreaResponse = new AreaConfiguration();

        mockAreaResponse.areaLayout = new AreaLayout();
        mockAreaResponse.areaLayout.viewModel = 'dash-component/layouts/floatLayout/floatLayout';

        var layoutConfig = new LayoutConfiguration();
        layoutConfig.viewModel = 'dash-component/layouts/floatLayout/floatLayout';
        layoutConfig.componentsForCompose = [
            {id: 1, viewModel:'dash-github/components/singleValueComponent/gitSingleValueComponent'},
            {id: 1, viewModel:'dash-github/components/imageGrid/imageGrid'}
        ];

        mockAreaResponse.layouts.push(layoutConfig);


        layoutConfig = new LayoutConfiguration();
        layoutConfig.viewModel = 'dash-component/layouts/floatLayout/floatLayout';
        layoutConfig.componentsForCompose = [
            {id: 1, viewModel:'components/testComponent/testComponent'},
            {id: 1, viewModel:'components/testComponent/testComponent'},
            {id: 1, viewModel:'components/testComponent/testComponent'},
            {id: 1, viewModel:'components/testComponent/testComponent'},
            {id: 1, viewModel:'components/testComponent/testComponent'},
            {id: 1, viewModel:'components/testComponent/testComponent'},
            {id: 1, viewModel:'components/testComponent/testComponent'},
            {id: 1, viewModel:'components/testComponent/testComponent'},
            {id: 1, viewModel:'components/testComponent/testComponent'},
            {id: 1, viewModel:'components/testComponent/testComponent'},
            {id: 1, viewModel:'components/testComponent/testComponent'}
        ];

        mockAreaResponse.layouts.push(layoutConfig);

        return Promise.resolve(mockAreaResponse);
    }
}

