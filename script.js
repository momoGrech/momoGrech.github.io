// smooth scroll
var arrowContainer = document.querySelector('.arrow-container')
var touchScreen = document.querySelector('.hero-scroll-down')

if(touchScreen !== null)
{
    $('.hero-scroll-down, .arrow-down-link, scroll-up, .arrow-container').on('click', function(e) {
        if(this.hash !== '') {
            const hash = this.hash;
    
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
        console.log("hello")
    }); 
}


var input = document.getElementById("searchInput");
if(input !== null){
    input.addEventListener("keyup", function(event){
        if(event.code===13){
            console.log("Hello Input")
        }
    });

    function buttonCode()
{
  alert("Button code executed.");
}
}



// Fade out hero contents when scrolling down
const btnScrollUp = document.querySelector('.scroll-up');
const searchBar = document.querySelector('.searchbar-container');
const articleH1 = document.querySelector('.hero__article h1')
const articleH2 = document.querySelector('.hero__article h2')

if(btnScrollUp !== null){
    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 50) {
            btnScrollUp.classList.add("active-arrow")
            arrowContainer.classList.add('touch-fadeOut')
            searchBar.classList.add('touch-fadeOut')
            articleH1.classList.add('touch-fadeOut')
            articleH2.classList.add('touch-fadeOut')
            console.log("hello world")
    
        } else {
            btnScrollUp.classList.remove("active-arrow")
            arrowContainer.classList.remove('touch-fadeOut')
            searchBar.classList.remove('touch-fadeOut')
            articleH1.classList.remove('touch-fadeOut')
            articleH2.classList.remove('touch-fadeOut')
        }
    })
}




//checkbox for hamburger button in index page
const heroBlock = document.querySelector('.hero')

if(heroBlock !== null)
{
    $(document).ready(function(){
        $('input[type="checkbox"]').click(function(){
            if($(this).is(":checked")){
                heroBlock.classList.add('hero-block')
                console.log("Hello burger")
            }
            else if($(this).is(":not(:checked)")){
                heroBlock.classList.remove('hero-block')
            }
        });
    });
}


// FAQ Page

const questionText1 = document.querySelector('.question-text1')
const flipArrow1 = document.querySelector('.arrow1')

// arrow 1 - text 1
$(document).ready(function(){
    $('input[title="checkbox1"]').click(function(){
        if($(this).is(":checked")){
            questionText1.classList.add('show-Question')
            flipArrow1.classList.add('flip-arrow')
        }
        else if($(this).is(":not(:checked)")){
            questionText1.classList.remove('show-Question')
            flipArrow1.classList.remove('flip-arrow')
        }
    });
});

// arrow 2 - text 
const questionText2 = document.querySelector('.question-text2')
const flipArrow2 = document.querySelector('.arrow2') 

$(document).ready(function(){
    $('input[title="checkbox2"]').click(function(){
        if($(this).is(":checked")){
            questionText2.classList.add('show-Question')
            flipArrow2.classList.add('flip-arrow')
        }
        else if($(this).is(":not(:checked)")){
            questionText2.classList.remove('show-Question')
            flipArrow2.classList.remove('flip-arrow')
        }
    });
});

// arrow 3 - text 3
const questionText3 = document.querySelector('.question-text3')
const flipArrow3 = document.querySelector('.arrow3') 

$(document).ready(function(){
    $('input[title="checkbox3"]').click(function(){
        if($(this).is(":checked")){
            questionText3.classList.add('show-Question')
            flipArrow3.classList.add('flip-arrow')
        }
        else if($(this).is(":not(:checked)")){
            questionText3.classList.remove('show-Question')
            flipArrow3.classList.remove('flip-arrow')
        }
    });
});

// arrow 4 - text 4
const questionText4 = document.querySelector('.question-text4')
const flipArrow4 = document.querySelector('.arrow4') 

$(document).ready(function(){
    $('input[title="checkbox4"]').click(function(){
        if($(this).is(":checked")){
            questionText4.classList.add('show-Question')
            flipArrow4.classList.add('flip-arrow')
        }
        else if($(this).is(":not(:checked)")){
            questionText4.classList.remove('show-Question')
            flipArrow4.classList.remove('flip-arrow')
        }
    });
});



// arrow 5 - text 5
const questionText5 = document.querySelector('.question-text5')
const flipArrow5 = document.querySelector('.arrow5')  

$(document).ready(function(){
    $('input[title="checkbox5"]').click(function(){
        if($(this).is(":checked")){
            questionText5.classList.add('show-Question')
            flipArrow5.classList.add('flip-arrow')
        }
        else if($(this).is(":not(:checked)")){
            questionText5.classList.remove('show-Question')
            flipArrow5.classList.remove('flip-arrow')
        }
    });
});



// If I keep the below code, index and faq will be safe

// block FAQ page when hamburger button clicked
const blockFaq = document.querySelector('.question-container')
$(document).ready(function(){
    $('input[title="hamburger"]').click(function(){
        if($(this).is(":checked")){
            blockFaq.classList.add('faqBlock')
            blockFaq.classList.remove('faqUnBlock')
        }
        else if($(this).is(":not(:checked)")){
            blockFaq.classList.add('faqUnBlock')
        }
    });
});

/* Latest places to fly */
const flyingLocation = document.querySelector('.locations-container')

if(flyingLocation !== null)
{
    $(document).ready(function(){
        $('input[type="checkbox"]').click(function(){
            if($(this).is(":checked")){
                flyingLocation.classList.add('locationBlock')
                flyingLocation.classList.remove('locationUnBlock')
            }
            else if($(this).is(":not(:checked)")){
                flyingLocation.classList.add('locationUnBlock')

            }
        });
    });
}

function handle(e){
    if(e.keyCode === 13){
        e.preventDefault(); // Ensure it is only this code that runs
            let searched = document.getElementById("search").value.trim();
            if (searched !== "") {
            let text1 = document.getElementById("search-word-1").innerHTML;
            let text2 = document.getElementById("search-word-2").innerHTML;
            let re = new RegExp(searched,"g"); // search for all instances
            let newText1 = text1.replace(re, `<mark>${searched}</mark>`);
            let newText2 = text2.replace(re, `<mark>${searched}</mark>`);
            document.getElementById("search-word-1").innerHTML = newText1;
            document.getElementById("search-word-2").innerHTML = newText2;
        }
    }
}
