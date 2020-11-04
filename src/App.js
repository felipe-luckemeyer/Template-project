import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
