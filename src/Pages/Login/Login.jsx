import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { authOperations } from '../../redux/auth';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import scss from './Login.module.scss';

// class Login extends Component {
//   state = {
//     email: '',
//     password: '',
//   };

//   handleOnChange = (e) => {
//     const { value, type } = e.target;
//     this.setState({ [type]: value });
//   };

//   handleOnSubmit = (e) => {
//     e.preventDefault();
//     this.props.onLogin(this.state);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ email: '', password: '' });
//   };

//   render() {
//     const { email, password } = this.state;
//     return (
//       <>
//         <Form onSubmit={this.handleOnSubmit}>
//           <div className={scss.form}>
//             <Form.Group className={scss.group} controlId='formBasicEmail'>
//               <Form.Label className={scss.lable}>Email address</Form.Label>
//               <Form.Control
//                 className={scss.input}
//                 type='email'
//                 placeholder='Enter email'
//                 value={email}
//                 onChange={this.handleOnChange}
//               />
//               <Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text>
//             </Form.Group>

//             <Form.Group className={scss.group} controlId='formBasicPassword'>
//               <Form.Label className={scss.lable}>Password</Form.Label>
//               <Form.Control
//                 className={scss.input}
//                 type='password'
//                 placeholder='Password'
//                 value={password}
//                 onChange={this.handleOnChange}
//               />
//             </Form.Group>
//             <Button className={scss.button} variant='primary' type='submit'>
//               Submit
//             </Button>
//           </div>
//         </Form>
//         <ToastContainer />
//       </>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onLogin: authOperations.login,
// };

// export default connect(null, mapDispatchToProps)(Login);

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { value, type } = e.target;
    switch (type) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        console.log('Неверные данные');
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.login({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Form onSubmit={handleOnSubmit}>
        <div className={scss.form}>
          <Form.Group className={scss.group} controlId='formBasicEmail'>
            <Form.Label className={scss.lable}>Email address</Form.Label>
            <Form.Control
              className={scss.input}
              type='email'
              placeholder='Enter email'
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
