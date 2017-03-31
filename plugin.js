(function($) {

    $.fn.showProgressBar = function(options) {
        
        var defaultOps = {
            url: null,
            onSuccess: null,
            onError: null
        }

        var opts = $.extend(defaultOps, options);

        var targetButton = this;

        this.on('click', function() {

            $("#modal .close").click( function() {
                $("#modal").hide();
            })

            if (!validation(opts.url)) {
                
                return alert('url输入不正确')
            }
            

            $("#upload").trigger('click');

            
        })

        function validation(url) {
            console.log('test')
            if (/(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g.test(url)) {
                
                return true;
            }
            return false
        }

        $("#upload").on('change', function() {
            $("#modal").show();
            var file = this.files[0];
            var formData = new FormData;
            formData.append('file', file);
            var url = opts.url;
            var xhr = new XMLHttpRequest;
            xhr.open('post', url, true);
            xhr.onreadystatechange = function() {
                if(xhr.readyState === 4) {
                    if (xhr.status ===200) {

                        if ($.isFunction(opts.onSuccess)) {
                            opts.onSuccess();
                        }
                    }
                }
            }

            xhr.onerror = function () {

                if ($.isFunction(opts.onError)) {
                        
                        opts.onError();
                }

            }
            xhr.onprogress = function (e) {

                var percent = e.loaded / e.total ;

                $(".progress-bar").css('width', percent + "%")
                $("#progress_text").html(percent);
            };

            xhr.send(formData);

        })

        return this
    }

}(jQuery))