/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Users.css'

const Users = () => {
  return (
 
    <body className="modal-fade">
  {/*   <!-- Add New User Modal Start --> */}
    <div className="modal-fade" tabindex="-1" id="addNewUserModal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add New User</h5>
            <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form id="add-user-form" className="p-2" novalidate>
              <div className="row mb-3 gx-3">
                <div className="col">
                  <input type="text" name="fname" className="form-control form-control-lg" placeholder="Enter First Name" required/>
                  <div className="invalid-feedback">First name is required!</div>
                </div>
  
                <div className="col">
                  <input type="text" name="lname" className="form-control form-control-lg" placeholder="Enter Last Name" required/>
                  <div className="invalid-feedback">Last name is required!</div>
                </div>
              </div>
  
              <div className="mb-3">
                <input type="email" name="email" className="form-control form-control-lg" placeholder="Enter E-mail" required/>
                <div className="invalid-feedback">E-mail is required!</div>
              </div>
  
              <div className="mb-3">
                <input type="tel" name="phone" className="form-control form-control-lg" placeholder="Enter Phone" required/>
                <div className="invalid-feedback">Phone is required!</div>
              </div>
  
              <div className="mb-3">
                <input type="submit" value="Add User" className="btn btn-primary btn-block btn-lg" id="add-user-btn"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  {/*   <!-- Add New User Modal End --> */}
  
   {/*  <!-- Edit User Modal Start --> */}
    <div className="modal-fade" tabindex="-1" id="editUserModal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit This User</h5>
            <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form id="edit-user-form" className="p-2" novalidate>
              <input type="hidden" name="id" id="id"/>
              <div className="row mb-3 gx-3">
                <div className="col">
                  <input type="text" name="fname" id="fname" className="form-control form-control-lg" placeholder="Enter First Name" required/>
                  <div className="invalid-feedback">First name is required!</div>
                </div>
  
                <div className="col">
                  <input type="text" name="lname" id="lname" className="form-control form-control-lg" placeholder="Enter Last Name" required/>
                  <div className="invalid-feedback">Last name is required!</div>
                </div>
              </div>
  
              <div className="mb-3">
                <input type="email" name="email" id="email" className="form-control form-control-lg" placeholder="Enter E-mail" required/>
                <div className="invalid-feedback">E-mail is required!</div>
              </div>
  
              <div className="mb-3">
                <input type="tel" name="phone" id="phone" className="form-control form-control-lg" placeholder="Enter Phone" required/>
                <div className="invalid-feedback">Phone is required!</div>
              </div>
  
              <div className="mb-3">
                <input type="submit" value="Update User" className="btn btn-success btn-block btn-lg" id="edit-user-btn"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Edit User Modal End --> */}
    <div className="container">
      <div className="row mt-4">
        <div className="col-lg-12 d-flex justify-content-between align-items-center">
          <div>
            <h4 className="text-primary">All users in the database!</h4>
          </div>
          <div>
            <button className="btn btn-primary" type="button" data-toggle="modal" data-target="#addNewUserModal">Add New User</button>
          </div>
        </div>
      </div>
      <hr/>
      <div className="row">
        <div className="col-lg-12">
          <div id="showAlert"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="table-responsive">
            <table className="table table-striped table-bordered text-center">
              <thead>
                <tr>
                  <th>ID</th>
                  <th id="first-name">First Name</th>
                  <th id="last-name" >Last Name</th>
                  <th id="email">E-mail</th>
                  <th id="phone">Phone</th>
                  <th id="action">Action</th>
                </tr>
              </thead>
              <tbody>
              
                
                <tr>
                  <th>1</th>
                  <th>MOUAD</th>
                  <th>SLOAUI</th>
                  <th>MOUAD.SLOAUI@gmail.com</th>
                  <th>0622222222</th>
                  <th>UHHU</th>
                </tr>
                <tr>
                  <th>2</th>
                  <th>AMINE</th>
                  <th>LAAKROUTE</th>
                  <th>AMINE.LAAKROUTE@GMAIL.COM</th>
                  <th>0647474747</th>
                  <th>UZDHYUZ</th>
                </tr>
              
  
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </body>

  )
}

export default Users