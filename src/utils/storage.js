// /* eslint-disable @typescript-eslint/no-explicit-any */
import moment from 'moment'

export const setToken = (isRemember, data) => {
    if (isRemember) {
        localStorage.setItem('user', JSON.stringify(data))
    }
    else {
        sessionStorage.setItem('user', JSON.stringify(data))
    }
}

export const getToken = () => {
    const user = sessionStorage.getItem('user') || localStorage.getItem('user')
    return user && JSON.parse(user).token || ''
}

export const checkLogin = () => {
    const token = getToken()
    const user = sessionStorage.getItem('user') || localStorage.getItem('user')
    const expireOn = user && JSON.parse(user).expireOn || ''
    const now = moment()
    return !!token.length && now < moment(expireOn)
}

export const clearToken = () => {
    localStorage.clear()
    sessionStorage.clear()
}
