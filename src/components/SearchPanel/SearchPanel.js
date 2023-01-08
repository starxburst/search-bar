import { useContext, useState, useEffect } from "react";
import UserContext from "../../UserContext";
import './SearchPanel.scss'

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
            <div key={index} className="user-name-container">
                <span className="user-name" onClick={() => updateDisplayUser(user.index)}>{user.name}</span>
                <div className="horizontal-line"></div>
            </div>
        )
    })

    useEffect(() => {
        highlightFilterWord();
    }, [userList])

    return (
        <div className="search-panel-container">
            <div>
                <form>
                    <input type="text"
                           className="input-area"
                           id="search-bar"
                           onInput={(e) => {
                            setFilterWord(e.target.value)
                            setQuery(e.target.value)
                           }}
                    />
                </form>
            </div>
            <div>
                {userList}
            </div>
        </div>
    )
}

export default SearchPanel