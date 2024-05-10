$(document).ready(function() {    
 var nameInput = $('#name');
var emailInput = $('#email');
var messageInput = $('#message');
var subjectInput  = $('#subject');


    // İletişim formu gönderimini kontrol etme
    $('#mycontact').on('submit', function(event) {
        event.preventDefault(); 
   

        // Alan değerlerini alırken trim() fonksiyonunu kullanarak başındaki ve sonundaki boşlukları temizleyin
        var nameValue = nameInput.val().trim();
        var emailValue = emailInput.val().trim();
        var messageValue = messageInput.val().trim();
        var subjectValue = subjectInput.val().trim();

        // Her alanın değerini kontrol et
        if (nameValue === '') {
            nameInput.css('border', '2px solid #ff0000'); // Kırmızı kenarlık ekle
            event.preventDefault(); // Formun gönderimini engelle
        } else {
            nameInput.css('border', '1px solid #ccc'); // Kenarlığı varsayılan hale getir
        }

        if (emailValue === '') {
            emailInput.css('border', '2px solid #ff0000'); // Kırmızı kenarlık ekle
            event.preventDefault(); // Formun gönderimini engelle
        } else {
            emailInput.css('border', '1px solid #ccc'); // Kenarlığı varsayılan hale getir
        }

        if (messageValue === '') {
            messageInput.css('border', '2px solid #ff0000'); // Kırmızı kenarlık ekle
            event.preventDefault(); // Formun gönderimini engelle
        } else {
            messageInput.css('border', '1px solid #ccc'); // Kenarlığı varsayılan hale getir
        }
        if (subjectValue === '') {
            subjectInput.css('border', '2px solid #ff0000'); // Kırmızı kenarlık ekle
            event.preventDefault(); // Formun gönderimini engelle
        } else {
            subjectInput.css('border', '1px solid #ccc'); // Kenarlığı varsayılan hale getir
        }
    });

    // Dialog widget'ını etkinleştirme
    $("#dialog-message").dialog({
        autoOpen: false,
        modal: true,
        buttons: {
            OK: function() {
                $(this).dialog("close");
                // Form alanlarını temizle
                nameInput.val('');
                emailInput.val('');
                messageInput.val('');
                subjectInput.val('');
                // Kenarlıkları varsayılan hale getir
                nameInput.css('border', '1px solid #ccc');
                emailInput.css('border', '1px solid #ccc');
                messageInput.css('border', '1px solid #ccc');
                subjectInput.css('border', '1px solid #ccc');
            }
        }
    });

    
    // Form gönderildiğinde dialog'u açma
    $("#mycontact").on("submit", function(event) {
        event.preventDefault(); // Formun gönderimini engelle
        $("#dialog-message").dialog("open"); // Dialog'u aç

    
    });

  
});


$(document).ready(function() {
    // Önerilecek veriler
    var about = [
        "About Tesla",
                "Tesla Vehicles",
                "Tesla Energy Products",
                "Tesla Charging Stations",
                "Tesla Autopilot Technology",
                "Tesla Solar Roof",
                "Tesla Events",
                "Tesla Careers",
                "Tesla News",
                "Tesla Stock Information",
                "Tesla Roadster",
                "Tesla Powerwall",
                "Tesla Powerpack",
                "Tesla Superchargers",
                "Full Self-Driving",
                "Tesla Gigafactories",
                "Battery Day",
                "AI Day",
                "Tesla Investor Relations",
                "Event",
                "WebSite Problem"
    ];

    // Autocomplete özelliğini etkinleştirme
    $("#subject").autocomplete({
        source: about // Önerilecek verilerin listesi
    });
});