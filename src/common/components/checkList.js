import React from 'react'
import { Form } from 'semantic-ui-react'
import './checkbox.scss'

export default class CheckList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { name, options } = this.props
    return (
      <div className='checkboxBusiness'>
        <p>{name}</p>
        <ul>
          {options?.map((e, i) => <li key={i}><Form.Checkbox label={e.text} value={e.value} /></li>)}
        </ul>
      </div>
    )
  }

}

