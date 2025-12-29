// src/components/FetchDataUseEffect.jsx

import React, { useState, useEffect } from "react";
import { RingLoader, MoonLoader, CircleLoader } from "react-spinners"; // Optional spinner for loading state

function FetchDataUseEffect() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(async (data) => {
                await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
                setPosts(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []); // Empty dependency array means this effect runs once after the first render

    if (loading) {
        return (
            <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                <RingLoader size={150} color={"#123abc"} />
            </div>
        );
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div style={{ padding: "20px" }}>
            <h1>Fetched Users Data From API </h1>
            <ul style={{ display: "grid", gap: "10px", flexWrap: "wrap",  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}>
                {posts.map((user) => (
                    <li key={user.id}>
                        <h3>{user.name}</h3>
                        <p><strong>Username:</strong> {user.username}</p>
                        <p><strong>Email:</strong> {user.email}</p>

                        <h3>Address</h3>
                        <p>{user.address.suite}, {user.address.street}</p>
                        <p>{user.address.city}, {user.address.zipcode}</p>
                        <p>
                            <strong>Coordinates:</strong> Latitude: {user.address.geo.lat}, Longitude: {user.address.geo.lng}
                        </p>

                        <h3>Phone</h3>
                        <p>{user.phone}</p>

                        <h3>Website</h3>
                        <p><a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>

                        <h3>Company</h3>
                        <p><strong>Name:</strong> {user.company.name}</p>
                        <p><strong>Catchphrase:</strong> {user.company.catchPhrase}</p>
                        <p><strong>BS:</strong> {user.company.bs}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FetchDataUseEffect;
