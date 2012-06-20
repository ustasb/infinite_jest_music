(function ($, undefined) {
    'use strict';

    var buttons, slidingMenu, date, loadedThumbnails = false;

    buttons = {
        $selectedButton: false,
        selectButton: function ($newButton) {
            var oldID, newID;
            if (buttons.$selectedButton) {
                oldID = buttons.$selectedButton.attr('id');
                buttons.$selectedButton.attr('id',
                                             oldID.replace('Selected', ''));
            }
            buttons.$selectedButton = $newButton;
            newID = $newButton.attr('id');
            $newButton.attr('id', newID + 'Selected');

            if (newID === 'photosLink' && !loadedThumbnails) {
                loadThumbnails();
                loadedThumbnails = true;
            }
        }
    };

    slidingMenu = {
        visibleContainer: '',
        slide: function () {
            slidingMenu.visibleContainer = buttons.$selectedButton.attr('id').
                                           replace('LinkSelected', '');
            $('#slidingMenu').animate({
                'left': slidingMenu[slidingMenu.visibleContainer]
            }, 'slow', 'easeOutBack');
        },
        home: '0px',
        music: '-480px',
        video: '-960px',
        photos: '-1440px',
        contact: '-1920px'
    };

    function positionImgContainer() {
        var posLeft, posTop;
        posLeft = ($(window).width() - $('#imgContainer').width()) / 2;
        posTop = ($(window).height() - $('#imgContainer').height()) / 2;

        $('#imgContainer').css({
            left: posLeft + 'px',
            top: posTop + 'px'
        });
    }

    function removeImgContainer() {
        $('#bgShade, #imgContainer').fadeOut('slow', function () {
            $(this).remove();
        });
    }

    function loadThumbnails() {
        var $thumbnail,
            photoThumbs = [],
            $photosCont = $('#photos div'),
            imgNames = ['ghosts', 'bwCovering', 'fourthDimension', 'pipes',
                        'smiles', 'tallCeiling'];

        for (var i = 0, j = imgNames.length; i < j; i++) {
            $thumbnail = $('<a href="images/photos/' + imgNames[i] + '.png" ' +
                      'target="blank" class="lightbox"><img src="images' +
                      '/photos/thumbnails/' + imgNames[i] + '.png" /></a>');

            photoThumbs.push($thumbnail);
            $photosCont.append($thumbnail);
        }

        // Center the last two elements in a div.
        photoThumbs[j - 1].add(photoThumbs[j - 2]).wrapAll('<div />');
    }

    // Events
    $('#menuLinks div').click(function () {
        buttons.selectButton($(this));
        slidingMenu.slide();
    });

    $(window).resize(function () {
        positionImgContainer();
    });

    $('#imgContainer div span').live('click', function () {
        removeImgContainer();

        $('body').css({
            'overflow-x': 'visible',
            'overflow-y': 'visible'
        });
    });

    $('#photos').on('click', 'a', function () {
        $('<div id="bgShade"></div>').css({
            'opacity': '0'
        }).animate({
            'opacity': '0.5'
        }, 'slow').appendTo('body');

        $('body').css({
            'overflow-x': 'hidden',
            'overflow-y': 'hidden'
        });

        $('<div id="imgContainer"><div><span>Close</span></div></div>').
        hide().appendTo($('body'));

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
        buttons.selectButton($('#homeLink'));

        date = new Date();
        $('#footer span').html('&copy; Infinite Jest ' + date.getFullYear());

        if (window.PIE) {
            $('.redBox, #socialMediaLinks li a, #musicPlayer').each(function () {
                PIE.attach(this);
            });
        }

        loadPlugins();
    });

})(jQuery);
