import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Select, TextArea } from 'semantic-ui-react'
import { unit } from '../../common/constants'
export default class AddProduct extends Component {
  render() {
    return (
      <Form>
        <Form.Field>
          <div className="form-group has-success">
            <label className="required">Tên Sản phẩm</label>
            <input placeholder='First Name' />
          </div>
        </Form.Field>
        <Form.Field>
          <div className="form-group has-success">
            <label className="control-label" htmlFor="inputSuccess">Upload image</label>
            <input type="file" name="file" id="file" accept="image/x-png,image/gif,image/jpeg" />
          </div>
        </Form.Field>
        <div className="form-group has-success">
          <label className="required">Review Image</label>
          <img src=''></img>
        </div>
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Short description'
          placeholder='Opinion'
        />
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Full description'
          placeholder='Opinion'
        />
        <Form.Group widths='equal'>
          <Form.Field
            id='form-input-control-first-name'
            control={Input}
            label='Price'
            placeholder='...'
          />
          <Form.Field
            control={Select}
            options={unit}
            label={{ children: 'Currency', htmlFor: 'form-select-control-gender' }}
            placeholder='VND'
            search
            searchInput={{ id: 'form-select-control-gender' }}
          />
          <Form.Field
            id='form-input-control-last-name'
            control={Input}
            label='Discount Value or Pecentage'
            placeholder='20 or 20%'
          />
          <p>Price with Discount : <span>80.000 VND</span></p>
          <label>Unit</label>
          <Form.Field
            label='Kg'
            control='input'
            type='radio'
            name='htmlRadios'
          />
          <Form.Field
            label='Piece'
            control='input'
            type='radio'
            name='htmlRadios'
          />
          <Form.Field
            label='Pack'
            control='input'
            type='radio'
            name='htmlRadios'
          />
          <Form.Field
            label='Others'
            control='input'
            type='radio'
            name='htmlRadios'
          />
        </Form.Group>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}
