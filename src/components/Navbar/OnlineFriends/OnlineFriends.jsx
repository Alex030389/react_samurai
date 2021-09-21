import c from './OnlineFriends.module.css';
import OnlineFriendItem from "./OnlineFriendItem/OnlineFriendItem";

const OnlineFriends = (props) => {
  return (
    <div className={c.onlineFriends}>
      { props.friends.map((item) => <OnlineFriendItem id={item.id} name={item.name} photo={item.photo} /> ) }
    </div>
  );
};

export default OnlineFriends;