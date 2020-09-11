// error boundry just use when program is prodtion (run on virtual server)


import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);// constractore react.componenet
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) { // same setState
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        // send errorInfo to server for store
       
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

