// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Contact from './components/Contact';
import Joke from './components/Joke';

function App() {
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
      <Joke
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
      />
      <Joke
        punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
        isPun={true}
        upvotes={10}
        downvotes={2}
        comments={[{ author: "", body: "", title: "" }]}
      />
      <Joke
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
        isPun={false}
        upvotes={14}
        downvotes={6}
      />
      <Joke
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!"
        isPun={true}
        upvotes={11}
        downvotes={3}
      />
      <Joke
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy."
        isPun={true}
        upvotes={11}
        downvotes={3}
        />
      <Joke
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm."
        isPun={true}
        upvotes={11}
        downvotes={3}
      />
      <Joke
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"
        isPun={false}
        upvotes={11}
        downvotes={3}
      />
    </div>
  );
}

export default App;
