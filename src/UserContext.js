import { createContext, useState } from "react";
import { userData } from "./userData";

const UserContext = createContext()

export function UserProvider({ children }) {
    const [displayUser, setDisplayUser] = useState({})
    const [queryUserResult, setQueryyUserResult] = useState([])

    const setQuery = (words) => {
        setQueryyUserResult([])
        let re = new RegExp(words, 'i');
        userData.forEach((user, index) => {
            if (re.test(user.name)) {
                /* console.log(user) */
                const updatedUser = {
                    ...user,
                    index
                }
                setQueryyUserResult((prevState) => [...prevState, updatedUser])
            }
        })
    }

    const updateDisplayUser = (index) => {
        setDisplayUser(userData[index])
        console.log(displayUser)
    }

    return (
        <UserContext.Provider value={{ displayUser, queryUserResult, updateDisplayUser, setQuery }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;