$(document).ready(function() {
    $('#myForm').on('submit', function(event) {
        var nameInput = $('#name');
        var emailInput = $('#email');
        var messageInput = $('#message');

        // Her alanın değerini kontrol et
        if (nameInput.val().trim() === '') {
            // Eğer isim alanı boş ise
            event.preventDefault(); // Formun gönderimini engelle
            nameInput.css('border', '2px solid #ff0000'); // Kırmızı kenarlık ekle
        } else {
            nameInput.css('border', '1px solid #ccc'); // Kenarlığı varsayılan hale getir
        }

        if (emailInput.val().trim() === '') {
            // Eğer e-posta alanı boş ise
            event.preventDefault(); // Formun gönderimini engelle
            emailInput.css('border', '2px solid #ff0000'); // Kırmızı kenarlık ekle
        } else {
            emailInput.css('border', '1px solid #ccc'); // Kenarlığı varsayılan hale getir
        }

        if (messageInput.val().trim() === '') {
            // Eğer mesaj alanı boş ise
            event.preventDefault(); // Formun gönderimini engelle
            messageInput.css('border', '2px solid #ff0000'); // Kırmızı kenarlık ekle
        } else {
            messageInput.css('border', '1px solid #ccc'); // Kenarlığı varsayılan hale getir
        }
    });

    // Dialog widget'ını etkinleştirme
    $("#dialog-message").dialog({
        autoOpen: false,
        modal: true,
        buttons: {
            OK: function() {
                $(this).dialog("close");
            }
        }
    });

    // Form gönderildiğinde dialog'u açma
    $("#myForm").on("submit", function(event) {
        $("#dialog-message").dialog("open"); // Dialog'u aç
        setTimeout(function() {
            $("#dialog-message").dialog("close");
        }, 12000);
    
    });

    // View Calendar düğmelerine tıklanınca yönlendirme işlevselliği
    $('.calendar-button').on('click', function() {
        window.location.href = 'calendar.html'; // Yönlendirilecek sayfanın URL'sini buraya girin
    });

    
});
