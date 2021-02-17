import React from 'react';
import { Link } from 'react-router-dom';

const CityPage = props => {
    return (
        <div>
            City Page
            <div>
                <Link to="/main">
                    Back to main page
                </Link>
            </div>
        </div>
    );
}

export default CityPage;
