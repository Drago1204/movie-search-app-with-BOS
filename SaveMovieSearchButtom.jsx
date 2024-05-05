// Contract address
const contract = "dev-1700192699288-91929849081638";
// Destructure movie from props
const { movie } = props;

// Function to add a new message to the contract
const addNewMessage = () => {
  // Call the add_message method on the contract with the movie title as the text
  Near.call(contract, "add_message", {
    text: movie.Title,
  });
};

return (
  // Button component that triggers the addNewMessage function when clicked
  <button
    className="btn btn-dark rounded-end-5 ml-2"
    type="button"
    onClick={addNewMessage}
  >
    Save Search
  </button>
);
