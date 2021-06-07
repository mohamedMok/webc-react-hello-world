import '@mozaic-ds/mozaic-web-components/public/bundle.js';
import '@mozaic-ds/mozaic-web-components/public/icons.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <mc-button label="Mozaic Button" iconleft="true"> 
        <user-account-customer--collaborator-24px slot="iconLeft" />
      </mc-button>
      <user-account-customer--collaborator-64px />
    </div>
  );
}

export default App;
