import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to a non-existent route
    navigate("/non-existent-route");
  }, [navigate]);

  return (
    <div style={styles.container}>
      <h1>404 - Page not found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
  },
};

export default NotFound;
