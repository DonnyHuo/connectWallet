import "./App.css";

function App() {
  return (
    <div className="App">
      <button>
        <a href={`https://metamask.app.link/dapp/${window.location.href}`}>connect metaMask</a>
      </button>
    </div>
  );
}

export default App;
