$(function () {
    $(window).scroll(function (event) {
        ($(this).scrollTop() > 10) ?
            $("header").fadeIn().addClass('menu-top')
            : $("header").removeClass('menu-top')
    });
});

var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight() + 15,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function () {
        var item = $($(this).attr("href"));
        if (item.length) {
            return item;
        }
    });

menuItems.click(function (e) {
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 300);
    e.preventDefault();
});

$(window).scroll(function () {
    var fromTop = $(this).scrollTop() + topMenuHeight;
    var cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop)
            return this;
    });
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        menuItems
            .parent().removeClass("active")
            .end().filter("[href='#" + id + "']").parent().addClass("active");
    }
});

var galleryInit = function () {
    var galleryItem = document.querySelectorAll('.galleri-item'),
        galleryContainer = document.querySelector('.gallery-popup');

    for (var i = 0; i < galleryItem.length; i++) {
        galleryItem[i].addEventListener('click', openGallery)
    }

    function openGallery(e) {
        var img = e.target.childNodes[0].attributes.src,
            position = +img.value.charAt(img.value.length - 5),
            popupImg = document.createElement("img");

        popupImg.setAttribute('src', img.value);
        popupImg.classList.add('popupImg')
        galleryContainer.insertBefore(popupImg, galleryContainer.querySelector('.next'));
        galleryContainer.style.display = 'flex';

        galleryContainer.firstElementChild.addEventListener('click', function () {
            if (position > 1) {
                popupImg.setAttribute('src', 'img/gallery-' + --position + '.jpg');
            } else {
                position = galleryItem.length;
                popupImg.setAttribute('src', 'img/gallery-' + position + '.jpg');
            }
        });
        galleryContainer.lastElementChild.addEventListener('click', function () {
            if (position < 8) {
                popupImg.setAttribute('src', 'img/gallery-' + ++position + '.jpg');
            } else {
                position = 1;
                popupImg.setAttribute('src', 'img/gallery-' + position + '.jpg');
            }
        });
    };

    galleryContainer.querySelector('.close').addEventListener('click', function () {
        galleryContainer.removeChild(galleryContainer.querySelector('.popupImg'));
        galleryContainer.style.display = 'none';
    });
};
document.addEventListener('load', galleryInit());
