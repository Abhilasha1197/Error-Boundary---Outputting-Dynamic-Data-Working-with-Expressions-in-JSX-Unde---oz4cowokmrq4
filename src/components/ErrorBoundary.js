import React from "react";

class ErrorBoundary extends React.Component {
  
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    
    if (this.state.hasError) {
      return (
        <p id="error">
          There is an error in your react app. Please Check again. This message has been generated from error boundary
        </p>
      );
    }
    return <>{this.props.children}</>;
  }
}
export default ErrorBoundary;
