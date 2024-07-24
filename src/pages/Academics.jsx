// src/pages/Academics.js
import React from 'react';

const Academics = () => (
  <div className="p-8">
    <div className="mb-8">
      <h2 className="text-4xl font-bold">Curriculum</h2>
      <div className="mt-4 text-lg">
        At our Innovative Technology School, we aim to equip students with the skills and knowledge needed to thrive in a rapidly changing digital landscape. Our curriculum is designed to foster creativity, critical thinking, and technological proficiency from primary through senior secondary levels. <br /><br />

        <hr />

        {/* Primary Level Curriculum */}
        <div>
          <h1 className='text-2xl font-semibold'>Primary Level Curriculum (Grades 1-5):</h1>
          <b className='text-xl'>Core Subjects:</b><br />

          <div>
            <b>1. Mathematics:</b><br />
            <ul className='list-disc px-4'>
              <li>Basic arithmetic, geometry, and problem-solving</li>
              <li>Introduction to coding concepts through games and activities</li>
            </ul>
          </div>

          <div>
            <b>2. Science:</b><br />
            <ul className='list-disc px-4'>
              <li>Fundamental principles of physical, life, and earth sciences</li>
              <li>Hands-on experiments and explorations with technology (e.g., simple robotics)</li>
            </ul>
          </div>

          <div>
            <b>3. Language Arts:</b><br />
            <ul className='list-disc px-4'>
              <li>Reading and writing skills enhancement</li>
              <li>Digital storytelling and interactive e-books</li>
            </ul>
          </div>

          <div>
            <b>4. Social Studies:</b><br />
            <ul className='list-disc px-4'>
              <li>Understanding communities, geography, and cultures</li>
              <li>Use of technology for research and presentations</li>
            </ul>
          </div>

          <div className='mt-4'>
            <h1 className='text-2xl font-semibold'>Technology Integration:</h1>
            <p>
              <b>Digital Literacy:</b>
              <ul className='list-disc px-4'>
                <li>Basic computer skills (word processing, internet safety)</li>
                <li>Introduction to visual programming languages (e.g., Scratch)</li>
              </ul>
            </p>
            <p>
              <b>Creative Tech Projects:</b>
              <ul className='list-disc px-4 mb-6'>
                <li>Incorporating art and technology (e.g., digital art, basic animation)</li>
              </ul>
            </p>
          </div>
        </div>

        <hr />

        {/* Secondary Level Curriculum */}
        <div>
          <h1 className='text-2xl font-semibold mt-6'>Secondary Level Curriculum (Grades 6-10):</h1>
          <b className='text-xl'>Core Subjects:</b><br />

          <div>
            <b>1. Mathematics:</b><br />
            <ul className='list-disc px-4'>
              <li>Algebra, geometry, and introductory statistics</li>
              <li>Application of mathematics in programming and software development</li>
            </ul>
          </div>

          <div>
            <b>2. Science:</b><br />
            <ul className='list-disc px-4'>
              <li>Deeper exploration of physical, chemical, and biological sciences</li>
              <li>Integration of technology for experiments (e.g., data collection and analysis)</li>
            </ul>
          </div>

          <div>
            <b>3. Language Arts:</b><br />
            <ul className='list-disc px-4'>
              <li>Advanced writing and critical reading skills</li>
              <li>Digital media projects (videos, podcasts)</li>
            </ul>
          </div>

          <div>
            <b>4. Social Studies:</b><br />
            <ul className='list-disc px-4'>
              <li>Global history, economics, civics, and geography</li>
              <li>Research and presentation using digital tools</li>
            </ul>
          </div>

          <p className='mt-4'>
            <h1 className='text-2xl font-semibold'>Technology Focus:</h1>
            <b>Computer Science Fundamentals:</b>
            <ul className='list-disc px-4'>
              <li>Introduction to coding (Python, JavaScript)</li>
              <li>Understanding algorithms and network basics</li>
            </ul>
          </p>

          <p>
            <b>Media Literacy:</b>
            <ul className='list-disc px-4'>
              <li>Analyzing digital content and understanding its impact</li>
            </ul>
          </p>

          <p>
            <b>Design and Creativity:</b>
            <ul className='list-disc px-4 mb-6'>
              <li>Graphic design, 3D modeling, and basic web design</li>
            </ul>
          </p>
        </div>

        <hr />

        {/* Senior Secondary Level Curriculum */}
        <div>
          <h1 className='text-2xl font-semibold mt-6'>Senior Secondary Level Curriculum (Grades 11-12):</h1>
          <b className='text-xl'>Core Subjects:</b><br />

          <div className='text-lg'>
            <b>1. Advanced Mathematics:</b><br />
            <ul className='list-disc px-4'>
              <li>Calculus, advanced statistics, and discrete mathematics</li>
              <li>Real-world applications, including data analysis</li>
            </ul>
          </div>

          <div className='text-lg'>
            <b>2. Advanced Science:</b><br />
            <ul className='list-disc px-4'>
              <li>Specialized courses (Physics, Chemistry, Biology)</li>
              <li>Projects using technology for data analysis and simulations</li>
            </ul>
          </div>

          <div className='text-lg'>
            <b>3. Language and Communication:</b><br />
            <ul className='list-disc px-4'>
              <li>Persuasive writing, analytical skills, and literature studies</li>
              <li>Multimedia presentations and digital journalism</li>
            </ul>
          </div>

          <div className='text-lg'>
            <b>4. Social Sciences:</b><br />
            <ul className='list-disc px-4'>
              <li>In-depth studies of sociology, psychology, and political science</li>
              <li>Research projects with technology integration</li>
            </ul>
          </div>

          <div className='mt-4 text-lg'>
            <h1 className='text-2xl font-semibold'>Technology Specializations:</h1>
            <p className='text-lg'>
              <b>Computer Science Advanced:</b>
              <ul className='list-disc px-4'>
                <li>Software development, app creation, and game design</li>
                <li>Cybersecurity basics and ethical hacking</li>
              </ul>
            </p>

            <p>
              <b>Digital Arts:</b>
              <ul className='list-disc px-4'>
                <li>Advanced graphic design, animation, and video production</li>
                <li>Creation of digital portfolios</li>
              </ul>
            </p>

            <p>
              <b>Entrepreneurship and Innovation:</b>
              <ul className='list-disc px-4'>
                <li>Introduction to startups, business models, and digital marketing</li>
                <li>Projects to develop and pitch technology-based business ideas</li>
              </ul>
            </p>
          </div>

          <div className='mt-6'>
            <h1 className='text-2xl font-semibold'>Skill Development and Extracurricular Activities:</h1>
            <ul className='list-disc px-4'>
              <li><b>Coding Clubs:</b> Encourage collaborative coding projects and competitions.</li>
              <li><b>Robotics Teams:</b> Hands-on experience in building and programming robots.</li>
              <li><b>Digital Media Programs:</b> Workshops in photography, video editing, and graphic design.</li>
              <li><b>Inquiry-Based Learning Projects:</b> Students work on technology-related topics of interest, fostering independence and creativity.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Teaching Methodologies */}
    <div>
      <h2 className="text-3xl font-bold">Teaching Methodologies</h2>
      <p className="mt-4 text-lg">
        At our Innovative Technology School, we prioritize effective learning through diverse, engaging, and student-centered teaching methodologies. Our approach is designed to cultivate critical thinking, creativity, collaboration, and technological fluency. Below are the key teaching methodologies we employ:

        <hr />

        <div>
          <h1>1. Project-Based Learning (PBL)</h1>
          <ul className='list-disc px-4'>
            <li><b>Description:</b> Students engage in projects that integrate multiple subjects and real-world problems. They work collaboratively to brainstorm, research, design, and present solutions.</li>
            <li><b>Benefits:</b> Enhances problem-solving skills, teamwork, and application of knowledge; promotes intrinsic motivation through hands-on activities.</li>
          </ul>
        </div>

        <div>
          <h1>2. Inquiry-Based Learning</h1>
          <ul className='list-disc px-4'>
            <li><b>Description:</b> This student-centered approach encourages learners to ask questions, conduct investigations, and develop conclusions based on their findings. Teachers facilitate rather than dictate the learning process.</li>
            <li><b>Benefits:</b> Fosters curiosity and a love for learning; develops critical thinking and independent research skills.</li>
          </ul>
        </div>

        <div>
          <h1>3. Flipped Classroom</h1>
          <ul className='list-disc px-4'>
            <li><b>Description:</b> Students learn new content at home through videos or readings and engage in interactive activities or discussions in the classroom. This approach allows for more hands-on learning during class time.</li>
            <li><b>Benefits:</b> Maximizes classroom engagement, encourages self-paced learning, and allows teachers to provide more personalized support.</li>
          </ul>
        </div>

        <div>
          <h1>4. Collaborative Learning</h1>
          <ul className='list-disc px-4'>
            <li><b>Description:</b> Emphasizes working in groups to explore concepts and solve problems. Students share ideas, challenge each other, and create joint products or presentations.</li>
            <li><b>Benefits:</b> Develops communication and interpersonal skills; encourages diversity of thought and perspective.</li>
          </ul>
        </div>

        <div>
          <h1>5. Blended Learning</h1>
          <ul className='list-disc px-4'>
            <li><b>Description:</b> Combines traditional face-to-face instruction with online digital media. Students can learn at their own pace and receive immediate feedback from online assessments.</li>
            <li><b>Benefits:</b> Provides flexibility in learning, accommodates different learning styles, and enhances accessibility to resources.</li>
          </ul>
        </div>

        <div>
          <h1>6. Gamification</h1>
          <ul className='list-disc px-4'>
            <li><b>Description:</b> Incorporates game design elements into the learning process. This can include point scoring, competitions, and interactive simulations to motivate students.</li>
            <li><b>Benefits:</b> Increases engagement, enhances retention of information, and builds a positive learning environment through fun and challenges.</li>
          </ul>
        </div>

        <div>
          <h1>7. Differentiated Instruction</h1>
          <ul className='list-disc px-4'>
            <li><b>Description:</b> Tailors teaching methods to meet the diverse needs of students in the classroom. This includes varying content, process, products, and learning environments based on students' readiness, interests, and learning profiles.</li>
            <li><b>Benefits:</b> Ensures all students receive the support they need to succeed; promotes equity in education.</li>
          </ul>
        </div>

        <div>
          <h1>8. Use of Technology and Digital Tools</h1>
          <ul className='list-disc px-4'>
            <li><b>Description:</b> Leverages technology such as educational software, online resources, and interactive multimedia to enhance learning experiences. This includes tools for coding, design, virtual simulations, and collaboration.</li>
            <li><b>Benefits:</b> Prepares students for the digital world; enhances engagement and interactivity in lessons.</li>
          </ul>
        </div>

        <div>
          <h1>9. Socratic Method</h1>
          <ul className='list-disc px-4'>
            <li><b>Description:</b> Engages students in dialogue and rigorous questioning instead of simply providing answers. This encourages deeper thinking and exploration of concepts.</li>
            <li><b>Benefits:</b> Develops higher-order thinking skills and promotes a culture of discussion and reflection.</li>
          </ul>
        </div>

        <div>
          <h1>10. Real-World Connections</h1>
          <ul className='list-disc px-4'>
            <li><b>Description:</b> Integrates experiences and knowledge from outside the classroom, such as guest speakers, field trips, and internships. Students connect classroom learning to real-world applications.</li>
            <li><b>Benefits:</b> Enhances relevance and understanding of content; prepares students for future careers and societal contributions.</li>
          </ul>
        </div>
      </p>
    </div>
  </div>
);

export default Academics;
