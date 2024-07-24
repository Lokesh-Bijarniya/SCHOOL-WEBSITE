// src/pages/Admissions.js
import React from 'react';
import AdmissionForm from '../components/AdmissionForm';
import ImportantDates from '../components/ImportantDates';

const Admissions = () => (
  <div className="p-8">
    <div className="mb-8">
      <h2 className="text-3xl font-bold">Admission Process</h2>
      <p className="mt-4">Our admission process is designed to be simple and straightforward. It involves the following steps:</p>

      <div className='py-1'>
          <ol className='list-decimal px-8'>
            <li><b>Application Submission:</b> Complete and submit the admission application form.</li>
            <li><b>Review:</b> Our admissions team will review your application and supporting documents.</li>
            <li><b>Interview (if applicable):</b> Some candidates may be invited for an interview to discuss their application further.</li>
            <li><b>Decision Notification:</b> You will receive a notification regarding your admission decision.</li>
            <li><b>Enrollment:</b> Accepted candidates can proceed with enrollment and registration.</li>
          </ol>
          <p className='py-1'>* We strive to make the process as smooth as possible for all applicants.</p>
      </div>
    </div>

    <div>
      <AdmissionForm/>
    </div>


    {/* <div className="mb-8">
      <h2 className="text-3xl font-bold">Downloadable Forms</h2>
      <a href="/path/to/admission-form.pdf" download className="text-blue-500 hover:underline">Download Admission Form</a>
    </div> */}
    <div className='py-12'>
      <ImportantDates/>
    </div>
  </div>
);

export default Admissions;
