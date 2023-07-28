export default function FormPhone({onSubmit,onChange,name})
{
    return (
      <form onSubmit={onSubmit}>
        <label>
          Name<br></br>
          <input
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={onChange}
value={name}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    ); }