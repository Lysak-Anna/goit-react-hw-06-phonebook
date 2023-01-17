import Item from 'components/Item/Item';
import { sort } from './../../helper';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { selectContacts, selectFilter } from 'redux/selectors';
export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  function filteredContacts() {
    if (filter === '') {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  }

  function deleteItemHandler(event) {
    const id = event.currentTarget.id;
    dispatch(deleteContact(id));
  }

  return (
    <ul>
      {sort(filteredContacts()).map(({ id, name, number }) => (
        <Item
          key={id}
          name={name}
          number={number}
          id={id}
          onClick={deleteItemHandler}
        />
      ))}
    </ul>
  );
}
