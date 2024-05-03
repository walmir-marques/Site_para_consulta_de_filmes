import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import AppRoutes from "./routes/Routes";

function App() {
  return (
    <div className="w-[90%] mx-auto p-4">
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}
export default App;
