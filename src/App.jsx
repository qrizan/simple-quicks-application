import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import FloatingButton from "./components/FloatingButton/FloatingButton";

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <MainContent />
      <FloatingButton />
    </div>
  );
}

export default App;
