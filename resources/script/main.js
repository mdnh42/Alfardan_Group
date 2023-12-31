// $(document).ready(function(){
//     $('.slick-carousel').slick({
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         arrows: false,
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 3
//                 }
//             },
//             {
//                 breakpoint: 576,
//                 settings: {
//                     slidesToShow: 2
//                 }
//             }
//         ]
//     });
// });


// Bar
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");

one.onclick = function() {
    one.classList.add("active");
    two.classList.remove("active");
    three.classList.remove("active");
    four.classList.remove("active");
    five.classList.remove("active");
}

two.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.remove("active");
    four.classList.remove("active");
    five.classList.remove("active");
}
three.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.remove("active");
    five.classList.remove("active");
}
four.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.add("active");
    five.classList.remove("active");
}
five.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.add("active");
    five.classList.add("active");
}





// ===================== Out Partner Scrolling Script
const leftButton = document.getElementById('leftButton');
  const rightButton = document.getElementById('rightButton');
  const yearList = document.getElementById('yearList');

  let currentIndex = 0;

  leftButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateYearList();
    }
  });

  rightButton.addEventListener('click', () => {
    if (currentIndex < yearList.children.length - 8) {
      currentIndex++;
      updateYearList();
    }
  });

  function updateYearList() {
    const offset = currentIndex * 60; // Adjust the offset based on your item size
    yearList.style.transform = `translateX(-${offset}px)`;
  }