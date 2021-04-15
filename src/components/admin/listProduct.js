import React, { Component } from 'react'
export default class ListProduct extends Component {
  render() {
    return (
      <div>
        <div className="panel panel-primary">
          <div className="">
            <div className="row">
              <div className="col-md-2">
                Product
              </div>
              <div className="col-md-10">
                <div className="col-md-3">

                  <div className="input-group custom-search-form">
                    <input type="text" name="keySearch" className="form-control" placeholder="Search..." />
                    <span className="input-group-btn">
                      <button className="btn btn-default" type="submit">
                        <i className="fa fa-search" />
                      </button>
                    </span>
                  </div>
                </div>
                <div className="col-md-3">
                  <button className="btn btn-danger">Add product</button>
                  <button href="" className="btn btn-success btn-mini">Edit</button>
                  <button className="btn btn-danger btn-mini">Delete</button>
                </div>
              </div>
            </div>
          </div>
          <div className="panel-body">
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th />
                    <th>Status</th>
                    <th>Name</th>
                    <th>Images</th>
                    <th>Categories</th>
                    <th>Price with discount</th>
                    <th>Curent Inventory</th>
                    <th>Unit</th>
                  </tr>
                </thead>
                <tbody><tr className>
                  <td>aaa</td>
                  <td>aaa</td>
                  <td>aaa</td>
                  <td><img className="img-thumbnail" style={{ width: '70px', height: '70px' }} src="" /></td>
                  <td>aa</td>
                  <td>aa</td>
                  <td>aa</td>
                  <td>aa</td>
                </tr></tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="modal" tabIndex={-1} role="dialog" id="modal-confirm-delete">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Xác nhận xóa sản phẩm</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Bạn có muốn xóa sản phảm này không</p>
              </div>
              <div className="modal-footer">
                <button id="btn-delete" type="button" className="btn btn-primary">Có</button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Không</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}