var Books = [{ 'title': 'Mathematics', 'price': 123, 'author': 'RD', 'publisher': 'Arihant' },
{ 'title': "Science", 'price': 1223, 'author': 'raman', 'publisher': 'Agrawal' },
{ 'title': "Hindi", 'price': 422, 'author': 'Munshi Premchand', 'publisher': 'Geeta Press' }]

function BindBooks(books) {
    var row = `<tr>
    <th>S.no</th>
    <th><a href="#" onclick=sort()>Name</a></th>
    <th>Price</th>
    <th>Author</th>
    <th>Publication</th>
    <th>Action</th>
</tr>`;
    books.forEach(function (book, i) {
        row += `<tr><td>${i + 1}</td><td>${Books[i].title}</td><td>${Books[i].price}</td><td>${Books[i].author}</td><td>${Books[i].publisher}</td><td><a href="#" onclick=edit(${i})>Edit</a><br><a href="#" onclick=del(${i})>Delete</a><br></td></tr>`
    })

    document.getElementById("tbl").innerHTML = row;
}

function edit(i) {
    var book = Books[i];
    document.getElementById("title").value = Books[i].title
    document.getElementById("price").value = Books[i].price
    document.getElementById("author").value = Books[i].author
    document.getElementById("publish").value = Books[i].publisher
    document.getElementById("index").value = i;
    document.getElementById("btn-update").setAttribute("onclick", "update(" + i + ")");


}

function del(i) {
    // event.preventDefault();
    Books.splice(i, 1);
    BindBooks(Books);
}


function AddBook() {
    var title = document.getElementById("title").value;
    var price = document.getElementById("price").value;
    var author = document.getElementById("author").value;
    var publisher = document.getElementById("publish").value;
    if (title !== "" && price !== "" && author != "" && publisher != "") {
        Books.push({ "title": title, "price": price, "author": author, "publisher": publisher })
    }




    BindBooks(Books);
    ClearForm();


}



function update(i) {
    console.log(i);
    var title = document.getElementById("title").value;
    var price = document.getElementById("price").value;
    var author = document.getElementById("author").value;
    var publisher = document.getElementById("publish").value;
    Books[i].title = title;
    Books[i].price = price;
    Books[i].author = author;
    Books[i].publisher = publisher;

    BindBooks(Books);
    ClearForm();

}


function ClearForm() {

    document.getElementById("title").value = ""
    document.getElementById("price").value = ""
    document.getElementById("author").value = ""
    document.getElementById("publish").value = ""

}

function SearchBook() {
    row = '';
    let keywor = document.getElementById("sch").value.toUpperCase();
    // console.log(keywor);
    row = `<tr>
                <th>S.no</th>
                <th><a href="#" onclick=sort()>Name</a></th>
                <th>Price</th>
                <th>Author</th>
                <th>Publication</th>
                <th>Action</th>
                </tr>`;

    // const filter = Books.filter((item, index) => {
    //     return item.title.toUpperCase().includes(keywor)
    // })
    // console.log("Filter Data ", filter);

    for (let i = 0; i < Books.length; i++) {
        // console.log(bb);
        if (Books[i].title.toUpperCase().indexOf(keywor) > -1) {
            console.log(Books[i].title);
            // document.getElementById("bookSch").innerHTML = Books[i]
            // console.log(Books[i])
            // varb.push(Book[i])
            // Books.forEach(function (book, i) {

            row += `<tr><td>${i + 1}</td><td>${Books[i].title}</td><td>${Books[i].price}</td><td>${Books[i].author}</td><td>${Books[i].publisher}</td><td><a href="#" onclick=edit(${i})>Edit</a><br><a href="#" onclick=del(${i})>Delete</a></td></tr>`
            // })
        }

    }

    document.getElementById("tbl").innerHTML = row;
}


function sort() {
    row = '';
    row = `<tr>
                <th>S.no</th>
                <th><a href="#" onclick=sort()>Name</a></th>g
                <th>Price</th>
                <th>Author</th>
                <th>Publication</th>
                <th>Action</th>
                </tr>`;

    var sbook = [];
    for (let i = 0; i < Books.length; i++) {
        sbook.push(Books[i].title.toUpperCase())
    }
    sbook.sort();
    for (let i = 0; i < sbook.length; i++) {
        for (let j = 0; j < Books.length; j++) {

            if (Books[j].title.toUpperCase().indexOf(sbook[i]) > -1) {
                console.log(Books[j])
                // console.log(sbook[i])
                // console.log(Books[j].title)
                //console.log(Books)
                row += `<tr><td>${i + 1}</td><td>${Books[j].title}</td><td>${Books[j].price}</td><td>${Books[j].author}</td><td>${Books[j].publisher}</td><td><a href="#" onclick=edit(${j})>Edit</a><br><a href="#" onclick=del(${j})>Delete</a></td></tr>`


            }
        }
    }
    document.getElementById("tbl").innerHTML = row;

}
BindBooks(Books);