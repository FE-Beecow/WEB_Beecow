// /* eslint-disable @typescript-eslint/no-explicit-any */
import moment from 'moment'

export const setCurrentUser = (isRemember, data) => {
    if (isRemember) {
        localStorage.setItem('user', JSON.stringify(data))
    }
    else {
        sessionStorage.setItem('user', JSON.stringify(data))
    }
}

export const getCurrentUser = () => {
    const user = sessionStorage.getItem('user') || localStorage.getItem('user')
    return JSON.parse(user)
}

export const checkLogin = () => {
    const token = getCurrentUser()
    const user = sessionStorage.getItem('user') || localStorage.getItem('user')
    const expireOn = user && JSON.parse(user).expireOn || ''
    const now = moment()
    return !!token.length && now < moment(expireOn)
}

export const clearToken = () => {
    localStorage.clear()
    sessionStorage.clear()
}
