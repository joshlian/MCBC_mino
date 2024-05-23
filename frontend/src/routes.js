import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import MinoInfo from './pages/MinoInfo';

export const PageRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/MinoInfo" element={<MinoInfo />} />
            </Routes>
        </Router>
    );
}