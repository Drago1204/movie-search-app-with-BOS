// Initialize state for movie and showSaveButton
const [movie, setMovie] = useState(null);
const [showSaveButton, setShowSaveButton] = useState(false);

// Function to fetch movie data from OMDB API
const getMovie = (title) => {
  asyncFetch(`https://www.omdbapi.com/?t=${title}&apikey=d5ab18a`)
    .catch((err) => {
      // Log any errors
      console.log(err);
    })
    .then((res) => {
      const { body: data } = res;
      // Set movie data
      setMovie(data);
      // Show save button only if movie data is fetched successfully and movie exists
      setShowSaveButton(data && data.Response !== "False");
    });
};

// Prepare props to be passed to widgets
const props = { movie, getMovie };

return (
  <>
    <div className="container mt-3">
      <div className="row align-items-start">
        <div className="col-md-8">
          <div className="input-group mb-3">
            {/* Show SearchMovieBar widget if user is logged in, otherwise show a message */}
            {context.accountId ? (
              <Widget
                src={`osweld.testnet/widget/SearchMovieBar`}
                props={props}
              />
            ) : (
              <p class="text-center py-2 display-4">
                You must be logged in to use this component{" "}
              </p>
            )}
            {/* Show SaveMovieSearchButtom widget only if showSaveButton is true */}
            {showSaveButton && (
              <Widget
                src={`osweld.testnet/widget/SaveMovieSearchButtom`}
                props={props}
              />
            )}
          </div>
          {/* Show MovieCard widget if movie data exists and movie is found, otherwise show a warning */}
          {movie ? (
            movie.Response !== "False" ? (
              <Widget src={`osweld.testnet/widget/MovieCard`} props={props} />
            ) : (
              <div className="alert alert-warning" role="alert">
                Sorry, the movie is not found.
              </div>
            )
          ) : null}
        </div>
        {/* Show LastSearchMovies widget */}
        <div className="col-md-4">
          <Widget src={`osweld.testnet/widget/LastSearchMovies`} />
        </div>
      </div>
    </div>
  </>
);
