import './Resume.css'
import React from 'react';
import MoreInformation from './MoreInformation'
class  Resume extends React.Component {
  state = {
    show: false,
    profileName: '',
    profileEmail: '',
    profileBio: '',
  }
  setprofileName = (event) => {
    event.preventDefault();
    this.setState(()=> ({
      profileName: event.target.value
    }))
  }
  setprofileEmail = (event) => {
    event.preventDefault();
    this.setState(() => ({
      profileEmail: event.target.value
    }))
  }
   setprofileBio = (event) => {
    event.preventDefault();
    this.setState(()=> ({
      profileBio: event.target.value
    }))
  }
  validateInputFields = () => {
    if (this.state.profileName && this.state.profileBio && this.state.profileEmail) {
      return true
    }
    return false;
  }
  saveInformation = () => {
    const validated = this.validateInputFields();
    if(validated) {
      this.setState(() => ({
         profileName: this.state.profileName,
         profileEmail: this.state.profileEmail,
         profileBio: this.state.profileBio,
         show: true
      }))
      console.log("sanyam",this.state.profileName);
    } else {
      alert('Please fill all the deatils')
    }
  }
  render(){
    return(
    <>
    <div>
    <div className="resume">
        <div class="photo"><div class="photoDiv"><img alt="ProfileImage" class="profileImg" src="https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg"></img></div><input class="photoInput" type="file"></input></div>
        {
          this.state.show
          ? <div class="personalInfo-saved">
            <h1 class="main-heading">{this.state.profileName}</h1>
            <p class="main-email">{this.state.profileEmail}</p>
            <p class="main-bio">{this.state.profileBio}</p>
        </div>
        : <div class="personal-info">
           <div class="nameWrapper">
                <div class="Name">
                    <h4 class="profile-heading">Name</h4>
                    <input class="nameInput" type="text" placeholder="Enter Name" onChange={this.setprofileName}></input>
                </div>
                <div class="Email" >
                    <h4 class="profile-heading">Email</h4>
                    <input class="emailInput" type="text" placeholder="Enter Email" onChange={this.setprofileEmail}></input>
                </div>
                <div class="savebtn-wrapper"><button class="save-button" onClick={this.saveInformation}>Save</button></div>
            </div>
            <div>
                <h4 class="slot-heading profile-heading">ShortBio</h4>
                <textarea class="slot-textarea"onChange={this.setprofileBio}></textarea>
            </div>
        </div>
        }
    </div>
    <div>
            <MoreInformation />
    </div>
    </div>
    </>
    )
  }
}

export default Resume;