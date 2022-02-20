import React from "react";
import "../../styles/main.scss";
import Profile from "../../assets/Images/Profile.png";
// import firebase from "firebase";
// import {firestore} from "../../firebaseSetup";
// import { store } from "../../redux/Store/store";
import { Cart, Edit, Edit1 } from "../../Components/SvgComponents/svgs"
import { useState, useRef } from "react";
import { updateUserToken } from "../../redux/Actions/actions";
import { useEffect } from "react";


const ChangingPasswordForm = props => {
  const setChangePasswordState = props.setChangePasswordState;
  const handlePasswordInput = (event) => {
    if (event.target.name === "pass") {
      setPassword(event.target.value);
    } else if (event.target.name === "confirmPass") {
      setConfirmPass(event.target.value);
    }
  };

  const [password, setPassword] = useState();
  const [confirmPass, setConfirmPass] = useState();

  const confirmPasswordChange = async () => {

    if(password!=confirmPass) {
      alert("Passwords don't match");
      return;
    }
    let changed = false;
    const user = firebase.auth().currentUser;
    await user.updatePassword(password)
    .then(()=>{
      // Update successful.
      console.log("Password Changed")
      changed = true;
    })
    .catch((error) => {
        // An error ocurred
        // ...
       alert("Error ", error);
    });
    if(changed) {
      console.log("Updating token");
      updateUserToken(user);
      setChangePasswordState(false);
    }
  };

  const cancelChange = () => {
    setChangePasswordState(false);
  }
  return (
    <div id="myAccount-details-box" style={{ flex: 4 }}>
      <div className="row input-box-outer">
        <input
          type="password"
          name="pass"
          placeholder="New Password"
          className="myAccount-input-box"
          onChange={handlePasswordInput}
        ></input>
      </div>

    <div className="row input-box-outer">
      <input
        type="password"
        name="confirmPass"
        placeholder="Confirm New Password"
        className="myAccount-input-box"
        onChange={handlePasswordInput}
      ></input>
    </div>

    <div style={{marginTop:10}}>
      <input 
      type="button"
      value="Confirm Change"
      className="Button3"
      onClick={confirmPasswordChange}
      />
      <input
        type="button"
        value="Cancel"
        id="confirm-change"
        onClick={cancelChange}
      ></input>
      
    </div>

  </div>
  );
}

const MyAccount = (props) => {
  const user = store.getState().user;
  
  const [profilePic, setProfilePic] = useState(user.photoURL);
  const preview = useRef({image:user.photoURL});

  const chnagingName = useRef(false);
  const [changingPassword, setChangingPassState] = useState(false);

  const [nameFieldState, setnameFieldState] = useState({
    value: user.displayName,
    readOnly: true,
  });

  const [editProfile, setEditProfileState] = useState({state:"false"});

  const changeNameClickHandler = () => {
    chnagingName.current = true;
    setnameFieldState({
      value: "",
      readOnly: false,
      placeholder: "Name",
      autoFocus: true,
    });
  };

  const changePassClickHandler = () => {
    setChangingPassState(true);
  };


  const handleInput = (event) => {
    setnameFieldState({ ...nameFieldState, value: event.target.value });
  };

  const confirmChange = async (event) => {
    const token = firebase.auth().currentUser;

    let changed = false;

    if (chnagingName.current) {
      await token
        .updateProfile({
          displayName: nameFieldState.value,
        })
        .then(() => {
          // Update successful
          // ...
          changed = true;
        })
        .catch((error) => {
          // An error occurred
          console.log("Error: ", error);
        });
    }

    chnagingName.current = false;

    if (changed) {
      updateUserToken(token);
      console.log(profilePic);
      console.log(token);
      setnameFieldState({ value: nameFieldState.value, readOnly: true });
    }
  };


  const editIconClickHandler = () =>{
    setEditProfileState({state:"edit"});
  }

  const handleFileInput = async (event) => {
      // console.log(event.target.files[0]);

      const generatedURL = URL.createObjectURL(event.target.files[0]);

      preview.current = {image:generatedURL, file:event.target.files[0]};
      setEditProfileState({state:"uploaded"})
      
  }

  // const [fileInputState, setFileInputState] = useState({type:"file", onChange:handleFileInput})
  const updateProfile = async (url ) => {
    const token = firebase.auth().currentUser;

    let changed = false;

    
    await token
      .updateProfile({
        photoURL: url,
      })
      .then(() => {
        // Update successful
        // ...
        changed = true;
      })
      .catch((error) => {
        // An error occurred
        console.log("Error: ", error);
      });


    await firestore.collection('web_users').doc(user.uid).update(
      {
          photoURL : url
      }
    )
    
    if (changed) {
      updateUserToken(token);
    }

  }

  const confirmProfileChange = async () => {

      var metadata = {
        contentType: 'image',
      };

    const storage = firebase.storage();
    const storageRef = storage.ref();
    const  upload = storageRef.child('profile_images/' + user.uid).put(preview.current.file);
    
    upload.on(firebase.storage.TaskEvent.STATE_CHANGED,  
      (snapshot) =>{
      // console.log("uploading")
      }, 
      (error) => {
        alert(error)
      },
      () =>{
        upload.snapshot.ref.getDownloadURL().then(async (url) =>{
          preview.current = {image:url};

          await updateProfile(url);
          setEditProfileState({state:"false"})
          })
        })
  }

  const cancelProfileChange = () => {
    preview.current = {image:user.photoURL};
    setEditProfileState({state:"false"});
  }

  useEffect (
    () => {
      setProfilePic(user.photoURL);
    }
  , [user])

  const inputField = () => {
    if(editProfile.state==="edit") return (<div className="profile-change-buttons1" style={{width:200, height:"auto", paddingLeft:46, overflow:"hidden"}}><input id="file-input" name="file" value="" type="file" onChange={handleFileInput}/>
    <div>
    <input
        type="button"
        value="Cancel"
        className="cancel-change"
        onClick={cancelProfileChange}
      ></input>
      </div>
    </div>);

    else if(editProfile.state==="uploaded") return (<div className="profile-change-buttons2" style={{width:200, height:"auto"}} align="center"><input className="Button3" name="change profile" type="button" value="Confirm Change" onClick={confirmProfileChange}/>
    <input
        type="button"
        value="Cancel"
        className="cancel-change"
        onClick={cancelProfileChange}
      ></input>
    </div>)
    
    else return (<div style={{width:200, height:40}}></div>)
  }

  return (
    <div className="center-container" style={{ marginRight: "25vw"}}>
      <div className="myAccount-container">
        <div id="myAccount-box1">
          <div style={{ fontSize: 30, fontWeight: 500 }}>My Account</div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {/* <Cart /> */}
            {/* <div style={{ paddingLeft: 20 }}>Sign out</div> */}
          </div>
        </div>
        <div id="myAccount-box2">
          <div style={{ flex: 1 , position:"relative"}} className="myAccount-profile-container">
            <img
              src={editProfile.state === "false" ? profilePic : preview.current.image}
              style={{ height: 200, width:200, borderRadius: "50%" }}
              alt="img"
            ></img>
            {editProfile.state==="false" ? 
            <div onClick={editIconClickHandler} align="center"
                  style={{
                    position:"absolute", bottom:35, right:25, backgroundColor:"#000", 
                    borderRadius:"50%", height:40, width:40, verticalAlign:"middle",
                    display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"
                  }}
                  className="icon-hover"
                  id="edit-profile-icon"
                  >
                <Edit />
            </div>
            :
                inputField()
            } 
            {
              editProfile.state==="false" ?
              <div style={{width:200, height:40}}></div>
              :
              <></> 
            }
          </div>

          {changingPassword ? (
            <ChangingPasswordForm setChangePasswordState={setChangingPassState}/>
          ) : (
            <div id="myAccount-details-box" style={{ flex: 4 }}>
              <div className="row input-box-outer">
                <input
                  type="text"
                  name="name"
                  className="myAccount-input-box"
                  {...nameFieldState}
                  onChange={handleInput}
                ></input>
                {chnagingName.current ? (
                  <div
                    style={{ boxSizing: "content-box", whiteSpace: "nowrap" }}
                  >
                    <input
                      type="button"
                      value="Confirm Change"
                      id="confirm-change"
                      onClick={confirmChange}
                    ></input>
                  </div>
                ) : (
                  <div
                    style={{ boxSizing: "content-box" }}
                    onClick={changeNameClickHandler}
                    className="icon-hover"
                  >
                    <Edit1 />
                  </div>
                )}
              </div>

              <div className="row input-box-outer">
                <input
                  type="text"
                  name="email"
                  defaultValue={user.email}
                  className="myAccount-input-box"
                  readOnly
                ></input>
              </div>
              <div className="row input-box-outer">
                <input
                  type="password"
                  name="password"
                  defaultValue="pasjdij"
                  className="myAccount-input-box"
                ></input>
                <div style={{ boxSizing: "content-box" }} onClick={changePassClickHandler} className="icon-hover">
                  <Edit1 />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
