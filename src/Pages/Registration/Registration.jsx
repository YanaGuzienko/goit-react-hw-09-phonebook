import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import scss from './Registration.module.scss';

export default function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleOnChange = useCallback((e) => {
    const { value, name } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        console.log('Проверьте введенные данные');
    }
  }, []);
  const handleOnSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(authOperations.register({ name, email, password }));
      reset();
    },
    [dispatch, email, name, password]
  );

  const reset = () => {
    setEmail('');
    setName('');
    setPassword('');
  };

  return (
    <>
      <Form onSubmit={handleOnSubmit}>
        <div className={scss.form}>
          <Form.Group className={scss.group} controlId='validationCustom01'>
            <Form.Label className={scss.lable}>First name</Form.Label>
            <Form.Control
              className={scss.input}
              type='text'
              placeholder='First name'
              name='name'
              value={name}
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group className={scss.group} controlId='formBasicEmail'>
            <Form.Label className={scss.lable}>Email address</Form.Label>
            <Form.Control
              className={scss.input}
              type='email'
              placeholder='Enter email'
              name='email'
              value={email}
              onChange={handleOnChange}
            />
            <Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text>
          </Form.Group>

          <Form.Group className={scss.group} controlId='formBasicPassword'>
            <Form.Label className={scss.lable}>Password</Form.Label>
            <Form.Control
              className={scss.input}
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={handleOnChange}
            />
          </Form.Group>
          <Button className={scss.button} variant='primary' type='submit'>
            Submit
          </Button>
        </div>
      </Form>
      <ToastContainer />
    </>
  );
}
