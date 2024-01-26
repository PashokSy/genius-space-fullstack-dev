import React from 'react';
import './Classic.css';
import classNames from 'classnames';

export const ClassicCss = ({ isHighlighted }) => {
  const titleClasses = classNames('title', {
    highlighted: isHighlighted,
    active: true,
  });

  return (
    <div className="container">
      <h1 className={titleClasses}>Classic Styles Example</h1>
      <p className="description">This is an example of using external CSS</p>
    </div>
  );
};
