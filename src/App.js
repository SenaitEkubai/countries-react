import "./App.css";
import AllCountries from "./AllCountries";

function App() {
  function change() {
    const modeIcon = document.querySelector(".fa-moon");
    document.body.classList.toggle("light");
    modeIcon.innerHTML = "dark mode";
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.classList.toggle("card-background");
    });
    // check if select and input menus exist and add  a toggle class

    const selectAndInput = document.querySelector(".select-input-container");
    if (selectAndInput) {
      selectAndInput.classList.toggle("light-mode");
    }
  }

  return (
    <div className="App">
      <div className="title-icon">
        <h2>Where in the World? </h2>
        <span className="icon">
          <i className="fas fa-moon" onClick={() => change()}>
            {" "}
            light mode
          </i>
        </span>
      </div>
      <AllCountries />
    </div>
  );
}

export default App;
