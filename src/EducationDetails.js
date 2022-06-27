
import React from "react";
import { connect } from 'react-redux'
import AccordionList from "./AccordionList";
import { increment, decrement } from './actions';
import ModalGeneric from "./ModalGeneric";
 
class EducationDetails extends React.Component {

  render() {
    return (
        <div>
            <ModalGeneric />
            {
                this.props.currentTab === 'Education'
                ? this.props.educationDetailList.map((item, index) => {
                    return <AccordionList educationDetail={item} itemSelected={index} />
                })
                : (this.props.currentTab === 'Experience')
                ? this.props.workExperienceList.map((item, index) => {
                    return <AccordionList workExperienceList={item} itemSelected={index} />
                })
                : this.props.achievementsList.map((item, index) => {
                    return <AccordionList achievementsList={item} itemSelected={index} />
                })
            }
        </div>
    )
  }
}

const mapStateToProps = (state) => {
   return {
      educationDetailList: state.educationDetailList,
      workExperienceList: state.workExperienceList,
      achievementsList: state.achievementsList,
      currentTab: state.currentTab
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
      increment: () => {
        console.log('coming here is:');
        dispatch(increment())
      },
      decrement: () => dispatch(decrement()),
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(EducationDetails);
 
// export default EducationDetails;