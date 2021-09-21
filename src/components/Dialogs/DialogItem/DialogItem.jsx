import c from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  const online = props.online ? c.dialog_online : '';

  return (
    <div className={`${c.dialogItem} ${online}`}>
      <NavLink to={`/dialogs/${props.id}`} className={c.dialogItem__name} activeClassName={c.dialogItem__name_active}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
