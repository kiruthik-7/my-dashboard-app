import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Counter from './pages/Counter.jsx';
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <header>
        <h1>Welcome to My Web Page</h1>

        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/counter">Counter</Link></li>
            <li><a href="#about">About</a></li>
            <li><a href="#vacation">Vacation</a></li>
            <li><a href="#vacation-details">Vacation Details</a></li>
            <li><a href="#rpg-world">RPG World</a></li>
            <li><a href="#about-page">About Page</a></li>
          </ul>
        </nav>
      </header>
      
      <hr />

      <main>
        <div className="page-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/counter" element={<Counter />} />
            </Routes>
        </div>

        
        <p>
          This is the <strong><em>main content</em></strong> of the page.
        </p>
        <p>
          This is the main content of the{' '}
          <a href="https://en.wikipedia.org/wiki/Role-playing_video_game">
            <abbr title="Role-Playing Game">RPG</abbr>
          </a>{' '}
          game page.
        </p>

        <section id="about">
          <h2>About This Page</h2>
          <ol>
            <li>This is a simple web page.</li>
            <li>This page contains information about the website.</li>
            <li>More information can be found on the about page.</li>
            <li>This page is created by Jk Sparrow.</li>
            <li>This page is designed to be responsive and user-friendly.</li>
          </ol>
        </section>

        <hr />

        <section id="vacation">
          <h2>Vacation Trip</h2>

          <p>
            My vacation trip to Hawaii was an unforgettable experience. I spent 7
            days exploring the beautiful beaches, hiking through lush landscapes,
            and immersing myself in the local culture. The beachfront resort
            provided a perfect place to relax and unwind after a day of adventure.
            I also had the opportunity to try various activities such as
            snorkeling, surfing, and attending traditional Hawaiian luaus. Overall,
            it was a memorable trip filled with amazing experiences and breathtaking
            scenery.
          </p>
          <p>Various activities to do in Hawaii</p>
          <p>famous attractions and activities to do in Hawaii:</p>

          <ul>
            <li>Snorkeling at Hanauma Bay</li>
            <li>Surfing lessons on Waikiki Beach</li>
            <li>Hiking the Diamond Head Trail</li>
            <li>Exploring the Polynesian Cultural Center</li>
            <li>Visiting the USS Arizona Memorial at Pearl Harbor</li>
            <li>Taking a helicopter tour of the islands</li>
            <li>Enjoying a traditional Hawaiian luau</li>
          </ul>
        </section>

        <hr />

        <section id="vacation-details">
          <h3>Vacation Trip Details</h3>
          <ul>
            <li>Destination: Hawaii</li>
            <li>Duration: 7 days</li>
            <li>Activities: Beach relaxation, hiking, and cultural exploration</li>
            <li>Accommodation: Beachfront resort</li>
            <li>Transportation: Flight and rental car</li>
          </ul>
        </section>

        <hr />

        <section id="rpg-world">
          <h2>RPG Game World</h2>

          <p>
            In this RPG game world, players can embark on epic quests, battle
            formidable foes, and explore vast landscapes filled with hidden
            treasures and secrets. The game features a rich storyline, immersive
            gameplay mechanics, and a dynamic environment that reacts to player
            choices.
          </p>
          <p>
            Players can customize their characters, form alliances with other
            players, and participate in challenging dungeons and raids. The game
            also includes a crafting system, allowing players to create powerful
            weapons and armor to aid them in their adventures.
          </p>
          <p>
            Whether you are a seasoned gamer or new to the RPG genre, this game
            world offers an exciting and engaging experience for all players.
          </p>

          <h3>RPG Games:</h3>

          <ul id="rpg-gs">
            <li><a href="https://en.wikipedia.org/wiki/The_Legend_of_Zelda">The Legend of Zelda</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Final_Fantasy">Final Fantasy</a></li>
            <li><a href="https://en.wikipedia.org/wiki/World_of_Warcraft">World of Warcraft</a></li>
            <li><a href="https://en.wikipedia.org/wiki/The_Elder_Scrolls_V:_Skyrim">The Elder Scrolls V: Skyrim</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Mass_Effect">Mass Effect</a></li>
          </ul>
        </section>
      </main>

      <hr />

      <footer id="about-page">
        &lt;&lt;&copy;<a href="about.html">Jk Sparrow</a> &gt;&gt;
      </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
