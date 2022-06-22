import {useState} from 'react'

const AddNote = ({handleAddNote}) => {

    const [noteText, setNoteText] = useState('')
    const charLimit = 200

    const handleChange = (e) => {
        if(charLimit - e.target.value.length >= 0) {
            setNoteText(e.target.value)
        }
    }

    const handleSaveClick = (e) => {
        if(noteText.trim().length > 0) {
            handleAddNote(noteText)
            setNoteText('')
        }
    }

  return (
    <div className="note note-new">
        <textarea cols={12} rows={8} placeholder='Type to add a new note...' onChange={handleChange} value={noteText} className=" note-new placeholder:text-gray-500 placeholder:italic"/>
        <div className='flex justify-between items-end'>
            <small>{charLimit - noteText.length} Remaining</small>
            <button className="btn btn-xs" onClick={handleSaveClick}>Save</button>
        </div>
    </div>
  )
}

export default AddNote