import React, { useState } from "react";
import "./css/MinisteringForm.css";

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
    // Add your form submission logic here
  };

  return (
    <>
      <div className="container mt-5">
        <div className="card p-4">
          <h1 className="text-center">LDS Ministering Activity </h1>
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

            {/* No functionality in the database for these checkboxes below */}

            {/* <div className="mb-3">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="prayer"
                  checked={formState.prayer}
                  onChange={handleChange}
                />
                <label className="form-check-label">Prayer</label>
              </div>
            </div>

            <div className="mb-3">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="serviceRendered"
                  checked={formState.serviceRendered}
                  onChange={handleChange}
                />
                <label className="form-check-label">Service Rendered</label>
              </div>
            </div> */}

            <button type="submit" className="btn btn-primary w-100">
              Submit Ministering Report
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default MinisteringForm;
