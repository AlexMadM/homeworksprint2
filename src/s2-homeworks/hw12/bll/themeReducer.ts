const initState = {
    themeId: 1,
}


export type State={
    themeId:number
}
export const themeReducer = (state = initState, action: ChangeTheme): State => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {...state,themeId:action.id}

        default:
            return state
    }
}

type ChangeTheme=ReturnType<typeof changeThemeId>

export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID' as const, id }) // fix any
