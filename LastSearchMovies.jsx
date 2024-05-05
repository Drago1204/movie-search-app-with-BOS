// Initialize state for messages
const [messages, setMessages] = useState([]);

// Contract address
const contract = "dev-1700192699288-91929849081638";

// Use useEffect hook to fetch messages when component mounts
useEffect(() => {
  const fetchMessages = async () => {
    // Fetch messages from the contract
    const messages = Near.view(contract, "get_messages", {
      from_index: 0 - 8,
      limit: 100,
    });
    // Update state with fetched messages, reversed to display latest first
    setMessages(messages.reverse());
  };
  // Call the fetchMessages function
  fetchMessages();
}, []);

return (
  <div className="card shadow-lg rounded-5 border border-0 bg-light">
    <div className="card-body">
      <h5 className="card-title text-center fw-bold display-6">Last search</h5>

      <table className="table table-hover">
        <thead>
          <tr class="p-3 mb-2 table-dark text-white text-center">
            <th>User</th>
            <th>Movie</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through messages and display each one in a table row */}
          {messages.map((data, key) => {
            return (
              <tr class="text-center table-light">
                <td>{data.sender}</td>
                <td>{data.text}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
);
