import { useState } from "react"
import { useJournalEntry } from "../../entries/entry";

const NewEntry = () => {
 
  const [newEntry, setNewEntry] = useState({
    title: "",
    details: ""
  });

  const {createEntry, fetchEntries} = useJournalEntry();
 

  const addEntry = async() => {
    const {success, message} = await createEntry(newEntry)
     
   
    if (success){
      alert(message)
      await fetchEntries();
      
      setNewEntry({ 
        title: "",
        details: ""})
      
    }
    
  }
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
        <button className= " button new save" onClick={addEntry}>Save</button>
        <button className= " button new cancel" onClick={handleCancel}>Cancel</button>
      
      </div>
      
    </>
  )
}

export default NewEntry