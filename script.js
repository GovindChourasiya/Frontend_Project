const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');


if(bar) {
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

if(close) {
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}


document.getElementById("redirectButton").addEventListener("click", function() {
    // Redirect to the specified HTML page
    window.location.href = "contact.html";
  });



document.getElementById("chat_bot").addEventListener('click',()=>{
    window.open('http://localhost:4000', '_blank', 'width=600,height=400');
});

document.getElementById("shop_now").addEventListener('click',()=>{
    window.location.href = "shop.html";
});

document.getElementById("explore_more").addEventListener('click',()=>{
    window.location.href = "shop.html";
});

document.getElementById("learn_more").addEventListener('click',()=>{
    window.location.href = "shop.html";
});

document.getElementById("collection").addEventListener('click',()=>{
    window.location.href = "shop.html";
});





