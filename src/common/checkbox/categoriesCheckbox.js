import React from 'react'
import reactDom from 'react-dom'
import { Checkbox } from 'semantic-ui-react'
import { categoriesOpptions } from '../constants'
import './checkbox.scss'
class CheckboxCategories extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='checkbox'>
        <p>Categories</p>
        <ul>
        {
          categoriesOpptions.map((e) => (
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

export default CheckboxCategories
