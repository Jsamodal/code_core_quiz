function addActionAndTime(action, timeSince, time) {
    return action + Math.floor(timeSince / time) 
  }
  
  module.exports = (createdAt, updatedAt) => {
    const timestamp = updatedAt > createdAt ? updatedAt : createdAt
    let action = updatedAt > createdAt ? "Edited " : "Created "
    const timeSince = Date.now() - timestamp
  
    
    switch(true) {
      case timeSince > 2.628e+9:
        return addActionAndTime(action, timeSince, 2.628e+9) + ` month(s) ago`
      case timeSince > 6.048e+8:
        return addActionAndTime(action, timeSince, 6.048e+8) + ` weeks(s) ago`
      case timeSince > 8.64e+7:
        return addActionAndTime(action, timeSince, 8.64e+7) + ` days(s) ago`
      case timeSince > 3.6e+6:
        return addActionAndTime(action, timeSince, 3.6e+6) + ` hours(s) ago`
      case timeSince > 60000:
        return addActionAndTime(action, timeSince, 60000) + ` minutes(s) ago`
      default:
        return "Just now"
    }
  }