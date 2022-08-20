import { useTheme, useThemeUpdate } from "./context/ThemeContext";

const FunctionalComponent = () => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const backgroundTheme = {
    backgroundColor: darkTheme ? "black" : "white",
    color: darkTheme ? "white" : "black",
    width: "200px",
    height: "200px",
    textAlign: "center",
    padding: "20px",
  };

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={backgroundTheme}>functional context</div>
    </div>
  );
};

export default FunctionalComponent;
