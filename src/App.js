import  Navbar  from './components/Navbar';
import Home from './pages/Home';
import ContactSection from './components/contact';
// import AllRoutes from './routes/AllRoutes';
import  Footer  from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      {/* <AllRoutes /> */}
      <Home/>
      <ContactSection/>
      <Footer />
    </div>
  );
}

export default App;
