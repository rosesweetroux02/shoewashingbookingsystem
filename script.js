function nextStep(step) {
  const currentStep = document.getElementById(`step${step}`);
  const nextStep = document.getElementById(`step${step + 1}`);
  
  if (currentStep) {
      currentStep.style.display = 'none';
  }
  if (nextStep) {
      nextStep.style.display = 'block';
  }
}

function submitBooking() {
  const bookingData = {
      serviceType: document.getElementById('serviceType').value,
      name: document.getElementById('name').value,
      phone: document.getElementById('phone').value,
      email: document.getElementById('email').value,
      address:   document.getElementById('address').value,
      pairs: document.getElementById('pairs').value,
      shoeTypes: document.getElementById('shoeTypes').value,
      specialRequests: document.getElementById('specialRequests').value,
      dateTime: document.getElementById('dateTime').value,
      paymentOption: document.getElementById('paymentOption').value,
  };

  fetch('http://localhost:3000/api/bookings', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
  })
  .then(response => response.json())
  .then(data => {
      document.getElementById('confirmationMessage').innerText = `${data.message} Your reference number is ${data.bookingReference}.`;
      nextStep(5); // Go to confirmation step
  })
  .catch(error => {
      console.error('Error:', error);
  });
}