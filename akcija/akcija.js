process.stdin.resume();
process.stdin.setEncoding("ascii");

let bookPrices = [];
process.stdin.on('data', input => bookPrices.push(input));
process.stdin.on('end', () => processData(...bookPrices.map(book => book.split('\n'))));

const processData = bookPrices => {
    
    const BOOKS_GROUPING_SIZE = 3;
    bookPrices = bookPrices.slice(1); 
    
    bookPrices = new Array(Math.ceil(bookPrices.length / BOOKS_GROUPING_SIZE))
                .fill('').map(() => bookPrices.sort().reverse().splice(0, BOOKS_GROUPING_SIZE)
                .map(book => parseInt(book)));
    
    bookPrices = bookPrices.map(books => books.length === 3 
                ? books.sort().slice(1).reduce(getSum)
                : books.reduce(getSum)).reduce(getSum);
    
    console.log(bookPrices);
} 

const getSum = (total, num) => total + num;
