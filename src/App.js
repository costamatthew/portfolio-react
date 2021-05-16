import Routes from "./routes/index";
import Topbar from "./components/Topbar/Topbar";
import Footer from "./components/Footer/Footer";

import "./styles/globalStyles.css";

const App = () => {
  return (
    <>
      <Topbar />
      <Routes />
      <Footer />
    </>
  );
};

export default App;
