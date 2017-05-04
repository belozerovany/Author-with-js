(function(){
	var blockMenu=document.querySelector('.mobile'),
	mobileMenu=document.querySelector('.mobile_menu');
	blockMenu.addEventListener("click",openMenu);

		 function openMenu(){
		 	if(mobileMenu.style.display=='none')
		 		{mobileMenu.style.display='block'} else{
		 			mobileMenu.style.display='none'
		 		}
		 		
		 }

	var blockLi = document.querySelector('.proposal_ul');
	 	blockLi.addEventListener("mouseover", getFon);
	 	blockLi.addEventListener("mouseout", backFon);
	 	function getFon(event){
	 		var target = event.target;
	 		var button = target.parentNode.querySelector('button');

		 		if(target.tagName.toLowerCase() !='button'){
		 			 return;
		 		}
		 	button.style.background = "#29f5f8";
		 	var form=event.relatedTarget;
		 	var h4=form.parentNode.querySelector('h4');
		 	h4.style.background = "#29f5f8";		
	}
	function backFon(event){
		var target = event.target;
	 		var button = target.parentNode.querySelector('button');

		 		if(target.tagName.toLowerCase() !='button'){
		 			 return;
		 		}

		 	button.style.background = "#788492";
		 	var form=event.relatedTarget;
		 	var h4=form.parentNode.querySelector('h4');
		 	h4.style.background = "#485460";
	}
	
} )()



