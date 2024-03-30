function submitBooking() {
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const tickets = document.getElementById('tickets').value;
  
    // Validate form data (you can add more validation as needed)
  
    // Display ticket information
    const ticketContainer = document.getElementById('ticketContainer');
    ticketContainer.innerHTML = `
      <h2>Booking Confirmation</h2>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Tickets: ${tickets}</p>
    `;
  }
  