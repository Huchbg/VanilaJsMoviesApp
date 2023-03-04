//https://www.omdbapi.com/?t=[NAME OF MOVIE]&apikey=[key]
//https://img.omdbapi.com/?t=[NAME OF MOVIE]&apikey=[key]
//constApiKey = "5e938c95"
const movie = {
  ApiKey: "5e938c95",
  fechMovie: function (movieName) {
    fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=${this.ApiKey}`)
      .then((Response) => Response.json())
      .then((data) => {
        if (data.Response != "False") {
          buildApp(data)
        } else {
          alert(
            "The movie either doesn't exist or you have tipped the name wrong!"
          )
        }
      })
  },
}
const tInput = document.querySelector("[data-InputT]")
const btn = document.querySelector("[data-BTN]")
const genresContainer = document.querySelector(".GenresDiv")
const GenreSpans = document.querySelectorAll(".Genre")
const ImageDom = document.querySelector(".img")
const title = document.querySelector(".Title")
const starsSpan = document.querySelector(".RatingSP")
const spRatingSpan = document.querySelector(".TheOtherRatingSpan")
const lenghtSpan = document.querySelector(".Lenght")
const YearSpan = document.querySelector(".Year")
const plotP = document.querySelector(".PlotP")
const castP = document.querySelector(".CastP")

movie.fechMovie("Godzilla")

function buildApp(data) {
  console.log(data)

  title.textContent = data.Title
  const genres = data.Genre.split(",")

  genresContainer.innerHTML = ""

  for (const genre of genres) {
    const spanGenre = document.createElement("span")
    spanGenre.classList.add("Genre")
    spanGenre.textContent = genre.trim()
    genresContainer.appendChild(spanGenre)
  }
  ImageDom.src = data.Poster
  starsSpan.textContent = data.imdbRating
  spRatingSpan.textContent = data.Rated
  lenghtSpan.textContent = data.Runtime
  YearSpan.textContent = data.Year
  plotP.textContent = data.Plot
  castP.textContent = data.Actors
}

btn.addEventListener("pointerdown", () => {
  const title = tInput.value
  if (title !== "") {
    movie.fechMovie(title)
  }
  tInput.value = ""
})
