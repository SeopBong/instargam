document.addEventListener("DOMContentLoaded",
    function(e){
        let button = document.querySelector("input")
        
        let img = document.querySelector("img")
        let img1 = "image/thumbnails/회색고양이.jpg"
        let img2 = "image/thumbnails/노란고양이.jpg"
        let img3 = "image/thumbnails/부릅고양이.jpg"

        button.addEventListener("click",
            function(e){
                let src = img.getAttribute("src")
                if(src === img1){
                    img.setAttribute("src",img2)
                } else if(src === img2){
                    img.setAttribute("src", img3)
                } else{
                    img.setAttribute("src",img1)
                }
            }    
        )
    }
)