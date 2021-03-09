import React from 'react';
import ErrorBoundary from './ErrorBoundary';

export default {
    title: "Error Boundary",
    component: ErrorBoundary
}


const ComponentWithoutError = () => <h2>Without error</h2>;

const prop = undefined;
const ComponentWithError = () => <h2>{prop.test}</h2>;

export const ErrorBoundaryWithError = () => (
    <ErrorBoundary>
        <ComponentWithError/>
    </ErrorBoundary>
);

export const ErrorBoundaryWithoutError = () => (
    <ErrorBoundary>
        <ComponentWithoutError/>
    </ErrorBoundary>
);