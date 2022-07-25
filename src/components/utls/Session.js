
export const getToken=() => {
    return localStorage.getItem("token")
}

export const checkAdmin=() => {
        return localStorage.getItem("admin")
    }

export const setToken=(value) => {
        return localStorage.setItem("token", value)
}

export const setAdmin=(value) => {
        return localStorage.setItem("admin", value)
}

export const removeToken=() => {
        return localStorage.removeItem("token")
}

export const removeAdmin=() => {
        return localStorage.removeItem("admin")
}
