import PropTypes from 'prop-types';

export default function FilterItem ({ filters, onChange }) {
  return (
    <div className="filter-section">
      {filters.map((filterItem) => (
        <div key={filterItem.id} className="checkbox-list">
          <input
            type="checkbox"
            id={filterItem.id}
            name={filterItem.name}
            value={filterItem.id}
            onChange={onChange}
          />
          <label htmlFor={filterItem.id}>{filterItem.name}</label>
        </div>
      ))}
    </div>
  );
};

FilterItem.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      slug: PropTypes.string,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};
