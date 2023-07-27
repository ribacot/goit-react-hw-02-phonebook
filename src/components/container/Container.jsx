import css from './Container.module.css';

export default function Container({ title, sectionClass, children }) {
  return (
    <section className={sectionClass && css[sectionClass]}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}
