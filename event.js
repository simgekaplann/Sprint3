$(document).ready(function() {
    // .event içindeki img elementlerine fancybox özelliği ekle
    $('.event a').fancybox({
        // Resmin açıklaması olarak alt metni kullan
        caption: function(instance, item) {
            return $(this.element).next('p').text();
        },
        // Resmin açıldıktan sonra
        afterShow: function(instance, current) {
            // Resmin altına kapatma düğmesi ekleme
            var closeButton = '<button class="fancybox-close-btn" onclick="closeFancybox()">Close</button>';
            $(current.$content).append(closeButton); // Resmin altına ekle
        }
    });

    // Fancybox'ı kapatma işlemi için bir fonksiyon oluşturun
    function closeFancybox() {
        $.fancybox.close(); // Fancybox'ı kapat
    }
});