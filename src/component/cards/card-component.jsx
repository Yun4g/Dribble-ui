import Card from './card';
import './cards.css';

import PropTypes from 'prop-types';

function CardComponent({ CardsDetails }) {
  return (
    <section className='cardsoverallContainer'>
                 <div className='parentDiv'>
                <div className='popularButton'>
                    <button>
                        Popular
                        <span className='chevronCard'>
                            <svg xmlns="http://www.w3.org/2000/svg" height={'12px'} viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                        </span>
                    </button>
                </div>
                <div className='cardLinks'>
                    <a href="" className='Discover' >Discover</a>
                    <a href="">Animation</a>
                    <a href="">Branding</a>
                    <a href="">Illustration</a>
                    <a href="">Mobile app</a>
                    <a href="">Product Design</a>
                    <a href="">Typography</a>
                    <a href="">Web Design</a>
                </div>
                <div className='filterButton'>
                    <button>
                        Filter
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" role="img" className="icon filter-icon icon-14">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 6C0 5.17157 0.671573 4.5 1.5 4.5H22.5C23.3284 4.5 24 5.17157 24 6C24 6.82843 23.3284 7.5 22.5 7.5H1.5C0.671573 7.5 0 6.82843 0 6ZM3 12C3 11.1716 3.67157 10.5 4.5 10.5H19.5C20.3284 10.5 21 11.1716 21 12C21 12.8284 20.3284 13.5 19.5 13.5H4.5C3.67157 13.5 3 12.8284 3 12ZM7.5 16.5C6.67157 16.5 6 17.1716 6 18C6 18.8284 6.67157 19.5 7.5 19.5H16.5C17.3284 19.5 18 18.8284 18 18C18 17.1716 17.3284 16.5 16.5 16.5H7.5Z"></path>
                            </svg>
                        </span>
                    </button>
                </div>


            </div>

      <section className='cardData'>
        <Card CardsDetails={CardsDetails} />
      </section>
    </section>
  );
}

// propType validation
CardComponent.propTypes = {
  CardsDetails: PropTypes.arrayOf(PropTypes.object).isRequired, // Expecting an array of objects
};

export default CardComponent;
