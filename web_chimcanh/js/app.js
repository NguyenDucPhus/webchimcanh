


window.addEventListener("load", ()=>{
    var gioithieu = document.querySelector("#gioithieu")
    var trangchu = document.querySelector("#trangchu")
    var sanpham = document.querySelector("#sanpham")
    var news = document.querySelector("#news")
    var contact = document.querySelector("#contact")
    gioithieu.addEventListener("click", ()=>{
        window.location.href = "/web_chimcanh/pages/gioithieu.php"
    })
    trangchu.addEventListener("click", ()=>{
        window.location.href = "/web_chimcanh/"
    })
    
    sanpham.addEventListener("click", ()=>{
        window.location.href = "/web_chimcanh/pages/sanpham.php"
    })
    news.addEventListener("click", ()=>{
        window.location.href = "/web_chimcanh/pages/tintuc.php"
    })
    contact.addEventListener("click", ()=>{
        window.location.href = "../html/contact.php"
    })
    
})




