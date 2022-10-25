import PropTypes from 'prop-types';

export const StatsCard = ({ label, percentage }) => {
    return  <li className='item' style={{ backgroundColor: getRandomHexColor() }}>
                <span className='label_card'>{label}</span>
                <span className='percentage'>{percentage}%</span>
            </li>
}

StatsCard.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}