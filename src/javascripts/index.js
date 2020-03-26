// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

import 'bootstrap'
// JavaScript
//TODO

const displayRandomBox = function()
{
    let rand = Math.random()
    if(rand < .5)
    {
        document.write('<div class="red box"></div>')
    }
    else
    {
        document.write('<div class="blue box"></div>')
    }
}

function displayNBoxesUsingFor(n)
{
    for(let i = 0; i < n; i++)
    {
    displayRandomBox()
    }
}

function displayNBoxesUsingWhile(n)
{
    let j = 0
    while(j < n)
    {
        displayRandomBox()
        j++
    }
}

function displayNBoxesUsingDoWgile(n)
{
    let k = 0
    do
    {
        displayRandomBox()
        k++
    }
    while(k < n)
}

displayNBoxesUsingFor(15)
displayNBoxesUsingWhile(12)
displayNBoxesUsingDoWgile(14)

const square = function(x)
{
    return x*x
}
