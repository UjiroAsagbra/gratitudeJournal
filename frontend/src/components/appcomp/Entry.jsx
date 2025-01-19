import { useState } from "react";

import { useJournalEntry } from "../../entries/entry"

const Entry=({entry})=>{
  const { deleteEntry,updateEntry } = useJournalEntry();
  const [updatedEntry, setUpdatedEntry] = useState(entry)  
  const [isediting, setIsediting] = useState(false)
  const formattedDate = new Date(entry.createdAt).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  

  const handleUpdate = async(id,updatedEntry)=> {
    const {success,message} = await updateEntry(id,updatedEntry)
    

    setIsediting(false)

  }

  const handleDelete = async (id) => {
		const { success, message } = await deleteEntry(id);
    
	};
  const handleCancel = () => {
    setIsediting(false)
  }


  
  return(
    <div className="entry">
      {isediting ? (
        <>
      <input
          id={entry._id}
          className="entry-title-editing"
          onChange={(e) => setUpdatedEntry({ ...updatedEntry, title: e.target.value })}
          value={updatedEntry.title}
          autoComplete="off"
          maxLength="30"
        />
         <textarea
          id={entry._id}
          type="text"
         className="entry-details-editing"
          onChange={(e) => setUpdatedEntry({ ...updatedEntry, details: e.target.value })}
          value={updatedEntry.details}
          autoComplete="off"
          maxLength="180"
        />
        

      <button className= " button save" onClick={() => handleUpdate(entry._id, updatedEntry)}>Save</button>
      <button className= " button cancel" onClick={() => handleCancel()}>Cancel</button></>):
      (<>
      <h3 className="title">{entry.title}</h3>
      <h3 className="details">{entry.details}</h3>
      <small>Created At: {formattedDate}</small></>)
      }

      {isediting === false?
      (
        <>
      <button className= " button edit" onClick={() => setIsediting(true)}>Edit</button>
      <button className= " button delete" onClick={() => handleDelete(entry._id)}>Delete</button>
      
      </>
      ):<></>
      }
      
      
      

      
      
    
    </div>
  )
}

export default Entry