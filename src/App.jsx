import React, { useState, useEffect } from "react";
import Routes from "./Routes";
import PageLoader from "./components/PageLoader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading (fonts, bundles, etc.)
    // You can add real checks here if needed
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Show loader for minimum 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <PageLoader isLoading={isLoading} />
      <Routes />
    </>
  );
}

export default App;
