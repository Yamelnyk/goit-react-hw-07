import css from "./Contact.module.css";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
export default function Contact({
  contacts: { name, id, number },
  deleteContact,
}) {
  return (
    <>
      <div className={css.contactGroup}>
        <ul className={css.list}>
          <li>
            <FaUser className={css.svg} /> {name}
          </li>
          <li>
            <FaPhoneAlt className={css.svg} /> {number}
          </li>
        </ul>
        <button onClick={() => deleteContact(id)} className={css.btn}>
          Delete
        </button>
      </div>
    </>
  );
}
