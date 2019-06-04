$(() => {
    //home section

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

    // content section 

    var contestkey = 0;
    var contestno = 5;
    var fadein = 0;
    var fadeout = 0;
    $('#wrapper div:nth-child('+ 4 + ')').fadeOut();
    $('#wrapper div:nth-child('+ 5 + ')').fadeOut();
    contestchange();
    $('#contest #left').on('click',function(){
        contestkey = (contestkey + 1) % contestno;
        fadeout = contestkey - 1 >= 0?contestkey - 1:4;
        fadein = (contestkey +  2) % 5;
        contestchange();
        fadecontent(fadein+1,fadeout+1);
    });
    $('#contest #right').on('click',function(){
        if(contestkey == 0)
        {
            contestkey = contestno - 1;
        }
        else{
            contestkey = (contestkey - 1) % contestno;
        }
        fadeout = (contestkey + 3) % 5;
        fadein = contestkey;
        contestchange();
        fadecontent(fadein+1,fadeout+1);
    });
    function contestchange()
    {
        var key1 = contestkey;
        var key2 = (contestkey + 1) % (contestno);
        var key3 = (contestkey + 2) % (contestno);
        $('#wrapper div').removeClass('firstpic').removeClass('secondpic').removeClass('thirdpic');
        $('#wrapper div:nth-child('+(key1 + 1)+')').addClass("firstpic");
        $('#wrapper div:nth-child('+(key2 + 1)+ ')').addClass("secondpic");
        $('#wrapper div:nth-child('+(key3 + 1)+ ')').addClass("thirdpic");

    }
    function fadecontent(val1,val2)
    {
        $('#wrapper div:nth-child('+val1+')').fadeIn(100);
        $('#wrapper div:nth-child('+val2+')').fadeOut(100);
    }

    //article section

    var articlesimage = ['assets/article1.jpg','assets/article2.jpg','assets/article3.jpg','assets/article4.jpg','assets/article4.jpg','assets/article6.jpg','assets/article7.jpg','assets/article8.jpeg','assets/article9.png'];
    $('#article figure').on('click',function(){
        var k = $(this).children("img").attr('src');
        $('#articlecontainer #image img').attr("src",k);
        $('#articlecontainer #content').text("Lorem ipsum dolor sit amet, tempor aliquam dolor dolor consectetuer leo, proin metus cursus aliquam velit cum leo, at cras. Malesuada veniam, nunc mattis, eu mollit justo. Varius sit mauris magna, gravida volutpat velit wisi et nec, eget lectus vestibulum urna nulla duis, euismod sit viverra velit a sapien. Lacus suspendisse ut vehicula eget, erat vulputate ut justo lacus, orci pede quis sit est vel vivamus, et fermentum egestas volutpat erat nunc rutrum. Mattis sem magna nulla, magnis odio vivamus. Faucibus tristique mattis pede dolor. Gravida eget dictum pellentesque rutrum ipsum duis, eros amet dignissim nunc lobortis ipsum nec, volutpat felis, sit egestas. Iaculis quisque at condimentum. Non nec ac placerat nec in aliquam.");
        $('#articlecontainer').fadeIn(400);
    });
    $('#articlecontainer #cross').on('click',function(){
        $('#articlecontainer').fadeOut(400);

    });

});