const baseURL = 'https://api.spacexdata.com/v3';
let url;

const btnName = document.querySelector('.btn');
const btnName1 = document.querySelector('#btn1');
const btnName2 = document.querySelector('#btn2');
const btnName3 = document.querySelector('#btn3');
const btnname4 = document.querySelector('#btn4');
const imgSpot = document.querySelector('.img');
const imgSpot1 = document.querySelector('#img1');
const imgSpot2 = document.querySelector('#img2');
const imgSpot3 = document.querySelector('#img3');
const imgSpot4 = document.querySelector('#img4');
const infoBody = document.querySelector('.info');
const infoBody1 = document.querySelector('#info1');
const infoBody2 = document.querySelector('#info2');
const infoBody3 = document.querySelector('#info3');
const infoBody4 = document.querySelector('#info4');


/***************************** ROCKETS ***************************************************/
function fetchResults(e) {
    url = baseURL + '/rockets';

    fetch(url)
        .then(function (result) {
            return result.json();
        })
        .then(function(json) {
            displayResults(json);
        });
    
    function displayResults(json) {
        console.log(json);
        let rocket = json;
        
        for(let i = 0; i < 4; i++){
            let rocketTitle = document.createElement('h2');
            let rocketPhoto = document.createElement('img');
            let rocketInfo = document.createElement('p');

            let current = rocket[i];
            console.log(current)
            rocketTitle.innerText = current.rocket_name; 
            rocketPhoto.src = current.flickr_images[i];
            rocketInfo.innerText = current.description;

            btnName.appendChild(rocketTitle);
            imgSpot.appendChild(rocketPhoto);
            infoBody.appendChild(rocketInfo);


            if (btnName1.childElementCount > 1 && imgSpot1.childElementCount > 1 && infoBody1.childElementCount > 1) {
                let fixHeader1 = document.getElementById('btn1').lastChild;
                let fixImage1 = document.getElementById('img1').lastChild;
                let fixBody1 = document.getElementById('info1').lastChild;
                document.getElementById('btn2').appendChild(fixHeader1);
                document.getElementById('img2').appendChild(fixImage1);
                document.getElementById('info2').appendChild(fixBody1);
            } else {
                ;
            }
            if (btnName2.childElementCount > 1 && imgSpot2.childElementCount > 1 && infoBody2.childElementCount > 1) {
                let fixHeader2 = document.getElementById('btn2').lastChild;
                let fixImage2 = document.getElementById('img2').lastChild;
                let fixBody2 = document.getElementById('info2').lastChild;
                document.getElementById('btn3').appendChild(fixHeader2);
                document.getElementById('img3').appendChild(fixImage2);
                document.getElementById('info3').appendChild(fixBody2);
            } else {
                ;
            }
            if (btnName3.childElementCount > 1 && imgSpot3.childElementCount > 1 && infoBody3.childElementCount > 1) {
                let fixHeader3 = document.getElementById('btn3').lastChild;
                let fixImage3 = document.getElementById('img3').lastChild;
                let fixBody3 = document.getElementById('info3').lastChild;
                document.getElementById('btn4').appendChild(fixHeader3);
                document.getElementById('img4').appendChild(fixImage3);
                document.getElementById('info4').appendChild(fixBody3);
            } else {
                ;
            }
           
       }
    }
}


fetchResults();