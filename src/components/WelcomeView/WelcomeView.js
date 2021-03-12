import React from 'react';
import PropTypes from 'prop-types';
import useVanta from './../../hooks/useVanta';

const WelcomeView = ({ children }) => {
    const myRefDiv = useVanta();

    return (
        <div className="full" ref={myRefDiv}>
            {children}
        </div>
    );
}

WelcomeView.propTypes = {
    children: PropTypes.node,
}

export default WelcomeView;
