// function main() {
   let img1= document.getElementById("img1").addEventListener("click", myFunction1);

    function myFunction1() {
        fetch('https://swapi.dev/api/people')
            .then(res => res.json())
            .then(actualdata =>{
                let data=actualdata.results;
                let myName1=document.getElementById("name1");
                myName1.innerHTML = "Name : " + data[0].name

                let myHeight1 = document.getElementById("height1");
                myHeight1.innerHTML = "Height : " + data[0].height

                let myGender1 = document.getElementById("gender1");
                myGender1.innerHTML = "Gender : " + data[0].gender
            })
           
    }



let img2 = document.getElementById("img2").addEventListener("click", myFunction2);

function myFunction2() {
    fetch('https://swapi.dev/api/people')
        .then(res => res.json())
        .then(actualdata => {
            let data = actualdata.results;
            let myName2 = document.getElementById("name2");
            myName2.innerHTML = "Name : " + data[1].name

            let myHeight2 = document.getElementById("height2");
            myHeight2.innerHTML = "Height : " + data[1].height

            let myGender2 = document.getElementById("gender2");
            myGender2.innerHTML = "Gender : " + data[1].gender
        })

}


let img3 = document.getElementById("img3").addEventListener("click", myFunction3);

function myFunction3() {
    fetch('https://swapi.dev/api/people')
        .then(res => res.json())
        .then(actualdata => {
            let data = actualdata.results;
            let myName3 = document.getElementById("name3");
            myName3.innerHTML = "Name : " + data[2].name

            let myHeight3 = document.getElementById("height3");
            myHeight3.innerHTML = "Height : " + data[2].height

            let myGender3 = document.getElementById("gender3");
            myGender3.innerHTML = "Gender : " + data[2].gender
        })

}


let img4 = document.getElementById("img4").addEventListener("click", myFunction4);

function myFunction4() {
    fetch('https://swapi.dev/api/people')
        .then(res => res.json())
        .then(actualdata => {
            let data = actualdata.results;
            let myName4 = document.getElementById("name4");
            myName4.innerHTML = "Name : " + data[3].name

            let myHeight4 = document.getElementById("height4");
            myHeight4.innerHTML = "Height : " + data[3].height

            let myGender4 = document.getElementById("gender4");
            myGender4.innerHTML = "Gender : " + data[3].gender
        })

}


let img5 = document.getElementById("img5").addEventListener("click", myFunction5);

function myFunction5() {
    fetch('https://swapi.dev/api/people')
        .then(res => res.json())
        .then(actualdata => {
            let data = actualdata.results;
            let myName5 = document.getElementById("name5");
            myName5.innerHTML = "Name : " + data[4].name

            let myHeight5 = document.getElementById("height5");
            myHeight5.innerHTML = "Height : " + data[4].height

            let myGender5 = document.getElementById("gender5");
            myGender5.innerHTML = "Gender : " + data[4].gender
        })

}


let img6 = document.getElementById("img6").addEventListener("click", myFunction6);

function myFunction6() {
    fetch('https://swapi.dev/api/people')
        .then(res => res.json())
        .then(actualdata => {
            let data = actualdata.results;
            let myName6= document.getElementById("name6");
            myName6.innerHTML = "Name : " + data[5].name

            let myHeight6= document.getElementById("height6");
            myHeight6.innerHTML = "Height : " + data[5].height

            let myGender6= document.getElementById("gender6");
            myGender6.innerHTML = "Gender : " + data[3].gender
        })

}

let img7 = document.getElementById("img7").addEventListener("click", myFunction7);

function myFunction7() {
    fetch('https://swapi.dev/api/people')
        .then(res => res.json())
        .then(actualdata => {
            let data = actualdata.results;
            let myName7 = document.getElementById("name7");
            myName7.innerHTML = "Name : " + data[6].name

            let myHeight7= document.getElementById("height7");
            myHeight7.innerHTML = "Height : " + data[6].height

            let myGender7= document.getElementById("gender7");
            myGender7.innerHTML = "Gender : " + data[6].gender
        })

}


let img8= document.getElementById("img8").addEventListener("click", myFunction8);

function myFunction8() {
    fetch('https://swapi.dev/api/people')
        .then(res => res.json())
        .then(actualdata => {
            let data = actualdata.results;
            let myName8= document.getElementById("name8");
            myName8.innerHTML = "Name : " + data[7].name

             let myHeight8= document.getElementById("height8");
            myHeight8.innerHTML = "Height : " + data[7].height

            let myGender8= document.getElementById("gender8");
            myGender8.innerHTML = "Gender : " + data[7].gender
        })

}


let img9 = document.getElementById("img9").addEventListener("click", myFunction9);
function myFunction9() {
    fetch('https://swapi.dev/api/people')
        .then(res => res.json())
        .then(actualdata => {
            let data = actualdata.results;
            let myName9= document.getElementById("name9");
            myName9.innerHTML = "Name : " + data[8].name

            let myHeight9= document.getElementById("height9");
            myHeight9.innerHTML = "Height : " + data[8].height

            let myGender9 = document.getElementById("gender9");
            myGender9.innerHTML = "Gender : " + data[8].gender
        })

}


let img10 = document.getElementById("img10").addEventListener("click", myFunction10);
function myFunction10() {
    fetch('https://swapi.dev/api/people')
        .then(res => res.json())
        .then(actualdata => {
            let data = actualdata.results;
            let myName10 = document.getElementById("name10");
            myName10.innerHTML = "Name : " + data[9].name

            let myHeight10 = document.getElementById("height10");
            myHeight10.innerHTML = "Height : " + data[9].height

            let myGender10 = document.getElementById("gender10");
            myGender10.innerHTML = "Gender : " + data[9].gender
        })

}


//module.exports = { main };
