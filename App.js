import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import HomeworkList from './HomeworkList';
import HomeworkViewer from './HomeworkViewer';
import GradeViewer from './GradeViewer';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/homework-list" element={<HomeworkList />} />
          <Route path="/view-homework/:id" element={<HomeworkViewer />} />
          <Route path="/grades" element={<GradeViewer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
