import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = props => {
    return (
        <div>
            Welcome Page
            <div>
                <Link to="/main">
                    Go to main page
                </Link>
            </div>
        </div>
    );
}

export default WelcomePage;
