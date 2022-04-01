class GruppenTag extends React.Component {
    artikelEntfernen = (artikelNamen) => {
        this.props.gruppe.artikelEntfernen(artikelNamen)
        this.props.aktiveGruppeHandler(this.props.gruppe.id)

    }
    render = () => {
        let itemsRelevant = this.props.gruppe.artikelListe.filter(item => item.gekauft == this.props.erledigt)
        return (
            <div>
                <dt onClick={() => this.props.aktiveGruppeHandler(this.props.gruppe.id)}
                    className={!this.props.erledigt && this.props.aktiv ? "aktiv": "inaktiv"}>
                    {this.props.gruppe.name}<i className="material-icons">expand_less</i></dt>
                {itemsRelevant.map(artikel => (
                    <ArtikelTag key={artikel.id} artikel={artikel}
                    checkHandler={this.props.checkHandler} artikelEntfernen={this.artikelEntfernen}/>
                ))}
            </div>
        )
    }
}