import React from 'react';

import Label from './Components/Label';
import Button from './Components/Button';
import clickTracking from './Components/clickTracking';

const ButtonWithTracking = clickTracking(Button);

const App = () => {
  return (
    <div>
      <div>
        <ButtonWithTracking label="Pay Now" trackingInfo={{ amount: "2000", name: "prasad" }} />
         <ButtonWithTracking label="Pay Now" trackingInfo={{ amount: "6000", name: "sakthi" }} />
      </div>
      <Label />
    </div>
  );
};

export default App;
