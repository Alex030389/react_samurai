import OnlineFriends from "./OnlineFriends";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    onlineFriends: state.sidebar.onlineFriends
  };
};

const OnlineFriendsContainer = connect(mapStateToProps)(OnlineFriends);

export default OnlineFriendsContainer;