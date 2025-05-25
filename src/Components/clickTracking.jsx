import React from 'react';

const clickTracking = (Comp) => {
  return (props) => {
    const handleClick = () => {
      console.log("Button tracked:", props.trackingInfo);
    };

    return (
      <div onClick={handleClick}>
        <Comp {...props} />
      </div>
    );
  };
};

export default clickTracking;
