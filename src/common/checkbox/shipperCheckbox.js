import React from 'react'
import reactDom from 'react-dom'
import { Checkbox } from 'semantic-ui-react'
import { shipperOpptions } from '../constants'
class CheckboxShipper extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='checkbox'>
        <p>Shipper</p>
      <ul>
      {
         shipperOpptions.map((e) => (
        <li>
          <Checkbox label={e} />
        </li>)
        )
      }
      </ul>
    </div>
    )
  }

}

export default CheckboxShipper
