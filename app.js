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