import "./Search.css";

export default function Search({ search, setSearch }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
    </div>
  );
}
