// Initialize state for title
const [title, setTitle] = useState("");

// Function to handle changes in the input field
const handleChange = (e) => {
  // Update title state with the new input value
  setTitle(e.target.value);
};

// Destructure getMovie from props
const { getMovie } = props;

return (
  <>
    {/* Input field for movie title search */}
    <input
      className="form-control shadow-lg border rounded-start-5 border-top-1 bg-light"
      placeholder="Search movie by title..."
      value={title}
      onChange={handleChange} // Call handleChange function when input value changes
    />
    {/* Button to trigger movie search */}
    <button
      className="btn border border-2 btn-outline-dark fw-bold"
      type="button"
      onClick={() => props.getMovie(title)} // Call getMovie function with title as argument when button is clicked
    >
      Search
    </button>
  </>
);
