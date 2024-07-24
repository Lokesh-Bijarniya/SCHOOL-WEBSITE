// src/pages/Students.js
import React from 'react';
import StudentLife from '../components/StudentLife';
import Achievements from '../components/Achievements';
import StudentCouncil from '../components/Council';

const Students = () => (
  <div className="p-8">
    <div className="mb-8">
      <StudentLife/>
    </div>
    <div className="mb-8">
       <Achievements/>
    </div>
    <div>
       <StudentCouncil/>
    </div>
  </div>
);

export default Students;
