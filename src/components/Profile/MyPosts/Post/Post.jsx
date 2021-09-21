import c from './Post.module.css';

const Post = (props) => {

  const like = props.like ? c._active : '';

  return (
    <div className={c.post}>
      <div className={c.post__content}>
        <div className={c.post__wrapAva}>
          <img className={c.post__ava} src="https://i.ru-music.cc/img/artists/full/ava-max.png" alt="alt"/>
        </div>
        <div className={c.post__text}>
          {props.text}
        </div>
      </div>
      <div className={c.post__footer}>
        <button className={`${c.post__like} ${like}`}  >
        </button>
        <div className={c.post__likeCount}>{props.count}</div>
      </div>
    </div>
  );
};

export default Post;