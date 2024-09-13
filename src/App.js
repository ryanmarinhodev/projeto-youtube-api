import Header from "./components/Header";
import Menu from "./components/Menu";


function App() {
  return (
    <div className="App">
      <Header />
      <div style={{width: '100%', display: 'flex'}}>
        <Menu />
        <div style={{ backgroundColor: 'Blue', width: '100%' }}>
        </div>
      </div>
    </div>
  );
}

export default App;
