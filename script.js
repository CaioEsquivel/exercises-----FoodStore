
const foodData = [
    {
        nome:'Batatopia',
        preço:12,
        category:['batata','all'],
        img:'Assets/batata1.jpg',
        descrição:'batata frita crocante, dourada e com molhos especiais.',
        id: Math.round(Math.random() * 899999 + 100000)
    },
    {
        nome:'Fritzzy',
        preço:15,
        category:['batata','all'],
        img:'Assets/batata2.jpg',
        descrição:'batata assada crocante, dourada e com molhos especiais.',
        id: Math.round(Math.random() * 899999 + 100000)
    },
    {
        nome:'Bacon Crunch',
        preço:18,
        category:['batata','all'],
        img:'Assets/batata3.jpg',
        descrição:'Batata assada com tempero especial.',
        id: Math.round(Math.random() * 899999 + 100000)
    },
    { 
        nome:'Dog do Chef',
        preço:15,
        category:['hot-dog','all'],
        img:'Assets/hotdog.jpg',
        descrição:'pão artesanal, salsicha defumada, batata palha e molho da casa.',
        id: Math.round(Math.random() * 899999 + 100000)
    },
    {
        nome:'Max Burger',
        preço:25,
        category:['hamburguer','all'],
        img:'Assets/ham1.jpg',
        descrição:'Hambúrguer clássico com cheddar',
        id: Math.round(Math.random() * 899999 + 100000)
    },
    {
        nome:'Bacon Blast',
        preço:28,
        category:['hamburguer','all'],
        img:'Assets/ham2.jpg',
        descrição:'Hambúrguer com cheddar e bacon',
        id: Math.round(Math.random() * 899999 + 100000)
    },
    {
        nome:'BBQ King',
        preço:30,
        category:['hamburguer','all'],
        img:'Assets/ham3.jpg',
        descrição:'Hambúrguer com molho barbecue, queijo e cebola caramelizada',
        id: Math.round(Math.random() * 899999 + 100000)
    },
    {
        nome:'MassaMágica',
        preço:40,
        category:['pizza','all'],
        img:'Assets/pizza1.jpg',
        descrição:'Pizza Margherita com manjericão',
        id: Math.round(Math.random() * 899999 + 100000)
    },
    {
        nome:'Calabrazza',
        preço:45,
        category:['pizza','all'],
        img:'Assets/pizza2.jpg',
        descrição:'Pizza de calabresa com queijo premium',
        id: Math.round(Math.random() * 899999 + 100000)
    },
    {
        nome:'Frangolândia',
        preço:48,
        category:['pizza','all'],
        img:'Assets/pizza3.jpg',
        descrição:'Pizza de frango desfiado com molho especial',
        id: Math.round(Math.random() * 899999 + 100000)
    },
]
const foodCategory = ['All','pizza','hamburguer','batata','hot-dog']

const container = document.querySelector('.container')
const productCards = document.querySelector('.productsCards')
const categoryCards = document.querySelector('.header-categories')
const inputSearch = document.querySelector('.inputSearch')

window.addEventListener('keydown',(evt)=>{
    if(evt.key == 'Enter'){
        inputSearchBtn.click()
    }
})

window.addEventListener('DOMContentLoaded', () => inputSearch.focus())

const productsRefresh=()=>{
    const productsError = document.createElement('p') 
        productsError.innerHTML = 'Não temos este produto!'
        productsError.classList.add('errorProduct', 'disable')
        productCards.appendChild(productsError)


    foodData.forEach((el)=>{
        const divNew = document.createElement('div')
            divNew.classList.add('divNew')
            divNew.setAttribute('data-id',el.id)
            divNew.setAttribute('data-category',el.category)
        const nameNew = document.createElement('h3')
            nameNew.innerHTML = el.nome
            nameNew.classList.add('nameNew')
        const imgNew = document.createElement('img')
            imgNew.src = el.img
        const priceNew = document.createElement('p')
            priceNew.innerHTML = el.preço
            priceNew.classList.add('priceNew')
        const descriptionNew = document.createElement('p')
            descriptionNew.innerHTML = el.descrição
            descriptionNew.classList.add('descriptionNew')

        productCards.appendChild(divNew)
        divNew.appendChild(imgNew)
        divNew.appendChild(nameNew)
        divNew.appendChild(descriptionNew)
    })

    const productdiv = document.querySelectorAll('.divNew')
    
    
    foodCategory.forEach((el)=>{
        const buttonCategory = document.createElement('button')
        buttonCategory.innerHTML = el
        buttonCategory.classList.add('buttonCategory')
        categoryCards.appendChild(buttonCategory)
        
        buttonCategory.addEventListener('click',()=>{
            let anyVisible = false
          productdiv.forEach((e)=>{
            if(buttonCategory.innerHTML.toLowerCase() == 'all' ||  e.getAttribute('data-category').toLowerCase().includes(buttonCategory.innerHTML.toLowerCase())){
                e.classList.remove('disable')
                anyVisible = true
            }else{
                e.classList.add('disable')
                
            }
            
            
            
            
        })  
        if(anyVisible){
            console.log('com produtos');
            productsError.classList.add('disable')
        }else{
            productsError.classList.remove('disable')
    
            console.log('sem produtos');
            
        }
    })
     })
    productdiv.forEach((el)=>{
        const productId = el.getAttribute('data-id')
        const product = foodData.find((i)=>{
            return i.id == productId
        })
        el.addEventListener('click',()=>{
            const bannerDiv = document.createElement('div')
            bannerDiv.classList.add('bannerDiv')
            setTimeout(()=>{
                bannerDiv.classList.add('active')
            },10)
            const bannerDivClose = document.createElement('div')
            bannerDivClose.classList.add('bannerCloseDiv')
            const bannerClose = document.createElement('button')
            bannerClose.innerHTML = "X"
            bannerClose.classList.add('bannerClose')
            const bannerImg = document.createElement('img')
            bannerImg.src = product.img
            bannerImg.classList.add('bannerImg')
            const bannerName = document.createElement('h3')
            bannerName.innerHTML = product.nome
            bannerName.classList.add('bannerName')
            const bannerPrice = document.createElement('p')
            bannerPrice.innerHTML = 'R$ '+product.preço.toFixed(2)
            bannerPrice.classList.add('bannerPrice')
            const bannerTax = document.createElement('p')
            bannerTax.innerHTML = '30% de taxa para o entregador: R$' +((product.preço / 100) * 30).toFixed(2)
            bannerTax.classList.add('bannerTax')
            const finalPrice = document.createElement('p')
            finalPrice.innerHTML = 'Total: R$'+(product.preço + (product.preço / 100) * 30).toFixed(2)
            const bannerBuy = document.createElement('button')
            bannerBuy.innerHTML = 'Comprar'
            
            bannerDiv.appendChild(bannerClose)
            bannerDiv.appendChild(bannerImg)
            bannerDiv.appendChild(bannerName)
            bannerDiv.appendChild(bannerPrice)
            bannerDiv.appendChild(bannerTax)
            bannerDiv.appendChild(finalPrice)
            bannerDiv.appendChild(bannerBuy)
            document.body.appendChild(bannerDivClose)
            document.body.appendChild(bannerDiv)
            
            bannerClose.addEventListener('click',()=>{
                bannerDiv.classList.remove('active')
                bannerDiv.addEventListener('transitionend',()=>{
                    bannerDiv.remove()
                    bannerDivClose.remove()
                },{once:true})
            })        
            bannerDivClose.addEventListener('click',()=>{
                bannerDiv.classList.remove('active')
                bannerDiv.addEventListener('transitionend',()=>{
                    bannerDiv.remove()
                    bannerDivClose.remove()
                },{once:true})
            })
            
            

        })
        
        
    })
    
    inputSearch.addEventListener('input',()=>{
        let anyVisible = false
        productdiv.forEach((el)=>{
            const productId = el.getAttribute('data-id')
            const product = foodData.find((i)=>{
                return productId == i.id 
            })

            
            const categoryMatch = product.category.some((el)=>{
                return el.toLowerCase().includes(inputSearch.value.toLowerCase())
            }) 
            if(product.nome.toLowerCase().includes(inputSearch.value.toLowerCase()) || categoryMatch ){
                el.classList.remove('disable')
                anyVisible = true
            }else{
                el.classList.add('disable')
                
            }
            if(anyVisible){
                console.log('com produtos');
                productsError.classList.add('disable')
            }else{
                productsError.classList.remove('disable')

                console.log('sem produtos');
                
            }

        })
    })
}



document.addEventListener('DOMContentLoaded',productsRefresh)