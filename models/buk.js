const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Id", bookSchema);

const idSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  book: [bookSchema],
});

module.exports = mongoose.model("Book", idSchema);

//Postman Message
// {
//     "message": "Book created successfully",
//     "data": {
//       "id": 3,
//       "book": [
//         {
//           "name": "Stonecold",
//           "author": "David Baldacci",
//           "description": "Oliver Stone, the leader of the mysterious grou...",
//           "genre": "Thriller",
//           "image": "https://ik.imagekit.io/panmac/tr:q-75,di-placeh...",
//           "id": 4,
//           "_id": "61af661756dd8dfac38a07b4"
//         }
//       ],
//       "_id": "61af661756dd8dfac38a07b3",
//       "__v": 0
//     }
//   }

// Postman Query
// {
//     "book" :[{
//      "author": "David Baldacci",
//     "description": "Oliver Stone, the leader of the mysterious grou...",
//     "image": "https://ik.imagekit.io/panmac/tr:q-75,di-placeh...",
//     "name": "Stonecold",
//     "genre": "Thriller",
//     "id": 4
//     }],
//     "id": 3
//     }
