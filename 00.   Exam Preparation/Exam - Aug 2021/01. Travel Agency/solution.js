// window.addEventListener('load', solution);

function solution() {
  let fullNameElement = document.getElementById('fname');
  let emailElement = document.getElementById('email');
  let phoneNumberElement = document.getElementById('phone');
  let addresElement = document.getElementById('address');
  let postalCodeElement = document.getElementById('code');

  let submitButtonElement = document.getElementById('submitBTN');
  submitButtonElement.addEventListener('click', submitInformation);

  let editButtonElement = document.getElementById('editBTN');
  editButtonElement.addEventListener('click', editInformation);
  let continueButtonElement = document.getElementById('continueBTN');
  continueButtonElement.addEventListener('click', continueFunctionality);

  function submitInformation() {
    // personInfo
    let fullName = fullNameElement.value;
    let email = emailElement.value;
    let phoneNumber = phoneNumberElement.value;
    let address = addresElement.value;
    let postalCode = postalCodeElement.value;

    fullNameElement.value = '';
    emailElement.value = '';
    phoneNumberElement.value = '';
    addresElement.value = '';
    postalCodeElement.value = '';

    if (fullName.trim() !== '' && email.trim() !== '') {
      let previewFieldElementUL = document.getElementById('infoPreview');

      // creating Li-s
      let fullNameLi = document.createElement('li');
      fullNameLi.textContent = `Full Name: ${fullName}`;
      let emailLi = document.createElement('li');
      emailLi.textContent = `Email: ${email}`;
      let phoneNumberLi = document.createElement('li');
      phoneNumberLi.textContent = `Phone Number: ${phoneNumber}`;
      let addressLi = document.createElement('li');
      addressLi.textContent = `Address: ${address}`;
      let postalCodeli = document.createElement('li');
      postalCodeli.textContent = `Postal Code: ${postalCode}`

      previewFieldElementUL.appendChild(fullNameLi);
      previewFieldElementUL.appendChild(emailLi);
      previewFieldElementUL.appendChild(phoneNumberLi);
      previewFieldElementUL.appendChild(addressLi);
      previewFieldElementUL.appendChild(postalCodeli);

      // buttons
      submitButtonElement.disabled = true;
      editButtonElement.disabled = false;
      continueButtonElement.disabled = false;
    }
  }
  function editInformation(e) {
    let ulElement = e.target.parentElement.parentElement;
    let ulArray = Array.from(ulElement.querySelectorAll('li'))

    document.getElementById('infoPreview').textContent = '';

    //let fullNameLi = ulArray[0].textContent.split(': ');

    let fullName = ulArray[0].textContent.split(': ')[1];
    let email = ulArray[1].textContent.split(': ')[1];
    let phoneNumber = ulArray[2].textContent.split(': ')[1];
    let address = ulArray[3].textContent.split(': ')[1];
    let postalCode = ulArray[4].textContent.split(': ')[1];

    fullNameElement.value = fullName;
    emailElement.value = email;
    phoneNumberElement.value = phoneNumber;
    addresElement.value = address;
    postalCodeElement.value = postalCode;

    // buttons
    submitButtonElement.disabled = false;
    editButtonElement.disabled = true;
    continueButtonElement.disabled = true;

  }
  function continueFunctionality(e) {
    let blockElement = document.getElementById('block');
    blockElement.innerHTML = '';
    let thankYouElement = document.createElement('h3');
    thankYouElement.textContent = "Thank you for your reservation!";
    blockElement.appendChild(thankYouElement);
  }
}
