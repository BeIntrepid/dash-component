export class componentLibrary
{
    static components = {};

    getComponent(name)
    {
        return componentLibrary.components[name];
    }
}

export class systemComponentLibrary
{
    getComponent(name)
    {
        return System['import'](name);
    }
}