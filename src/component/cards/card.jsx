import './cards.css';
import CardDetails from './cardsDetail';
import PropTypes from 'prop-types';

function Card({ CardsDetails }) {
  return (
    <div className='grid'>
      {
      CardsDetails.map((data, index) => (
        <CardDetails CardDetails={data} key={index} />
      ))}
    </div>
  );
}

Card.propTypes = {
  CardsDetails: PropTypes.arrayOf(PropTypes.object).isRequired, // Expecting array of objects
};

export default Card;
