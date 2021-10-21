import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {userSignIn} from 'actions/Auth';
import CircularProgress from "@material-ui/core/CircularProgress";
import { useForm } from 'react-hook-form';


const SignIn = (props) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onChange',
    defaultValues: {email: 'demo@example.com', password: 'demo#123'}
  });
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();
  const token = useSelector(({auth}) => auth.token);

  useEffect(() => {
    if (token !== null) {
      props.history.push('/');
    }
  }, [token, props.history]);


  const onSubmit = (data)=>{
    dispatch(userSignIn({email: data.email, password: data.password, setLoading}))
  }


  return (
    <div className="h-100 d-flex justify-content-center align-items-center">
      <div className="px-5 py-3 card shadow-lg animated slideInUpTiny animation-duration-4">

        <div className="d-flex align-items-center justify-content-center">
          <Link to="/" title="Jambo">
            <img width={100} src={require("assets/images/logo.png")} alt="cms"/>
          </Link>
        </div>

        <div className="app-login-content">
          <div className="mb-4">
            <h1 className="text-primary text-center">CMS Login</h1>
          </div>

          <div className="app-login-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <fieldset>
                <TextField
                  label="Email"
                  fullWidth
                  margin="normal"
                  className="mt-1 my-sm-3"
                  disabled={loading}
                  required
                  error={!!errors.email}
                  inputProps={{...register("email", {required: true}), required: ''}}
                />
                <TextField
                  type="password"
                  label="password"
                  fullWidth
                  margin="normal"
                  className="mt-1 my-sm-3"
                  disabled={loading}
                  required
                  error={!!errors.password}
                  inputProps={{...register("password", {required: true}), required: ''}}
                />

                <div className="mb-3 d-flex align-items-center justify-content-center">
                  <Button type="submit" variant="contained" color="primary" disabled={loading}>
                    Sign In
                  </Button>
                </div>

              </fieldset>
            </form>
          </div>
        </div>
      </div>

      {loading &&
        <div className="position-absolute">
          <CircularProgress/>
        </div>
      }
    </div>
  );
};


export default SignIn;
