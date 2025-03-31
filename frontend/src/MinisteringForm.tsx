import React, { useState } from "react";
import "./css/MinisteringForm.css";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS

// Custom Toastify styles
import "./css/customToastStyles.css"; // Make sure this path is correct


interface MinisteringFormState {
  activity: string;
  activityDate: string;
  familyName: string;
  availabilityTime: string;
  location: string;
  notes: string;
  prayer: boolean;
  serviceRendered: boolean;
}

const MinisteringForm: React.FC = () => {
  const navigate = useNavigate(); // Initialize navigate function
  const [formState, setFormState] = useState<MinisteringFormState>({
    activity: "",
    activityDate: "",
    familyName: "",
    availabilityTime: "",
    location: "",
    notes: "",
    prayer: false,
    serviceRendered: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setFormState({
      ...formState,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formState);
    
    // Displaying the success toast message with custom styling
    toast.success(
      "Ministering activity successfully recorded! Keep loving, serving, and inviting everyone around you to come closer to Christ."
    );

    // Optionally, navigate to another page after the form is submitted
    setTimeout(() => {
      navigate('/calendar');
    }, 2000); // Delay to let the toast show before navigating
  };

  return (
    <>
      <div className="container mt-5">
        <div className="card p-4">
          <h1 className="text-center">Ministering Activity </h1>
          <br />  
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Activity:</label>
              <select
                className="form-select"
                name="activity"
                value={formState.activity}
                onChange={handleChange}
                required
              >
                <option value="Friendly Visit">Visit</option>
                <option value="Blessing">Blessing</option>
                <option value="Prayer">Prayer</option>
                <option value="Service">Service</option>
                <option value="Scripture Study">Scripture Study</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Activity Date:</label>
              <input
                type="date"
                className="form-control"
                name="activityDate"
                value={formState.activityDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Who did you minister to?</label>
              <input
                type="text"
                className="form-control"
                name="familyName"
                value={formState.familyName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Availability Time:</label>
              <select
                className="form-select"
                name="availabilityTime"
                value={formState.availabilityTime}
                onChange={handleChange}
              >
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Location (Optional):</label>
              <input
                type="text"
                className="form-control"
                name="location"
                value={formState.location}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Notes (Optional):</label>
              <input
                type="text"
                className="form-control"
                name="notes"
                value={formState.notes}
                onChange={handleChange}
                maxLength={100}
              />
            </div>

            <div className="d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-secondary w-50 me-2"
                onClick={() => navigate('/calendar')} // Navigate to CalendarPage
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary w-50" style={{background:'#19496f'}}
              onClick={() => navigate('/calendar')}> {/* Navigate to CalendarPage */}
                Submit Ministering Report
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Toast container for showing notifications */}
      <ToastContainer />
    </>
  );
};

export default MinisteringForm;
