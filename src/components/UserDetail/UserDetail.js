import { useContext } from "react";
import UserContext from "../../UserContext";
import './UserDetail.scss'

function UserDetail() {
  const { displayUser } = useContext(UserContext)

  return (
    <div className="user-detail-container">
      <div className="user-detail-wrapper">
        <span>name: {displayUser.name}</span>
        <span>age: {displayUser.age}</span>
        <span>job: {displayUser.job}</span>
      </div>
    </div>
  )

}

export default UserDetail