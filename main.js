
function myFunction(sections) {
    if (sections == 'about') {
        document.getElementById("about").style.display = '';
        document.getElementById("projects").style.display = 'none';
        document.getElementById("blog").style.display = 'none';
        document.getElementById("activities").style.display = 'none';

        document.getElementById("aboutSection").style.textDecoration = 'underline'
        document.getElementById("aboutSection").style.color = ' rgb(34, 34, 34);'
        document.getElementById("aboutProjects").style.textDecoration = 'none'
        document.getElementById("aboutProjects").style.color = 'rgb(34, 34, 34);'
        document.getElementById("aboutBlog").style.textDecoration = 'none'
        document.getElementById("aboutBlog").style.color = 'rgb(34, 34, 34);'
        document.getElementById("aboutActivities").style.textDecoration = 'none'
        document.getElementById("aboutActivities").style.color = 'rgb(34, 34, 34);'
    }
    if (sections == 'projects') {
        document.getElementById("about").style.display = 'none';
        document.getElementById("projects").style.display = '';
        document.getElementById("blog").style.display = 'none';
        document.getElementById("activities").style.display = 'none';

        document.getElementById("aboutSection").style.textDecoration = 'none'
        document.getElementById("aboutSection").style.color = 'rgb(34, 34, 34);'
        document.getElementById("aboutProjects").style.textDecoration = 'underline'
        document.getElementById("aboutProjects").style.color = ' rgb(34, 34, 34);'
        document.getElementById("aboutBlog").style.textDecoration = 'none'
        document.getElementById("aboutBlog").style.color = 'rgb(34, 34, 34);'
        document.getElementById("aboutActivities").style.textDecoration = 'none'
        document.getElementById("aboutActivities").style.color = 'rgb(34, 34, 34);'
    }
    if (sections == 'blog') {
        document.getElementById("about").style.display = 'none';
        document.getElementById("projects").style.display = 'none';
        document.getElementById("blog").style.display = '';
        document.getElementById("activities").style.display = 'none';

        document.getElementById("aboutSection").style.textDecoration = 'none'
        document.getElementById("aboutSection").style.color = 'rgb(34, 34, 34);'
        document.getElementById("aboutProjects").style.textDecoration = 'none'
        document.getElementById("aboutProjects").style.color = 'rgb(34, 34, 34);'
        document.getElementById("aboutBlog").style.textDecoration = 'underline'
        document.getElementById("aboutBlog").style.color = ' rgb(34, 34, 34);'
        document.getElementById("aboutActivities").style.textDecoration = 'none'
        document.getElementById("aboutActivities").style.color = 'rgb(34, 34, 34);'
    }
    if (sections == 'activities') {
        document.getElementById("about").style.display = 'none';
        document.getElementById("projects").style.display = 'none';
        document.getElementById("blog").style.display = 'none';
        document.getElementById("activities").style.display = '';

        document.getElementById("aboutSection").style.textDecoration = 'none'
        document.getElementById("aboutSection").style.color = 'rgb(34, 34, 34);'
        document.getElementById("aboutProjects").style.textDecoration = 'none'
        document.getElementById("aboutProjects").style.color = 'rgb(34, 34, 34);'
        document.getElementById("aboutBlog").style.textDecoration = 'none'
        document.getElementById("aboutBlog").style.color = 'rgb(34, 34, 34);'
        document.getElementById("aboutActivities").style.textDecoration = 'underline'
        document.getElementById("aboutActivities").style.color = 'rgb(34, 34, 34);'
    }
}