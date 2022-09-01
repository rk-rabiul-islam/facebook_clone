import axios from "axios";
import Cookies from "js-cookie";
import { useContext } from "react";
import { useEffect } from "react";
import {Route, Routes} from "react-router-dom";
import AuthContext from "./components/Auth/contexts/AuthContexts";
import { AuthorizedUser, UnAuthorizedUser } from "./components/Auth/middlewares/UserRedirect";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Profile from "./pages/Profile/Profile";
import SignUP from './pages/Register/SignUP';
import LoadingBar from 'react-top-loading-bar'
import LoaderContexts from "./components/AllContexts/contexts/LoaderContexts";
import swal from 'sweetalert';
import VerifyUser from "./components/VerifyUser/VerifyUser";
import UnVerifyUser from "./components/VerifyUser/UnVerifyUser";
import ForgottenPassword from "./components/Password/ForgottenPassword/ForgottenPassword";
import ResatePassword from "./components/Password/ResatePassword/ResatePassword";




function App() {

  const {dispatch} = useContext(AuthContext);
  const {LoagerState, LoaderDispatch} = useContext(LoaderContexts);

  // get token
  const token = Cookies.get('token');

  useEffect( () => {

    try {
      
    axios.get('http://localhost:5050/api/user/me', {
      headers : {
        'Authorization' : `Beare ${token}`
      }
    }).then(res => {

      if(res.data.isVerified && token){
        dispatch({type : 'LOGIN_USER_SUCCESS', payload : res.data});
      }else{
        swal(`Hello ${res.data.name}`, "Please Verify You Account!", "warning");
        Cookies.remove('token');
      }
    }).catch( error =>{
      dispatch({type : 'LOG_OUT'});
    })
  } catch (error) {
      console.log(error);
  }

  },[token]);




  return (
    <>
        <LoadingBar
          color='#f11946'
          progress={LoagerState}
          onLoaderFinished={() => LoaderDispatch({type : "LODER_END"})}
        />
      <Routes>
        <Route path='/' element={ <UnAuthorizedUser><Home/></UnAuthorizedUser>  } />
        <Route path='/:username' element={ <UnAuthorizedUser><Profile/></UnAuthorizedUser>  } />
        <Route path='/login' element={ <AuthorizedUser><Login/></AuthorizedUser>  } />
        <Route path='/register' element={ <AuthorizedUser><SignUP/></AuthorizedUser>  } />
        <Route path='/user/:id/:token' element={ <VerifyUser/> } />
        <Route path='/verify' element={ <UnVerifyUser/> } />
        <Route path='/accounts/password/forgot/' element={ <ForgottenPassword/> } />
        <Route path='/password/reset/:token' element={ <ResatePassword/> } />
      </Routes>    </>
  );
}

export default App;
