import c from './Users.module.css';

const Users = (props) => {
  // debugger;

  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        fullName: 'Alex Petrov',
        ava: 'https://stuki-druki.com/biofoto1/Kirill-Nagiev-01.jpg',
        status: 'Some status text',
        location: {
          city: 'Minsk',
          country: 'Belarus'
        },
        followed: true,
      },
      {
        id: 2,
        fullName: 'Dima Petrov',
        ava: 'https://stuki-druki.com/biofoto1/Kirill-Nagiev-01.jpg',
        status: 'Some status text',
        location: {
          city: 'Moscow',
          country: 'Russia'
        },
        followed: true,
      },
      {
        id: 3,
        fullName: 'Alex Petrov',
        ava: 'https://stuki-druki.com/biofoto1/Kirill-Nagiev-01.jpg',
        status: 'Some status text',
        location: {
          city: 'Minsk',
          country: 'Belarus'
        },
        followed: false,
      },
      {
        id: 4,
        fullName: 'Dima Petrov',
        ava: 'https://stuki-druki.com/biofoto1/Kirill-Nagiev-01.jpg',
        status: 'Some status text',
        location: {
          city: 'Moscow',
          country: 'Russia'
        },
        followed: false,
      },
    ]);
  }

  return (
    <div className={c.findUsers}>
      <div className={c.findUsers__list}>
        {props.users.map(user => <div key={user.id} className={`${c.userBox} ${c.findUsers__item}`}>
            <div className={c.userBox__boxImg}>
              <img src={user.ava} alt="ava"/>
            </div>
            <div className={c.userBox__info}>
              <div className={c.userBox__boxNameStatus}>
                <div className={c.userBox__name}>{user.fullName}</div>
                <div className={c.userBox__status}>{user.status}</div>
              </div>

              <div className={c.userBox__boxLocationFollowBtn}>
                <div className={c.userBox__location}>{`${user.location.city} ${user.location.country}`}</div>
                {user.followed
                  ? <button onClick={ () => {props.unfollow(user.id)} }>Unfollow</button>
                  : <button onClick={ () => {props.follow(user.id)} }>Followed</button>
                }
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={c.findUsers__wrapBtn}>
        <button className={c.findUsers__btn}>Load more</button>
      </div>
    </div>
  );
};

export default Users;