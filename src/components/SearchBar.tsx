import { useState } from 'react';

const SearchBar: React.FC<{ searchFunc: (query: string) => void }> = ({
  searchFunc,
}) => {
  const [query, setQuery] = useState('');
  return (
    <input
      type="search"
      placeholder="Search"
      className="input input-bordered rounded-lg display"
      onChange={({ target }) => setQuery(target.value)}
      onKeyDown={event => {
        if (event.key == 'Enter') {
          searchFunc(query);
        }
      }}
    />
  );
};
export default SearchBar;
