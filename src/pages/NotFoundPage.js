import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = props => {
    return (
        <div>
            Not Found
            <div>
                <Link to="/main">
                    Back to main page
                </Link>
            </div>
        </div>
    );
}

export default NotFoundPage;
