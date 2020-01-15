import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner-styles';

//higher order component = this component takes a component as a param and renders it within spinner
const WithSpinner = WrappedComponent => {
    const Spinner = ({ isLoading, ...otherProps }) => {
      return isLoading ? (
        <SpinnerOverlay>
          <SpinnerContainer />
        </SpinnerOverlay>
      ) : (
        <WrappedComponent {...otherProps} />
      );
    
  };
  return Spinner;
};

export default WithSpinner;
