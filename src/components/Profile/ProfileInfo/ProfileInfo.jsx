import c from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className={c.profile__wrapImg}>
      <img className={c.profile__img} src="http://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg" alt="img"/>
    </div>
  );
};

export default ProfileInfo;
