import React from 'react';

export const InlineCss = ({ isHighlighted, isPrimary }) => {
  const primaryStyles = {
    backgroundColor: isHighlighted ? 'yellow' : 'blue',
    color: isHighlighted ? 'black' : 'white',
    padding: '10px',
    borderRadius: '5px',
  };

  const secondaryStyles = {
    backgroundColor: 'gray',
    color: 'black',
    padding: '10px',
    borderRadius: '5px',
  };

  const styles = isPrimary ? primaryStyles : secondaryStyles;

  return (
    <div style={styles}>
      <h1>Inline Styles Example</h1>
      <p>This is an example of using styles in React</p>
    </div>
  );
};
