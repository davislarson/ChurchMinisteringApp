import React, { useState } from 'react';

interface MinisteringFormState {
    activity: string;
    activityDate: string;
    year: number;
    familyName: string;
    availabilityTime: string;
    edited: boolean;
    location: string;
    notes: string;
}

const MinisteringForm: React.FC = () => {
    const [formState, setFormState] = useState<MinisteringFormState>({
        activity: '',
        activityDate: '',
        year: new Date().getFullYear(),
        familyName: '',
        availabilityTime: '',
        edited: false,
        location: '',
        notes: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type, checked } = e.target;
        setFormState({
            ...formState,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formState);
        // Add your form submission logic here
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Activity:</label>
                <select name="activity" value={formState.activity} onChange={handleChange}>
                    <option value="Friendly Visit">Visit</option>
                    <option value="Blessing Request">Blessing Request</option>
                    <option value="Cooking">Cooking</option>
                    <option value="Movie_Game">Movie/Game</option>
                    <option value="Hiking">Hiking</option>
                    <option value="Chat">Chat</option>
                    <option value="Scriptures">Scriptures</option>
                </select>

                <label>Activity Date:</label>
                <input type="text" name="activityDate" value={formState.activityDate} onChange={handleChange} required />

                <label>Year:</label>
                <input type="number" name="year" value={formState.year} onChange={handleChange} required />

                <label>Family Name:</label>
                <input type="text" name="familyName" value={formState.familyName} onChange={handleChange} required />

                <label>Availability Time:</label>
                <select name="availabilityTime" value={formState.availabilityTime} onChange={handleChange}>
                    <option value="morning">Morning</option>
                    <option value="12 to 3pm">Afternoon</option>
                    <option value="4 to 6pm">Evening (4-6pm)</option>
                    <option value="Night">After 6</option>
                </select>

                <label>Edited (Yes/No):</label>
                <input type="checkbox" name="edited" checked={formState.edited} onChange={handleChange} />

                <label>Location (Optional):</label>
                <input type="text" name="location" value={formState.location} onChange={handleChange} />

                <label>Notes (Max 25 characters, Optional):</label>
                <input type="text" name="notes" value={formState.notes} onChange={handleChange} maxLength={25} />

                <button type="submit">Add Event</button>
            </form>
        </>
    );
};

export default MinisteringForm;