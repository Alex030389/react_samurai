import OnlineFriends from "./OnlineFriends";
import StoreContext from "../../../StoreContext";

const OnlineFriendsContainer = () => {
  return <StoreContext.Consumer>
    {
      (store) => {
        let state = store.getState();

        return <OnlineFriends
          onlineFriends={state.sidebar.onlineFriends}
        />
      }
    }
  </StoreContext.Consumer>
};

export default OnlineFriendsContainer;