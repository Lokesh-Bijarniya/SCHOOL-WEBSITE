import React from 'react';  

const ImportantDates = () => {  
  const dates = [  
    { title: 'Application Opens', date: 'June - July 2024' },  
    { title: 'Early Action and Early Decision Deadlines', date: 'September 1 or September 15, 2024' },  
    { title: 'Financial Aid Applications', date: 'FAFSA opens on October 1, 2024' },  
    { title: 'Notification of Admission Decisions', date: 'Mid-December 2023 for Early Action/Decision, March - April 2024 for Regular Decision' },  
    { title: 'Acceptance Deposit Deadline', date: 'August 1, 2024' },  
    { title: 'Orientation and Enrollment', date: 'September - October 2024' },  
  ];  

  return (  
    <div className="max-w-2xl mx-auto p-4">  
      <h1 className="text-3xl font-bold mb-6 text-center">Important Dates for 2024 Admissions</h1>  
      <ul className="space-y-4">  
        {dates.map((item, index) => (  
          <li key={index} className="p-4 border rounded-lg shadow-md bg-white">  
            <h2 className="text-xl font-semibold">{item.title}</h2>  
            <p className="text-gray-700">{item.date}</p>  
          </li>  
        ))}  
      </ul>  
    </div>  
  );  
};  

export default ImportantDates;