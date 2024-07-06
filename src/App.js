import  Navbar  from './components/Navbar';
import Home from './pages/Home';
import ContactSection from './components/contact';
// import AllRoutes from './routes/AllRoutes';
import  Footer  from './components/Footer';
import EventDashboard from './components/EventDashboard';
import FAQ from './components/FAQ';
// import EventTimeline from './components/EventTimeline';
// import styles from './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      {/* <AllRoutes /> */}
      <Home/>
      <EventDashboard />
      {/* <EventTimeline /> */}
      <FAQ />
      <ContactSection/>
      <Footer />
    </div>
  );
}

export default App;
