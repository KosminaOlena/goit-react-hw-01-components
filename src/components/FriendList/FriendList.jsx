import css from "./FriendList.module.css";
import PropTypes from 'prop-types';

export const FriendList = ({friends}) => {
    return(<ul className={css.list}>
        {friends.map(({id, avatar, name, isOnline}) => {
      return(<li key={id} className={css.item}>
          <span className={isOnline ? `${css.status} ${css.green}` : `${css.status} ${css.red}`}></span>
          <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
          <p className={css.name}>{name}</p>
      </li>);
    })}
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