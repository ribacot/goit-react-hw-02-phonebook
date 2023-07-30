import css from './Search.module.css';

export default function Search({ click }) {
  return (
    <div className={css.decor_search}>
      <label className={css.lable} htmlFor="search">
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        id="search"
        name="name"
        onChange={click}
        //    value={searchName}
      />
    </div>
  );
}
