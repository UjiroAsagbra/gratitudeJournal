import { useState } from "react"
import { useJournalEntry } from "../../entries/entry";

const NewEntry = () => {
<<<<<<< HEAD
 
=======

>>>>>>> e6dfb13 (Initial Commit)
  const [newEntry, setNewEntry] = useState({
    title: "",
    details: ""
  });

  const {createEntry, fetchEntries} = useJournalEntry();
<<<<<<< HEAD
 

  const addEntry = async() => {
    const {success, message} = await createEntry(newEntry)
    if(!success){
      alert(message)
    }
   else{
      alert(message)
      await fetchEntries();
=======

  const addEntry = async() => {
    const {success, message} = await createEntry(newEntry)
    const notify = () => toast("Wow so easy!");
   
    if (success){
      await fetchEntries();
      ;
>>>>>>> e6dfb13 (Initial Commit)
      
      setNewEntry({ 
        title: "",
        details: ""})
      
    }
    
  }
<<<<<<< HEAD
  
=======
>>>>>>> e6dfb13 (Initial Commit)
  const handleCancel = () => {
    setNewEntry({ 
      title: "",
      details: ""})
  }
 
  return(
    <>
      <div className="newentry">
        <input
          id={newEntry._id}
          type="text"
          className="title-input"
          placeholder="Today I'm grateful for?"
          onChange={(e) => setNewEntry({ ...newEntry, title: e.target.value })}
          value={newEntry.title}
          autoComplete="off"
          maxLength="35"
        />
        
        <textarea
          id={newEntry._id}
          type="text"
          className="details-input"
          placeholder="Details"
          onChange={(e) => setNewEntry({ ...newEntry, details: e.target.value })}
          value={newEntry.details}
          autoComplete="off"
          
        />
<<<<<<< HEAD
        <button className= " button new save" onClick={addEntry}>Save</button>
        <button className= " button new cancel" onClick={handleCancel}>Cancel</button>
      
      </div>
      
=======
        <button className= " button new-save" onClick={addEntry}>Save</button>
        <button className= " button new-cancel" onClick={handleCancel}>Cancel</button>
        
 
       
      </div>
>>>>>>> e6dfb13 (Initial Commit)
    </>
  )
}

export default NewEntry