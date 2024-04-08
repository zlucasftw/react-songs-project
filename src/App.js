import Banner from './components/Banner';
import Card from './components/Card';
import Container from './components/Container';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>
    <Header />
    <Banner image="aurora-borealis-loop5.gif" />
    <Container>
      <h2>Songs</h2>
      <Card />
    </Container>
    <Footer />
    </>
  );
}

export default App;
