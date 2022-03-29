
class Counter extends React.Component{
    constructor(props) {
        super(props);
        /*ToDO: Setze hier den initialen state von counter auf 0 */
        this.state = {counter: 0}
    }

    increaseCounter = () => {
        this.setState({counter: this.state.counter +1})

        console.log("counter: ", this.state.counter);
    };

    render = () => {
        return (
             <div>
                 <button onClick={this.increaseCounter}>Like Counter!</button>



                 {this.state.counter}
            </div>

        );
    }
}