import React from 'react'
import { Checkbox } from 'semantic-ui-react'
import './checkbox.scss'

export default class CheckList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { name, options } = this.props
    return (
      <div className='checkbox'>
        <p>{name}</p>
        <ul>
          {options?.map((e) => <li><Checkbox value={e.value} label={e.text} /></li>)}
        </ul>
      </div>
    )
  }

}

