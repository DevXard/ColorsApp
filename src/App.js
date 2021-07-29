import Pallet from './Pallet'
import seedColors from './seedColors';

function App() {
  console.log(seedColors)
  return (
    <div className="App">
      <Pallet {...seedColors[4]}/>
    </div>
  );
}

export default App;
