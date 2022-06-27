import React from 'react';
import {Modal, Button} from 'react-bootstrap';
class  EducationModal extends React.Component{
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
    if (this.state.institutionName && this.state.degree && this.state.startDate && this.state.endDate) {
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
          this.props.insertEducationDetail({
          institute: this.state.institutionName,
          degree: this.state.degree,
          startDate: this.state.startDate,
          endDate: this.state.endDate,
          description: this.state.description
        })
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
    render(){
        return(
            <Modal show={this.state.show} onHide={this.handleClose}>
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
                            {
                                this.props.isEditSelected !== -1
                                ? <input type="date" class="modal-date" value = "this.state." onChange={this.setStartDate}/>
                                :  <input type="date" class="modal-date" onChange={this.setStartDate}/>
                            }
                            <input type="date" class="modal-date" onChange={this.setStartDate}/>
                        </div>
                        <div>
                            <span class="modal-heading">End Date</span>
                            <input type="date" class="modal-date" onChange={this.setEndDate} />
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
        )
    }
}

export default EducationModal;