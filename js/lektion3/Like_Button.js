
class Like_Button extends React.Component{
    constructor(props) {
        super(props);
        this.state = { liked: false};
    }

    render = () => {

        if (this.state.liked) {

        return (
            <div>
            "Dir gefällt das."
            </div>
        )
    }
        return (
          <div>
              <button onClick={() => this.setState({ liked: true }) }>Gefällt mir!</button>

          </div>
        );
    }
}
