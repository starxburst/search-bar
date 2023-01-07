import './App.css';
import { UserProvider } from './UserContext';
import SearchPanel from './components/SearchPanel/SearchPanel';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <SearchPanel/>
      </UserProvider>
    </div>
  );
}

export default App;
