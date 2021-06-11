import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import shortid from 'shortid';
import scss from './Form.module.scss';
import { operations, contactsSelector } from '../../redux/form-contacts';

// class Form extends Component {
//   state = {
//     id: '',
//     name: '',
//     number: '',
//   };

//   componentDidMount() {
//     this.props.fetchContacts();
//   }

//   handleChange = (e) => {
//     const { name, value } = e.currentTarget;
//     this.setState({
//       [name]: value,
//       id: shortid.generate(),
//     });
//   };

//   formSubmitHandler = (data) => {
//     const newName = this.props.contacts.some((contact) => contact.name.toLowerCase().includes(data.name.toLowerCase()));

//     if (newName) {
//       return alert(`${data.name} is already in contacts`);
//     } else {
//       this.props.addContacts(data);
//     }
//   };

//   handleOnSubmit = (e) => {
//     e.preventDefault();
//     this.formSubmitHandler(this.state);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };
//   render() {
//     return (
//       <>
//         <form onSubmit={this.handleOnSubmit} className={scss.form}>
//           <label className={scss.lable}>
//             Name
//             <input
//               className={scss.input}
//               type='text'
//               name='name'
//               value={this.state.name}
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title='Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan и т.п.'
//               required
//               onChange={this.handleChange}
//             />
//           </label>
//           <label className={scss.lable}>
//             Number
//             <input
//               className={scss.input}
//               type='tel'
//               name='number'
//               value={this.state.number}
//               pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
//               title='Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +'
//               required
//               onChange={this.handleChange}
//             />
//           </label>
//           <button type='submit' className={scss.button}>
//             Add contact
//           </button>
//         </form>
//       </>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     contacts: contactsSelector.getContacts(state),
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchContacts: () => dispatch(operations.fetchContacts()),
//     addContacts: (data) => dispatch(operations.addToContacts(data)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Form);

export default function Form() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelector.getContacts);

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.log(`Проверьте тип данных ${name}`);
    }

    setId(shortid.generate());
  };

  useEffect(() => {
    console.log('form');
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  const formSubmitHandler = (data) => {
    const newName = contacts.some((contact) => contact.name.toLowerCase().includes(data.name.toLowerCase()));

    if (newName) {
      return alert(`${data.name} is already in contacts`);
    } else {
      dispatch(operations.addToContacts(data));
      console.log('form 138');
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    formSubmitHandler({ id, name, number });
    reset();
  };

  const reset = () => {
    setId('');
    setName('');
    setNumber('');
  };

  return (
    <>
      <form onSubmit={handleOnSubmit} className={scss.form}>
        <label className={scss.lable}>
          Name
          <input
            className={scss.input}
            type='text'
            name='name'
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title='Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan и т.п.'
            required
            onChange={handleChange}
          />
        </label>
        <label className={scss.lable}>
          Number
          <input
            className={scss.input}
            type='tel'
            name='number'
            value={number}
            pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
            title='Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +'
            required
            onChange={handleChange}
          />
        </label>
        <button type='submit' className={scss.button}>
          Add contact
        </button>
      </form>
    </>
  );
}
