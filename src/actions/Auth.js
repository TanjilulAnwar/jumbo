import {
  INIT_URL,
  SIGNOUT_USER_SUCCESS,
  USER_DATA,
  USER_TOKEN_SET
} from "../constants/ActionTypes";
import axios from 'util/Api'

export const setInitUrl = (url) => {
  return {
    type: INIT_URL,
    payload: url
  };
};

export const userSignIn = ({email, password, setLoading}) => {
  return (dispatch) => {
    setLoading(true)
    axios.post('auth/login', {
        email: email,
        password: password,
      }
    ).then(({data}) => {
      console.log("userSignIn: ", data);
      if (data.result) {
        localStorage.setItem("token", JSON.stringify(data.token.access_token));
        axios.defaults.headers.common['Authorization'] = "Bearer " + data.token.access_token;
        dispatch({type: USER_TOKEN_SET, payload: data.token.access_token});
      } else {
        console.log("payload: data.error", data.error);
        console.log(data.error)
      }
    }).catch(function (error) {
      console.log("Error****:", error.message);
    }).finally(()=>setLoading(false))
  }
};

export const getUser = () => {
  return (dispatch) => {
    axios.post('auth/me',
    ).then(({data}) => {
      console.log("userSignIn: ", data);
      if (data.result) {
        dispatch({type: USER_DATA, payload: data.user});
      } else {
        console.log(data.error)
      }
    }).catch(function (error) {
      console.log("Error****:", error.message);
    });
  }
};


export const userSignOut = () => {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch({type: SIGNOUT_USER_SUCCESS});
  }
};

// export const userSignOut = () => {
//   return (dispatch) => {
//     axios.post('auth/logout',
//     ).then(({data}) => {
//       if (data.result) {
//         localStorage.removeItem("token");
//         dispatch({type: SIGNOUT_USER_SUCCESS});
//       } else {
//         console.log(data.error)
//       }
//     }).catch(function (error) {
//       console.log("Error****:", error.message);
//     });
//   }
// };
