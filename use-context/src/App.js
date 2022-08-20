import { ThemeProvider } from "./components/context/ThemeContext";
import FunctionalComponent from "./components/FunctionalComponent";
function App() {
  return (
    <ThemeProvider>
      <FunctionalComponent />
    </ThemeProvider>
  );
}

export default App;
