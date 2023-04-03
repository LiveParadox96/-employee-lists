import "./App.css";
import ListOfDetectives from "./components/details/ListOfEmployees/ListOfDetectives";
import ListOfDoctors from "./components/details/ListOfEmployees/ListOfDoctors.tsx";
import ListOfLifeguards from "./components/details/ListOfEmployees/ListOfLifeguards";
import ListOfPoliceOfficers from "./components/details/ListOfEmployees/ListOfPoliceOfficers";

function App() {
  return (
    <div className="App">
        <ListOfDetectives/>
        <ListOfDoctors/>
        <ListOfPoliceOfficers/>
        <ListOfLifeguards/>
    </div>
  );
}

export default App;
