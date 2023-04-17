//List Item Array
const items = ['Apple' , 'Carrot', 'Pineapple', 'Grapes','Banana'];


//Theme Colors
const colors = {
    background: '#ffffff',
    text:'#222222',
    secondary:'#b3b3b3',
    backgroundDark: '#181818',
    textDark: '#ffffff',
    secondaryDark:'#121212',
    backgroundBred:'#E31C25',
    textBred:'#161616',
    secondaryBred:'#BB000E'

};



const $list = document.getElementsByClassName('list');

const listItem = document.getElementsByTagName('li')
const listLink = document.getElementsByTagName('a')


//creating list
let ul = document.createElement('ul');
ul.classList.add('list-group')

for (i = 0; i <= items.length - 1; i++){
    const li = document.createElement('li');
    li.innerHTML = items[i];
    li.classList.add('list-group-item')

    ul.appendChild(li);
}

list.appendChild(ul);

const $right = document.getElementById('right');



const dropdowns = document.createElement('div');
dropdowns.classList.add('dropdowns')


//adding them and list style dropdowns
 dropdowns.innerHTML = `
 <div id="dropdown-1">
 <h1 class="text"> Theme </h1>
 <button id="theme-btn" class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
 Light
</button>
<ul class="dropdown-menu">
 <li><a class="dropdown-item light" id="text">Light</a></li>
 <li><a class="dropdown-item dark" id="text dark">Dark</a></li>
 <li><a class="dropdown-item bred" id="text">Bred(Black/Red)</a></li>
</ul>
 </div>

 <div id="dropdown-2">
 <h1 class="text"> List Style</h1>
 <button id="list-btn"class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
 Regular
</button>
<ul class="dropdown-menu dropdown-2">
 <li><a class="dropdown-item compressed" id="text">Compressed</a></li>
 <li><a class="dropdown-item regular" id="text">Regular</a></li>
 <li><a class="expand  dropdown-item" id="text">Expanded</a></li>
</ul>
 </div>
 `
 $right.appendChild(dropdowns);

 const $dark = document.getElementsByClassName('dark');
const $texts = document.querySelectorAll('h1,p')


const $left = document.getElementById('left');

const $bg = document.getElementsByClassName('container')

const $theme = document.getElementById('dropdown-1');

const $themeBtn = document.getElementById('theme-btn')

//theme options
function setTheme () {
    $theme.addEventListener('click', function (e) {
    if (e.target.classList.contains('light')){
    $right.style.backgroundColor = colors.secondary
    $left.style.backgroundColor = colors.background
    for(let i=0;i<$texts.length;i++){
        $texts[i].style.color = colors.text
    }

    for(let i=0;i<listItem.length;i++){
        listItem[i].style.backgroundColor = colors.background
        listItem[i].style.color = colors.text
    }

    for(let i=0;i<listLink.length;i++){
        listLink[i].style.color = colors.text
    }

    $themeBtn.innerHTML = 'Light'

    localStorage.setItem('colors', JSON.stringify(colors))
    }}
    )
};




$theme.addEventListener('click', function (e) {
    if (e.target.classList.contains('dark')){
        $right.style.backgroundColor = colors.backgroundDark
       
        $left.style.backgroundColor = colors.secondaryDark
        for(let i=0;i<$texts.length;i++){
            $texts[i].style.color = colors.textDark
        }
        
        for(let i=0;i<listItem.length;i++){
            listItem[i].style.backgroundColor = colors.secondaryDark;
            listItem[i].style.color = colors.textDark
        }

        for(let i=0;i<listLink.length;i++){
            listLink[i].style.color = colors.textDark
        }

        $themeBtn.innerHTML = 'Dark'

    }
    localStorage.setItem('colors', JSON.stringify(colors))
    setTheme()
   
});

$theme.addEventListener('click', function (e) {
    if (e.target.classList.contains('bred')){
        $right.style.backgroundColor = colors.backgroundBred
       
        $left.style.backgroundColor = colors.secondaryBred
        for(let i=0;i<$texts.length;i++){
            $texts[i].style.color = colors.textBred
        }
        
        for(let i=0;i<listItem.length;i++){
            listItem[i].style.backgroundColor = colors.secondaryBred;
            listItem[i].style.color = colors.textBred
        }

        for(let i=0;i<listLink.length;i++){
            listLink[i].style.color = colors.textBred
        }
        $themeBtn.innerHTML = 'Bred'

    }
    localStorage.setItem('colors', JSON.stringify(colors))
    setTheme()
   
});




//list style js

const leftList = document.getElementsByClassName('list-group-item')
const $listStyle = document.getElementById('dropdown-2');

const $listBtn = document.getElementById('list-btn')

function setList () {
    $listStyle.addEventListener('click', function (e) {
    if (e.target.classList.contains('compressed')){
        for(let i=0;i<leftList.length;i++){
            leftList[i].classList.add('compress');

            leftList[i].classList.remove('reg', 'expanded');

            $listBtn.innerHTML = 'Compressed'

        }
 
    }
    setList()
})

}


$listStyle.addEventListener('click', function (e) {
    if (e.target.classList.contains('regular')){
        for(let i=0;i<leftList.length;i++){
            leftList[i].classList.add('reg');

            leftList[i].classList.remove('compress', 'expanded')

            $listBtn.innerHTML = 'Regular'
        }

    }
    setList()
})



$listStyle.addEventListener('click', function (e) {
    if (e.target.classList.contains('expand')){
        for(let i=0;i<leftList.length;i++){
            leftList[i].classList.add('expanded');

            leftList[i].classList.remove('compress', 'reg')

            $listBtn.innerHTML = 'Expanded'
        }
    }
    setList()
})


//Local Storage

const ls = JSON.parse(localStorage.getItem('colors'))
if (ls) {
    colors.background = ls.background
    colors.text = ls.text
   
};



