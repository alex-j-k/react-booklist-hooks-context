import React, { useState, useContext} from 'react';
import { BookContext } from '../context/BookContext';

const NewBookForm = () => {
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');

    const {addBook} =  useContext(BookContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(author, title);
        setAuthor('');
        setTitle('');
    }

    return (  
        <form onSubmit={handleSubmit}>
            <label >book title</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder="the title o' the book... "  value={title} required/>
            <label >book author</label>
            <input type="text" onChange={(e) => setAuthor(e.target.value)} placeholder="the books's author... " value={author} required/>
            <input type="submit" value='add book'/>
        </form>
    );
}
 
export default NewBookForm;
