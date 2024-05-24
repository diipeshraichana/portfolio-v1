(function() {
	
	var t2 = new TimelineLite();
	TweenMax.set('#lineLeft', {marginLeft:0,right:"50%"});
	TweenMax.set('#lineRight', {marginLeft:0,left:"50%"});

	t2.insert(TweenLite.from("#lineLeft", 2, {scaleX:0, transformOrigin:"right"},0));
	t2.insert(TweenLite.from("#lineRight", 2, {scaleX:0, transformOrigin:"left"},0));
// letter animation
	t2.add(
			TweenLite.fromTo(".hero p", 3, {
			  width: "0",
			}, {
			  width: "17.18em", 
			  ease:  SteppedEase.config(49)
			}, 0))
	// text cursor animation
	t2.add(
			TweenLite.fromTo(".hero p", 0.5, {
			  "border-right-color": "rgba(255, 165, 0,0.75)"
			}, {
			  "border-right-color": "rgba(255, 165, 0,0)",
			  repeat: -1,
			  ease:  SteppedEase.config(49)
			}, 0))
    
})();