const bookModel = require('./model');

//list all books
const listBooksController = (req, res) => {
     const books = bookModel.all();
     res.json({ message: 'All Books Listed', data: books });
};

//create book
const createBookController = (req, res) => {
     const { title, author, type, pubYear, description } = req.body;
     const book = new bookModel({
          title,
          author,
          type,
          pubYear,
          description,
     });

     book.save();
     res.json({ message: 'book created successfully', data: book });
};

//update book
const updateBookController = (req, res) => {
     const { title, author, type, pubYear, description } = req.body;

     const updatedBook = bookModel.update({
          title,
          author,
          type,
          pubYear,
          description,
     });
     res.json({ message: title + ' updated successfully', data: updatedBook });
};

//delete book
const deleteBookController = (req, res) => {
     const { title } = req.body;
     const deletedBook = bookModel.delete({ title });
     res.json({ message: title + ' deleted successfully', data: deletedBook });
};

module.exports = {
     listBooksController,
     createBookController,
     updateBookController,
     deleteBookController,
};
