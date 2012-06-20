var loadPlugins = (function () {

    var vimeoEls = '<object width="428" height="240" type="application/x-shockwave-flash" data="http://vimeo.com/moogaloop.swf?clip_id=15680024&amp;server=vimeo.com&amp;show_title=0&amp;show_byline=0&amp;show_portrait=0&amp;color=990000&amp;fullscreen=1&amp;autoplay=0&amp;loop=0"><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="http://vimeo.com/moogaloop.swf?clip_id=15680024&amp;server=vimeo.com&amp;show_title=0&amp;show_byline=0&amp;show_portrait=0&amp;color=990000&amp;fullscreen=1&amp;autoplay=0&amp;loop=0" /></object>',
        soundCloudEls = '<object height="230" width="480" type="application/x-shockwave-flash" data="http://player.soundcloud.com/player.swf?url=http%3A%2F%2Fapi.soundcloud.com%2Fusers%2F459454&amp;show_comments=false&amp;auto_play=false&amp;show_playcount=false&amp;show_artwork=false&amp;color=990000"><param name="wmode" value="transparent" /><param name="movie" value="http://player.soundcloud.com/player.swf?url=http%3A%2F%2Fapi.soundcloud.com%2Fusers%2F459454&amp;show_comments=false&amp;auto_play=false&amp;show_playcount=false&amp;show_artwork=false&amp;color=990000" /><param name="allowscriptaccess" value="always" /></object>',
        facebookEls = '<iframe src="http://www.facebook.com/plugins/likebox.php?href=https%3A%2F%2Fwww.facebook.com%2Fpages%2FInfinite-Jest%2F310503818119&amp;width=240&amp;colorscheme=light&amp;show_faces=false&amp;border_color&amp;stream=true&amp;header=false&amp;height=395" scrolling="no" frameborder="0"></iframe>';

    return function () {
        $('#vimeoPlayer').append(vimeoEls);
        $('#musicPlayer').append(soundCloudEls);
        $('#facebookFeed').append(facebookEls);
    };

})();
