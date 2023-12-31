import css from "./FriendList.module.css";
import PropTypes from 'prop-types';
import {FriendListItem} from "../FriendListItem/FriendListItem";

export const FriendList = ({friends}) => {
    return(<ul className={css.list}>
        {friends.map(({id, avatar, name, isOnline}) => 
        <FriendListItem
         key= {id} 
         avatar = {avatar}
         name = {name}
         isOnline = {isOnline}/>)}
  </ul>
  )
}

FriendList.propTypes = {
  friends:PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired
}