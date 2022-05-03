import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Home from '../../pages/Home';

const RootRoutes = () => (
  <BrowserRouter>
    <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default RootRoutes
