var active_product = document.querySelectorAll(".product-left-link")


function activemenu(n){
    for(let i = 0 ; i< 6; i++){
        if(n === 0){
            active_product[0].classList.add("active-link")
            active_product[1].classList.remove("active-link")
            active_product[2].classList.remove("active-link")
            active_product[3].classList.remove("active-link")
            active_product[4].classList.remove("active-link")
            active_product[5].classList.remove("active-link")
            console.log(123)
        }
        if(n === 1){
            active_product[0].classList.remove("active-link")
            active_product[1].classList.add("active-link")
            active_product[2].classList.remove("active-link")
            active_product[3].classList.remove("active-link")
            active_product[4].classList.remove("active-link")
            active_product[5].classList.remove("active-link")
        }
        if(n === 2){
            active_product[0].classList.remove("active-link")
            active_product[1].classList.remove("active-link")
            active_product[2].classList.add("active-link")
            active_product[3].classList.remove("active-link")
            active_product[4].classList.remove("active-link")
            active_product[5].classList.remove("active-link")
        }
        if(n === 3){
            active_product[0].classList.remove("active-link")
            active_product[1].classList.remove("active-link")
            active_product[2].classList.remove("active-link")
            active_product[3].classList.add("active-link")
            active_product[4].classList.remove("active-link")
            active_product[5].classList.remove("active-link")
        }
        if(n === 4){
            active_product[0].classList.remove("active-link")
            active_product[1].classList.remove("active-link")
            active_product[2].classList.remove("active-link")
            active_product[3].classList.remove("active-link")
            active_product[4].classList.add("active-link")
            active_product[5].classList.remove("active-link")
        }
        if(n === 5){
            active_product[0].classList.remove("active-link")
            active_product[1].classList.remove("active-link")
            active_product[2].classList.remove("active-link")
            active_product[3].classList.remove("active-link")
            active_product[4].classList.remove("active-link")
            active_product[5].classList.add("active-link")
        }
        if(n === 6){
            active_product[0].classList.remove("active-link")
            active_product[1].classList.remove("active-link")
            active_product[2].classList.remove("active-link")
            active_product[3].classList.remove("active-link")
            active_product[4].classList.remove("active-link")
            active_product[5].classList.remove("active-link")
            active_product[5].classList.add("active-link")

        }
       
    }
}