import React, { useEffect, useState } from "react";
import { database } from "./firebaseConfig";
import { ref, onValue } from "firebase/database";

const ScoresPage = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const scoresRef = ref(database, "users");
    onValue(scoresRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const scoresArray = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value,
        }));
        setScores(scoresArray);
      }
    });
  }, []);

  const containerStyle = {
    maxHeight: scores.length > 5 ? "400px" : "none", // Set max height only if more than 5 entries
    overflowY: scores.length > 5 ? "auto" : "visible", // Scroll only when necessary
  };

  return (
    <div>
      <h1 style={{ color: "white" }}>Class Scores</h1>
      <div style={containerStyle}>
        <table border="1" style={{ width: "100%", textAlign: "left" }}>
          <thead>
            <tr>
              <th>Username</th>
              <th>Quiz 1</th>
              <th>Quiz 2</th>
              <th>Quiz 3</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((score) => (
              <tr key={score.id}>
                <td>{score.username}</td>
                <td>{score.Quiz1}</td>
                <td>{score.Quiz2}</td>
                <td>{score.Quiz3}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScoresPage;
