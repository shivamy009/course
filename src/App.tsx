
import Sidebar from './components/Sidebar';
import CourseDetails from './components/CourseDetails';
import PricingSection from './components/PricingSection';

const App= () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
    <Sidebar />
    <div className="flex-1 flex flex-col lg:flex-row">
      <CourseDetails />
      <PricingSection />
    </div>
  </div>
  );
};

export default App;
