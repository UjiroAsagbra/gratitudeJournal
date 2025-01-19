import { useState, useEffect } from "react"
import Entry from "../components/appcomp/Entry.jsx"
import { useJournalEntry } from "../entries/entry.jsx";
import NewEntry from '../components/appcomp/NewEntry.jsx'
import LogoutButton from "./Logout.jsx";
import "../components/css/entry.css"
const EntryList = () => {
  const {entries,fetchEntries} = useJournalEntry()
  
  useEffect(() => {
		fetchEntries();
	}, [fetchEntries]);


return(
<>
  <NewEntry/>
  <div className="entries">
 
{entries.map((entry) => (
          <Entry key={entry._id} entry={entry} />))}

  {entries.length === 0 && (
    <h2 >Create Your First Entry</h2>
  )}

  </div>
  </>
  )
}

export default EntryList