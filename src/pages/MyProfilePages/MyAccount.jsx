import React from 'react'

const MyAccount = () => {
  return (
    <div id="myAccount-details-box" style={{ flex: 4 }}>
      <div className="row input-box-outer">
        <input
          type="password"
          name="pass"
          placeholder="New Password"
          className="myAccount-input-box"
        //   onChange={handlePasswordInput}
        ></input>
      </div>

    <div className="row input-box-outer">
      <input
        type="password"
        name="confirmPass"
        placeholder="Confirm New Password"
        className="myAccount-input-box"
        // onChange={handlePasswordInput}
      ></input>
    </div>

    <div style={{marginTop:10}}>
      <input 
      type="button"
      value="Confirm Change"
      className="Button3"
    //   onClick={confirmPasswordChange}
      />
      <input
        type="button"
        value="Cancel"
        id="confirm-change"
        // onClick={cancelChange}
      ></input>
      
    </div>

  </div>
  
  )
}

export default MyAccount