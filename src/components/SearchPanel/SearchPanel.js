import { useContext, useState, useEffect } from "react";
import UserContext from "../../UserContext";
import './SearchPanel.css'

function SearchPanel() {
    const [filterWord, setFilterWord] = useState('')
    const { updateDisplayUser, setQuery, queryUserResult } = useContext(UserContext)

    const highlightFilterWord = () => {
        let re = new RegExp(filterWord, 'i');
        let list = document.querySelectorAll('.user-name');
        list.forEach((item) => {
            item.innerHTML = item.textContent.replace(re, '<span style="color:red">$&</span>');
        })
    }
    let userList = queryUserResult.map((user, index) => {
       /*  console.log(queryUserResult) */
        return (
            <li key={index}>
                <span className="user-name" onClick={() => updateDisplayUser(user.index)}>{user.name}</span>
            </li>
        )
    })

    useEffect(() => {
        highlightFilterWord();
    }, [userList])

    return (
        <div>
            <div>
                <form>
                    <input type="text"
                           id="search-bar"
                           onInput={(e) => {
                            setFilterWord(e.target.value)
                            setQuery(e.target.value)
                           }}
                    />
                </form>
            </div>
            <div>
                <ul>
                    {userList}
                </ul>
            </div>
        </div>
    )
}

export default SearchPanel