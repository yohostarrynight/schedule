import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from '../components/menu';
import { Flex } from '../common-style/flex';

function App(): JSX.Element {
  return (
    <Router>
      <Flex>
        <Menu />
        <Routes>
          <Route path="/" element={<div>任务列表</div>} />
          <Route path="addMission" element={<div>add任务</div>} />
        </Routes>
      </Flex>
    </Router>
  );
}

export default App;
