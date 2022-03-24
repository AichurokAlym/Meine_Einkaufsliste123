class GruppenTag extends React.Component {

  render = () => {
      this.props.gruppe.artikelListe.filter(
          item => item.gekauft === this.props.erledigt
      )
    return (

      <div>
          <dt>{this.props.gruppe.name}
              <i className="material-icons">expand_less</i>
          </dt>
          {this.props.gruppe.artikelListe.map(artikel => (
              <ArtikelTag key={artikel.id} artikel={artikel} />
          ))}

      </div>
    )
  }
}
