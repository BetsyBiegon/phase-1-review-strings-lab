// helpers.js
// If you have any helper functions, they can be defined here

// index.js
const currentUser = "John Doe"; // Example value, replace with the actual value as needed

const firstInitial = currentUser[0];
const shortGreeting = `Welcome, ${firstInitial}!`;

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
const excitedWelcomeMessage = `WELCOME TO FLATBOOK, ${currentUser.toUpperCase()}!`;

// Export variables if needed
module.exports = {
  currentUser,
  shortGreeting,
  welcomeMessage,
  excitedWelcomeMessage
};
