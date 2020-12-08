import './App.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import Row from './components/Row/Row';
import requests from './requests';

function App() {
	return (
		<div className="app">
			<NavBar />
			<Banner />
			<Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
			<Row title="Tranding Now" fetchUrl={requests.fetchTrending} />
			<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
			<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Romance Movies" fetchUrl={requests.fetchRomanticMovies} />
			<Row title="Documentaries" fetchUrl={requests.fetchDocumentories} />
			<footer className='app__footer'>
				© {(new Date()).getFullYear()}, Minhazul Hasan Sohan - All rights reserved
			</footer>
		</div>
	);
}

export default App;
