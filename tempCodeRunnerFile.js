const baseURL = 'https://api.spacexdata.com/v3';
let url;

const cardBody = document.querySelector('.card-body');

function fetchResults(e){
    url = baseURL + '/rockets';
    console.log('URL:', url);

    fetch(url)
        .then(function(result){
            console.log(result);
        });
    }