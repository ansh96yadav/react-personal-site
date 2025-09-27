import React, { use, useState } from 'react'
// import { useEffect } from 'react'

// function favouritepage({msg, setMsg}) {
//   const [a , setA] = useState('')
//   const [b , setB] = useState('')
//   const [result , setResult] = useState(null)


//   const handleAdd = async () => {
//     const res = await fetch("http://localhost:8000/add" , {
//       method : "POST",
//       headers : {"Content-Type": "application/json"},
//       body: JSON.stringify({a : Number(a), b: Number(b)})
//     });

//     const data = await res.json();

//     setResult(data.sum)
//   }


//   // useEffect(()=>{
//   //   fetch("http://localhost:8000/hello")
//   //   .then(res => res.json())
//   //   .then(data => setMsg(data.message));
//   //  },[])

//   return (
//     <div>
//       <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Add Two Numbers</h1>
      
//       {/* Input for first number */}
//       <input 
//         type="number" 
//         value={a} 
//         onChange={e => setA(e.target.value)} 
//         placeholder="Enter first number"
//       />
//       <br /><br />
      
//       {/* Input for second number */}
//       <input 
//         type="number" 
//         value={b} 
//         onChange={e => setB(e.target.value)} 
//         placeholder="Enter second number"
//       />
//       <br /><br />
      
//       {/* Button to trigger addition */}
//       <button onClick={handleAdd}>Add</button>
//       <br /><br />
      
//       {/* Show result if available */}
//       {result !== null && <h2>Result: {result}</h2>}
//     </div>
//     </div>
//   )
// }

// export default favouritepage

// import React from 'react'

function favouritepage() {

  const [isEditing, setIsEditing] = useState(false);
  const [textValue, setTextValue] = useState("This is some editable text.");

  const handleSave = () => {
    // In a real application, you might send textValue to an API here
    setIsEditing(false);
  };

  const handleCancel = () => {
    // If you want to revert changes on cancel, store the original value in another state
    // For this example, we just exit edit mode
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <span>{textValue}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
}

export default favouritepage

