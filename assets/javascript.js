$("button").on("click", function() {

  var country = $(this).attr("value");
  console.log(country)
  
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    country + "&api_key=096xzH7hjpM311pBabrP4u2DhQUKkKLf&limit=9";

  
  $.ajax({
    url: queryURL,
    method: "GET"
  })  

  .then(function(response) {
    console.log(response)
      var results = response.data;


      for (var i = 0; i < results.length; i++) {

        if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
          
          var countryDiv = $("<div class='value'>");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var countryImage = $("<img>");

          countryImage.attr("src", results[i].images.fixed_height.url);

          countryDiv.append(p);
          countryDiv.append(countryImage);

          $("#gifs-country").prepend(countryDiv);

         
        }
      }
    });
});