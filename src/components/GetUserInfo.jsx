import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

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
    console.log("Personal Info:", personalInfo);
    console.log("Education Info:", educationInfo);
    setStep(4);
  };

  return (
    <div className="container mt-5">
      {step === 1 && (
        <div className="card p-4">
          <h2 className="mb-3">Enter Personal Information</h2>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={personalInfo.name}
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, name: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={personalInfo.email}
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, email: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNo" className="form-label">
              Phone No:
            </label>
            <input
              type="tel"
              id="phoneNo"
              className="form-control"
              value={personalInfo.phoneNo}
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, phoneNo: e.target.value })
              }
            />
          </div>
          <button className="btn btn-primary" onClick={handleNext}>
            Next
          </button>
        </div>
      )}
      {step === 2 && (
        <div className="card p-4">
          <h2 className="mb-3">Enter Education Information</h2>
          <div className="mb-3">
            <label htmlFor="degree" className="form-label">
              Degree:
            </label>
            <input
              type="text"
              id="degree"
              className="form-control"
              value={educationInfo.degree}
              onChange={(e) =>
                setEducationInfo({ ...educationInfo, degree: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="college" className="form-label">
              College:
            </label>
            <input
              type="text"
              id="college"
              className="form-control"
              value={educationInfo.college}
              onChange={(e) =>
                setEducationInfo({ ...educationInfo, college: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="graduationYear" className="form-label">
              Graduation Year:
            </label>
            <input
              type="number"
              id="graduationYear"
              className="form-control"
              value={educationInfo.graduationYear}
              onChange={(e) =>
                setEducationInfo({
                  ...educationInfo,
                  graduationYear: e.target.value,
                })
              }
            />
          </div>
          <button className="btn btn-success" onClick={handlePrevious}>
            Previous
          </button>
          <button className="btn btn-primary" onClick={handleNext}>
            Next
          </button>
        </div>
      )}
      {step === 3 && (
        <div className="card p-4">
          <h2 className="mb-3">Enter Experience Information</h2>
          <div className="mb-3">
            <label htmlFor="company" className="form-label">
              Company:
            </label>
            <input
              type="text"
              id="company"
              className="form-control"
              value={experienceInfo.company}
              onChange={(e) =>
                setExperienceInfo({
                  ...experienceInfo,
                  company: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="designation" className="form-label">
              Designation:
            </label>
            <input
              type="text"
              id="designation"
              className="form-control"
              value={experienceInfo.designation}
              onChange={(e) =>
                setExperienceInfo({
                  ...experienceInfo,
                  designation: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="experience" className="form-label">
              Experience:
            </label>
            <input
              type="number"
              id="experience"
              className="form-control"
              value={experienceInfo.experience}
              onChange={(e) =>
                setExperienceInfo({
                  ...experienceInfo,
                  experience: e.target.value,
                })
              }
            />
          </div>
          <button className="btn btn-light" onClick={handlePrevious}>
            Previous
          </button>
          <button className="btn btn-success" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      )}
      {step === 4 && (
        <div className="card p-4">
          <h2 className="mb-3">Review and Edit Information</h2>
          <div className="mb-3">
            <h3>Personal Information</h3>
            <p>Name: {personalInfo.name}</p>
            <p>Email: {personalInfo.email}</p>
            <p>Phone No: {personalInfo.phoneNo}</p>
            <button className="btn btn-warning mb-3" onClick={() => setStep(1)}>
              Edit
            </button>
          </div>
          <div className="mb-3">
            <h3>Education Information</h3>
            <p>Degree: {educationInfo.degree}</p>
            <p>College: {educationInfo.college}</p>
            <p>Graduation Year: {educationInfo.graduationYear}</p>
            <button className="btn btn-warning mb-3" onClick={() => setStep(2)}>
              Edit
            </button>
          </div>
          <div className="mb-3">
            <h3>Experience Information</h3>
            <p>Company: {experienceInfo.company}</p>
            <p>Designation: {experienceInfo.designation}</p>
            <p>Experience: {experienceInfo.experience}</p>
            <button className="btn btn-warning mb-3" onClick={() => setStep(3)}>
              Edit
            </button>
          </div>
          <button className="btn btn-success"
        onClick={() => {
          const doc = new jsPDF();

  // Header
  doc.setFillColor(200, 200, 255);
  doc.rect(0, 0, 210, 30, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.setTextColor(255, 255, 255);
  doc.text("Curriculum Vitae", 10, 20);

  // Personal Info Section
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(14);
  doc.text("Personal Information", 10, 40);
  doc.setFontSize(12);
  doc.text(`Name: ${personalInfo.name}`, 10, 50);
  doc.text(`Email: ${personalInfo.email}`, 10, 60);
  doc.text(`Phone No: ${personalInfo.phoneNo}`, 10, 70);

  // Education Section
  const educationStartY = 80;
  autoTable(doc, {
    head: [["Degree", "College", "Graduation Year"]],
    body: [[educationInfo.degree, educationInfo.college, educationInfo.graduationYear]],
    startY: educationStartY,
  });

  const finalY = doc.lastAutoTable?.finalY || educationStartY + 30; // Fallback if undefined

  // Experience Section
  autoTable(doc, {
    head: [["Company", "Designation", "Experience"]],
    body: [[experienceInfo.company, experienceInfo.designation, experienceInfo.experience]],
    startY: finalY + 20,
  });

  doc.save("styled_cv.pdf");
        }}
        
        >Final Submit</button>
        </div>
      )}
    </div>
  );
}