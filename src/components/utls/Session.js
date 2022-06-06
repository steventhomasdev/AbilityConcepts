
export const getToken=() => {
    return localStorage.getItem("token")
}

export const setToken=(value) => {
    if(getToken.length === 0){
        return localStorage.setItem("token", value)
    }
}

export const removeToken=() => {
    if(getToken.length === 0){
        return localStorage.removeItem("token")
    }
}
