import './App.css';
import LicnaKarta from './components/LicnaKarta/LicnaKarta';
import Lista from './components/Lista/Lista';
import Film from './components/Film/Film';
import Knjiga from './components/Knjiga/Knjiga'

function App() {
  return (
    <div className="App">
        <Lista>
          <LicnaKarta fullName="Sinisa Dakovic" birthDate="20.05.2003" town="Niksic" image="logo.svg"/>
          <LicnaKarta fullName="Stefan Nikolic" birthDate="17.01.1999" town="Niksic" image="logo.svg"/>
          <LicnaKarta fullName="Petar Djurkovic" birthDate="11.08.2003" town="Niksic" image="logo.svg"/>
          <Film movieName="Interstellar" year="2014" genre="Science Fiction" director="Cristopher" actors="Casey Affleck,Russ Fega,Mackenzie Foy" image="logo.svg"/>
          <Film movieName="The Godfather" year="1972" genre="Crime/Drama" director="Francis Ford Coppola" actors="Marlon Brando,Al Pacino, James Caan" image="logo.svg"/>
          <Film movieName="The Matrix" year="1999" genre="Action/Sci-fi" director="Lana Wachowski" actors="Keanu Reeves,Laurence Fishburne,Carrie-Anne Moss" image="logo.svg"/>
          <Knjiga name="Meditations" year="AD 161-180" author="Marcus Aurelius" image="logo.svg" quote="“You have power over your mind - not outside events. Realize this, and you will find strength.”"/>
          <Knjiga name="Think and grow rich" year="1937" author="Napoleon Hill" image="logo.svg" quote="“If you do not conquer self, you will be conquered by self.”"/>
          <Knjiga name="Art of War" year="475 and 221 B.C.E." author="Sun Tzu" image="logo.svg" quote="“The greatest victory is that which requires no battle.”"/>
        </Lista>
    </div>
  );
}

export default App;
