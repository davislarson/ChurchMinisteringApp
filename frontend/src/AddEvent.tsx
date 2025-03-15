import React, { useState } from 'react';

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
        activity: '',
        activityDate: '',
        familyName: '',
        availabilityTime: '',
        location: '',
        notes: '',
        prayer: false,
        serviceRendered: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type, checked } = e.target;
        setFormState({
            ...formState,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formState);
        // Add your form submission logic here
    };

    return (
        <>
            <h1>LDS Ministering Activity</h1>
            <form onSubmit={handleSubmit}>
                <label>Activity:</label>
                <select name="activity" value={formState.activity} onChange={handleChange} required>
                    <option value="Friendly Visit">Visit</option>
                    <option value="Blessing">Blessing</option>
                    <option value="Prayer">Prayer</option>
                    <option value="Service">Service</option>
                    <option value="Scripture Study">Scripture Study</option>
                </select>

                <label>Activity Date:</label>
                <input type="date" name="activityDate" value={formState.activityDate} onChange={handleChange} required />

                <label>Family Name:</label>
                <input type="text" name="familyName" value={formState.familyName} onChange={handleChange} required />

                <label>Availability Time:</label>
                <select name="availabilityTime" value={formState.availabilityTime} onChange={handleChange}>
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="evening">Evening</option>
                </select>

                <label>Location (Optional):</label>
                <input type="text" name="location" value={formState.location} onChange={handleChange} />

                <label>Notes (Optional):</label>
                <input type="text" name="notes" value={formState.notes} onChange={handleChange} maxLength={100} />

                <div>
                    <label><input type="checkbox" name="prayer" checked={formState.prayer} onChange={handleChange} /> Prayer</label>
                </div>

                <div>
                    <label><input type="checkbox" name="serviceRendered" checked={formState.serviceRendered} onChange={handleChange} /> Service Rendered</label>
                </div>

                <button type="submit">Submit Ministering Report</button>
            </form>
        </>
    );
};

export default MinisteringForm;
