// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
// import Contact from './components/Contact';
// import Joke from './components/Joke';
// import jokesData from './jokesData';
import data from './data';

function App() {
  const cards = data.map(card => {
    return <Card
      img={card.coverImg}
      rating={card.stats.rating}
      reviewCount={card.stats.reviewCount}
      location={card.location}
      title={card.title}
      price={card.price}
    />
  })
  // const jokeElements = jokesData.map(joke => {
  //   return <Joke setup={joke.setup} punchline={joke.punchline} />
  // })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cards}
      </section>
      {/* {jokeElements} */}
    </div>
  );
}

export default App;
