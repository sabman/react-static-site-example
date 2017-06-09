import React from "react";

export default (props) => {
  return (
    <form method="POST" action="http://formspree.io/saburq@gmail.com">
      <input type="hidden" name="_subject" value="SpendMapp: New request for demo!" />
      <input type="hidden" name="_cc" value="shoaib@geografia.com.au,info@geografia.com.au" />
      <div className="form-group row">
        <div className="col">
          <input type="text" name="first-name" placeholder="First Name*" className="form-control" id="inputFirstname"/>
        </div>
        <div className="col">
          <input type="text" name="last-name" placeholder="Last Name*" className="form-control" id="inputLastname"/>
        </div>
      </div>
      <div className="form-group row">
        <div className="col">
          <input type="email" name="email" className="form-control" id="inputEmail" placeholder="Work email*"/>
        </div>
      </div>
      <div className="form-group row">
        <div className="col">
          <input type="tel" name="phone" className="form-control" id="inputPhone" placeholder="Phone number*"/>
        </div>
      </div>
      <div className="form-group row">
        <div className="col">
          <select name="role" defaultValue="" className="form-control">
            <option value="">Role</option>
            <option value="local-council-employee">Local Council Employee</option>
            <option value="journalist">Journalist</option>
            <option value="private-sector-employee">Private Sector Employee</option>
            <option value="other">Other</option>
          </select>  
        </div>
        <div className="col">
          <input type="text" name="organization" placeholder="Organization*" className="form-control" id="inputLastname"/>
        </div>
      </div>
      <div className="form-group row">
        <div className="col">
          <button type="submit" className="btn btn-primary btn-block">Request a demo</button>
        </div>
      </div> 
    </form>
  )
}