

$(document).ready(function() {
   
    $("#date").datepicker({
        dateFormat: "yy-mm-dd", // Tarih formatı
        minDate: 0, // Bugünden önceki tarihleri devre dışı bırak
        onSelect: function(selectedDate) {
            // Seçilen tarihi input alanına yerleştirme
            $("#date").val(selectedDate);
        }
    });

    $("#time").timepicker({
        timeFormat: "h", 
        interval: 15,
        minTime: "9:00am",
        maxTime: "6:00pm",
        startTime: "9:00am",
        dynamic: false,
        dropdown: true,
        scrollbar: true,
        showOn: 'focus'
    });


    // Form gönderimi butonuna tıklama işlevi ekleme
    $("#reservationForm button[type='submit']").on("click", function(event) {
        event.preventDefault(); // Formun gönderimini engelle
        $("#dialog-message").html("<p>Your reservation has been successfully created!</p>").dialog("open"); // Dialog'u aç
    });

    // Dialog penceresini etkinleştirme
    $("#dialog-message").dialog({
        autoOpen: false,
        modal: true,
        buttons: {
            OK: function() {
                $("#reservationForm")[0].reset();
                $(this).dialog("close");
            }
        }
    });

    $('#phone').mask('000-000-0000', { placeholder: '___-___-____' });
})


