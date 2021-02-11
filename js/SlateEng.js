var n=0,m=0,hj=0;
var s=false;
function startSlides(){
	var d=document.getElementsByClassName("dvcr"),as,ae,a;
	as=document.getElementsByClassName("prev");
	ae=document.getElementsByClassName("next");
	a=document.getElementsByClassName("ago");
	m=d.length;
	var i;
	d[0].style.display="block";
	a[0].className=a[0].className+" active";
	for(i=1;i<m;i++){
		d[i].style.display="none";
		as[i].style.display="none";
		ae[i].style.display="none";
		a[i].className=a[i].className.replace(" active","");
	}
}
function circle(){
	if(s){
		SlideAdd();
		n=(n+1==m)?0:n+1;
		setTimeout(circle,5000);
	}
}
function plusSlides(ns) {
	n+=(ns>=0)?1:-1;
	n=(n<0)?m-1:(n>=m)?0:n;
	SlideAdd();
}
function currentSlide(ns){
	n=ns;
	n=(n<0)?m-1:(n>=m)?0:n;
	SlideAdd();
}
function SlideAdd(){
	var d=document.getElementsByClassName("dvcr"),as,ae,a;
	as=document.getElementsByClassName("prev");
	ae=document.getElementsByClassName("next");
	a=document.getElementsByClassName("ago");
	for(i=0;i<d.length;i++){
		d[i].style.display="none";
		as[i].style.display="none";
		ae[i].style.display="none";
		a[i].className=a[i].className.replace(" active","");
	}
	d[n].style.display="block";
	as[n].style.display="block";
	ae[n].style.display="block";
	a[n].className=a[n].className+=" active";
}
function isSd(is){
	s=is;
	circle();
}