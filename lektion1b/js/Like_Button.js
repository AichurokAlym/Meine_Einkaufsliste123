

/*ToDo: Füge hinter 'extends' den fehlenden Ausdruck ein und entferne die Kommentar-zeichen*/

class Like_Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render = () => {
        if (this.state.liked) {
            //ToDo: Füge hier ein Rückgabewert hinzu, der anstelle des "Gefällt Mir"-Buttons angezeigt werden soll
        return ("Dir gefällt das")
        }
        return (
            //ToDo: Füge hier HTML-Code ein, der einen "Gefällt Mir"-Button beinhaltet und ein onClick-Even verarbeitet
    <div><button onClick={() => this.setState({ liked: true }) }>Gefällt mir!</button> </div>

        );
    }
}
