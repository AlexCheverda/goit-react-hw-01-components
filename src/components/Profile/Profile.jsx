import PropTypes from 'prop-types';
import { Stats } from 'components/Stats/Stats';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return  <div className='profile'>
                <div className='description'>
                    <img className='avatar_profile' src={avatar} alt={username} />
                    <p className='name'>{username}</p>
                    <p className='tag'>@{tag}</p>
                    <p className='location'>{location}</p>
                    <Stats
                        followers={stats.followers}
                        views={stats.views}
                        likes={stats.likes}>
                    </Stats>
                </div>
            </div>
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
}