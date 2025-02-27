import { Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home";
import Collections from './Pages/Collections';
import CollectionDetails from './Pages/ClollectionDatail';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/collections/:id" element={<CollectionDetails />} />
    </Routes>

  )
}

export default App;