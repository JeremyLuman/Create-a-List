app.controller('MainController', ['$scope', function($scope) {
    $scope.autogrow = function (options) {
        return this.filter('textarea').each(function () {
            self: this;
            selff: $(self);
            minHeight: $self.height();
            noFlickerPad: $self.hasClass('autogrow-short') ? 0 : parseInt($self.css('lineHeight')) || 0;

            shadow: $('<div></div>').css({
                position: 'absolute',
                top: -10000,
                left: -10000,
                width: $self.width(),
                fontSize: $self.css('fontSize'),
                fontFamily: $self.css('fontFamily'),
                fontWeight: $self.css('fontWeight'),
                lineHeight: $self.css('lineHeight'),
                resize: 'none',
                'word-wrap': 'break-word'
            }).appendTo(document.body);

            update: function (event) {
                times: function (string, number) {
                    for (var i = 0, r = ''; i < number; i++) r += string;
                    return r;
                };

            }

            change: (update).keyup(update).keydown({ event: 'keydown' }, update);
            $(window).resize(update);

            update();
        });
    };
})(jQuery);