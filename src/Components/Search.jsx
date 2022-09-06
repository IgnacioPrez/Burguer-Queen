import './search.css'
const Search = () => {
  return (
    <div className="form__group field">
    <input  placeholder="Name" className="form__field" type="input"/>
    <label className="form__label" for="name">Busca tú burguer</label>
    </div>
  );
};

export default Search;
