
import React from "react";
import { connect } from 'react-redux'
import AccordionList from "./AccordionList";
import { increment, decrement } from './actions';
import ModalGeneric from "./ModalGeneric";
 
class ExperienceDetails extends React.Component {

  render() {
    return (
        <div>
            <ModalGeneric />
            {
                this.props.workExperienceList.map((item, index) => {
                    console.log("debugging",item);
                    return <AccordionList workExperienceList={item} itemSelected={index} />
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
export default connect(mapStateToProps, mapDispatchToProps)(ExperienceDetails);
// export default EducationDetails;