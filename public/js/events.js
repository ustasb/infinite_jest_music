$(window).resize(function () {
    positionImgContainer();
    centerVertical();
});

$('#menuLinks div').click(function () {
    buttons.selectButton($(this));
    slidingMenu.slide();
});

$('#imgContainer div span').live('click', function () {
    removeImgContainer();

    $(document.body).css({
        'overflow-x': 'visible',
        'overflow-y': 'visible'
    });
});

$('#photos').on('click', 'a', function () {
    $('<div id="bgShade"></div>').css({
        'opacity': '0'
    }).animate({
        'opacity': '0.5'
    }, 'slow').appendTo(document.body);

    $(document.body).css({
        'overflow-x': 'hidden',
        'overflow-y': 'hidden'
    });

    $('<div id="imgContainer"><div><span>Close</span></div></div>').
    hide().appendTo($(document.body));

    $('<img />').attr('src', $(this).attr('href')).load(function () {
        $('#imgContainer').fadeIn();
        $('#imgContainer img').height($(window).height() / 1.3);
        $('#imgContainer div').width($('#imgContainer img').width());
        positionImgContainer();
    }).prependTo('#imgContainer');

    return false;
});

// Site Initialize
$(document).ready(function () {
    centerVertical();
    buttons.selectButton($('#homeLink'));

    if (window.PIE) {
        $('.redBox, #socialMediaLinks li a, #musicPlayer').each(function () {
            PIE.attach(this);
        });
    }

    loadPlugins();
});
