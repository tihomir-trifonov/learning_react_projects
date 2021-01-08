console.log('App.js is running!');

// JSX - JavaScript XML
const template = (
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

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        book.options.push(option)
        console.log(book.options)
        e.target.option.value = ""
        renderBook()
    }
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random()*book.options.length);
    const option = book.options[randomNum];
    alert(option)
    renderBook()
}

const resetOnClick = () => {
    book.options = []
    renderBook()
}

const book = {
    title: "The Bubi bu shupi susp",
    subtitle: "of the small Bubi Bu",
    options: []
}
const appRoot = document.getElementById('app');


const renderBook = () => {

    const template3 = (
        <div>
            {book.subtitle && <h1>{book.title.toUpperCase()}</h1>}
            {book.subtitle && <p>{book.subtitle}</p>}
            <p>{book.options && book.options.length > 0 ? "Those are the options" : "No no, no optios"}</p>



            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
                <ol>{
                    book.options.map(
                        (option) => <li key={option}>Option: {option}</li>
                    )
                }</ol>
            </form>
            <button disabled={book.options.length < 2} onClick={onMakeDecision}>What shoud I do?</button>
            <button onClick={resetOnClick} name="reset">Clear all</button>
        </div>
    );

    ReactDOM.render(template3, appRoot);
}

renderBook()
