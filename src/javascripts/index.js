// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

import 'bootstrap'
// JavaScript
//TODO

document.getElementById("submit").onclick = function displayMessage()
{
    let name = document.getElementById("name").value
    alert("Welcome " + name + "!");
}