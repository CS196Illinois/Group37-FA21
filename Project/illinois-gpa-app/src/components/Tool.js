import React, { Component } from 'react';
import "./Tools.css"
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid } from 'recharts';
function App() {

    // Sample data
    const data = [
        { x: 1, y: 20 },
        { x: 2, y: 50 },
        { x: 3, y: 80 },
        { x: 4, y: 90 },
    ];

    return (
        <><div>
                <h1> Tool </h1>
            </div><div>
            <ScatterChart width={400} height={400}>
                 <CartesianGrid />
                 <XAxis type="number" dataKey="x" />
                 <YAxis type="number" dataKey="y" />
                 <Scatter data={data} fill="green" />
             </ScatterChart>
             </div></>
    );
}
  
export default App;