import PropTypes from 'prop-types';
import { FaUserCircle } from 'react-icons/fa';
import css from './FriendsList.module.css';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (
        <li key={id} className={css.item}>
            <span className={isOnline ? css.statusOnline : css.statusOffline}>{isOnline}<FaUserCircle/></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    key: PropTypes.number.isRequired,
    
}

export default FriendListItem;