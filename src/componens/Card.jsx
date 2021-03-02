/*
  Вопрос:
    Как объявлять children при использовании проп-тайпс и линтера airbnb?
    Пока что объявил как мог, но пришлость заглушить какие-то правила.
*/

/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
function Card({ logo, children }) {
  return (
    <div className="card mx-auto mb-4" style={{ width: '18rem' }}>
      {logo && <img src={logo} className="card-img-top" alt="..." /> }
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

Card.propTypes = {
  logo: PropTypes.string,
};

export default Card;
