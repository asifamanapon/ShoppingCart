function getElementValueById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setTextElemntById(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal() {
    const currentPhoneTotal = getElementValueById('phone-total');
    const currentCaseTotal = getElementValueById('case-total');

    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElemntById('sub-total', currentSubTotal);

    const taxAmmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmmountString);
    setTextElemntById('tax-amount', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setTextElemntById('final-total', finalAmount);

}