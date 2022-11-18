// Write your code here

import './index.css'
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onDeduct = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state

    return (
      <div className="app-container">
        <div className="home-container">
          <div className="name-container">
            <div className="name-first-letter-container">
              <p>s</p>
            </div>
            <p>Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p>Your Balance</p>
            <div>
              <p>{balance}</p>
              <p>In Rupees</p>
            </div>
          </div>
          <div className="withdraw-container">
            <p className="withdraw">Withdraw</p>
            <p>CHOOSE SUM (IN RUPEES)</p>
          </div>

          <div className="ul-container">
            <ul className="denomination-container">
              {denominationsList.map(each => (
                <DenominationItem
                  denominationDetails={each}
                  onDeduct={this.onDeduct}
                  key={each.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
