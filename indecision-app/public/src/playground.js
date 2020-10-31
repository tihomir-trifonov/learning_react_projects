console.log('App.js is running!');

// JSX - JavaScript XML
const template =(
    <div>
        <h1>This is JSX from app.js! aaaand changes</h1>
        <p>More info</p>
            <ol>
                <li> a</li>
                <li> b</li>
                <li> c</li>
            </ol>

    </div>
);


const fullName = "Mongo Mongolaev"

const firstName = (names) => names.split(" ")[0]

const user = {
    Name: firstName(fullName),
    Age: 37,
    Location: "Nowhere"
}

function getLoation(location) {
    if (location){
        return <p>Locaion: {location}</p>
    }
}

const template2 = (
    <div>
        <h1>{user.Name ? user.Name : "Anonymooo"}</h1>
        {(user.Age && user.Age >= 18) && <p> {"This old: "+ user.Age}</p>}
        {getLoation(user.Location)}

    </div>
);

const book = {
    title:"The great adventures",
    subtitle:"of the small Mongo",
    options:[1,2,3,4,5]
}
const template3 =(
    <div>
    {book.subtitle && <h1>{book.title.toUpperCase()}</h1>}
    {book.subtitle && <p>{book.subtitle}</p>}
    <p>{book.options && book.options.length > 0 ? "Those are the options" : "No no no optios"}</p>
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);


const template4 = {
    anArray : [1,2,3],

    printTheArray() {
        this.anArray.forEach(
            (num) =>{console.log(num)}
        )
    },

    multiplierNum : 3,

    mapTheAray() {
        const arrayMessages = this.anArray.map((num) => num*this.multiplierNum)
        return arrayMessages
    }
}

template4.printTheArray()
console.log(template4.mapTheAray())