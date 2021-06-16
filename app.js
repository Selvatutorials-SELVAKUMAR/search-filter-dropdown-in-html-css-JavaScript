class App{
    links = ['Home','About','Contact','Products','Base','Blog','Custom','Support','Tools','Location','Quotes','SignUp']
    constructor(){
       this.renderLinks(document.getElementById('links'))
       this.renderSections()
       const totop = document.getElementsByClassName('to-top')[0]
       window.addEventListener('scroll',() => {
           if(window.pageYOffset > 100){
               totop.classList.add('active')
           } else {
               totop.classList.remove('active')
           }
       })
    }
    renderLinks(ParentEle){
        this.links.forEach(data => {
            const a = document.createElement('a')
            a.href = `#${data}`
            a.textContent = data
            a.classList.add('link')
            ParentEle.appendChild(a)
        })
    }
    renderSections(){
        this.links.forEach(data => {
            const div = document.createElement('div')
            div.id = `${data}`
            div.textContent = data 
            div.classList.add('section')
            document.body.appendChild(div)
        })
    }
    toggleClass(){
        document.getElementsByClassName('dropdownlist')[0].classList.toggle('show')
        document.getElementsByClassName('ion-chevron-down')[0].classList.toggle('ion-chevron-up')
    }
    filterLinks(val){
        const inputValue = val.toUpperCase()
        const links = document.getElementById('links').children
        Array.from(links).forEach(data => {
            data.textContent.toUpperCase().indexOf(inputValue) > -1 ? data.style.display = 'block' : data.style.display = 'none'
        })
    }
    hideDropdown(){
        document.getElementsByClassName('dropdownlist')[0].classList.remove("show")
        document.getElementsByClassName('ion-chevron-down')[0].classList.remove('ion-chevron-up')
        Array.from(document.getElementsByClassName('link')).forEach(data => {
            data.style.display = 'block'
        })
        document.getElementById('textfield').value = ''
    }
}

const Filterdropdown = new App()