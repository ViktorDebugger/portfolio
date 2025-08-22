import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from "./pages/page";
import Header from "./components/header";
import Footer from "./components/footer";
import NotFound from "./pages/not-found";

const App = () => {
  return (
    <Router>
      <div className="bg-light-bg dark:bg-dark-bg flex min-h-screen flex-col justify-between overflow-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
