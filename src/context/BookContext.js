// import React, {createContext, useState} from 'react';
// import { v4 as uuid } from 'uuid';


// export const BookContext = createContext();

// const BookContextProvider = (props) => {

//     const [books, setBooks] = useState([
//         {title: 'book1', author: 'author1', id:1 },
//         {title: 'book2', author: 'author2', id:2 }
//     ]);

//    const addBook = (title, author) => {
//             setBooks([...books, {title, author, id: uuid() }])
//     }

//     const removeBook = (id) => {
//        setBooks(books.filter(book => book.id !==  id));
//     }

//     return ( 
//         <BookContext.Provider value={ {books, addBook, removeBook }}>
//             {props.children}
//         </BookContext.Provider>
//      );
// }
 
// export default BookContextProvider;


// BELOW IS WITH REDUCER

import React, {createContext, useReducer, useEffect} from 'react';
import { bookReducer } from '../reducers/BookReducer';


export const BookContext = createContext();

const BookContextProvider = (props) => {

    const [books, dispatch] = useReducer(bookReducer,  [], ()=>{
        const localData = localStorage.getItem('books') ;
       return localData ? JSON.parse(localData) : [];

    } );

    useEffect(()=> {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books]);

    return ( 
        <BookContext.Provider value={ {books, dispatch }}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;