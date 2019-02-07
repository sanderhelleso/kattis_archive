process.stdin.resume();
process.stdin.setEncoding("ascii");

// retrieve books from input
let bookPrices = [];
process.stdin.on('data', input => bookPrices.push(input));
process.stdin.on('end', () => processData(...bookPrices.map(book => book.split('\n'))));

const processData = bookPrices => {
    
    const BOOKS_GROUPING_SIZE = 3; // value to group books by
    bookPrices = bookPrices.slice(1); // remove 1 index (input count)
    
    // split array into multiple sub arrays sorted high -> low
    bookPrices = new Array(Math.ceil(bookPrices.length / BOOKS_GROUPING_SIZE))
                .fill('').map(() => bookPrices.sort().reverse().splice(0, BOOKS_GROUPING_SIZE)
                .map(book => parseInt(book)));
    
    // get sum for each book array, removing the lowest priced book then combining the total sum
    bookPrices = bookPrices.map(books => books.length === 3 
                ? books.sort().slice(1).reduce(getSum)
                : books.reduce(getSum)).reduce(getSum);
    
    // print result
    console.log(bookPrices);
} 

// get sum of arr
const getSum = (total, num) => total + num;