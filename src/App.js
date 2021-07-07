import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store'
import CatContainer from './components/CatContainer';
function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <CatContainer />
      </div>
    </Provider>
  );
}

export default App;
