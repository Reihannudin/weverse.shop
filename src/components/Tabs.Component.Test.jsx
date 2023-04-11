import React, { useState } from 'react';

// Declare the constant variable outside the component scope
const initialData = {name: "John", age: 25};

function TabsRender(){
    // Use useState to initialize the state variable
    const [data, setData] = useState(initialData);

    // Update the state variable
    const handleUpdate = () => {
        setData({...data, age: 30});
    }

    return (
        <div>
            <p>Name: {data.name}</p>
            <p>Age: {data.age}</p>
            <button onClick={handleUpdate}>Update Age</button>
        </div>
    );
}

export default TabsRender