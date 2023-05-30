import './App.css';
import Dashboard from './layouts/Dashboard';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import NavigationBar from './layouts/NavigationBar';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Container style={{marginTop:"6em"}}>
        <Dashboard />
      </Container>
    </div>
  );
}

export default App;
