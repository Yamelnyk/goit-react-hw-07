import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <div className={css.contactGroup}>
      <ul className={css.list}>
        <li>
          <FaUser className={css.svg} /> {contact.name}
        </li>
        <li>
          <FaPhoneAlt className={css.svg} /> {contact.number}
        </li>
      </ul>
      <button
        className={css.btn}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </div>
  );
}
