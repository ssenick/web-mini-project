type Mods = Record<string, string | boolean>

export function classNames(cls: string, mods: Mods = {},  additional: string[]= []) : string {
    return [
        cls,
        ...Object.entries(mods).filter(([_,value])=> Boolean(value))
            .map(([className]) => className),
        ...additional.filter(Boolean)
    ].join(' ')
}