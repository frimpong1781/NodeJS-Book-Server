let booksDb = require('./db');

//Book model
class bookModel {
     constructor({ title, author, type, pubYear, description }) {
          this.title = title;
          this.author = author;
          this.type = type;
          this.pubYear = pubYear;
          this.description = description;
     }

     save() {
          booksDb.push(this);
          return this;
     }

     static all() {
          return booksDb;
     }

     static update(updateInfo) {
          let updatedBook = null;
          booksDb = booksDb.map((book) => {
               if (book.title === updateInfo.title) {
                    updatedBook = updateInfo;
                    return { ...book, ...updateInfo };
               }
               return book;
          });

          return updatedBook;
     }

     static delete({ title }) {
          let deletedBook = null;
          booksDb = booksDb.filter((book) => {
               if (book.title !== title) {
                    return true;
               }
               deletedBook = book;
               return false;
          });
          return deletedBook;
     }
}

module.exports = bookModel;
