/**
 * Diese Klasse steuert die Hauptseite der Einkaufsliste */
class ShoppingTag extends React.Component {
    constructor(props) {
        super(props)

/** this.state merkt die aktive Gruppe und den startzustand der Einkaufsliste */
        this.state = {aktiveGruppe: null}
        this.startzustandLaden()
    }


/** hier wird mit localStorage der Startzustand aufgeladen */

    async startzustandLaden(){
        let gespeicherterZustand = localStorage.getItem(App.STORAGE_KEY)
        if (gespeicherterZustand){
            App.laden()
        } else {
            await App.datenEinlesen()
            this.setState(this.state)
        }

    }

    /** Diese Methode fügt gekaufte Artikeln in die Erledigt Teil hinzu */
    erledigteArtikelAnzeigen = () => {
        let itemsRelevant =[]
        App.gruppenListe.map(gruppe => {
          let erledigteArtikeln = gruppe.artikelListe.filter(item => item.gekauft == true);
           itemsRelevant = itemsRelevant.concat(erledigteArtikeln)
           })
        return itemsRelevant
    }

/** Diese Methode fügt ein Artikel in die aktive Gruppe hinzu */

    artikelHinzufuegen = () => {
        let eingabeFeld = document.getElementById("artikelEingabe")
        if (eingabeFeld.value.trim().length > 0) {
            let gruppe = App.gruppeFinden(App.aktiveGruppe)
            gruppe.artikelHinzufuegen(eingabeFeld.value)
            this.setState(this.state)
        }
        eingabeFeld.value = ""
        eingabeFeld.focus()

    }

    /** Mit diese Methode prüfen wir ob der Artikel gekauft ist
     *
     * @param {Artikel} artikel
     */
    artikelChecken = (artikel) => {
        artikel.gekauft = !artikel.gekauft
        this.setState(this.state)

    }

    /** Diese Methode setzt eine bestimmte Gruppe auf die aktive Gruppe auf */
    setAktiveGruppe = (gruppenId) => {
        App.aktiveGruppe = gruppenId
        this.setState({aktiveGruppe: App.aktiveGruppe})
        console.debug(this.state.aktiveGruppe)
    }

/** Die render Methode wird den HTML Code zurückgeben */
    render = () => {
        return (<div>

            <header>
                <h1>Einkaufsliste</h1>
                <nav>
                    <input id="artikelEingabe" type="text" placeholder="Artikel hinzufügen"/>
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
                            <GruppenTag aktiv={gruppe.id == this.state.aktiveGruppe} key={gruppe.id} gruppe={gruppe}
                                        erledigt={false}
                                        aktiveGruppeHandler={this.setAktiveGruppe}
                                        checkHandler={this.artikelChecken}/>))}

                    </dl>
                </section>
                <hr/>
                <section>
                    <h2>Erledigt
                        <i className="material-icons">expand_less</i>
                    </h2>
                    <dl>
                        {this.erledigteArtikelAnzeigen().map(artikel => (
                            <ArtikelTag key={artikel.id} artikel={artikel}
                            aktiveGruppeHandler={this.setAktiveGruppe}
                            checkHandler={this.artikelChecken}/>)
                            )}
                    </dl>
                </section>
            </main>
            <hr/>

            <footer>
                <nav>
                    <button onClick={() => this.setState({showGruppenDialog: true})}>
                            <span className="material-icons">bookmark_add
                                </span> Gruppen
                    </button>

                </nav>
                <GruppenDialog visible={this.state.showGruppenDialog} gruppenliste={App.gruppenListe}
                               onDialogClose={() => this.setState({showGruppenDialog: false})}/>
            </footer>
        </div>)
    }
}
