function FilterForm() {
  return (
    <div className="bg-white p-4 shadow rounded-lg mt-6">
      <h2 className="text-xl font-bold mb-4">Filters</h2>
      <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <select className="border p-2 rounded">
          <option>Select Workshop</option>
          <option>Python</option>
          <option>Scilab</option>
        </select>

        <select className="border p-2 rounded">
          <option>Select State</option>
          <option>Maharashtra</option>
          <option>Tamil Nadu</option>
        </select>

        <input
          type="date"
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 col-span-1 md:col-span-3"
        >
          Apply Filters
        </button>
      </form>
    </div>
  );
}

export default FilterForm;
