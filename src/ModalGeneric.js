import {Modal, Button} from 'react-bootstrap';
import React from 'react';
import { connect } from 'react-redux'
import { insertEducationDetail, updateEditSelected } from './actions';
import './Modal.css'
class  ModalGeneric extends React.Component{
  state = {
    show: false,
    institutionName: '',
    startDate: '',
    endDate: '',
    degree: '',
    description: ''
  }
  setShow = (type) => {
    this.setState(() => ({
      show: type
    }))
  }
  setInstitutionName = (event) => {
    event.preventDefault();
    this.setState(()=> ({
      institutionName: event.target.value
    }))
  }
  setDegree = (event) => {
    event.preventDefault();
    this.setState(() => ({
      degree: event.target.value
    }))
  }
   setStartDate = (event) => {
    event.preventDefault();
    this.setState(()=> ({
      startDate: event.target.value
    }))
  }
  setEndDate = (event) => {
    event.preventDefault();
    this.setState(() => ({
      endDate: event.target.value
    }))
  }
  setDescription = (event) => {
    event.preventDefault();
    this.setState(() => ({
      description: event.target.value
    }))
  }
  validateInputFields = () => {
    if (this.state.institutionName && this.state.description && this.state.startDate) {
      return true
    }
    return false;
  }
  saveInformation = () => {
    const validated = this.validateInputFields();
    if(validated) {
      if(this.props.isEditSelected !== -1) {
          this.props.editEducationDetail({
           index: this.props.isEditSelected
         })
      } else {
        if(this.props.currentTab === 'Education') {
          this.props.insertEducationDetail({
          institute: this.state.institutionName,
          degree: this.state.degree,
          startDate: this.state.startDate,
          endDate: this.state.endDate,
          description: this.state.description,
          type: 'education'
        })
        } else if(this.props.currentTab === 'Experience') {
          this.props.insertEducationDetail({
          institute: this.state.institutionName,
          degree: this.state.degree,
          startDate: this.state.startDate,
          endDate: this.state.endDate,
          description: this.state.description,
          type: 'experience'
        })
        } else {
          this.props.insertEducationDetail({
          institute: this.state.institutionName,
          startDate: this.state.startDate,
          description: this.state.description,
          type: 'achievements'
        })
        }
      }
      this.setShow(false)
    } else {
      alert('Please fill all the deatils')
    }
  }
  handleClose = () => this.setShow(false);
  handleShow = () => {
     this.props.updateEditSelected({
       index: -1
    });
    this.setShow(true);
  };
  componentDidMount() {
    console.log('coming', this.props.educationList);
    if(this.props.isEditSelected !== -1) {
      this.setState(() => ({
         institute: this.props.educationList[this.props.isEditSelected].institute,
         degree: this.props.educationList[this.props.isEditSelected].degree,
         startDate:this.props.educationList[this.props.isEditSelected].startDate,
         endDate:this.props.educationList[this.props.isEditSelected].endDate,
         description: this.props.educationList[this.props.isEditSelected].description
      }))
      this.setShow(true);
    }
  }
  render(){
  return (
    <>
    
      <button class="addnew-btn" onClick={this.handleShow}>
        Add new
      </button>
      {
        this.props.currentTab === 'Education'
        ? <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new Education</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <div>
              <span class="modal-heading">Institute</span>
              {
                  this.props.isEditSelected !== -1
                    ? <input type="text" class="modal-input" value={this.state.institute} onChange={this.setInstitutionName} />
                    : <input type="text" class="modal-input" onChange={this.setInstitutionName} />
              }
           </div>
            <div>
               <span class="modal-heading">Degree</span>
                {
                  this.props.isEditSelected !== -1
                    ? <input type="text" class="modal-input" value={this.state.degree} onChange={this.setDegree} />
                    :  <input type="text" class="modal-input" onChange={this.setDegree} />
                }
           </div>
            <div class="date-wrapper">
                <div>
                    <span class="modal-heading">Start Date</span>
                    <input class="modal-date" onChange={this.setStartDate}/>
                </div>
                  <div>
                    <span class="modal-heading">End Date</span>
                    <input class="modal-date" onChange={this.setEndDate} />
                </div>
            </div>
            <div>
              <span class="modal-heading">Description</span>
              <textarea type="text" class="modal-textarea" onChange={this.setDescription} />
           </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.saveInformation} class="save-btn">
            Save
          </Button>
          <Button variant="secondary" onClick={this.handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      : (this.props.currentTab === 'Experience'
      ? <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <div>
              <span class="modal-heading">Company</span>
              {
                  this.props.isEditSelected !== -1
                    ? <input type="text" class="modal-input" value={this.state.institute} onChange={this.setInstitutionName} />
                    : <input type="text" class="modal-input" onChange={this.setInstitutionName} />
              }
           </div>
            <div>
               <span class="modal-heading">Role</span>
                {
                  this.props.isEditSelected !== -1
                    ? <input type="text" class="modal-input" value={this.state.degree} onChange={this.setDegree} />
                    :  <input type="text" class="modal-input" onChange={this.setDegree} />
                }
           </div>
            <div class="date-wrapper">
                <div>
                    <span class="modal-heading">Start Date</span>
                    <input class="modal-date" onChange={this.setStartDate}/>
                </div>
                  <div>
                    <span class="modal-heading">End Date</span>
                    <input class="modal-date" onChange={this.setEndDate} />
                </div>
            </div>
            <div>
              <span class="modal-heading">Description</span>
              <textarea type="text" class="modal-textarea" onChange={this.setDescription} />
           </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.saveInformation} class="save-btn">
            Save
          </Button>
          <Button variant="secondary" onClick={this.handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      : <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new Achievements</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <div>
              <span class="modal-heading">Title</span>
              <input type="text" class="modal-input" onChange={this.setInstitutionName} />
           </div>
            <div>
               <span class="modal-heading">Date</span>
                <input type="text" class="modal-input" onChange={this.setStartDate} />
           </div>
            <div>
              <span class="modal-heading">Description</span>
              <textarea type="text" class="modal-textarea" onChange={this.setDescription} />
           </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.saveInformation} class="save-btn">
            Save
          </Button>
          <Button variant="secondary" onClick={this.handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      )
      }
    </>
  );
}
}
const mapStateToProps = (state) => {
  console.log('state is changed', state)
    return {
      isEditSelected: state.editSelected,
      educationList: state.educationDetailList,
      workExperienceList: state.workExperienceList,
      achievementsList: state.achievementsList,
      currentTab: state.currentTab
    }
  };
  const mapDispatchToProps = (dispatch) => {
    return {
        insertEducationDetail: (payload) => dispatch(insertEducationDetail(payload)),
        updateEditSelected: (payload) => dispatch(updateEditSelected(payload))
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(ModalGeneric);