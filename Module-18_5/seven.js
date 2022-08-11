//  Write the price of the books that you have. Display the prices if the prices is lower than 200

var books = [20, 50, 90, 150, 180, 199, 200, 220, 251];
for(var i = 0; i < books.length; i++) {
    var book = books[i];
    if (book > 200) {
        continue;
    }
    console.log(book);
}