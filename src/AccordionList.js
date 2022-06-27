
import React from "react";
import Collapsible from 'react-collapsible';
import './Accordion.css'
import { deleteEducationDetail, updateEditSelected } from './actions';
import { connect } from 'react-redux';
import  ModalGeneric from './ModalGeneric';
class AccordionList extends React.Component {
  state= {
    showModal: false
  }
  deleteList = (event) => {
    event.preventDefault();
    console.log('this.props.itemSelected', this.props.itemSelected);
    this.props.deleteEducationDetail({
      index: this.props.itemSelected
    })
  }
  editButtonSelected = (event) => {
    event.preventDefault();
    this.props.updateEditSelected({
       index: this.props.itemSelected
    });
    this.setState(() => ({
      showModal: true
    }))
  }
  render() {
    const {educationDetail, workExperienceList, achievementsList} = this.props;
    return (
        <div class="CollapsibleWrapper">
            {/* <button>{ educationDetail.institute }</button> */}
               <div class="accordion-wrapper"><img alt="Accordion-icon" class="accordion-icon" src="https://cdn-icons-png.flaticon.com/512/32/32213.png"></img></div>
               {
                this.props.currentTab === "Education"
                ? <Collapsible trigger={educationDetail.institute}>
                 <div class="Collapsible-content">
                  {
                    this.props.currentTab === 'Education'
                    ? <div>
                      <h4 class="accordionlist-heading">Degree</h4>
                      <p>{educationDetail.degree}</p>
                    </div>
                    :(this.props.currentTab === 'Experience') 
                    ? <div>
                      <h4 class="accordionlist-heading">Role</h4>
                      <p>{educationDetail.role}</p>
                    </div>
                    : ''
                  }
                   <h4 class="accordionlist-heading">Description</h4>
                   <p>{educationDetail.description}</p>
                   <div class="buttonWrapper">
                      <button class="editbtn" onClick={this.editButtonSelected}>Edit</button>
                      <button class="deletebtn" onClick={this.deleteList}>Delete</button>
                   </div>
                 </div>
                </Collapsible>
                : (this.props.currentTab === 'Experience'
                ? <Collapsible trigger={workExperienceList.institute}>
                 <div class="Collapsible-content">
                  <div>
                      <h4 class="accordionlist-heading">Role</h4>
                      <p>{workExperienceList.degree}</p>
                    </div>
                   <h4 class="accordionlist-heading">Description</h4>
                   <p>{workExperienceList.description}</p>
                   <div class="buttonWrapper">
                      <button class="editbtn" onClick={this.editButtonSelected}>Edit</button>
                      <button class="deletebtn" onClick={this.deleteList}>Delete</button>
                   </div>
                 </div>
                </Collapsible>
                : <Collapsible trigger={achievementsList.institute}>
                 <div class="Collapsible-content">
                   <h4 class="accordionlist-heading">Description</h4>
                   <p>{achievementsList.description}</p>
                   <div class="buttonWrapper">
                      <button class="editbtn" onClick={this.editButtonSelected}>Edit</button>
                      <button class="deletebtn" onClick={this.deleteList}>Delete</button>
                   </div>
                 </div>
                </Collapsible>
                )
               }
        </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log('state is changed', state)
  return {
      currentTab: state.currentTab
    }
  };
  const mapDispatchToProps = (dispatch) => {
    return {
        deleteEducationDetail: (payload) => dispatch(deleteEducationDetail(payload)),
        updateEditSelected: (payload) => dispatch(updateEditSelected(payload))
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(AccordionList);