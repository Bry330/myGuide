import Home from './Home';
import Navbar from './Navbar';
import Text from './Text';

function App() {
  const title = "Bienvenidos"

  return (
    <div className="App">
      <Navbar />
      <div className='content'>
        <Home />
        <Text />
      </div>
    </div>
  );
}

export default App;
