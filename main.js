$(() => {
    var text = $('#code code').html();
    $('#code code').html('');
    var temp = "";
    var i = 0;
    function addString(element){
        i = i+1;
        temp += text[i];
        $('#code code').html(temp);
        if( i == text.length )
        {
            i = 0;
            $('#code code').text('');
            temp = '';
        }
    }
    var key = 1;
    $('#pagebar').animate({
        height: ((100*key)/4) + '%'
    },200);
    $('section').fadeOut();
    $('#home').fadeIn(400);
    function changepage(key)
    {
        $('#pagebar').animate({
            height: ((100*key)/3) + '%'
        },200);
        $('section').fadeOut(400);
        if( key == 1)
        {
            $('#home').fadeIn(400);
        }
        else if( key == 2)
        {
            $('#about').fadeIn(400);
        }
        else if( key == 3)
        {
            $('#contest').fadeIn(400);
        }
        else if( key == 4)
        {
            $('#article').fadeIn(400);
        }
    }
    var inter = setInterval(addString,40);
    $('body').keydown(function(event){
        if(event.which == 38 && key != 1)
        {
            key = key - 1;
        }
        else if(event.which == 40 && key!= 4)
        {
            key = key +1;
        }
        changepage(key);
    });
    $('nav a').each(function(index){
        $(this).on('click',function(){
            if( index != 4)
            {
                key = index + 1;
                changepage(key);
            }
        });
    });
});