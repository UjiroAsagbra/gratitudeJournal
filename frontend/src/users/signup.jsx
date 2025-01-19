import {create} from "zustand"

export const useUserSignup = create((set) => ({
  user: [],
  authToken: null,
  setUser: (user)=> set({user}),
  createUser: async (newUser) => {
    if (!newUser.username || !newUser.email || !newUser.password) {
      return { success: false, message: "Enter All Details" };
    }
    try {
      const res = await fetch("/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
  
      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText || "Failed to create user");
      }
  
      const data = await res.json();
      localStorage.setItem("authToken", data.authToken);
      
      set((state) => ({ user: [...state.user, data.data] }));
      
      return { success: true, message: "user created successfully" };
      
    } catch (error) {
      console.error("Error:", error);
      return { success: false, message: error.message };
    }
  },

  loginUser: async (user) => {
    if(!user.email || !user.password){
      return{success:false, message: "Enter Email and Password"}
    }
    try {
      const res = await fetch("/api/users/signin", {
        method: "POST",
        headers: {
          "Content-Type" : "application/json",
        },
        body: JSON.stringify(user)
      })
    
    const data = await res.json();
    if (data.authToken) {
      
      localStorage.setItem("authToken", data.authToken);
      set({ authToken: data.authToken })

      return { success: true, message: "login successful" };
    } else {
      return { success: false, message: data.message || "Login failed" };
    }

}catch (error) {
  console.error('Error:', error)
  return { success: false, message: error.message }}},

  logout: () => {
    fetch('/api/users/logout', { method: 'POST' })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          localStorage.removeItem('authToken'); // Remove token
          window.location.href = '/'; // Redirect to login
        } else {
          console.error('Logout failed:', data.message);
        }
      })
      .catch((err) => console.error('Error:', err));
  },
  
  
  

  }))