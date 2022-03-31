class ShoppingTag extends React.Component {
    constructor(props) {
        super(props)

        let grp
        grp = App.gruppeHinzufuegen("Obst & Gemüse")
        grp.artikelHinzufuegen("Apfel", "Banane")
        grp = App.gruppeHinzufuegen("Getreide produkte")
        grp.artikelHinzufuegen("Brot")
        grp = App.gruppeHinzufuegen("Milchprodukte")
        grp.artikelHinzufuegen("Milch")
        let art = grp.artikelHinzufuegen("Linsen")
        art.gekauft = true


        this.state = {
            aktiveGruppe: null
        }
    }

    artikelChecken = (artikel) =>{
        artikel.gekauft = !artikel.gekauft
        this.setState({state: this.state})
        (<GruppenTag checkHandler={this.artikelChecken}/>)

    }


    setAktiveGruppe = (gruppenId) =>{
        App.aktiveGruppe = gruppenId
    this.setState({aktiveGruppe: App.aktiveGruppe})
    console.debug(this.state.aktiveGruppe)
}

    render = () => {
        return (
            <div>

                <header>
                    <h1>Einkaufsliste</h1>
                    <nav>
                        <input type="text" placeholder="Artikel hinzufügen"/>
                        <button className="material-icons">add_circle</button>
                    </nav>
                </header>
                <hr/>

                <main>
                    <section>
                        <h2>Einkaufen
                            <i className="material-icons">expand_less</i>
                        </h2>
                        <dl>
                            {App.gruppenListe.map(gruppe => (
                                <GruppenTag key={gruppe.id} gruppe={gruppe} erledigt={false}
                                aktiveGruppeHandler={this.setAktiveGruppe}/>
                            ))}

                        </dl>
                    </section>
                    <hr/>
                    <section>
                        <h2>Erledigt
                            <i className="material-icons">expand_less</i>
                        </h2>
                        <dl>
                            {App.gruppenListe.map(gruppe => (
                                <GruppenTag key={gruppe.id} gruppe={gruppe} erledigt={true}/>
                            ))}
                        </dl>
                    </section>
                </main>
                <hr/>

                <footer>
                    <nav>
                        <button>
                            <span className="material-icons">bookmark_add</span> Gruppen
                        </button>
                        <button>
                            <span className="material-icons">sort</span> Sortieren
                        </button>
                        <button>
                            <span className="material-icons">settings</span> Einstellungen
                        </button>
                    </nav>
                </footer>
            </div>
        )
    }
}
