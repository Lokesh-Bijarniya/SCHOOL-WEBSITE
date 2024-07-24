 

const StudentLife = () => {  
  return (  
    <div className=" mx-auto p-6">  
      <h1 className="text-3xl font-bold  text-gray-800 mb-6">Student Life</h1>  
      <p className="text-lg text-gray-700 mb-8 ">  
        Our students are involved in various extracurricular activities that promote personal growth, teamwork, and creativity.  
      </p>  

      <div className="space-y-4">  
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">  
          <h2 className="text-xl font-semibold text-gray-800">Sports</h2>  
          <p className="text-gray-600">  
            From soccer to swimming, our athletic programs offer a chance for students to develop their physical skills and engage in healthy competition.  
          </p>  
        </div>  

        <div className="bg-gray-100 p-4 rounded-lg shadow-md">  
          <h2 className="text-xl font-semibold text-gray-800">Clubs and Organizations</h2>  
          <p className="text-gray-600">  
            Join a club that interests you! Whether it’s debate, robotics, or the arts, there’s something for everyone to explore and enjoy.  
          </p>  
        </div>  

        <div className="bg-gray-100 p-4 rounded-lg shadow-md">  
          <h2 className="text-xl font-semibold text-gray-800">Performing Arts</h2>  
          <p className="text-gray-600">  
            Get involved in theater productions, music bands, or dance groups. Showcase your talent and passion for the performing arts!  
          </p>  
        </div>  

        <div className="bg-gray-100 p-4 rounded-lg shadow-md">  
          <h2 className="text-xl font-semibold text-gray-800">Community Service</h2>  
          <p className="text-gray-600">  
            Engage with local organizations and give back to the community through various volunteering opportunities. Make a positive impact!  
          </p>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default StudentLife;
