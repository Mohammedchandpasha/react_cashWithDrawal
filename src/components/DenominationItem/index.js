// Write your code here

import './index.css'

const DenominationItem = props => {
  const {denominationDetails, onDeduct} = props
  const {value} = denominationDetails
  const deduct = () => {
    onDeduct(value)
  }

  return (
    <li className="list">
      <button type="button" onClick={deduct} className="button">
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
