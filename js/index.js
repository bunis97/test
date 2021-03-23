
	/*index.js*/

	$(function(){
		AOS.init(
		);
	});

	// 화면 크기 확인 함수
function myFunction(x) {
    if (x.matches) { 
        console.log('pc화면')
        $('#nav').show();
    } else {
        console.log('모바일')
    }
  }

  // 자바스크립트 미디어 쿼리 감지 
  var x = window.matchMedia("(min-width: 768px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes  
  

$(function(){
    // 메인메뉴 열기
    $('.btn-toggle').on('click',function(){
      $('#nav').show();
    })
  
    // 메인메뉴 닫기
    $('.btn-close').on('click',function(){
      $('#nav').hide();
    });

    // 메뉴 큰 화면때 보이기
    $('#nav')
    
});

	$(document).ready(function(){ 
		$('.btn-toggle').click(function(){ 
			var state = $('#gnb').css('display'); 
			if(state == 'none'){  
				$('#gnb').show(); 
			}
		});
	});

    $(document).ready(function(){ 
			$('.btn-close').click(function(){ 
					$('#gnb').hide(); 
				})
      });

	  $(function(){
		let dutation = 0;
	
		//all
		$('#btn-all').on('click', function(){
			$('.list li').show(500);
		})
	
		//design
		$('#btn-design').on('click', function(){
			$('.list li').hide(dutation).filter('.design').show(500);
		})
	
		//homepage
		$('#btn-homepage').on('click', function(){
			$('.list li').hide(dutation).filter('.homepage').show(500);
		})
	
	})

	$(function(){
        $('.container, .container_1').each(function(i){
            var skill = $(this).find('.skills');
            var percent = skill.text(); 

            skill.delay(i*500).animate({'width':percent});
        });
    });
