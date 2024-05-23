import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MinoInfo from './pages/MinoInfo';

export const PageRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/MinoInfo" element={<MinoInfo />} />
            </Routes>
        </Router>
    );
}