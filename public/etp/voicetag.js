



//on_segment(last_mark,last_mark_no);


    //document.onmousemove=function(ev)
    function CreateVoicebox(voicen ) {



        //replayx();
        //on_segment(last_mark,last_mark_no);
        var id="voiceBoxes_"+voicen;
        return CreateVoiceboxByid(id);
}
var voiceBoxes_new=document.getElementById("voiceBoxes_new");

   function CreateVoiceboxByid(id ) {
        var box=document.getElementById(id);
        if(box!=null)
            return  box;


         box=document.createElement("div");
        box.className="box";
       // box.onclick="alert('box cliek');";
        box.id=id;


        var element=document.getElementById("voiceBoxes");

        element.appendChild(box);

        return box;



    }
    var boxsel=null;
   var time_listsel=null;

function del_time_by_voice_id(vid) {

    var time= break_times[n];
    var id=parseInt(time*10);


    break_times.splice(n, 1);
    updat_list_by_array();
    to_update_times("update");

}


var box;
var time_list;
var lastPlayVoiceId;

function setSelBoxTimeList(box,time_list)
{

    if(boxsel!=null) {
        boxsel.className = "box";
    }
    if(time_listsel!=null)
        time_listsel.className = "";
    if(box!=null) {
        boxsel = box;
        box.className = "selBox";
    }
    if(time_list!=null) {
        time_listsel = time_list;
        time_list.className = "sel_time_list";
    }
}

function setSelBoxTimeListByVoiceId(id )
{

    var boxid="voiceBoxes_"+id;
    box=document.getElementById(boxid);
    //time_list_13
    var time_list_id="time_list_"+id;
    time_list=document.getElementById(time_list_id);

    setSelBoxTimeList(box,time_list);
}


    function play_voice_by_vid(id) {
        var  no=to_break_times_n(id);

        //alert("play_segment_n ="+no);
        if(no<0)
            return ;



        //on_segment(last_mark,no);
        //_on_segment(last_mark,no,-1);
        pre_break(no);
        lastPlayVoiceId=id;

    }

    function _play_segment_n(id) {
        //voiceBoxes_13
        saveLastPage();

        setSelBoxTimeListByVoiceId(id );
        play_voice_by_vid(id);
 


    }


function play_segment_n(id) {

    var re=check_test(id);
    if(re!=0)
        return ;
    stopConPlayer();

     _play_segment_n(id) ;
    is_edit_voice_box=0;
}


    function to_break_times_n(id) {

      for (var i=0;i<  break_times.length;++i)
      {
         if(id== parseInt(break_times[i]*10))
             return i;
      }
      return -1;

    }





    function voiceBoxesTostring() {
          var t=-1;
          var  out="";
        for (var i=0;i<  break_times.length;++i)
        {

            t= parseInt(break_times[i]*10);
            var id="voiceBoxes_"+t;
            var box=document.getElementById(id);
            if(box==null)
                  continue;

            out +=t+","+box.style.top+","+box.style.left+",";

        }

        return out;



    }

function setboxByPx(box,id,top,left) {
    box.style.top=top;
    box.style.left=left;
    box.onclick=function(ev) {play_segment_n(id);};


}


    function setbox(box,id,top,left) {
        setboxByPx(box,id,top+'px',+left+'px');
        voiceBoxes_new.style.top=top+ 'px';
        voiceBoxes_new.style.left=left-50+ 'px';
        voiceBoxes_new.className="newBox";


    }
    var  ontest_id=-1;
    var error_test=0;
    var ontest_box=null

    function check_test(id)
    {
        if(ontest_id<0)
            return 0;
        play_voice_by_vid(id);

        if(ontest_id==id)
        {
            setSelBoxTimeListByVoiceId(id);
            ontest_box.className="ok";
            ontest_id=-1;
            return 1;
        }
        ontest_box.className="wrong";
       return -1;

    }

    function ontest(pthis,id) {

        ontest_box=pthis;
        error_test=0;
        ontest_id=id;
        if(pthis.className=="")
          pthis.className="sel";
        play_voice_by_vid(id);

    }

function voiceBoxesTotest() {
    var t=-1;
    var  out="";
    for (var i=0;i<  break_times.length;++i)
    {
        var n=get_real_pos(i);
        t= parseInt(break_times[n]*10);
        var id="voiceBoxes_"+t;
        var box=document.getElementById(id);
        if(box==null)
            continue;

        // <tr><td>100</td></tr>
        //var f="("+t+","+box.style.top+","+box.style.left+")";
        var f="(this,"+t+")";

        var td="<tr><td  id='test_box_"+t+"' onclick='ontest"+f+"'>["+t+"]</td></tr>\n"

        out +=td;

    }

    return out;



}

     var is_on_new_test=0;
function onNewTest(pthis) {
    is_on_new_test = ++is_on_new_test%2;
    do_test();
}

var onOffTest=document.getElementById("onOffTest");
    function do_test() {

        if(is_on_new_test==1) {

            is_rand_break_map=1;
            switch_rand_fix();
            newTest();
           
            breaks.className="none";
            test.className="";
            onOffTest.innerHTML="test"
        }
        else
        {
            is_rand_break_map=0;
            switch_rand_fix();
            breaks.className="";
            test.className="none";
            onOffTest.innerHTML="Read"

        }



    }
var test = document.getElementById("test");
    function newTest() {
       // var id="voiceBoxes";

        test.innerHTML=voiceBoxesTotest();

    }

    function removeAllChild(id)
    {
        is_edit_voice_box=0;
        var div = document.getElementById(id);
        while(div.hasChildNodes()) //当div下还存在子节点时 循环继续
        {
            div.removeChild(div.firstChild);
        }
    }

function removeByid(id)
{

    var e= document.getElementById(id);
    if(e==null)
        return ;
    var parent=e.parentElement;

    parent.removeChild(e);

}




    function createBoxesby(boxestr)
    {
       

        var boxes=boxestr.split(',');
        var i=0;
        for(;i+3<boxes.length;)
        {
            var id=boxes[i];
            ++i;
            var top=boxes[i];
            ++i;
            var left=boxes[i];
            ++i;

           var box= CreateVoicebox(id);
            setboxByPx(box,id,top,left);

            if((i+3)>=boxes.length) {
               var topi= parseInt(top);
               var lefti=parseInt(left);
                setbox(box,id,topi,lefti);
                break;
            }


        }
    }

    var is_edit_voice_box=0;

    function play_pause() {

        rangeplayer.pause();
        for (; ;) {
            if (rangeplayer.ended || rangeplayer.paused)
                break;

        }

    }
function creatNewVoice1()
{

    play_pause();

    if(time_listsel!=null)
        time_listsel.className = "";
    time_listsel=null;


    is_edit_voice_box=1;
    isInCreatNewVoice=1;
    var time_list_last=   document.getElementById('time_list_last');
    _on_segment(time_list_last,breaki,-1);



    voiceBoxes_new.className="none"
    // last_mark_no


}



function addnewvoice(ev) {
 var time_list_last=   document.getElementById('time_list_last');

 var st=   time_list_last.innerHTML;


     _on_segment(time_list_last,breaki,-1);

        is_edit_voice_box=1;
if(st=="[----]")
    addVoiceBybreakId(breaki-1,ev);




}
var isInCreatNewVoice=0;

function imgOnMouseDown(ev) {

    if (isInCreatNewVoice == 1) {
        isInCreatNewVoice=0;
        addnewvoice(ev);
        return;
    }

    // var oBox=document.getElementById('box');
    //oBox.onclick=function(ev) {alert('box333 cliek');};
    //oBox.onclick="javascript:alert('box333 cliek');"
    if (readWriteMode == 0)
        return;
    //addVoiceBybreakId(last_mark_no,ev);
    addVoiceByVoiceId(lastPlayVoiceId);
}
function addVoiceBybreakId (breakId, ev) {
    var id = parseInt(break_times[breakId] * 10);
    addVoiceByVoiceId(id);
}
    function addVoiceByVoiceId (id,ev)
    {
       var box=CreateVoicebox(id);
       if(box==null)
           return;
        //兼容性处理
        var oEvent=ev||event;

        //兼容性处理
        var scrollTop=document.documentElement.scrollTop   ||  document.body.scrollTop;
        var scrollLeft=document.documentElement.scrollLeft  ||  document.body.scrollLeft;

        var left=oEvent.clientX + scrollLeft -25 ;//+ 'px';   //clientX可视区内的水平坐标
        var top=oEvent.clientY +  scrollTop-25;//+ 'px';   //clientY......垂直...


        setbox(box,id,top,left);

        to_update_times("update");

        _play_segment_n(id);


      // var boxestr= voiceBoxesTostring();
       // createBoxesby(boxestr);


    };

document.getElementById("img").onmousedown= function (ev) {
    imgOnMouseDown (ev); };




var repeatPlayn=0;
var repeadplayid=-1;


function  playRangeEnd()
{
    if(repeadplayid<0)
        return;

    if(repeatPlayn >1) {
        --repeatPlayn;
        _play_segment_n(repeadplayid);
        return;
    }


   continuePlayer();




}
function stopConPlayer() {
    repeatPlayn=0;
    repeadplayid=-1;

}
function continuePlayer() {

    var mp3=cur_mp3;
    var ts=break_times
    
   var t= rangeplayer.currentTime;


    var i;
    var ti=-1;
    for( i=0;i<ts.length;++i)
    {
        if(t<=ts[i]) {
            ti=i;
            break;
        }
        if(i==ts.length-1)
            ti= -1;
    }

     if(ti<0)
     {

         for(var i=0;i<10;++i) {
             ++page;
             var re = shown(page);
             if(re==0)
                 return ti;
         }


         stopConPlayer();
         return ti;
     }

    var vid= parseInt(ts[ti]*10);
    repeadplayid=vid;
    repeatPlayn=3;


    _play_segment_n(vid);


    return ti;



    
}

function  onPageLoad() {
    playRangeEnd();
    do_test();
}