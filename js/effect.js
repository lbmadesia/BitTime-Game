$(document).ready(function(){
    var a,c,i;
    var ms,se,mi,lbinterval;
    $("header div").draggable({
       revert:true,
        stack:'div',
    });
   
    $('.one,.two,.three,.four,.five,.six,.seven,.eight,.nine,.ten').droppable({
        drop:function(event,ui){
              a = $(this).html();
            if(a == 'one'){
                a = 1;
                c = 'red';
            }
            else if(a == 'two'){
              a = 2;
                c = 'blue';
            }
              else if(a == 'three'){
                a = 3;
                c = 'orangered';
            }
              else if(a == 'four'){
              a = 4;
                c = 'green';
            }
              else if(a == 'five'){
              a = 5;
                c = 'yellow';
            }
              else if(a == 'six'){
              a = 6;
                c = 'aqua';
            }
              else if(a == 'seven'){
              a = 7;
                c = 'firebrick';
            }
              else if(a == 'eight'){
              a = 8;
                c = 'greenyellow';
            }
              else if(a == 'nine'){
              a = 9;
                c = 'cornflowerblue';
            }
            else if(a == 'ten'){
              a = 10;
                c = 'chocolate';
            }
            if(a == $(ui.draggable).html()){
            $(this).append(ui.draggable);
            $(this).html(a);
            $(this).css({
                background:c,
                color:'#fff',
                border:'2px solid black',
                fontSize:'40px',
                paddingTop:'50px',
            });
                   if($('.one').html() == 1){
                        if($('.two').html() == 2){
                             if($('.three').html() == 3){
                                  if($('.four').html() == 4){
                                       if($('.five').html() == 5){
                                            if($('.six').html() == 6){
                                                 if($('.seven').html() == 7){
                                                      if($('.eight').html() == 8){
                                                           if($('.nine').html() == 9){
                                                                if($('.ten').html() == 10){
                                                                    clearInterval(lbinterval);
                                                                    $('#massage-text').html("You did it in "+mi+" minit "+se+" second "+ms+" milisecond");
                                                                    $('.massage').css({
                                                                      display:'block',
                                                                    });
                                                                    $('.massage button').click(function(){
                                                                        window.location = location.href;
                                                                    });
                                                                }
                                                           }
                                                      }
                                                 }                        
                                            }
                                       }
                                  }
                             }
                        }
                   }
            }
        }
    });
    $('#play').click(function(){
        ms = se = mi = 0;
        $('header div').css('display','block');
         lbinterval = setInterval(function(){
           ms+=1; 
            if(ms <= 1000){
            $('#milisec').html(ms);
            }
            else if(se <= 60){
                se+=1;
                $('#sec').html(se);
                ms = 0;
            }
            else{
                mi+=1;
                 $('#minit').html(mi);
                se = 0;
            }
        },1);
    });
   
});