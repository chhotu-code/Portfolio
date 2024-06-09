$(document).ready(function(){
    $('#menu-icon').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu-icon').removeClass('fa-times');
        $('header').removeClass('toggle');
    });
});
let H1name = document.querySelector(".H1name");
let Change = document.querySelector("#changeName");

let namearr = ["Chhotu Shaw","Frontend Developer","Software Developer","Student"];

function nameChange(){
  let  random1 = Math.floor(Math.random()*4);
  let name = namearr[random1];
 console.log(random1);
  return name;
}

setInterval(()=>{
    Change.innerHTML = nameChange();
    H1name.appendChild(Change);

},1000);


// let resume = document.querySelector("#resume");
// resume.addEventListener("clcik",function(){
//     print();
// })

// let raja = document.querySelectorAll("#abc");

// raja.addEventListener("click", function(){
//     console.log("jhsdbsd");
// });
// console.log("wjefi");

// let newdata = new Date();
// console.log(newdata);
