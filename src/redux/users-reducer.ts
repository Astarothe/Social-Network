const FOLLOW = "FOLLOW" as const
const UNFOLLOW = "UNFOLLOW" as const
const SET_USERS = "SET_USERS" as const
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE" as const
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT" as const
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING" as const

type photosType = {
    small: string
    large: string
}
type UserLocationType = {
    city: string
    country: string
}
export type UserType = {
    id: number
    name: string
    status: string
    photos: photosType
    followed: boolean,
    location: UserLocationType
}
export type InitialStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

type ActionPropsType =
    ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>

const initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}


export const usersReducer = (state: InitialStateType = initialState, action: ActionPropsType): InitialStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {

                        return {
                            ...u, followed: true
                        }
                    }
                    console.log(u.followed)
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed}
                    }
                    console.log(u.followed)
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state;
    }
}

export const follow = (userId: number) => ({type: FOLLOW, userId})
export const unfollow = (userId: number) => ({type: UNFOLLOW, userId})
export const setUsers = (users: Array<UserType>) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching})