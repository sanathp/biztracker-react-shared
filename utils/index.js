import React from 'react';
import moment from 'moment';

export const getStatusText = (status) => {
  switch (status) {
    case 'NEW' :
        return 'New';
    case 'FOLLOW_UP' :
        return 'Follow Up';
    case 'SITE_VISIT' :
        return 'Site Visit';
    case 'COMPLETE' :
        return 'Complete';
    case 'CLOSED' :
        return 'Closed';
    case 'DEAD' :
      return 'Dead';
    case 'SITE_VISIT_DONE' :
      return 'Site Visit Done';
    case 'DEAD_AFTER_SITE_VISIT':
      return 'Site Visit Dead';
    case 'ALL':
      return 'All';
    default:
      //TODO: change it to null and test
        return 'null';
  }
};

export const getLeadSourceText = (source) => {
    switch (source) {
      case 'MAGICBRICKS' :
          return 'Magic Bricks';
      case 'NINETY_NINE_ACRES' :
        return '99 Acres';
      case 'HOUSING_DOT_COM':
        return 'Housing.com';
      case 'FACEBOOK' :
          return 'Facebook';
      case 'MANUAL' :
          return 'Manual';
      case 'OTHER' :
          return 'Other';
      case 'DIRECT_VISIT' :
          return 'Direct Visit';
      case 'PAPER_AD' :
        return 'Paper Ad';
      case 'HOARDING' :
            return 'Hoarding';
      case 'WEBSITE' :
        return 'Website';
      case 'SMS':
        return 'Sms';
      case 'TV':
        return 'Tv';
      case 'RADIO':
          return 'Radio';
      case 'REFERRAL':
        return 'Referral';
      case 'COMMON_FLOOR':
          return 'Common Floor';
      default:
          return '';
    }
};

export const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

export const isValidPhoneNumber = (phoneNumber) => {
  if (!phoneNumber) {
    return false;
  }

  if (!phoneNumber.startsWith('+')) {
    return false;
  }

  if (!(phoneNumber.length == 12 || phoneNumber.length == 13 || phoneNumber.length == 14)) {
    return false;
  }
  
  if (isNaN(Number(phoneNumber.substr(1)))) {
    return false;
  }

  return true;
}

export const isValidEmail = (email) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


export const getCaption = (lead) =>{
  if (lead.status == "NEW") {
    return "Added at "+moment.unix(lead.created).format("DD-MM-YYYY HH:mm a");
  } else if (lead.status == "FOLLOW_UP") {
    return "Follow up on "+moment.unix(lead.followUpAt).format("DD-MM-YYYY");
  } else if (lead.status == "SITE_VISIT_DONE") {
    if (lead.followUpAt > 0) {
      return "Follow up on " + moment.unix(lead.followUpAt).format("DD-MM-YYYY");
    } else {
      return "Updated at "+moment.unix(lead.updated).format("DD-MM-YYYY HH:mm a");
    }
  } else if (lead.status == "SITE_VISIT") {
    return "Site visit on "+moment.unix(lead.followUpAt).format("DD-MM-YYYY");
  } else {
    return "Updated at "+moment.unix(lead.updated).format("DD-MM-YYYY HH:mm a");
  }
}

export const capitalizeFirstLetter = (string) => {
  if (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return "";
}

export const removeWhiteSpaces = (str) => {
  if (str) {
    return str.replace(/\s+/g, '');
  }
  return str;
}

export const getUserNameFromUserList = (usersList, userId) => {
  for (const item of usersList) {
   if(userId == item.userId){
     return item.name;
   }
  }
}

// export const getRequestTypeText = (requestType) => {
//   if(requestType === 'REQUEST_TO_HOLD'){
//     return 'Request to Hold';
//   }
//   else{
//     return 'NA'
//   }
// }

// // REQUEST_TO_BOOK

export const getRequestTypeText = (requestType) => {
  switch (requestType) {
    case 'REQUEST_TO_HOLD' :
        return 'Request to Hold';
    case 'REQUEST_TO_BOOK' :
        return 'Request to Book';
    case 'ALL':
      return 'All';
    default:
      //TODO: change it to null and test
        return 'null';
  }
};