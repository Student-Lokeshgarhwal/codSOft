import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How JobZee Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
                Sign Up for Free Create your account to access thousands of job opportunities.

              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
                Find Your Next Opportunity Search for jobs that match your skills and interests. Employer Job Posting Utilize our platform to reach a vast pool of qualified candidates
                .

              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
              Submit Your ApplicationTake the opportunity to showcase your skills and experience. Find Your Next Hire Post a job and start receiving applications.


              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;