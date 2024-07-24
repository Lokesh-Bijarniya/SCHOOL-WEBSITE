 

const facultyMembers = [  
  {  
    name: 'Dr. John Doe',  
    position: 'Professor of Computer Science',  
    description: 'Dr. Doe specializes in machine learning and artificial intelligence with over 10 years of teaching experience.',  
    imageUrl: 'https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&w=800',  
  },  
  {  
    name: 'Dr. Jane Smith',  
    position: 'Associate Professor of Mathematics',  
    description: 'Dr. Smith focuses on applied mathematics and has authored several research papers in statistical modeling.',  
    imageUrl: 'https://images.pexels.com/photos/5212338/pexels-photo-5212338.jpeg?auto=compress&cs=tinysrgb&w=800', 
  },  
  {  
    name: "Dr. Alexi Turner",  
    position: "Professor of Computer Science Advanced",  
    description: "Dr. Turner specializes in deep learning techniques and their application to natural language processing, bringing over 10 years of teaching and research experience.",  
    imageUrl: "https://images.pexels.com/photos/5306494/pexels-photo-5306494.jpeg?auto=compress&cs=tinysrgb&w=800"  
  },  
  {  
    name: "Dr. Sarah Collins",  
    position: "Professor of Entrepreneurship and Innovation",  
    description: "Dr. Collins focuses on entrepreneurship strategy and innovation management, mentoring students in start-up development and venture creation.",  
    imageUrl: "https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=800" 
  },  
  {  
    name: "Dr. Lisa Green",  
    position: "Assistant Professor of Language and Communication",  
    description: "Dr. Green examines the role of communication in scientific discourse, fostering skills in effective writing and presentation for aspiring researchers.",  
    imageUrl: "https://images.pexels.com/photos/5306480/pexels-photo-5306480.jpeg?auto=compress&cs=tinysrgb&w=800" 
  },
  {  
    name: 'Dr. Emily Johnson',  
    position: 'Assistant Professor of Biology',  
    description: 'Dr. Johnson studies cellular biology and is passionate about mentoring students in their research.',  
    imageUrl: 'https://images.pexels.com/photos/5428155/pexels-photo-5428155.jpeg?auto=compress&cs=tinysrgb&w=800',  
  },      
];  

const FacultyProfiles = () => {  
  return (  
    <div className="max-w-6xl mx-auto p-4">  
      <h1 className="text-3xl font-bold mb-6 text-center">Meet Our Dedicated Faculty Members</h1>  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">  
        {facultyMembers.map((faculty, index) => (  
          <div key={index} className="bg-white border rounded-lg shadow-md p-4">  
            <img  
              src={faculty.imageUrl}  
              alt={`Profile of ${faculty.name}`}  
              className="h-32 w-32 rounded-full mx-auto mb-4"  
            />  
            <h2 className="text-xl font-semibold text-center">{faculty.name}</h2>  
            <h3 className="text-md font-medium text-gray-600 text-center">{faculty.position}</h3>  
            <p className="text-gray-700 text-center mt-2">{faculty.description}</p>  
          </div>  
        ))}  
      </div>  
    </div>  
  );  
};  

export default FacultyProfiles;