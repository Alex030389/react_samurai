import c from './OnlineFriendItem.module.css';

const OnlineFriendItem = (props) => {
  return (
    <div className={c.onlineFriendItem}>
      <div className={c.onlineFriendItem__wrapAva}>
        <img className={c.onlineFriendItem__ava} src={`${props.photo}`} alt="img"/>
      </div>
      <div className={c.onlineFriendsItem__name}>
        {props.name}
      </div>
    </div>
  );
};

export default OnlineFriendItem;