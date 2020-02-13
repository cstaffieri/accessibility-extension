$(function() {
    var title_text_colour = '#CC8A30'
    var background_colour_yellow ='#C26D36'
    var background_colour_blue = '#1C801F'

  
    // Changes colours that the users cannot identify
    $(":visible").find('*').each(function(){
        var name = this.className;
        var count = 0

        //Finds background colours that need to be changed. 
        var back_colour = String($(this).css("background-color"));
        var originial_colour = $(this).css("background-color")
        back_colour = back_colour.replace('rgb(','')
        back_colour = back_colour.replace(')','')
        var back_red = Number(back_colour.split(',')[0])
        var back_green = Number(back_colour.split(',')[1])
        var back_blue = Number(back_colour.split(',')[2])
        
        //Checks if white or off-white colour
        if (back_red >= 170 && back_blue >= 170 && back_green >= 170){
            $(this).css("background-color", originial_colour)
        }
        //Checks for deep blue colours
        else if (back_blue>=100 && back_red < 70 && back_blue - back_red >30){
            $(this).css("background-color", background_colour_blue);
            count = 1;
        }
        //Checks for yellow colours
        else if (back_red >=80 && back_green >=80 && back_blue <= 50){
           $(this).css("background-color", background_colour_yellow);
          
        }

        //Finds text colours that need to be changed. 
        var text_colour =String($(this).css("color"));
        var original_text_colour = $(this).css("color");
        text_colour = text_colour.replace('rgb(','')
        text_colour = text_colour.replace(')','')
        var red = Number(text_colour.split(',')[0])
        var green = Number(text_colour.split(',')[1])
        var blue = Number(text_colour.split(',')[2])
        if (red >= 225 && blue >= 225 && green >= 225){
            $(this).css("color", 'white');
        }
        //Checks for yellow text and makes it darker
        else if (red >=80 && green >=80 && blue <= 50){
           $(this).css("color", title_text_colour);
            
        }
        //Checks for black text
        else if (red <= 35 && blue <= 35 && green <= 35){
            $(this).css("color", 'black')
        }
        else {
            $(this).css("color", original_text_colour);
        }
        //Checks is background has been made darker and if so then the text is 
        //turned white is increase constrast
        if (count == 1){
            $(this).css("color", '#FFFFFF');
        }

    })
});