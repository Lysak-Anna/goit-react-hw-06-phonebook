import './App.css';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { Title } from 'components/Title/Title';
import Wrapper from 'components/Wrapper/Wrapper';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Title>Phonebook</Title>
        <ContactForm />
        <Title>Contacts</Title>
        <Filter />
        <ContactList />
      </Wrapper>
      <ToastContainer position="top-center" theme="colored" />
    </div>
  );
}

export default App;
