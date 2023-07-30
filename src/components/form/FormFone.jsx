import css from './FormFone.module.css';

export default function FormPhone({ onSubmit, onChange, name, number }) {
  return (
    <form className={css.form_Add_Contact} onSubmit={onSubmit}>
      <div className={css.decor_input}>
        <label className={css.lable} htmlFor="name">
          Name
        </label>
        <input
          className={css.input}
          id="name"
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onChange}
          value={name}
        />
      </div>
      <div className={css.decor_input}>
        <label className={css.lable} htmlFor="number">
          Number
        </label>
        <input
          className={css.input}
          id="number"
          type="tel"
          name="number"
          // pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
          // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onChange}
          value={number}
        />
      </div>
      <button className={css.btn_add} type="submit" disabled={!name || !number}>
        Add contact
      </button>
    </form>
  );
}
