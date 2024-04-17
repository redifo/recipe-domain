
import styles from './App.module.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Footer />
    </div>
  );
}

export default App;