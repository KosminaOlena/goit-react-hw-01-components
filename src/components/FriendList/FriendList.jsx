export const FriendList = ({friends}) => {
    return(<ul className="friend-list">
        {friends.map(({id, avatar, name, isOnline}) => {
      return(<friendItem key={id}>
          <span className="status"></span>
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
          <p className="name">{name}</p>
      </friendItem>);
    })}
  </ul>
  )
}