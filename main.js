// //Collapsible Menu - Work Section
// var collapse = document.getElementsByClassName("dropdownArrow");
// for (var i = 0; i < collapse.length; i++) {
//   collapse[i].addEventListener("click", function() {
//     this.classList.toggle("active");

//     var content = this.nextElementSibling;
//         saivion = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     };
//   });
// }

// Tabs
function myFunction(activeTabs) {
  // if (activeTabs == 'student') {
  //     document.getElementById("student").style.display = '';
  //     document.getElementById("portfolio").style.display = 'none';
  //     document.getElementById("blog").style.display = 'none';
  //     // document.getElementById("experience").style.display = 'none';

  //     document.getElementById("aboutStudent").style.textDecoration = 'none'
  //     document.getElementById("aboutStudent").style.color = '#333333'
  //     document.getElementById("aboutStudent").style.fontWeight = '500'
  //     document.getElementById("aboutStudent").style.fontFamily = 'Poppins, sans-serif'
  //     document.getElementById("aboutBlog").style.textDecoration = 'none'
  //     document.getElementById("aboutBlog").style.color = '#999999'
  //     document.getElementById("aboutBlog").style.fontWeight = ''
  //     document.getElementById("aboutBlog").style.fontFamily = 'Poppins, sans-serif'
  //     document.getElementById("aboutPortfolio").style.textDecoration = 'none'
  //     document.getElementById("aboutPortfolio").style.color = '#999999'
  //     document.getElementById("aboutPortfolio").style.fontWeight = ''
  //     document.getElementById("aboutPortfolio").style.fontFamily = 'Poppins, sans-serif'
  //     // document.getElementById("aboutExperience").style.textDecoration = 'none'
  //     // document.getElementById("aboutExperience").style.color = 'none;'
  // }
  if (activeTabs == "blog") {
    // document.getElementById("student").style.display = "none";
    document.getElementById("portfolio").style.display = "none";
    document.getElementById("blog").style.display = "";
    // document.getElementById("experience").style.display = 'none';

    // document.getElementById("aboutStudent").style.textDecoration = "none";
    // document.getElementById("aboutStudent").style.color = "#999999";
    // document.getElementById("aboutStudent").style.fontWeight = "";
    // document.getElementById("aboutStudent").style.fontFamily =
    //   "Poppins, sans-serif";
    document.getElementById("aboutBlog").style.textDecoration = "none";
    document.getElementById("aboutBlog").style.color = "#333333";
    document.getElementById("aboutBlog").style.fontWeight = "500";
    document.getElementById("aboutBlog").style.fontFamily =
      "Poppins, sans-serif";
    document.getElementById("aboutPortfolio").style.textDecoration = "none";
    document.getElementById("aboutPortfolio").style.color = "#999999";
    document.getElementById("aboutPortfolio").style.fontWeight = "";
    document.getElementById("aboutPortfolio").style.fontFamily =
      "Poppins, sans-serif";
    // document.getElementById("aboutExperience").style.textDecoration = 'none'
    // document.getElementById("aboutExperience").style.color = 'none;'
  }
  if (activeTabs == "portfolio") {
    // document.getElementById("student").style.display = "none";
    document.getElementById("portfolio").style.display = "";
    document.getElementById("blog").style.display = "none";
    // document.getElementById("experience").style.display = 'none';

    // document.getElementById("aboutStudent").style.textDecoration = "none";
    // document.getElementById("aboutStudent").style.color = "#999999";
    // document.getElementById("aboutStudent").style.fontWeight = "";
    // document.getElementById("aboutStudent").style.fontFamily =
    //   "Poppins, sans-serif";
    document.getElementById("aboutBlog").style.textDecoration = "none";
    document.getElementById("aboutBlog").style.color = "#999999";
    document.getElementById("aboutBlog").style.fontWeight = "";
    document.getElementById("aboutBlog").style.fontFamily =
      "Poppins, sans-serif";
    document.getElementById("aboutPortfolio").style.textDecoration = "none";
    document.getElementById("aboutPortfolio").style.color = "#333333";
    document.getElementById("aboutPortfolio").style.fontWeight = "500";
    document.getElementById("aboutPortfolio").style.fontFamily =
      "Poppins, sans-serif";
    // document.getElementById("aboutExperience").style.textDecoration = 'none'
    // document.getElementById("aboutExperience").style.color = 'rgb(34, 34, 34);'
  }
}
//     if (activeTabs == 'experience') {
//         document.getElementById("student").style.display = 'none';
//         // document.getElementById("portfolio").style.display = 'none';
//         document.getElementById("experience").style.display = '';

//         document.getElementById("aboutStudent").style.textDecoration = 'none'
//         document.getElementById("aboutStudent").style.color = 'none;'
//         // document.getElementById("aboutPortfolio").style.textDecoration = 'none'
//         // document.getElementById("aboutPortfolio").style.color = 'rgb(34, 34, 34);'
//         document.getElementById("aboutExperience").style.textDecoration = 'overline'
//         document.getElementById("aboutExperience").style.color = '#5d75ff;'
//     }
// }

// // }
