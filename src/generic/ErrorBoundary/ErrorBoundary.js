import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
      }

    componentDidCatch(error, errorInfo) {
        console.log("Error info: ", errorInfo);
    }

    render() {
        if (this.state.hasError) {
          // You can render any custom fallback UI
          return <h1>Something went wrong.</h1>;
        }
    
        return this.props.children; 
      }
}

export default ErrorBoundary;