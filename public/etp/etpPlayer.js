function paused2() {
    this.play.load();

}
var bookpage=document.getElementById("bookpage");
var sel=document.getElementById("sel");
var breaks=document.getElementById("breaks");
var img=document.getElementById("img");
var audio=document.getElementById("audio");
//var speaker=document.getElementById("speaker");
audio1={play: document.getElementById("audio") ,last_url: "", onpaused: paused2,pre_load: pre_load};
audio2={play: document.getElementById("audio2") ,last_url: "", onpaused: paused2,pre_load: pre_load};
var audios=[audio1,audio2];



var break_times = new Array();

var breaki=0;



var book=1;
var page=1;



function showbookpage()
{
    bookpage.innerHTML=""+book+"."+page;
}

function get000(n)
{
    if(n<10)
        return "00"+n;
    else if(n<100)
        return "0"+n;
    else
        return ""+n;
}

function get00(n)
{
    if(n<10)
        return "0"+n;
    else
        return ""+n;
}


function  onplay(pthis) {

    // .load();

}
function on_pause(pthis) {
    pthis.play.load();

}

var last_url="";
function playRange222(url,start,end)
{

    // p.src="http://eslnews.org.nz/wp-content/uploads/2018/02/182302.mp3#t=10,13";
    // var src="http://eslnews.org.nz/wp-content/uploads/2018/02/182302.mp3#t=10.5,13.9"
    //var p= new Audio("http://eslnews.org.nz/wp-content/uploads/2018/02/182302.mp3#t=10,13");
    // var p= new Audio();
    //p.src=src;
    var p=audio;

    var psrc;

    if(start<0)
        psrc=url;
    else if(end<=0)
        psrc=url+"#t="+start;
    else
        psrc=url+"#t="+start+","+end;
    if(!(this.last_url  ===  psrc)) {
        p.src=psrc;
        p.load();


    }
    else
    {
        if(!p.paused)
            p.load();
    }
    this.last_url  =  psrc;
    // p.currentTime=10.22;
    // var x=p.duration;
    // document.getElementById("demo").innerHTML = x;
    //p.load();
    p.play();
}

function get_play_src(url,start,end) {

    var psrc;

    if(start<0)
        psrc=url;
    else if(end<=0)
        psrc=url+"#t="+start;
    else
        psrc=url+"#t="+start+","+end;

    return psrc;

}

function pre_load(psrc)
{

    // p.src="http://eslnews.org.nz/wp-content/uploads/2018/02/182302.mp3#t=10,13";
    // var src="http://eslnews.org.nz/wp-content/uploads/2018/02/182302.mp3#t=10.5,13.9"
    //var p= new Audio("http://eslnews.org.nz/wp-content/uploads/2018/02/182302.mp3#t=10,13");
    // var p= new Audio();
    //p.src=src;
    var p=this.play;


    if(!(this.last_url  ===  psrc)) {
        p.src=psrc;
        p.load();


    }
    else
    {
        if(!p.paused)
            p.load();
    }
    this.last_url  =  psrc;
    // p.currentTime=10.22;
    // var x=p.duration;
    // document.getElementById("demo").innerHTML = x;
    //p.load();
    // p.play();
}

var cur_play_id=0;
function pre_au(url,start,end)
{
    var psrc=get_play_src(url,start,end);
    var au;
    for(var i=0;i<audios.length;++i)
    {
        au= audios[i];
        if(au.last_url===psrc) {


            //au.play.play();
            return au;
        }

    }

    ++cur_play_id;
    var id=cur_play_id%audios.length;

    au= audios[id];

    au.pre_load(psrc);
    // au.play.play();
    return au;

}


function playRange(url,start,end)
{
    var au=pre_au(url,start,end);
    au.play.play();


}

function play_sen(n)
{
    var  i=n%2;

    var jn=n+1;
    var  j=jn%2;

    if(loadn[i]!=n )
    {
        player[i].src=sens[n].audio;
        player[i].load();
        loadn[i]=n;
    }

    if(loadn[j]!=jn && jn<sens.length )
    {
        player[j].src=sens[jn].audio;
        player[j].load();
        loadn[j]=jn;
    }





    if(player[i].currentTime!=0)
        player[i].currentTime=0;





    //alert ("loandn="+loadn);


    player[i].play();
}

function get_mp3_book23(p)
{
    //P070.mp3
    return "/P"+get000(p)+".mp3";
}
function get_mp3_book4(p)
{
    //P070.mp3
    return "/"+p+".mp3";
}
var is_one_mp3=0;
function get_mp3_book_all(p)
{

    is_one_mp3=1;

    return "/all.mp3";
}


function get_mp3(p)
{
    if(book==1)
        return get_mp3_book1(p);
    else (book==4)
        return get_mp3_book4(p);

    return  get_mp3_book23(p);

}
function get_mp3_book1(p)
{
    var pre=0;

    if(p==34 || p==56 || p==57 || p==116)
        return null;


    if(p>=34)
    {
        ++pre;

    }

    if(p>=56)
    {
        pre=pre+2;

    }
    if(p>=116)
    {
        ++pre;
    }



    return "/CD-"+get000(p-pre)+".mp3"


}


function get_mp3_book6(p)
{

var  pre=0;

    if(p>=9)
    {
        ++pre;

    }

    if(p>=13)
    {
        ++pre;

    }
    if(p>=16)
    {
        ++pre;

    }
    if(p>=21)
    {
        ++pre;

    }


//Track01.mp3

    return "/Track"+get00(p-pre)+".mp3"


}
var cur_mp3="";
var last_player="";
var startPage=[0,13,9,9,12,0];
//var curPage=1;
function  sel_book(pthis) {
    book=    parseInt(pthis.value);
    shown(page);
}

var BookLib=[
    {
        book : 0,
        name : "",
        startPage : 0,
        extpic: ".png",
        getPicStr : get000

    },
    {
        book : 1,
        name : "",
        startPage : 13,
        extpic: ".png",
        getPicStr : get000,
        get_mp3 : get_mp3_book1,
        shown: shown1

    }
    ,{
        book : 2,
        name : "",
        startPage : 9,
        extpic: ".png",
        getPicStr : get000,
        get_mp3 : get_mp3_book23,
        shown: shown1

    }

    ,{
        book : 3,
        name : "",
        startPage : 9,
        extpic: ".png",
        getPicStr : get000,
        get_mp3 : get_mp3_book23,
        shown: shown1

    }
    ,{
        book : 4,
        name : "",
        startPage : 12,
        extpic: ".jpg",
        getPicStr : get000,
        get_mp3 : get_mp3_book4,
        shown: shown1

    }



    ,{
        book : 5,
        name : "How Many Sleeps",
        startPage : 5,
        extpic: ".jpg",
        getPicStr : get00,
        get_mp3 : get_mp3_book_all,
        shown: shown1

    }
    ,{
        book : 6,
        name : "My Very First Mother GOOSE",
        startPage : 0,
        extpic: ".jpg",
        getPicStr : get00,
        get_mp3 : get_mp3_book6,
        shown: shown1

    }

    ,{
        book : 7,
        name : "Brown Bear Brown Bear What Do You See",
        startPage : 0,
        extpic: ".jpg",
        getPicStr : get00,
        get_mp3 : get_mp3_book_all,
        shown: shown1

    }
    ,{
        book : 8,
        name : "wheels on the bus child play",
        startPage : 0,
        extpic: ".jpg",
        getPicStr : get00,
        get_mp3 : get_mp3_book_all,
        shown: shown1

    }
    ];

function shown1(p) {

    removeAllChild("voiceBoxes");
    page=p;
    var path="book"+book;

    img.src=path+"/p-"+this.getPicStr(p+this.startPage)+ this.extpic;
    is_one_mp3=0;
    var mp3=this.get_mp3(p);
    if(mp3==null)
        return -1;

    audio.src=cur_mp3=path+mp3;

    if(last_player!=mp3)
        audio.load();
    last_player=mp3;
    //audio.play();
    //start_play();
    // if(audio.played)
    // speaker.src="/img/speaker.png"

    to_update_times("get");


}


function shown(p) {
    showbookpage();
    BookLib[book].shown(p);
}

function shown333(p) {

    removeAllChild("voiceBoxes");
    page=p;
    var path="book"+book;
    var extpic=".png";
    if (book>=4)
        extpic=".jpg";
    img.src=path+"/p-"+get000(p+startPage[book])+extpic;

    var mp3=get_mp3(p);
    if(mp3==null)
        return -1;

    audio.src=cur_mp3=path+mp3;

    if(last_player!=mp3)
        audio.load();
    last_player=mp3;
    //audio.play();
    //start_play();
    // if(audio.played)
   // speaker.src="/img/speaker.png"

    to_update_times("get");
    // addtime();



    return 0;

}

function nextpage(d) {
    page+=d;
    shown(page);




}

function sel_page(pthis) {

    //alert(pthis.value);
    page=    parseInt(pthis.value);
    shown(page);



}




var con_play=0;

function play_mp3_end(){
    //speaker.src="/img/speaker2.png"
    if(con_play==1)
        nextpage(1);
}
var start_sec=-1.0;
var pause_sec=-1.0;

function start_play() {

    start_sec=audio.currentTime;
    audio.play();


}

function mark_pause()
{

    pause_sec=audio.currentTime;
    audio.pause();

}

function on_main_pic() {
    con_play=0;
    if(audio.ended || audio.readyState!=4) {
        continue_play_mp3(0);
        start_sec=0;
    }
    else {
        if(audio.paused)
            start_play();
        else
            mark_pause();
    }


}

function continue_play_mp3(n) {

    con_play=n;
    nextpage(0);



}

function play_time_str(ts)
{
    var t= ts.split(" ");
    if(t.length<2)
    {
        // start_play();
        return -1;
    }

    var s=parseFloat(t[0]);

    var e=parseFloat(t[1]);
    start_sec=s;
    playRange(cur_mp3,s,e);
    return 0;

}
var cur_break;
var  cur_break_no;




function pre_break(n )
{
    var e=0.0;
    if(n>break_times.length)
    {
        return;
    }
    if(n<breaki ) {
        e = break_times[n];
       var id= parseInt(e*10);
        lastPlayVoiceId=id;
    }
    if(( e<=0.001 )&& (!rangeplayer.paused && !rangeplayer.ended)) {

        return null;
    }

    var s=0.0;
    if(n>0)
        s=break_times[n-1];


    playRange2(cur_mp3,s,e);
    return 0;

    //playRange
   // return  pre_au(cur_mp3,s,e);

}
function get_random_map(n) {
    var ar=[];
    var i;

    for ( i=0;i<n;++i)
    {
        ar[i]=i;

    }
    var t;
    for ( i=1;i<n;++i)
    {
        t=ar[i];
        //Math.floor(Math.random() * 10) // returns a number between 0 and 9
        var pi=Math.floor(Math.random() * (n-1))+1;
        ar[i]=ar[pi];
        ar[pi]=t;

    }

    return ar;




}

var break_map=[];

function set_rand_map() {

    if(break_map.length<=0)
        return ;
    break_map=get_random_map(break_times.length);

}

var is_rand_break_map=0;
var onOffRand=document.getElementById("onOffRand");

function switch_rand(pthis) {
    is_rand_break_map=++is_rand_break_map%2;

    switch_rand_fix();
}
    function switch_rand_fix() {
        var st;
    if(is_rand_break_map>0) {
        break_map = get_random_map(break_times.length);
        st="rand";
    }

    else {
        break_map = [];
        st="fix";
    }

        onOffRand.innerHTML=st;


}



function get_real_pos(n) {

    if(break_map.length==0)
        return n;

    return break_map[n];


}

function play_break(vn,prei)
{
    /*
     if(prei>=0) {
         playPreload(prei);
         return 0;
     }
*/
    var n=get_real_pos(vn)



    var au=pre_break(n);
    /*
    var next=get_real_pos(vn+1);
    pre_break(next);
    if(au==null)
        return -1;
    audio=au.play;
    audio.play();
    */
    if(au==null)
        return -1;

    return 0;


}



var last_mark=null;
var last_mark_no=0;
function replayx() {
    on_segment(last_mark,last_mark_no);
}


function on_segment(pthis,n)
{
    stopConPlayer();

    is_edit_voice_box=1;
    _on_segment(pthis,n,-1);

    breaki;
}

function _on_segment(pthis,n,prei) {

    cur_break=pthis;
    cur_break_no=n;

    saveLastPage();



    if(play_break(n,prei)==0) {
        if(n==breaki)
        {
            pthis.innerHTML="[----]";
        }
        else
        {
            if(last_mark !=null)
                last_mark.innerHTML="["+break_times[last_mark_no].toFixed(1)+"]";



            if(pthis!=null) {
                pthis.innerHTML = "{" + break_times[n].toFixed(1) + "}";
                last_mark = pthis;
            }
            last_mark_no=n;
        }
        return 0;
    }

    if(rangeplayer.paused || rangeplayer.ended)
    {

        return 1;
    }





    break_times[n]=rangeplayer.currentTime;
    pthis.innerHTML="["+break_times[n].toFixed(1)+"] ";

    var id=parseInt(break_times[n]*10);
    pthis.id="time_list_"+id;
    rangeplayer.pause();
    to_update_times("update");

    if(breaki==n) {
        //break_times[breaki]=0.0;
        ++breaki;
        addtime();
       // pre_break(break_times.length);
    }

    return 2;

}


function rest_break() {
    cur_break.innerHTML="*****";
    break_times[cur_break_no]=-1.0;

}
function bk_get_time(ret) {
    //document.getElementById("demo").innerHTML =ret;
    eval(ret);
}


function to_update_times(md) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            bk_get_time(this.responseText);


        }
    };
    var ts="";
    if(is_one_mp3==1)
    {
        ts="_P"+page;
    }
    if(md==="update") {


        var boxestr= voiceBoxesTostring();
        ts += "&times="+break_times+"&boxestr="+boxestr;
        // createBoxesby(boxestr);
    }

    var url="/lrcs/times?fun="+md+"&mp3="+cur_mp3.replace("/","_")+ts;

    xhttp.open("GET",url, true);
    xhttp.send();
}


function update_times() {

    // xhttp.open("GET", "/lrcs/times?mp3=1.mp3&times=1.3,23.4", true);
    //to_update_times("get");
    to_update_times("update");

}

function html_list_em(i,time,id) {


    return "<span id='time_list_"+id+"' onclick='on_segment(this," + i +")'>"+"["+time+"] "+"</span><br>";

}



function addtime() {

    var   line = "<span id='time_list_last'  onclick='on_segment(this," + breaki + ")'>[****] </span>";

    breaks.innerHTML+=line;
}

function addtimes(ts) {
    var line="";
    for(var i=0;i<ts.length;++i)
    {

        line += "<span onclick='on_segment(this," + breaki + ")'>"+"["+ts[i].toFixed(1)+"] "+"</span><br>";
        break_times[breaki] = ts[i];
        ++breaki;
    }
    breaks.innerHTML+=line;
}


function get_html_list(ts) {
    var line="";
    var start=0.0;

    playRange2(cur_mp3,-1,-1);

    for(var i=0;i<ts.length;++i)
    {
        //var  k=preloadAudio("book1/CD-041.mp3#t=48.436351232,52.271934961");
        //var prei=preloadAudio(cur_mp3+"#t="+start+","+ts[i]);

        var id=parseInt(ts[i]*10);

        line += html_list_em(i,ts[i].toFixed(1),id);
    }
    ;

    return line;
}





//addtimes([1.2,2.2,3.3]);
function get444(mp3,ts) {
    break_times=[];
    breaki=0;
    breaks.innerHTML="";
    last_mark=null;
    last_mark_no=0;

    addtimes(ts);
    addtime();

    set_rand_map();

}

function delete_time() {
    var n=last_mark_no;
    if(last_mark==null)
        n=break_times.length-1;
    del_time(n);


}

function del_time(n) {

   var time= break_times[n];
    var id=parseInt(time*10);
    //voiceBoxes_36
    removeByid("voiceBoxes_"+id);


    break_times.splice(n, 1);
    updat_list_by_array();
    to_update_times("update");

}


function get(mp3,ts,boxes) {

    if(is_one_mp3==1 && ts.length==0 )
    {
        var lasti=break_times.length-1;
        if(lasti>=0)
        ts[0]=break_times[lasti];

    }

    break_times = ts;
    updat_list_by_array();
    createBoxesby(boxes);
    onPageLoad();
    
}
function updat_list_by_array() {

    breaki=break_times.length;

    breaks.innerHTML=get_html_list(break_times);
    last_mark=null;
    last_mark_no=0;

    addtime();

    set_rand_map();

}

function update(mp3,ts) {

}

//<span onclick="setMode()" id="readWriteMode">Read</span>
var elReadWriteMode=document.getElementById("readWriteMode");
var  readWriteMode=0;
function setMode() {

   var text= elReadWriteMode.innerHTML;
   if(text=="Read") {
       readWriteMode=1;
       elReadWriteMode.innerHTML="Write";
   }else
   {
       readWriteMode=0;
       elReadWriteMode.innerHTML="Read";
   }

}
//setMode();