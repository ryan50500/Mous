import myJsonArray from "./_incs/data.js"
console.log(myJsonArray);

// Selectors
const selectors = {
  viewStaffBtn: '[el="staff-btn"]',
}

// DOM nodes
const nodes = {
  viewStaffBtn: null,
}

// check if staff members is open or not
var toggleStaff = true;

// Click event listeners
const setClickEvents = () => {
  document.querySelector('.btn').addEventListener('click', () => {
    toggleStaff ? getMemberTemplate() : hideMemberTemplate()
    toggleStaff = !toggleStaff;
});
}

// Return the HTML markup for a staff member
const getMemberTemplate = () => {
      myJsonArray.forEach(member => {
        console.log(member);
        const staffDiv = document.querySelector('.staff-list');
        const eachMember = document.createElement('div');
        eachMember.className = 'eachMember';
        eachMember.innerHTML =    
        `
            <h2>${member.name}</h2>
            <h3>${member.occupation}</h3>
            <p>${member.team}</p>
            <img src="${member.img}">
          `
                  // append each member to staff-list div
                  staffDiv.append(eachMember);
  });
}

const hideMemberTemplate = () => {
  const staffDiv = document.querySelector('.staff-list');
  staffDiv.innerHTML = "";
}

// Initialise the script
const init = () => {
  setClickEvents()
}

// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  init()
})

