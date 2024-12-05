import Allroutes from "./routes/Allroutes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <div>
        <Header />
        <Allroutes />
        <Footer />
      </div>
    </>
  );
};

export default App;
