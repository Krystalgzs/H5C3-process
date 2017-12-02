$(function(){
  $('#fullpage').fullpage({
  	//内容不要垂直居中
  	verticalCentered:false,
  	//是否显示导航
  	navigation:true,
  	//滚动到某一屏幕后出发执行
  	afterLoad:function(linkName,index){
       
  		// console.log(index);
  		if (index == 2) {
  			/*
  			1 空的搜索 往坐边位移
        2 沙发两个子开始显示 
        3 图片切换  沙发和空的搜索框   和 带有沙发文字的 搜索框 切换显示
        4 带有沙发文字的 搜索框 往右上角进行  位移 
        5 同时  多沙发的图片 开始变大 
  			 */
        $(".nextPage").fadeOut();
  			 $(".s2_search_empty").animate({
  			 	right:"50%",
  			 	marginRight:"-111px"
  			 },1000,"easeOutBack",function(){
  			 	//文字淡入
  			 	$(".s2_sf_font").fadeIn(1000, function() {
  			 		$(".s2_search_empty,.s2_sf_font").hide();
  			 		$(".s2_search_full").show().animate({
  			 			bottom:"451px",
  			 			left:"66%",
  			 			height:"30px"
  			 		}, 1000);

  			 		//带有多个沙发的图片开始显示
  			 		$(".s2_sfs").show().animate({
  			 			width:"441px",
  			 			height:"218px",
  			 		},1000);

            // title
            $(".s2_title1").fadeOut(1000);
            $(".s2_title2").fadeIn(1000,function () {
              $(".nextPage").fadeIn();
            });
  			 	});
  			 })
  		};
      if (index==5) {
        $(".nextPage").fadeOut();
        $(".s5_hand").show().animate({
          right: 138,
          bottom: -34
        },1000,function(){
          $(".s5_mouse2").fadeIn(1000);
          $(".s5_qx_sf").show().animate({
            bottom: 45,
            left: 170
          },1000,function(){
            $(".s5_order").show().animate({
              top:"25%",
              left:"20%"
            },1000,function(){
              $(".s5_title").addClass('s5_title_ritate');
              $(".nextPage").fadeIn();
            })
          })
        })
      };
      if (index==7) {
        $(".nextPage").fadeOut();
        $(".s7_star").show().animate({
          width:102
        },2000,function(){
          $(".s7_good").fadeIn(1000,function(){
            $(".nextPage").fadeIn();
          });
        })
      };
      if (index==8) {
        $(document.body).on('mousemove', function(e) {
         // console.log(e);
         var clientX = e.clientX;
         var clientY = e.clientY;
         //计算出手最大的移动距离
         var hand_top = clientY + 20;
         var maxTop = $(".s8").height() - 449;//449为图片的高度
         if (hand_top<maxTop) {
          hand_top = maxTop;
         };
         //计算出版心到左边的距离
         var distance = $(".section_content").offset().left;
         $(".s8_hand").css({
          left:clientX - distance -68,//68为手的图片 最左边距离食指的距离
          top:hand_top
         })
        });
        $(".s8_agein").click(function(){
          $.fn.fullpage.moveTo(1);
          $(".section *").attr("style","");
          $(".s6").css({
            backgroundPositionX: "25%"
          })
        })
      };
  	},
    //一旦离开就触发
    onLeave:function(index,nextIndex,direction){
      // alert(1);
      $(".nextPage").fadeOut();
      if (index==2&&nextIndex==3) {
        //2中遮罩层显示
        $(".s2_wrap").show();
        //2中的沙发到3去
        $(".s3_sf").show().animate({
          bottom:"36%",
          left:"26%",
          width:207,
          height:166
        }, 2000,function(){
          $(".s3_black_size,.s3_black_car").fadeOut(1000);
          $(".s3_white_size,.s3_white_car").fadeIn(1000);
          $(".nextPage").fadeIn();
        })
      }
      if (index==3&&nextIndex==4) {
        //1 获取屏幕的高度
        var height = $(".s4").height();
        // console.log(height);
        //2 沙发本身的高度
        var ownHeight = parseInt($(".s4_qx_sf").css("bottom"));
        // console.log(ownHeight);//-248
        var bottom = height + ownHeight +390;
        $(".s4_qx_sf").css({
          bottom: bottom,
          left: -38
        });
        //隐藏s3的沙发 
        $(".s3_sf").hide();
        $(".s4_qx_sf").animate({
          bottom:176,
          left:134
        },2000,function(){
          //车和沙发一起移动
          //x为s4_full_car距离整个页面左边的的宽度
          var x = $(".s4_full_car").offset().left;
          //车往右边移动 减去左边的宽度
          var leftMargin = $(".s4").width() - x;

            $(".s4_full_car").animate({
            marginLeft: leftMargin
          }, 3000, "easeInOutElastic",function(){
            $(".s4_title1").fadeOut(1000);
            $(".s4_title2").fadeIn(1000);
            $(".s4_address").fadeIn(1000);
            $(".nextPage").fadeIn();
          })
        });
      }
      if (index==5&&nextIndex==6) {
        $(".s5_qx_sf").hide();
        $(".s6_sf_move").show().animate({
          width:50,
          height:30,
          left:"28%",
          bottom:"70%"
        },2000,function(){
          $(".s6_sf_move").hide();
          $(".s6_box").animate({
             bottom:"4%"
          },1000,function(){
            $(".s6_zy").fadeIn(1000);
            $(".s6_title").animate({
              left:"25%"
            },1000,"easeOutQuart")
            $(".s6").animate({
              //汽车走动 其实是背景在动
              backgroundPositionX:"100%"
            },2000,function(){
              $(".s6_boys").animate({
                width:252,
                height:305,
                right: "58%",
                bottom: "17%"
              },1000,function(){
                $(".s6_boys").animate({
                  right:"38%"
                },1000,function(){
                  $(".s6_door").show();
                  $(".s6_girl").show().animate({
                    width: 87,
                    height: 294,
                    right: 364
                  },1000,function(){
                    $(".s6_recive").show();
                    $(".nextPage").fadeIn();
                  })
                })
              })
            })
          })
        });
        $(".s6_box").animate({
          left:"25%"
        },1500)
      };
    },
 
  });
  $(".nextPage").on("click",function(){
    $.fn.fullpage.moveSectionDown();
  })
});