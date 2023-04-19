import React, {useEffect, useState} from 'react';

// Declare the constant variable outside the component scope
const initialData = {name: "John", age: 25};

function TabsRender(){
    const [stations, setStations] = useState([]);
    const [selectedStation, setSelectedStation] = useState(null);

    useEffect(() => {
        fetch("https://your-radio-api.com/stations")
            .then((response) => response.json())
            .then((data) => setStations(data))
            .catch((error) => console.error(error));
    }, []);

    const handleStationSelect = (station) => {
        setSelectedStation(station);
    };

    return (
        <div>
            <h1>Radio App</h1>
            <ul>
                {stations.map((station) => (
                    <li key={station.id}>
                        <button onClick={() => handleStationSelect(station)}>
                            {station.name}
                        </button>
                    </li>
                ))}
            </ul>
            {selectedStation && (
                <div>
                    <h2>Now Playing: {selectedStation.name}</h2>
                    <audio src={selectedStation.streamUrl} controls />
                </div>
            )}
        </div>
    );
 }

export default TabsRender