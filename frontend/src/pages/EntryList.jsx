import { useState, useEffect } from "react"
import Entry from "../components/appcomp/Entry.jsx"
import { useJournalEntry } from "../entries/entry.jsx";
import NewEntry from '../components/appcomp/NewEntry.jsx'
import LogoutButton from "./Logout.jsx";
<<<<<<< HEAD
import '../components/css/entry.css'

=======
import "../components/css/entry.css"
>>>>>>> e6dfb13 (Initial Commit)
const EntryList = () => {
  const {entries,fetchEntries} = useJournalEntry()
  
  useEffect(() => {
		fetchEntries();
	}, [fetchEntries]);
<<<<<<< HEAD
  
  const sortedEntries = [...entries].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

return(
<>
<LogoutButton/>
  <NewEntry/>
  <div className="entries">
 
{sortedEntries.map((entry) => (
          <Entry key={entry._id} entry={entry} />))}

  {sortedEntries.length === 0 && (
=======


return(
<>
  <NewEntry/>
  <div className="entries">
 
{entries.map((entry) => (
          <Entry key={entry._id} entry={entry} />))}

  {entries.length === 0 && (
>>>>>>> e6dfb13 (Initial Commit)
    <h2 >Create Your First Entry</h2>
  )}

  </div>
  </>
  )
}

export default EntryList