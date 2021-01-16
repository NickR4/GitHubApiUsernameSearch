

function findUser(){
  console.log("find user function triggered");
    fetch('https://api.github.com/users/'+document.getElementById("searchID").value+'/repos')
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
      .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson){
  console.log('displayResults function triggered');
  $('#results-list').empty();
  for (let i = 0; i < responseJson.length; i++){
    $('#results-list').append(
      `<li><h3><a href="${responseJson[i].html_url}">${responseJson[i].name}</a></h3>
      </li>`
    )};
  $('#results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    console.log('Button pushed, watch form function triggered');
    findUser();
    
  });
}

$(function() {
  watchForm();
});
