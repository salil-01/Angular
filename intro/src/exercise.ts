interface Book {
  title: string;
  author: string;
  published_year: number;
}

const displayBookInfo = (book: Book) => {
  console.log(book);
};

const book: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  published_year: 1925,
};
displayBookInfo(book);
