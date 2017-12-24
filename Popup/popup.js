(function($){
    $.fn.notification = function(Options,times) {
        var _this= this;
        this.defaultsCss = {
            display: 'block',
            margin: 'auto',
            width: '440px',
            top: '-150',
            textAlign: 'center',
            background: '#2196f326',
            borderRadius: '5px',
            height: '126px'
        };
        this.timeDefaults={
            timeShow: 700,
            timeHide: 2000,
            time: 9000
        }
        var Options = $.extend({},this.defaultsCss, Options);
        var times = $.extend({}, this.timeDefaults, times);
        this.init = function(){
            if (this.length) {
                _this.$elementInner = $('<div />', {
                    'class': 'inner'
                  });
                  this.wrapInner(_this.$elementInner);
            }
            this.css(Options).animate({top:0},times.timeShow);
            setTimeout(() => {
                if ($('.inner')){
                    _this.animate({opacity:0, top:-150},1000);
                }
            }, times.time + times.timeShow);
            
        }
        this.onclick = function(){
            $('#hide').click(function() {
                _this.animate({top:-150} ,times.timeHide);
            });
            $('#ok').click(function(){
                _this.css({
                    'top': '-150px'
                });
                alert('Bấm OK để ẩn thông báo');
            });
            $('#close').click(function(){
                _this.css({
                    display:'none'
                });
            })
        }
        this.init();
        this.onclick();


    };
    
    
}(jQuery));