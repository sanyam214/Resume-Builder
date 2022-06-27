const initialState = {
   educationDetailList: [],
   workExperienceList: [],
   achievementsList: [],
   editSelected: -1,
   profileDetails:[],
   currentTab: 'Education'
}
const reducer = (state = initialState, action) => {
   switch (action.type) {
      case 'INCREMENT': return state + 1
      case 'DECREMENT': return state - 1
      case 'RESET' : return 0; 
      case 'INSERT_EDUCATION_DETAIL' :
         if(state.currentTab === 'Education') {
            return {
               ...state,
               educationDetailList: [...state.educationDetailList, action.payload]
            }
         } else if(state.currentTab === 'Experience') {
            return {
               ...state,
               workExperienceList: [...state.workExperienceList, action.payload]
            }
         } else {
            return {
               ...state,
               achievementsList: [...state.achievementsList, action.payload]
            }
         }
      case 'INSERT_PROFILE' :
         return {
            ...state,
             profileDetails: [...state.profileDetails, action.payload]
         }
      case 'DELETE_EDUCATION_LIST':
         if(state.currentTab === 'Education') {
             let allDetail = [...state.educationDetailList];
               let updatedEducationList = allDetail.filter((item, index) => index !== action.payload.index)
               return {
                  ...state,
                  educationDetailList: updatedEducationList
               }
         } else if (state.currentTab === 'Experience') {
            let allDetail = [...state.workExperienceList];
               let updatedEducationList = allDetail.filter((item, index) => index !== action.payload.index)
               return {
                  ...state,
                  workExperienceList: updatedEducationList
               }
         } else {
            let allDetail = [...state.achievementsList];
               let updatedEducationList = allDetail.filter((item, index) => index !== action.payload.index)
               return {
                  ...state,
                  achievementsList: updatedEducationList
               }
         }
        
      case 'SWITCH_TAB':
         return {
            ...state,
            currentTab: action.payload
         }
       case 'EDIT_EDUCATION_LIST':
         let allDetailList = [...state.educationDetailList];
         allDetailList[action.payload.index] = action.payload;
         console.log('allDetailList', allDetailList)
         return {
            ...state,
            educationDetailList: allDetailList
         }
        case 'UPDATE_EDIT_SELECTED':
         return {
            ...state,
            editSelected: action.payload.index
         }
      default: return state
   }
}
export default reducer;