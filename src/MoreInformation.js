
import React from "react";
import { connect } from 'react-redux'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Tabs.css';
import EducationDetails from './EducationDetails';
import ExperienceDetails from './ExperienceDetails';
import AchievementsDetails from './AchievementsDetails';
import {switchAnotherTab} from './actions';
 
class MoreInformation extends React.Component {

  render() {
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab onClick={() => {this.props.switchAnotherTab('Education')}} >Education ({this.props.numberOfEducationList})</Tab>
                    <Tab onClick={() => {this.props.switchAnotherTab('Experience')}}>Work Experience ({this.props.numberOfExperienceList})</Tab>
                    <Tab onClick={() => {this.props.switchAnotherTab('Achievements')}}>Achievemens ({this.props.numberOfAchievementList})</Tab>
                </TabList>

                <TabPanel>
                    <EducationDetails />
                </TabPanel>
                <TabPanel>
                    <ExperienceDetails />
                </TabPanel>
                <TabPanel>
                    <AchievementsDetails />
                </TabPanel>
            </Tabs>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
   return {
      numberOfEducationList: state.educationDetailList.length,
      numberOfExperienceList: state.workExperienceList.length,
      numberOfAchievementList: state.achievementsList.length,
      currentTab: state.currentTab
   };
};
 const mapDispatchToProps = (dispatch) => {
    return {
        switchAnotherTab: (payload) => dispatch(switchAnotherTab(payload)),
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(MoreInformation);
 