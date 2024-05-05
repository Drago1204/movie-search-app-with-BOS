// Destructure movie from props
const { movie } = props;

return (
  // Card component with dark background and rounded corners
  <div className="card bg-dark shadow-lg rounded-5">
    <div className="row g-0">
      <div className="col-md-4">
        {/* Display movie poster image */}
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="img-fluid rounded-5"
        />
      </div>
      <div className="col-md-8">
        <div className="card-body text-white">
          {/* Display movie title and year */}
          <h5 className="card-title">
            {movie.Title} ({movie.Year})
          </h5>
          {/* Display movie plot */}
          <p className="card-text">{movie.Plot}</p>
          {/* Display movie actors */}
          <p className="card-text">
            <small className="text-white-50">Actors: {movie.Actors}</small>
          </p>
          {/* Display movie director and writers */}
          <p className="card-text">
            <small className="text-white-50">Director: {movie.Director}</small>{" "}
            <br></br>
            <small className="text-white-50">Writers: {movie.Writer}</small>
          </p>
          {/* Display movie duration */}
          <p className="card-text">
            <small className="text-white-50">Duration: {movie.Runtime}</small>
          </p>
        </div>
      </div>
    </div>
  </div>
);
