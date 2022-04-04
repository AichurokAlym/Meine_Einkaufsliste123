const gruppenNamen=["Obst & Gemüse","Milchprodukte", "Getreide produkte", "Fleischprodukte", "Eier", "Pilze"]
const imagesize=25
    class GruppenTag extends React.Component {
    artikelEntfernen = (artikelNamen) => {
        this.props.gruppe.artikelEntfernen(artikelNamen)
        this.props.aktiveGruppeHandler(this.props.gruppe.id)

    }
    render = () => {
        let itemsRelevant = this.props.gruppe.artikelListe.filter(item => item.gekauft == this.props.erledigt)
        console.debug(gruppenNamen.indexOf(this.props.gruppe.name)==-1)
        return (
            <div>
                <dt onClick={() => this.props.aktiveGruppeHandler(this.props.gruppe.id)}
                    className={!this.props.erledigt && this.props.aktiv ? "aktiv": "inaktiv"}>
                    {this.props.gruppe.name}
                    {gruppenNamen.indexOf(this.props.gruppe.name)==-1?<div></div>:
                        <img className="gruppenIcon" src={"img/Gruppen Icons/" + this.props.gruppe.name + ".png"} width={imagesize} height={imagesize}/>}
                    <i className="material-icons">expand_less</i></dt>
                {itemsRelevant.map(artikel => (
                    <ArtikelTag key={artikel.id} artikel={artikel}
                    checkHandler={this.props.checkHandler} artikelEntfernen={this.artikelEntfernen}/>
                ))}
            </div>
        )
    }
}