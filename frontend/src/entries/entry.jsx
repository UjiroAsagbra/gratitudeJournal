import { Navigate } from "react-router-dom"
import {create} from "zustand"

export const useJournalEntry = create((set,get) => ({
  entries: [],
  authToken: null,
  setEntries: (entries)=> set({entries}),

  fetchEntries: async () => {
    const authToken = localStorage.getItem('authToken');
    
  
    // Check if authToken exists before making the request
    if (!authToken) {
      console.error("No authToken found. User is not authenticated.");
      return { success: false, message: "Unauthorized. Please log in." };
    }

    try {
      const backendURL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5001";
      const res = await fetch(`${backendURL}/api/entry`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },

      });

  
      if (!res.ok) {
        // Handle HTTP errors
        const error = await res.json();
        console.error("Failed to fetch Entry:", error.message);
        return { success: false, message: error.message || "Failed to fetch entries" };
      }
  
      const data = await res.json();
      

      set({ entries: data.data }); // Update state with fetched entries
      return { success: true, data: data.data };
    } catch (error) {
      // Handle network or other unexpected errors
      console.error("Error during fetchEntries:", error.message);
      return { success: false, message: error.message || "An error occurred" };
    }
  },

  createEntry: async (newEntry) => {
        const authToken = localStorage.getItem('authToken');

    if(!newEntry.title || !newEntry.details){
      return{success:false, message: "Enter Title and Details"}
    }
    try{
      const backendURL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5001";
      const res = await fetch(`${backendURL}/api/entry`, {
        method: "POST",
        headers: {
          "Content-Type" : "application/json",
          Authorization: `Bearer ${authToken}` ,
        },
        body: JSON.stringify(newEntry) 
  
      })
      const data = await res.json();
      if (!res.ok) { 
        console.error("error:",data.message)
        return { success: false, message: data.message || "Failed to add Entry" }
        } 

        if (data && data._id){
                 
          return { success: true, message: "Entry added successfully" , entry:data}
        }else{
          console.error("missing _id in response:", data)
          return {success:false, message: "entry added but _id is missing"}
        }
       
      }catch (error){
        console.error("error occurred:", error)
        return { success: false, message: "An error occurred" };
      }
      
    
  },
  

 deleteEntry: async (id) => {
  const authToken = localStorage.getItem('authToken');

  if (!authToken) {
    console.error("No authToken found. User is not authenticated.");
    return { success: false, message: "Unauthorized" };
  }

  try {
    const backendURL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5001";
    const res = await fetch(`${backendURL}/api/entry/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authToken}`, // Include token for authentication
      },
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Failed to delete entry:", data.message);
      return { success: false, message: data.message || "Failed to delete entry" };
    }

    set((state) => ({
      entries: state.entries.filter((entry) => entry._id !== id), 
    }));

    return { success: true, message: "Entry deleted successfully" };
  } catch (error) {
    console.error("Error deleting entry:", error.message);
    return { success: false, message: error.message };
  }
},
updateEntry: async (id, updatedEntry) => {
  const authToken = localStorage.getItem('authToken');
  const backendURL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5001";
  const res = await fetch(`${backendURL}/api/entry/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}` ,
    },
    body: JSON.stringify(updatedEntry),
  });
  const data = await res.json();
  if (!data.success) 
    return { success: false, message: data.message };
  set((state) => ({
    entries: state.entries.map((entry) => (entry._id === id ? data.data : entry)),
  }));

  return { success: true, message: "Entry updated successfully" };
},




}))