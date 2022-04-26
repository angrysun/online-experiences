// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Contact from './components/Contact';
import Joke from './components/Joke';
import jokesData from './components/jokesData';

function App() {
  const jokeElements = jokesData.map(joke => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card />
      <Contact
        img="./images/mr-whiskerson.png"
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Card
        img="katie-zaferes.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price={136}
      />
      {jokeElements}
    </div>
  );
}

export default App;
