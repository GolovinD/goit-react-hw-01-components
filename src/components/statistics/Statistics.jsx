import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import getRandomHexColor from './RandomColor';


const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2> }  
            <ul className={css.statList}>
                {stats.map(stats => (
                  <li
                    key={stats.id}
                    className={css.item}
                    style={{ backgroundColor: getRandomHexColor() }}>
                        <span className={css.label}>{stats.label}</span>
                        <span className={css.percentage}>{stats.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>  
    );
}
    
export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};