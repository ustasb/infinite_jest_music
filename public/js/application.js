var buttons, slidingMenu, loadPlugins, loadedThumbnails = false;

buttons = {
    $selectedButton: false,
    selectButton: function ($newButton) {
        var oldID, newID;
        if (buttons.$selectedButton) {
            oldID = buttons.$selectedButton.attr('id');
            buttons.$selectedButton.attr('id', oldID.replace('Selected', ''));
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
    home: '0px',
    music: '-480px',
    video: '-960px',
    photos: '-1440px',
    contact: '-1920px',
    slide: function () {
        slidingMenu.visibleContainer = buttons.$selectedButton.attr('id').
                                       replace('LinkSelected', '');
        $('#slidingMenu').animate({
            'left': slidingMenu[slidingMenu.visibleContainer]
        }, 'slow', 'easeOutBack');
    }
};

loadPlugins = (function () {

    var vimeoEls = '<iframe src="https://player.vimeo.com/video/15680024?byline=0&portrait=0" width="428" height="240" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
        soundCloudEls = '<iframe width="100%" height="300" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/459454&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
        facebookEls = '<iframe src="http://www.facebook.com/plugins/likebox.php?href=https%3A%2F%2Fwww.facebook.com%2Fpages%2FInfinite-Jest%2F310503818119&amp;width=240&amp;colorscheme=light&amp;show_faces=false&amp;border_color&amp;stream=true&amp;header=false&amp;height=395" scrolling="no" frameborder="0"></iframe>';

    return function () {
        $('#vimeoPlayer').append(vimeoEls);
        $('#musicPlayer').append(soundCloudEls);
        $('#facebookFeed').append(facebookEls);
    };

})();

function positionImgContainer() {
    var posLeft, posTop,
        $window = $(window),
        $imgContainer = $('#imgContainer');

    posLeft = ($window.width() - $imgContainer.width()) / 2;
    posTop = ($window.height() - $imgContainer.height()) / 2;

    $imgContainer.css({
        left: posLeft + 'px',
        top: posTop + 'px'
    });
}

function centerVertical() {
    var $masterContainer = $('#masterContainer'),
        marginTop = ($(window).height() - $masterContainer.height()) / 2;

    marginTop = (marginTop >= 20) ? marginTop : 20;

    $masterContainer.css({
        marginTop: marginTop + 'px'
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
