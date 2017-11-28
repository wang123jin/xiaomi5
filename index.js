/*
* @Author: 王金龙
* @Date:   2017-11-07 16:39:32
* @Last Modified by:   王金龙
* @Last Modified time: 2017-11-26 21:19:08
*/
window.onload=function(){
	let bal=document.getElementsByClassName('bannerleft-list')[0];
	// console.log(bal);
	let lis=bal.getElementsByTagName('li');
	// console.log(lis);
	let tc=bal.getElementsByClassName('tanchukuang');
	// console.log(tc);
    for(let i=0;i<lis.length;i++){
    	lis[i].onmouseover=function(){
    		tc[i].style.display='block';
    	}
    	lis[i].onmouseout=function(){
    		tc[i].style.display='none'; 
    	}
    }
   /* for(var i=0;i<lis.length;i++){
        lis[i].index=i;
        lis[i].onmouseover=function(){
            tc[this.index].style.display='block';
        }
        lis[i].onmouseout=function(){
            tc[this.index].style.display='none';
        }
    }*/
    
    let sho=document.getElementsByClassName('shopcar')[0];
    let yr=document.getElementsByClassName('yiRu')[0];
   console.log(sho,yr);
    
        sho.onmouseover=function(){
            yr.style.display='block';
        }
        sho.onmouseout=function(){
            yr.style.display='none';
        }
    let xim=document.getElementsByClassName('nav-wenzi')[0];
    console.log(xim);
   let lia=xim.getElementsByTagName('li');
    console.log(lia);
    let xm=document.getElementsByClassName('xiMi');
    console.log(xm);
    for(let i=0;i<lia.length;i++){
    lia[i].onmouseover=function(){
        xm[i].style.display='block';
    }
    lia[i].onmouseout=function(){
       xm[i].style.display='none';
    }
}

    let ban=document.getElementsByClassName('banner-pic')[0];   
        let lisa=ban.getElementsByTagName('li');
        let dian=document.getElementsByClassName('circle')[0];
        let zhendian=dian.getElementsByTagName('li');
        let right=document.getElementsByClassName('bannerhand-right')[0];
        let left=document.getElementsByClassName('bannerhand-left')[0];
        let banner=document.getElementsByClassName('banner')[0];
        let t=setInterval(fn,1000);
        let num=0;
        right.onclick=fn;
        left.onclick=fn1;
        banner.onmouseover=function(){
            clearInterval(t);
        }
        banner.onmouseout=function(){
            t=setInterval(fn,1000);
        }
        function fn(){
            num++;
            if(num==lisa.length){
                num=0;
            }
            for(let i=0;i<lisa.length;i++){
            lisa[i].style.display='none';
            zhendian[i].style.background='';
        }
            lisa[num].style.display='block';
            zhendian[num].style.background='yellow';
       }
       function fn1(){
            num--;
            if(num==-1){
                num=lisa.length-1;
            }
            for(let i=0;i<lisa.length;i++){
            lisa[i].style.display='none';
            zhendian[i].style.background='';
        }
            lisa[num].style.display='block';
            zhendian[num].style.background='yellow';
       }
       for(let i=0;i<zhendian.length;i++){
            zhendian[i].onclick=function(){
            zhendian[i].style.background='yellow';
            zhendian[num].style.background='';
            lisa[i].style.display='block';
            lisa[num].style.display='none';
            num=i;
           }
       }
         let bigbox=document.getElementsByClassName("bigbox")[0];
    let anniuzuo=document.getElementsByClassName("anniuzuo")[0];
    let anniuyou=document.getElementsByClassName("anniuyou")[0];
    let bigbox_width=bigbox.offsetWidth;
    let anniu=document.getElementsByClassName("anniu")[0];
    let t2;
    let nums=1;
    let flags=true;
    /*t2=setInterval(function(){
        if (bigbox.style.left==0) {
            setTimeout(fs,1);
        }
        else{
            setTimeout(fs1,1);
        }
    },2000)*/
    t2=setInterval(function(){
        if (nums==1) {
            animate(bigbox,{left:-bigbox.offsetWidth/4+
            nums*bigbox.offsetWidth/4},function(){
                nums=-nums;
            anniuzuo.className="anniuzuo color";
            anniuyou.className="anniuyou color1";
            })
        }
        else if (nums==-1) {
            animate(bigbox,{left:-bigbox.offsetWidth/4+
            nums*bigbox.offsetWidth/4},function(){
                nums=-nums;
            anniuzuo.className="anniuzuo color1";
            anniuyou.className="anniuyou color";
            })
        }
        },10000)
    anniu.onmouseover=function(){
        clearInterval(t2);
    }
    anniu.onmouseout=function(){
        t2=setInterval(function(){
        if (nums==1) {
            animate(bigbox,{left:-bigbox.offsetWidth/4+
            nums*bigbox.offsetWidth/4},function(){
                nums=-nums;
            anniuzuo.className="anniuzuo color";
            anniuyou.className="anniuyou color1";
            })
        }
        else if (nums==-1) {
            animate(bigbox,{left:-bigbox.offsetWidth/4+
            nums*bigbox.offsetWidth/4},function(){
                nums=-nums;
            anniuzuo.className="anniuzuo color1";
            anniuyou.className="anniuyou color";
            })
        }
        },10000)
    }
    anniuyou.onclick=function(){
        if (flags) {
            fs();
        }
        flags=false;
    }
    anniuzuo.onclick=function(){
        if (flags) {
            fs1();
        }
        flags=false;
    }
    function fs(){
        anniuzuo.className="anniuzuo color1";
        anniuyou.className="anniuyou color";
        animate(bigbox,{left:-bigbox.offsetWidth/2},function(){
            flags=true;
        })
    }
    function fs1(){
        anniuzuo.className="anniuzuo color";
        anniuyou.className="anniuyou color1";
        animate(bigbox,{left:0},function(){
            flags=true;
        })
    }

    // 内容哈利波特开始

    contentre(0);
    contentre(1);
    contentre(2);
    contentre(3);
    function contentre(number){
        let cons=document.getElementsByClassName("cons")[number];
        console.log(cons);
        let cons_on=cons.getElementsByTagName("li");
        let con=document.getElementsByClassName("con")[number];
        let dian=con.getElementsByClassName("dian");
        // console.log(con,dian);
        let cons_width=cons_on[0].offsetWidth;
        let hand1=document.getElementsByClassName("neirong-left")[number];
        let hand2=document.getElementsByClassName("neirong-right")[number];
        let next=0;
        let flag1=true;
        hand2.onclick=function(){
            if (flag1) {
                next++;
                if (next<cons_on.length) {
                    animate(cons,{left:-next*cons_width},function(){
                        flag1=true;
                    })
                    for(let i=0;i<dian.length;i++){
                        dian[i].className="dian";
                    }
                    dian[next].className="dian biger";
                }
                else{
                    next--;
                    return;
                }
                flag1=false;
            }
        }
        hand1.onclick=function(){
            if (flag1) {
                next--;
                if (next>-1) {
                    animate(cons,{left:-next*cons_width},function(){
                        flag1=true;
                    })
                    for(let i=0;i<dian.length;i++){
                        dian[i].className="dian";
                    }
                    dian[next].className="dian biger";
                }
                else{
                    next++;
                    return;
                }
                flag1=false;
            }
        }
        for(let i=0;i<dian.length;i++){
            dian[i].onclick=function(){
                animate(cons,{left:-i*cons_width})
                for(let j=0;j<dian.length;j++){
                    dian[j].className="dian";
                }
                dian[i].className="dian biger";
                next=i;
            }
        }
    }



}



