import Navbar from "./components/Navbar";
import FilterForm from "./components/FilterForm";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-bold">Workshop Booking System</h2>
        <p className="mt-2 text-gray-700">
          Explore and register for workshops.
        </p>

        <FilterForm />
      </div>
    </div>
  );
}

export default App;
