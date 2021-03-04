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

// export const getBadge = (status) => {
//   let style ={
//     width: 60,
//     top: 5,
//     fontSize: 14,
//     position: 'absolute',
//     backgroundColor: 'black'
//   };
//   if (status == "NEW") {
//     style.backgroundColor = '#CFBBF6';
//   } else if (status == "FOLLOW_UP") {
//     style.backgroundColor = '#FADB56';
//     style.width = 100
//   } else if (status == "SITE_VISIT") {
//       //TODO: deicide colors for all
//       style.backgroundColor = '#FADB56';
//       style.width = 100
//   } else if (status == "SITE_VISIT_DONE") {
//     //TODO: deicide colors for all
//     style.backgroundColor = '#FADB56';
//     style.width = 120
//   } else if (status == "CLOSED") {
//     //TODO: deicide colors for all
//     style.backgroundColor = '#FADB56';
//     style.width = 80
//   } else if (status == "DEAD") {
//     //TODO: deicide colors for all
//     style.backgroundColor = '#FADB56';
//     style.width = 100
//   } else {
//     //TODO: handle other
//     return null;
//   }
//   return(
//     <Badge size={24} style={style}>
//         {getStatusText(status)}
//     </Badge>
//   );
// }

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