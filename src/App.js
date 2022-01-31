import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import store from './redux/configureStore';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
