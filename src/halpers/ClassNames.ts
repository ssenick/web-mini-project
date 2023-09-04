type Mods = Record<string, string | boolean>

export function ClassNames(cls: string, mods: Mods = {},  additional: string[]= []) : string {
    return [
        cls,
        ...Object.entries(mods).filter(([_,value])=> value)
            .map(([className]) => className),
        ...additional
    ].join(' ')
}