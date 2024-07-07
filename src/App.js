import  Navbar  from './components/Navbar';
import Home from './pages/Home';
import ContactSection from './components/contact';
// import AllRoutes from './routes/AllRoutes';
import  Footer  from './components/Footer';
import EventDashboard from './components/EventDashboard';
import FAQ from './components/FAQ';


function App() {
  console.log("object")
  return (
    <div className='App'>
      <Navbar />
      {/* <AllRoutes /> */}
      <Home/>
      <EventDashboard />
      <FAQ />
      <ContactSection/>
      <Footer />
    </div>
  );
}

export default App;
