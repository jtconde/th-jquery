/**
 * Created by julianconde on 12/8/17.
 */

$('.loc').hover(
    function() {
        $(this).html("<strong>Location:</strong> Your house?!");
    },
    function() {
        $(this).html("<strong>Location:</strong> Treehouse Adoption Center");
    }
);

// Add a pet to the page with user input
$('#add-pet').on('click', function()
{
    var $name = $('#pet-name');
    var $species = $('#pet-species');
    var $notes = $('#pet-notes');

    // Assemble HTML with new elements

    var $newPet = $(
        '<section class="six columns"><div class="card">' +
        '<p><strong>Name:</strong> ' + $name.val() + '</p>' +
        '<p><strong>Species:</strong> ' + $species.val() + '</p>' +
        '<p><strong>Notes:</strong> ' + $notes.val() + '</p>' +
        '<span class="close">&times;</span></div></section>'
    );

    // Attach new element to page

    $('#posted-pets').append($newPet);

    // Close button function
    $('.close').on('click', function() {
        $(this).parent().remove();
    });

// Reset Form
    $name.val("");
    $species.val("Dog");
    $notes.val("");

});



// Puppy images fade in
$('img').css('display','none').fadeIn(1600);

//

$('.card').on('click', function() {
    $(this).toggleClass('selected')
})