import { display } from '@mui/system';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authenticate } from '../store';

const AuthForm = ({name, displayName}) => {
  const {error} = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formName = evt.target.name;
    const userName = evt.target.userName.value;
    const password = evt.target.password.value;
    dispatch(authenticate({username, password, method: formName}))
  };

  return (
    <div>
      <form onSubmit={handleSUbmit} name={name}>
        <div>
          <label htmlFor='username'>
            <small>Username</small>
          </label>
          <input name='username' type='text'/>
        </div>
        <div>
          <label htmlFor='password'>
            <small>Password</small>
          </label>
          <input name='password' type='password'/>
        </div>
        <div>
          <button type='submit'>{displayName}</button>
        </div>
        {error && <div>{error}</div>}
      </form>
    </div>
  )
};

export default AuthForm
