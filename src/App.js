import './App.css';
import { UserProvider } from './UserContext';
import SearchPanel from './components/SearchPanel/SearchPanel';
import UserDetail from './components/UserDetail/UserDetail';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <SearchPanel/>
        <UserDetail/>
      </UserProvider>
    </div>
  );
}

export default App;
