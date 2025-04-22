import { useEffect, useState } from "react";

import {jwtDecode} from "jwt-decode"; // Make sure to install this package

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Get token from localStorage (or cookies)
    const token = localStorage.getItem("authToken");

    if (token) {
      try {
        // Decode the JWT token to check if it is valid
        const decodedToken = jwtDecode(token);
        console.log(decodedToken);

        // You can also check for token expiration, if necessary
        if (decodedToken.exp * 1000 < Date.now()) {
          // Token is expired, log out the user
          localStorage.removeItem("authToken");
          setIsAuthenticated(false);
        } else {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Invalid token:", error);
        setIsAuthenticated(false);
      }
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return isAuthenticated;
};

export default useAuth;
