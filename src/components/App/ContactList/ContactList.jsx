import css from "./ContactList.module.css";
import Contact from "./Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilter } from "../../../redux/filtersSlice";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filterValue = useSelector(selectFilter);

  const filteredContacts = contacts.filter((value) =>
    value.name
      ?.toLocaleLowerCase()
      .includes(filterValue.toLocaleLowerCase() || "")
  );

  return (
    <ul className={css.ul}>
      {filteredContacts.map((user) => (
        <li key={user.id}>
          <Contact id={user.id} name={user.name} number={user.number} />
        </li>
      ))}
    </ul>
  );
}
