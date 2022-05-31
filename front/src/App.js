import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="">début de l'appli</div>
      <div class="form">
        <label for="email">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          formControlName="email"
        />
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          formControlName="password"
        />
        <button mat-raised-button color="primary">
          LOGIN
        </button>
        <p class="text-danger"></p>
      </div>
    </div>
  );
}

export default App;
