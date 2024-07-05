import  Navbar  from './components/Navbar';
import Home from './pages/Home';
import ContactSection from './components/contact';
// import AllRoutes from './routes/AllRoutes';
import  Footer  from './components/Footer';
import EventDashboard from './components/EventDashboard';

function App() {
  return (
    <div className='App'>
      <Navbar />
      {/* <AllRoutes /> */}
      <Home/>
      <EventDashboard />
      <ContactSection/>
      <Footer />
    </div>
  );
}

export default App;
