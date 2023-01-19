// import { PromiseProvider } from 'mongoose';
import logo from '../assets/images/deliveroo-plus.svg';
import './App.css';
import axios from "axios";


function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://localhost:3001");
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  


  return (
    <div className="App">
      <header>
        <div className="bloc-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>
  {/* ------------------------------------------------------------ */}
      <hero>
        <div>
          <section className="restaurant">
            <h1>{data.restaurant.name}</h1>
            <p>{data.restaurant.description}</p>
          </section>
          <section className="img-resto">
            <img 
              src={data.restaurant.picture} 
              className="restaurant-picture" 
              alt="image d'un plat proposé par le restaurant" />
          </section>
        </div>
      </hero>
  {/* ------------------------------------------------------------ */}
      <main>
        <div className="menu">
          <div className="menu-categories">
            <div className="categories">
              <h2>
                {data.categories.name}
              </h2> 
              categories.meals}
            
            </div>

          </div>
      
          {/* boucle pour chaque categorie */}
          {/* demander l'affichage pour chaque categorie : MENU & IMG */}


        </div>
        <div className="panier">

        </div>
      </main>

    </div>
  );
}

export default App;
