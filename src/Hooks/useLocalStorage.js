import { useCallback, useState } from "react";

export function useLocalStorage(key, initialValue = '') {
    const [state, setState] = useState(() => {
        try {
            const storedValue = localStorage.getItem(key)

            if (storedValue) {
                return JSON.parse(storedValue)
            }
            else {
                localStorage.setItem(key, JSON.stringify(initialValue))
                return initialValue
            }
        }
        catch {
            return initialValue
        }
    })

    const setValue = useCallback((value) => {
        try {
            setState(value)
            localStorage.setItem(key, JSON.stringify(value))
        }
        catch (error) {
            console.log(error)
        }
    }, [key])

    return [state, setValue]
}