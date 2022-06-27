export function increment() {
   return {
      type: 'INCREMENT'
   }
}
export function decrement() {
   return {
      type: 'DECREMENT'
   }
}
export function deleteEducationDetail(payload) {
   return { type: 'DELETE_EDUCATION_LIST', payload: payload }
}

export function insertEducationDetail(payload) {
    return { type: 'INSERT_EDUCATION_DETAIL', payload: payload}
}

export function insertProfile(payload) {
    return { type: 'INSERT_PROFILE', payload: payload}
}

export function editEducationDetail(payload) {
    return { type: 'EDIT_EDUCATION_LIST', payload: payload}
}

export function updateEditSelected(payload) {
   return {
      type: 'UPDATE_EDIT_SELECTED',
      payload: payload
   }
}

export function switchAnotherTab(tabName) {
   return {
      type: 'SWITCH_TAB',
      payload: tabName
   }
}