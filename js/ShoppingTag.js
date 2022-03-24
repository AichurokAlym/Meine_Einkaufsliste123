class ShoppingTag extends React.Component {
    constructor() {
        super();
        let gruppe1 = App.gruppeHinzufuegen("Obst & Gemüse")
        gruppe1.artikelHinzufuegen("Apfel", "Banane")
        let gruppe2 = App.gruppeHinzufuegen("Getreide produkte")
        gruppe2.artikelHinzufuegen("Brot")
        let gruppe3 = App.gruppeHinzufuegen("Milchprodukte")
        gruppe3.artikelHinzufuegen("Milch")
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
                                <GruppenTag key={gruppe.id} gruppe={gruppe} erledigt={false}/>
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
