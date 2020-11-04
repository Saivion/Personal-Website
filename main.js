// // function onTabClick(event) {
// //     let activeTabs = document.querySelectorAll('.active');

// // // deactivating exisiting active tabs
// //     for (let i = 0; i < activeTabs.length; i++) {
// //         activeTabs[i].className = activeTabs[i].className.replace('active', '');
// //     }

// // // activating new tab clicked on
// // event.target.parentElement.className += ' active';
// // document.getElementById(event.target.href.split('#')[1]).className += ' active';
// // }

// // const element = document.getElementById('nav-tab');

// // element.addEventListener('click', onTabClick, false);

function myFunction(activeTabs) {
    if (activeTabs == 'student') {
        document.getElementById("student").style.display = '';
        document.getElementById("portfolio").style.display = 'none';
        // document.getElementById("experience").style.display = 'none';

        document.getElementById("aboutStudent").style.textDecoration = 'none'
        document.getElementById("aboutStudent").style.color = '#333333'
        document.getElementById("aboutStudent").style.fontWeight = '500'
        document.getElementById("aboutStudent").style.fontFamily = 'Poppins, sans-serif'
        document.getElementById("aboutPortfolio").style.textDecoration = 'none'
        document.getElementById("aboutPortfolio").style.color = '#999999'
        document.getElementById("aboutPortfolio").style.fontWeight = ''
        document.getElementById("aboutPortfolio").style.fontFamily = 'Poppins, sans-serif'
        // document.getElementById("aboutExperience").style.textDecoration = 'none'
        // document.getElementById("aboutExperience").style.color = 'none;'
    }
    if (activeTabs == 'portfolio') {
        document.getElementById("student").style.display = 'none';
        document.getElementById("portfolio").style.display = '';
        // document.getElementById("experience").style.display = 'none';

        document.getElementById("aboutStudent").style.textDecoration = 'none'
        document.getElementById("aboutStudent").style.color = '#999999'
        document.getElementById("aboutStudent").style.fontWeight = ''
        document.getElementById("aboutStudent").style.fontFamily = 'Poppins, sans-serif'
        document.getElementById("aboutPortfolio").style.textDecoration = 'none'
        document.getElementById("aboutPortfolio").style.color = '#333333'
        document.getElementById("aboutPortfolio").style.fontWeight = '500'
        document.getElementById("aboutPortfolio").style.fontFamily = 'Poppins, sans-serif'
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