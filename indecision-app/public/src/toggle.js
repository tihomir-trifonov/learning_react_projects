class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            shownMore: false
        };
    };

    render() {
        return (
            <div>
                <h1>Every other newspaper title</h1>
                <button onClick={this.handleToggle}>{this.state.shownMore ? "Show less" : "Show more"}</button>
                {this.state.shownMore && <p>A bunch of more info and the article</p>}
            </div>
        );
    };

    handleToggle() {
        this.setState((prevState) => {
            return {
                shownMore: !prevState.shownMore
            };
        });
    };
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));