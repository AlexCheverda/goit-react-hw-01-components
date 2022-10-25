import PropTypes from 'prop-types';

export const Stats = ({ followers, views, likes }) => {
    return  <div>
                <ul className='stats'>
                    <li className='stats_title'>
                        <span className='label'>followers</span>
                        <span className='quantity'>{followers}</span>
                    </li>
                    <li className='stats_title'>
                        <span className='label'>views</span>
                        <span className='quantity'>{views}</span>
                    </li>
                    <li className='stats_title'>
                        <span className='label'>likes</span>
                        <span className='quantity'>{likes}</span>
                    </li>
                </ul>
            </div>
}

Stats.propTypes = {
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}