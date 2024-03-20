import Title from "./Front.jsx";
import {CORE_CONCEPTS} from "./data.js";
import {CoreConcepts} from "./Components/CoreConcepts";
import DataDetails from "./Components/DataDetails";
import Button from './Components/Button.jsx';

function App() {
  return (
    <div>
      <header>
        <img src="src/assets/config.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <Title />
      <main>
        <h2>Time to get started!</h2>
        <section id = "core-concepts">
        <ul>
        <CoreConcepts
        title = {CORE_CONCEPTS[1].title}
        image = {CORE_CONCEPTS[1].image}
        description = {CORE_CONCEPTS[1].description}
                 />
        </ul>
        </section>
        <section id = "core-concepts">
        <ul>
        <DataDetails
        title = {CORE_CONCEPTS[0].title}
        image = {CORE_CONCEPTS[0].image}
        description = {CORE_CONCEPTS[1].description}
         />
         <DataDetails {...CORE_CONCEPTS[1]}/>

          <DataDetails title = "Render" />
          <DataDetails
          title = { CORE_CONCEPTS[2].title}
          image = {CORE_CONCEPTS[2].image}
          description = {CORE_CONCEPTS[2].description}/>
      </ul>
      </section>
      <div>
      <ul>
      <Button id = '#examples menu button' > Add new Item </Button> </ul> </div>
      </main>
    </div>
  );
}

export default App;
