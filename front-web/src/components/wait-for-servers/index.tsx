import React from 'react';
import Spinner from '../Spinner';

import './styles.css';

const WaitForServers = () => {
  return (
    <>
      <div className="modal-background">
        <div className="modal-card">
          <div>
            <h1>Hang tight!</h1>
            <h3>{"We're getting things ready for you."}</h3>
            <div className="modal-card-spinner">
              <Spinner />
            </div>
            <p>Thank you for your patience.</p>
            <p>
              Our servers are currently spinning up to provide you with the best experience
              possible.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WaitForServers;
