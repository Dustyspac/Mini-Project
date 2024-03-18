import Router from "./Shared/router"
import Footer from './Components/Common/Footer';
import { useQuery } from 'react-query';
import { useraccess } from './APIS/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearAuthInfo, setAuthInfo} from './Redux/modules/user';
import { useEffect } from "react";
import { useSelector } from 'react-redux';



function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  const { isLoading, isError, data: accessToken, error } = useQuery('accessToken',useraccess, {
    onSuccess:(response) =>{
      navigate('/')
      dispatch(setAuthInfo({ authType: `${response.authType}`, isAuthenticated: true }));
    },
    onError: (error) => {
      console.log(error);
      dispatch(clearAuthInfo());
    },

    enabled: !!window.sessionStorage.getItem('ACCESS_TOKEN') && !isAuthenticated,
  
  });



  return (
    <>
      <Router />
      <Footer />
      </>
  );
}

export default App;
