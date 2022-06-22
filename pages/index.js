import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Search from "../components/Search";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NoteList from "../components/NoteList";

export default function Home() {

  const [darkMode, setDarkMode] = useState(false)

  const [searchText, setSearchText] = useState("");

  const [notes, setNotes] = useState([
    // {
    //   id: nanoid(),
    //   text: "This is my first note",
    //   date: "03/11/2021",
    // },
    // {
    //   id: nanoid(),
    //   text: "This is my second note",
    //   date: "03/11/2021",
    // },
    // {
    //   id: nanoid(),
    //   text: "This is my third note",
    //   date: "03/11/2021",
    // },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const singleNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    // create a new array notes by copying the current note, then add new note at the end
    const newNotes = [...notes, singleNote];
    //update new data to notes state
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const dNote = notes.filter((note) => note.id !== id);
    setNotes(dNote);
  };

  //when first loading, it will load from notes data if it exists
	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('nextjs-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
    // localStorage.setItem('test', [1,2,3 , 6])
    // console.log(localStorage.getItem('test'));
	}, []);

  //anytime make change at notes or add new notes, it will save at localStorage
 useEffect(() => {
  localStorage.setItem('nextjs-notes-app-data', JSON.stringify(notes))
 }, [notes])

  return (
    <div >
      <Head>
        <title>Notes App</title>
        <meta name="description" content="Note app for everyone" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      {/* <main
        className={`flex w-full flex-1 flex-col ${darkMode && "dark-mode"}`}
      >
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NoteList
          notes={notes.filter((note) =>
            note.text.toLocaleLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDelete={deleteNote}
        />
      </main> */}

      
    </div>
  )
}
