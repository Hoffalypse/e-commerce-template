import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./Screens/HomeScreen";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route  } from "react-router-dom";
import ProductScreen from "./Screens/ProductScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path='/' component={HomeScreen}exact />
          <Route path='/product/:id' component={ProductScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
