import React from 'react';

export const Unmount = () => {
  useEffect(() => {
    return () => {
      console.log('componentWillUnmount useEffect');
    };
  }, [value]);

  return <div>Unmount</div>;
};
