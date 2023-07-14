import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const history = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    // Perform a check if the access token is valid
    // You can make a request to a protected endpoint on your FastAPI backend
    // to validate the token and retrieve user information if necessary
    // e.g., axios.get('/user', { headers: { Authorization: `Bearer ${accessToken}` } })
    // If the token is invalid or expired, you can redirect the user to the login page

    if (!accessToken) {
      // redirect user to login page
      history('/auth/signin');
      console.log('No access token found')
    }
  }, []);
};

export default useAuth;
