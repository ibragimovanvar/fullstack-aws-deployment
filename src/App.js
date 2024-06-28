import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import TasksPage from './pages/TasksPage';

function App() {
    useEffect(() => {
        document.title = "Frontend App";
    }, []);

    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/tasks" element={<TasksPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;


