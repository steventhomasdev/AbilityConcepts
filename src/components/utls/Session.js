
export const getToken=() => {
    return localStorage.getItem("token")
}

export const setToken=(value) => {
    return localStorage.setItem("token", value)
}
