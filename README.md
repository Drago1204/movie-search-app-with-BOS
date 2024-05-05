# Movie Search App

This application is a movie search tool that fetches information about movies and allows users to save their searches if desired.

## Main Component: SearchMovieByTitle

The main component of this application is `SearchMovieByTitle`. This component is responsible for fetching movie data from the OMDB API, displaying the movie information, and providing the option to save the search in the guest-book contract.

### State Variables

- `movie`: This state variable holds the data for the movie that the user searches for.
- `showSaveButton`: This state variable determines whether the "Save Search" button should be displayed.

### Functions

- `getMovie(title)`: This function fetches movie data from the OMDB API. It sets the `movie` state variable with the fetched data and sets `showSaveButton` to true if the movie exists.

### Rendered Components

- `SearchMovieBar`: This widget is displayed if the user is logged in. It allows the user to search for a movie by title.
- `SaveMovieSearchButtom`: This widget is displayed if `showSaveButton` is true. It allows the user to save their movie search.
- `MovieCard`: This widget is displayed if the movie data exists and the movie is found. It displays the information of the searched movie.
- `LastSearchMovies`: This widget displays the last searched movies.

## Usage

To use this application, the user must be logged in. The user can then search for a movie by title using the `SearchMovieBar` widget. If the movie is found, the `MovieCard` widget will display the movie's information and the `SaveMovieSearchButtom` widget will appear, allowing the user to save their search. The `LastSearchMovies` widget displays the last searched movies.

## Error Handling

If the movie is not found, an alert message is displayed to the user. If any errors occur while fetching the movie data, the errors are logged to the console.

## Links

You can access the components on the testnet of near.social:

- [SearchMovieByTitle](https://test.near.social/#/osweld.testnet/widget/SearchMovieByTitle)
- [SearchMovieBar](https://test.near.social/#/osweld.testnet/widget/SearchMovieBar)
- [MovieCard](https://test.near.social/#/osweld.testnet/widget/MovieCard)
- [LastSearchMovies](https://test.near.social/#/osweld.testnet/widget/LastSearchMovies)
- [SaveMovieSearchButtom](https://test.near.social/#/osweld.testnet/widget/SaveMovieSearchButtom)

