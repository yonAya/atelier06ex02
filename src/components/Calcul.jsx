import { Component } from 'react'

class Calcul extends Component {
  constructor(props) {
    super(props)

    this.state = {
      distance: 0,
      poids: 0,
      mode: 'normal',
      total: 0,
    }

    this.handleChange = this.handleChange.bind(this)
    this.calculer = this.calculer.bind(this)
  }

  handleChange(e) {
    const name = e.target.name
    const value = e.target.value

    this.setState({ [name]: value })
  }

  calculer(e) {
    e.preventDefault()

    let total = 0

    if (this.state.poids < 10) total = this.state.distance * 0.5
    else total = this.state.distance * (this.state.poids / 10) * 0.3

    if (this.state.mode === 'express') total += total * 0.2

    this.setState({ total })
  }

  render() {
    return (
      <div className="calcul">
        <div className="form">
          <div className="form-group">
            <label htmlFor="distance">Distance :</label>
            <input
              type="text"
              name="distance"
              id="distance"
              value={this.state.distance}
              onChange={this.handleChange}
            />
            KM
          </div>

          <div className="form-group">
            <label htmlFor="poids">Poids :</label>
            <input
              type="text"
              name="poids"
              id="poids"
              value={this.state.poids}
              onChange={this.handleChange}
            />
            KG
          </div>

          <div className="form-group">
            <label>Mode de transport :</label>
            <input
              value="normal"
              checked={this.state.mode === 'normal'}
              onChange={this.handleChange}
              type="radio"
              name="mode"
              id="normal"
            />
            <label htmlFor="normal">Normal</label>
            <input
              value="express"
              checked={this.state.mode === 'express'}
              onChange={this.handleChange}
              type="radio"
              name="mode"
              id="express"
            />
            <label htmlFor="express">Express</label>
          </div>
          <hr />

          <button onClick={this.calculer}>Calculer</button>

          <div className="form-group">
            <label htmlFor="total">Cout Total :</label>
            <input
              value={this.state.total}
              onChange={this.handleChange}
              type="text"
              name="total"
              id="total"
              readOnly
            />
            DH
          </div>
        </div>
      </div>
    )
  }
}

export default Calcul
