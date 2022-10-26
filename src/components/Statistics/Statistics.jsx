import PropTypes from 'prop-types';
import { StatsCard } from 'components/StatsCard/StatsCard';

export const Statistics = ({ cards }) => {
    return  <section className='statistics'>
                <h2 className='title'>Upload stats</h2>
                <ul className='stat_list'>
                    {cards.map(({ id, label, percentage }) => <StatsCard
                        key={id}
                        label={label}
                        percentage={percentage}
                    />)}
                </ul>
            </section>
}

Statistics.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
}