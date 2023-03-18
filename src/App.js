import Home from "./components/Home"
import './App.css';
import { useEffect } from "react";
import DataProvider from "./context/DataProvider";
function App() {
  useEffect(() => {
    const unloadCallback = (event) => {
      event.preventDefault();
      event.returnValue = "";
      return "";
    };

    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, []);
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  )
}

export default App;
