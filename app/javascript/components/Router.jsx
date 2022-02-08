import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import BillCycles from './BillCycles/ViewAll';
import BillCycle from './BillCycles/ViewDetails';
import NewCycle from './BillCycles/Create';

export default () => (
    <>
        <Router>
            <Routes>
                <Route path='/bill-cycles' exact element={<BillCycles />} />
                <Route path='/bill-cycles/:id' exact element={<BillCycle />} />
                <Route path='/bill-cycles/new' exact element={<NewCycle />} />

                <Route path='/' element={<Home />} />
            </Routes>
        </Router>
    </>
);
