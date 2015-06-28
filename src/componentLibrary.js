export class componentLibrary
{
    static collections = {};

    getComponent(name)
    {
        return Promise.resolve(componentLibrary.components[name]);
    }
}