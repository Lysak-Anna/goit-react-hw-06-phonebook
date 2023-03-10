import { Input } from 'components/Filter/Filter.styled';
import { Label, AddIcon, MobileIcon, UserIcon } from './ContactForm.styled';
import { Button } from 'components/Wrapper/Wrapper.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { selectContacts } from 'redux/selectors';
import { toast } from 'react-toastify';
export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  function checkName(array, name) {
    return array.some(item => name.toLowerCase() === item.name.toLowerCase());
  }
  function onSubmitHandler(event) {
    event.preventDefault();
    const name = event.currentTarget.elements.name.value;
    const number = event.currentTarget.elements.number.value;
    checkName(contacts, name)
      ? toast.warning(`${name} is already in your contacts`)
      : dispatch(addContact(name, number));

    event.currentTarget.reset();
  }
  return (
    <form onSubmit={onSubmitHandler}>
      <Label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+((['
            -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only
            letters, apostrophe, dash and spaces. For example Adrian, Jacob
            Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Name"
        ></Input>
        <UserIcon />
      </Label>

      <Label>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Number"
        ></Input>
        <MobileIcon />
      </Label>
      <Button type="submit">
        <AddIcon />
      </Button>
    </form>
  );
}
