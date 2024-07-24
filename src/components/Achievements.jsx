import React from 'react';  

const Achievements = () => {  
  const accomplishments = [  
    { year: '2023', title: 'National Science Fair Champion', description: 'Our students took home the top prize in the annual National Science Fair with an innovative project on renewable energy.' },  
    { year: '2023', title: 'State Basketball Championship', description: 'The varsity basketball team secured the state championship after an incredible season, showcasing teamwork and resilience.' },  
    { year: '2022', title: 'Debate Championship Winner', description: 'Our debate team won first place in the regional competition, demonstrating exceptional critical thinking and public speaking skills.' },  
    { year: '2022', title: 'Art Competition First Prize', description: 'One of our students received first prize in the local art competition for her outstanding painting, reflecting deep creativity and talent.' },  
    { year: '2021', title: 'Coding Hackathon Winners', description: 'Our coding team emerged victorious in a national hackathon, developing an app aimed at promoting mental health awareness among teens.' },  
  ];  

  return (  
    <div className=" mx-auto p-6 bg-white shadow-md rounded-lg">  
      <h1 className="text-3xl font-bold  text-gray-800 mb-6">Achievements</h1>  
      <p className="text-lg text-gray-700 mb-8 ">  
        Our students have won numerous accolades, showcasing their talent and hard work.  
      </p>  

      <ul className="space-y-4">  
        {accomplishments.map((achievement, index) => (  
          <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">  
            <h2 className="text-xl font-semibold text-gray-800">{achievement.title} <span className="text-gray-500">({achievement.year})</span></h2>  
            <p className="text-gray-600">{achievement.description}</p>  
          </li>  
        ))}  
      </ul>  
    </div>  
  );  
};  

export default Achievements;