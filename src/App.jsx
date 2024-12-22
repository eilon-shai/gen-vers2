import React, { useState, useEffect } from 'react';
import Timeline from './components/Timeline';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Load the JSON file
    const loadData = async () => {
      try {
        const response = await fetch('/data/timeline.json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Genealogy Timeline</h1>
      <Timeline data={data} />
    </div>
  );
}

export default App;