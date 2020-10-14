const header    = document.querySelector('.navigation')
const arrow_up  = document.querySelector('.arrow-up')
const menu      = document.querySelector('.menu')

document.addEventListener('scroll', () => {
    if(window.pageYOffset > 200){
        header.classList.add('scrollNavigation')
        arrow_up.classList.add('visible')
    }else{
        if(!menu.classList.contains('open')){
            header.classList.remove('scrollNavigation')
            arrow_up.classList.remove('visible')
        }  
    }
})

arrow_up.addEventListener('click', () => {
    arrow_up.classList.add('active-click')
    setTimeout(() => {
        arrow_up.classList.remove('active-click')
    },1000)
    window.scrollTo(0,0)
})


new WOW({
    mobile:false,
    live:true,
}).init()

const preloader = () => {
    const preload    = document.querySelector('.preloader')

    const heading    = document.querySelector('.intro-message h1')
    const imageHeader= document.querySelector('#main-image-header')
    
    const successLoadedDocument = () => {
        setTimeout(() => {
            document.body.style.overflow = 'scroll'
            preload.classList.add('destroy')
            heading.classList.add('animated')
            heading.classList.add('bounceInDown')

            imageHeader.classList.add('animated')
            imageHeader.classList.add('slideInDown')
        },1000)
    }

    window.addEventListener('load', successLoadedDocument)
    
}
preloader()

const setHeadingBackground = () => {
    if(window.pageYOffset > 500){
        setTimeout(() =>{
            header.classList.add('scrollNavigation')
            arrow_up.classList.add('visible')
        },100) 
    }
}

window.addEventListener('load', () => setHeadingBackground)


const slider = () => {
    const ulParent       = document.querySelector('.portfolio-dots')
    const ul             = document.querySelectorAll('li.portfolio-item')
    let prev_active_img  = document.querySelector('li.portfolio-item-active')
 
    let global_index     = 0
    let interval

    const generateDots = (extraClass = null) => {
        const new_li   = document.createElement('li')
        new_li.classList.add('dot')
        ulParent.append(new_li)

        if(extraClass != null){
            new_li.classList.add(extraClass)
        }
    }

    for(let i = 0; i < ul.length; i++){
        i == 0 ? generateDots('dot-active') : generateDots() 
    }

    const dots           = document.querySelectorAll('ul.portfolio-dots li')
    let prev_active_dots = document.querySelector('li.dot-active')

    dots.forEach(item => {
        item.addEventListener('click', e => {
            const index  = [...dots].indexOf(item)
            global_index = index
            
            deletePrevValue(index)
            change(index)
            changePrevValue(item)
        })
        setTimeout(() => item.addEventListener('touchend', onAnimateFrame),3000) 
    })


    const movingStarted =  (e, typeScreen) => typeScreen == 'mobile' ?
            (startpoint = e.touches[0].clientX , offAnimateFrame())  : startpoint = e.clientX

    const movingMove = (e, typeScreen) => {
        if(typeScreen == 'mobile'){
            if(e.touches[0].clientX < startpoint){
                startSuccess = true
                side         = 'right'
            }else{
                startSuccess = true
                side         = 'left'
            }
        }else{
            if(e.clientX < startpoint){
                startSuccess = true
                side         = 'right'
            }else{
                startSuccess = true
                side         = 'left'
            }
        }
    }

    const moving = (typeScreen) => {
        if(startSuccess      && side == 'right') shiftSlideRight()
        else if(startSuccess && side == 'left')  shiftSlideLeft()
        
        startSuccess  = false
        side          = ''
        if(typeScreen == 'mobile') onAnimateFrame()
    }

    let startpoint   = 0
    let startSuccess = false
    let side         = ''

    ul.forEach(item => {
        item.addEventListener('touchstart', e => movingStarted(e,'mobile'))
        item.addEventListener('touchmove',  e => movingMove(e,'mobile'))
        item.addEventListener('touchend',  () => moving('mobile'))


        item.addEventListener('mousedown', e => {
            movingStarted(e,'desktop')
            item.addEventListener('mousemove', e => movingMove(e, 'desktop'))
        })

        item.addEventListener('mouseup', () => {
            item.removeEventListener('mousemove', movingMove)
            moving('desktop')
        })
    })

    const change = index => ul[index].classList.add('portfolio-item-active')
    

    const deletePrevValue = index => {
        prev_active_img.classList.remove('portfolio-item-active')
        prev_active_img = ul[index]
    }

    const changePrevValue = item => {
        prev_active_dots.classList.remove('dot-active')
        prev_active_dots = item
        prev_active_dots.classList.add('dot-active')
    }

    const wrapperActionSlider = index => {
        deletePrevValue(index)
        change(index)
        changePrevValue(dots[index])
    }

    const shiftSlideRight = () => {
        if(global_index == ul.length - 1){ global_index = 0}else{ global_index++}
        wrapperActionSlider(global_index)
    }
    const shiftSlideLeft = () => {
        if(global_index == 0){ global_index = ul.length - 1}else{ global_index--}
        wrapperActionSlider(global_index)
    }

    const onAnimateFrame  = () => interval = setInterval(shiftSlideRight, 3000)
    const offAnimateFrame = () => clearInterval(interval)

    onAnimateFrame()

    ul[0].parentNode.addEventListener('mouseover', offAnimateFrame)
    ul[0].parentNode.addEventListener('mouseleave', onAnimateFrame)

}

slider()




let isDeleteLinkAnimate = false

window.addEventListener('load', () => {
    const head        = document.getElementsByTagName('head')[0]
    let linkAnimateClone
    const linkAnimate = linkAnimateClone = head.getElementsByTagName('link')
    let linkAnimateIndex
    const hrefAnimate = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css'

    for(let i = 0; i < linkAnimate.length; i++){

        if(linkAnimate[i].href == hrefAnimate){
            linkAnimateIndex = i
            break
        }
    }

    if(window.innerWidth <= 672){
        if(!isDeleteLinkAnimate){
            linkAnimate[linkAnimateIndex].remove()
            isDeleteLinkAnimate = !isDeleteLinkAnimate
        } 
    }
    else{

        if(isDeleteLinkAnimate){
            const styleElement  = document.createElement("link")
            styleElement.href   = hrefAnimate 
            
            styleElement.rel    = 'stylesheet'
            document.getElementsByTagName("head")[0].appendChild(styleElement)
            isDeleteLinkAnimate = !isDeleteLinkAnimate
        }
    }
})



const burger = document.querySelector('.burger .ham')

burger.addEventListener('click', () => {
    menu.classList.toggle('open')
    setTimeout(() => {
        if(window.pageYOffset >= 500){
            header.classList.add('scrollNavigation')
        }else{
            header.classList.toggle('scrollNavigation')
        }
    },1000)
})


const styleElement = document.createElement("style") 
document.getElementsByTagName("head")[0].appendChild(styleElement)

const checkResizeHeaderHelloBlock = () => {
    const intro_header  = document.querySelector('.intro-header') 
    let i_header_height =  Math.ceil(intro_header.getBoundingClientRect().height)

    let newElem = document.createTextNode(
        `::-webkit-scrollbar-thumb {
            height: ${i_header_height}px;
    }`)

    if(styleElement.children.length == 0){
        styleElement.appendChild(newElem)
    }else{
        try{styleElement.removeChild(styleElement.lastChild)}catch{}
        styleElement.appendChild(newElem)
    }
}


const loadedReadyRequests = async () => {
    const res = await fetch('../server/readyRequests.php', {
        method: 'GET',
        body: null, 
        headers: {'Content-Type':'application/json'}
    })

    const { data } = await res.json()

    const containerReadyRequests = document.getElementById('card__ready_requests')

    containerReadyRequests.innerHTML = ""

    data.map(req => {
        containerReadyRequests.innerHTML += `
            <div class="card-bid">
                <img src="${!req.image ? 'upload/default.jpg' : `upload/${req.image}`}" alt="">
                <div class="status">
                    <h5 class='title'>${req.title}</h5>
                    <hr/>
                    <h4 class='category'>${req.categoryId}</h4>
                    <p class='badge'>Решена</p>
                    <p class='date'>${req.date}</p>
                </div>
            </div>`
    })

    !data.length ? containerReadyRequests.innerHTML = '<span id="informer">Нет решенных задач</span>' : null

}
setInterval(loadedReadyRequests, 5000)
loadedReadyRequests()