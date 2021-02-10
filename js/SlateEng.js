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
	console.log("is:"+n);
	d[n].style.display="block";
	as[n].style.display="block";
	ae[n].style.display="block";
	a[n].className=a[n].className+=" active";
}
function showSlides(n) {
	var i;
	var myslides = document.getElementsByClassName("myslide");
	var slider_pointer=document.getElementsByClassName("slider_pointer");
	if (n > myslides.length){
		slideIndex = 1;
	}
	if (n<1) {
		slideIndex = myslides.length;
	}
	for (i=0; i < myslides.length; i++) {
		myslides[i].style.display = "none";
	}
	for (i=0; i<slider_pointer.length; i++) {
		slider_pointer[i].className =slider_pointer[i].className.replace(" active","");
	}
	myslides[slideIndex -1].style.display = "block";
	slider_pointer[slideIndex -1].className+= " active";
}
function centerobj(cls,clo,nm){
	var a=document.getElementsByClassName(cls),u;
	u=document.getElementsByClassName(clo);
	var s=a[0].clientWidth,f=u[0].clientWidth+parseInt(u[0].style.borderWidth)*2;
	var b=u[0].style.borderWidth;
	var p=(s%2==1)?(s-1)/2:s/2,m=p-((f%2==0)?f/2:(f-1)/2);
	u[0].style.width=(f%2!=s%2)?(f+((s%2==0)?-1:1)+2):f+2;
	u[0].style.left=m+"px";
	console.log(m+" "+p+" "+f+" "+s+" "+((f%2!=s%2)));
	console.log(u[0].clientWidth); 
}
function isSd(is){
	s=is;
	var s=(document.body.clientWidth)? document.body: document.documentElement;
	var a=document.getElementsByClassName("stpl");
	alert(document.body.clientWidth);
	console.log(a[0].clientWidth);
	centerobj("stpl","ftrpo",0);
	circle();
}