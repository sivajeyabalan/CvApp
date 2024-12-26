  import  { useState } from "react";

  export function GetUserInfo() {
    const [step, setStep] = useState(1);
    const [personalInfo, setPersonalInfo] = useState({
      name: "",
      email: "",
      phoneNo: "",
    });
    const [educationInfo, setEducationInfo] = useState({
      degree: "",
      college: "",
      graduationYear: "",
    });
    const [experienceInfo, setExperienceInfo] = useState({
      company: "",
      designation: "",
      experience: "",
    });

    const handleNext = () => setStep(step + 1);
    const handlePrevious = () => setStep(step - 1);
    const handleSubmit = () => {
      // Final submission logic here
      console.log("Personal Info:", personalInfo);
      console.log("Education Info:", educationInfo);
      setStep(4); };

    return (
      <div>
        {step === 1 && (
          <div>
            <h2>Enter Personal Information</h2>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={personalInfo.name}
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, name: e.target.value })
              }
            /><br/>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={personalInfo.email}
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, email: e.target.value })
              }
            />
            <br/>
            <label htmlFor="phoneNo">Phone No:</label>
            <input
              type="tel"
              id="phoneNo"
              name="phoneNo"
              value={personalInfo.phoneNo}
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, phoneNo: e.target.value })
              }
            />
            <br/>
            <button type="button" onClick={handleNext}>
              Next
            </button>
          </div>
        )}
        {step === 2 && (
          <div>
            <h2>Enter Education Information</h2>
            <label htmlFor="degree">Degree:</label>
            <input
              type="text"
              id="degree"
              name="degree"
              value={educationInfo.degree}
              onChange={(e) =>
                setEducationInfo({ ...educationInfo, degree: e.target.value })
              }
            /><br/>
            <label htmlFor="college">College:</label>
            <input
              type="text"
              id="college"
              name="college"
              value={educationInfo.college}
              onChange={(e) =>
                setEducationInfo({ ...educationInfo, college: e.target.value })
              }
            /><br/>
            <label htmlFor="graduationYear">Graduation Year:</label>
            <input
              type="number"
              id="graduationYear"
              name="graduationYear"
              value={educationInfo.graduationYear}
              onChange={(e) =>
                setEducationInfo({
                  ...educationInfo,
                  graduationYear: e.target.value,
                })
              }
            />
            <button type="button" onClick={handlePrevious}>
              Previous
            </button>
            <button type="button" onClick={handleNext}>
              Next
            </button>
          </div>
        )}
        {step === 3 && (
          <div>
            <h2>Enter Experience Information</h2>
            <label htmlFor="company">Company:</label>
            <input
              type="text"
              id="company"
              name="company"
              value={experienceInfo.company}
              onChange={(e) =>
                setExperienceInfo({
                  ...experienceInfo,
                  company: e.target.value,
                })
              }
            /><br/>
            <label htmlFor="designation">Designation:</label>
            <input
              type="text"
              id="designation"
              name="designation"
              value={experienceInfo.designation}
              onChange={(e) =>
                setExperienceInfo({
                  ...experienceInfo,
                  designation: e.target.value,
                })
              }
            /><br/>
            <label htmlFor="experience">Experience:</label>
            <input
              type="number"
              id="experience"
              name="experience"
              value={experienceInfo.experience}
              onChange={(e) =>
                setExperienceInfo({
                  ...experienceInfo,
                  experience: e.target.value,
                })
              }
            /><br/>
            <button type="button" onClick={handlePrevious}>
              Previous
            </button>
            <button type="button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        )}
        {step === 4 && (
          <div>
            <h2>Review and Edit Information</h2>
            <div>
              <h3>Personal Information</h3>
              <p>Name: {personalInfo.name}</p>
              <p>Email: {personalInfo.email}</p>
              <p>Phone No: {personalInfo.phoneNo}</p>
              <button type="button" onClick={() => setStep(1)}>
                Edit
              </button><br/>
            </div>
            <div>
              <h3>Education Information</h3>
              <p>Degree: {educationInfo.degree}</p>
              <p>College: {educationInfo.college}</p>
              <p>Graduation Year: {educationInfo.graduationYear}</p>
              <button type="button" onClick={() => setStep(2)}>
                Edit
              </button><br/>
            </div>
            <div>
              <h3>Experience Information</h3>
              <p>Company: {experienceInfo.company}</p>
              <p>Designation: {experienceInfo.designation}</p>
              <p>Experience: {experienceInfo.experience}</p>
              <button type="button" onClick={() => setStep(3)}>
                Edit
              </button><br/>
            </div>
            <button type="button" onClick={handleSubmit}>
              Final Submit
            </button>
          </div>
        )}
      </div>
    );
  }

