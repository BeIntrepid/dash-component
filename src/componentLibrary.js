export class ComponentLibrary
{
    static collections = {};

    getComponent(name)
    {
        return Promise.resolve(componentLibrary.components[name]);
    }
}