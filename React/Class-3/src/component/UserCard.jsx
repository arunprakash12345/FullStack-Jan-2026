/**
 * Create a User Card Component:
 *     Accepts a user details object (name, email, age, location, picture) as prop ✅
 *     Displays user details in a card format. ✅
 *     Conditionally renders "Adult" or "Minor" based on age ✅
 *     Adds a button to toggle email visibility ✅
 */

import { useState } from "react";

const UserCard = ({ user }) => {
    const { name, email, age, location, picture } = user;
    const [showEmail, setShowEmail] = useState(false);

    const toggleShowEmail = () => {
        setShowEmail(!showEmail);
    };
    return (
        <div
            style={{
                border: "1px solid #ccc",
                padding: "20px",
                borderRadius: "8px",
                textAlign: "center",
                minWidth: "180px",
                maxWidth: "180px"
            }}
        >
            <img
                style={{
                    borderRadius: "50%",
                    width: "100px",
                    height: "100px",
                    objectFit: "cover"
                }}
                src={picture}
                alt={name}
            />
            <h2>{name}</h2>
            <p>Age: {age} ({age > 18 ? "Adult" : "Minor"})</p>
            <p>Email: {showEmail ? email : "********"}</p>
            <button onClick={toggleShowEmail}>{showEmail ? "Hide Email" : "Show Email"}</button>
        </div>
    );
};

export default UserCard;