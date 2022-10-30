import ThemeProvider from './components/themeProvider';
import Template from './components/template';
import './App.css';

function App() {

  return (
    <ThemeProvider>
      <div className="App">
        <header className="App-header-black">
          <Template/>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
