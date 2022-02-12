import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Themer from './helpers/Themer';
import { Home, BillCycles } from './pages';

export default () => (
    <Themer>
        <Router>
            <Routes>
                <Route path='/bill-cycles' exact element={<BillCycles.ViewAll />} />
                <Route path='/bill-cycles/:id' exact element={<BillCycles.ViewDetails />} />
                <Route path='/bill-cycles/new' exact element={<BillCycles.Create />} />

                <Route path='/' element={<Home />} />
            </Routes>
        </Router>
    </Themer>
);
