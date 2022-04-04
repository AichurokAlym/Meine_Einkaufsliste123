class ShoppingTag extends React.Component {
    constructor(props) {
        super(props)

        let grp
        grp = App.gruppeHinzufuegen("Obst & Gemüse")
        grp.artikelHinzufuegen("Apfel", "Banane")
        grp = App.gruppeHinzufuegen("Getreide produkte")
        let art = grp.artikelHinzufuegen("Linsen")
        art.gekauft = true
        grp.artikelHinzufuegen("Brot")
        grp = App.gruppeHinzufuegen("Milchprodukte")
        grp.artikelHinzufuegen("Milch")



        this.state = {
            aktiveGruppe: grp.id
        }
    }
    artikelHinzufuegen = () => {
        let eingabeFeld = document.getElementById("artikelEingabe")
        if(eingabeFeld.value.trim().length > 0) {
            let gruppe = App.gruppeFinden(App.aktiveGruppe)
            gruppe.artikelHinzufuegen(eingabeFeld.value)
            this.setState(this.state)
        }
        eingabeFeld.value = ""
        eingabeFeld.focus()

    }

    artikelChecken = (artikel) =>{
        artikel.gekauft = !artikel.gekauft
        this.setState(this.state)

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
                        <input id= "artikelEingabe" type="text"  placeholder="Artikel hinzufügen"/>
                        <button className="material-icons" onClick={() => this.artikelHinzufuegen()}>add_circle</button>
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
                                <GruppenTag aktiv={gruppe.id == this.state.aktiveGruppe} key={gruppe.id} gruppe={gruppe} erledigt={false}
                                aktiveGruppeHandler={this.setAktiveGruppe} checkHandler={this.artikelChecken}/>
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
                                <GruppenTag aktiv={gruppe.id == this.state.aktiveGruppe} key={gruppe.id} gruppe={gruppe}
                                            erledigt={true} aktiveGruppeHandler={this.setAktiveGruppe} checkHandler={this.artikelChecken}/>
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
