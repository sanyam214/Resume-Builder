import React from "react";
 import { connect } from 'react-redux'
class AccordionListDescriptionCard extends React.Component {

  render() {
    return (
        <div>
           <p>{this.props.description}</p>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
   return {
      educationDetailList: state.educationDetailList,
      workExperienceList: state.workExperienceList,
      achievementsList: state.achievementsList
   };
};
export default connect(mapStateToProps)(AccordionListDescriptionCard);
 