"use strict";$(function(){!function(){function t(t){$(t).find(".slider__content-slide").html($(t).find(".slide.current .slide__text").html())}$(".slider").each(function(e,i){var n=$(i).find(".slide").length,d=$(i).find(".slide").first().addClass("current"),r=$(d).data("tag");t(i),r&&$(i).find(".slider__tag").text(r),1===String(n).length&&(n="0"+n),$(i).find(".slider__count").text("01\\"+n)}),$(".slide").each(function(t,e){var i=$(e).find("img").get(0),n=$(e).find(".slide__bg").get(0);if(i){var d=i.src;$(n).css({"background-image":"url("+d+")"})}}),$(".slider__arrow").on("click",function(){var e=$(this).hasClass("slider__arrow_prev"),i=$(this).closest(".slider"),n=$(i).find(".slide.current");switch($(n).removeClass("current"),e){case!0:var d=$(n).prev();void 0===$(d).get(0)&&(d=$(i).find(".slide").last()),$(d).addClass("current"),t(i);break;case!1:var r=$(n).next();void 0===$(r).get(0)&&(r=$(i).find(".slide").first()),$(r).addClass("current"),t(i)}var s=$(i).find(".slide.current").index()+1,l=$(i).find(".slide").length,a=$(i).find(".slide.current").data("tag");a&&$(i).find(".slider__tag").text(a),1===String(s).length&&(s="0"+s),1===String(l).length&&(l="0"+l),$(i).find(".slider__count").text(s+"\\"+l)})}(),$("[data-video-id]").modalVideo(),$(document).on("click","a",function(t){t.preventDefault(),$("html, body").animate({scrollTop:$($.attr(this,"href")).offset().top},2e3)})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyIkIiwic2xpZGVDb250ZW50Iiwic2xpZGVyIiwiaHRtbCIsImZpbmQiLCJlYWNoIiwiaSIsInNsaWRlcyIsImxlbmd0aCIsImN1cnJlbnQiLCJmaXJzdCIsImFkZENsYXNzIiwidGFnIiwidGV4dCIsIlN0cmluZyIsInNsaWRlIiwiaW1nIiwiZ2V0IiwiYmciLCJzcmMiLCJiYWNrZ3JvdW5kLWltYWdlIiwib24iLCJkaXJlY3Rpb24iLCJ0aGlzIiwiaGFzQ2xhc3MiLCJjbG9zZXN0IiwicHJldiIsImxhc3QiLCJuZXh0IiwiaW5kZXgiLCJkYXRhIiwiZG9jdW1lbnQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsImF0dHIiLCJvZmZzZXQiLCJ0b3AiXSwibWFwcGluZ3MiOiJhQUFBQSxFQUFFLFlBQUZBLFdBR0UsU0FBU0MsRUFBYUMsR0FEdkJGLEVBQUFFLEdBQVNBLEtBQVQsMEJBQWtCQyxLQUFBSCxFQUFBRSxHQUFBRSxLQUFBLCtCQUFBRCxRQUdoQkgsRUFBQSxXQUFBSyxLQUFBLFNBQUFDLEVBQUFKLEdBR0EsSUFBSUssRUFBU1AsRUFBRUUsR0FBUUUsS0FBSyxVQUFVSSxPQURyQ0MsRUFBRlQsRUFBYUssR0FBS0QsS0FBQSxVQUFBTSxRQUFvQkMsU0FBQSxXQUNyQ0MsRUFBSUwsRUFBQUEsR0FBV0wsS0FBUUUsT0FBdkJILEVBRVNRLEdBRVRSLEdBQUFBLEVBQUFBLEdBQUFHLEtBQUEsZ0JBQUFTLEtBQUFELEdBRXdCLElBQXBCQSxPQUFPVixHQUFRRSxTQUFLRyxFQUFnQk0sSUFBS0QsR0FFN0NaLEVBQUFFLEdBQUlZLEtBQU9QLGtCQUFzQkEsS0FBQUEsT0FBU0EsS0FHMUNQLEVBWkQsVUFBQUssS0FBQSxTQUFBQyxFQUFBUyxHQWVDLElBQUlDLEVBQU1oQixFQUFFZSxHQUFPWCxLQUFLLE9BQU9hLElBQUksR0FEbENDLEVBQUFsQixFQUFBZSxHQUFGWCxLQUFpQixjQUFBYSxJQUFtQixHQUNuQyxHQUNDQyxFQURELENBR0EsSUFBSUMsRUFBTUgsRUFBQUcsSUFFVm5CLEVBQUFrQixHQUFJQyxLQUdIQyxtQkFBb0IsT0FBT0QsRUFBSSxTQUVoQ25CLEVBWEQsa0JBQUFxQixHQUFBLFFBQUEsV0FjQyxJQUFJQyxFQUFZdEIsRUFBRXVCLE1BQU1DLFNBQVMsc0JBRGhDdEIsRUFBQUYsRUFBQXVCLE1BQUZFLFFBQXVCLFdBQ3RCVixFQUFJTyxFQUFBQSxHQUFjbEIsS0FBTW9CLGtCQUl4QnhCLE9BSkFBLEVBQUFlLEdBRUNBLFlBQVEsV0FFVE8sR0FHQyxLQUFLLEVBRE4sSUFBQUksRUFBUUosRUFBQUEsR0FBUkksWUFFc0JBLElBQWhCQSxFQUFBQSxHQUFPMUIsSUFBRWUsS0FHWlcsRUFBTzFCLEVBQUVFLEdBQVFFLEtBQUssVUFBVXVCLFFBQ2hDM0IsRUFBQTBCLEdBQUFmLFNBQUEsV0FFRFgsRUFBUVcsR0FFUlYsTUFHRCxLQUFLLEVBREosSUFBQTJCLEVBQUE1QixFQUFBZSxHQUFBYSxZQUVvQkEsSUFBaEJBLEVBQUFBLEdBQU81QixJQUFFZSxLQUdaYSxFQUFPNUIsRUFBRUUsR0FBUUUsS0FBSyxVQUFVTSxTQUNoQ1YsRUFBQTRCLEdBQUFqQixTQUFBLFdBRURYLEVBQVFXLEdBcEJWLElBQUFrQixFQUFBN0IsRUFBQUUsR0FBQUUsS0FBQSxrQkFBQXlCLFFBQUEsRUE0QkN0QixFQUFTUCxFQUFFRSxHQUFRRSxLQUFLLFVBQVVJLE9BRG5DSSxFQUFJaUIsRUFBQUEsR0FBVTNCLEtBQVFFLGtCQUFLMEIsS0FBa0JELE9BRTVDakIsR0FBQUEsRUFBTVosR0FBQUksS0FBQSxnQkFBZVMsS0FBa0JpQixHQUdYLElBQXpCaEIsT0FBT2UsR0FBT3JCLFNBQWNxQixFQUFRLElBQUlBLEdBRHBCLElBQXBCakIsT0FBT1YsR0FBUUUsU0FBS0csRUFBZ0JNLElBQUtELEdBRTdDWixFQUFBRSxHQUFJWSxLQUFPUCxrQkFBc0JBLEtBQUFBLEVBQVMsS0FBSUEsS0FJL0NMLEdBRURBLEVBQUFBLG1CQUFBQSxhQUtBRixFQUFFK0IsVUFBVVYsR0FBRyxRQUFTLElBQUssU0FBU1csR0FBcENELEVBQUZFLGlCQUdJakMsRUFBRSxjQUFja0MsU0FBZEMsVUFBY0QsRUFBQUEsRUFBaEJFLEtBQXdCYixLQUFBLFNBQUFjLFNBQUFDLEtBQ3BCSCIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uKCkge1xuXG5cdGZ1bmN0aW9uIHNsaWRlcigpIHtcblx0XHRmdW5jdGlvbiBzbGlkZUNvbnRlbnQoc2xpZGVyKSB7XG5cdFx0XHQkKHNsaWRlcikuZmluZCgnLnNsaWRlcl9fY29udGVudC1zbGlkZScpLmh0bWwoJChzbGlkZXIpLmZpbmQoJy5zbGlkZS5jdXJyZW50IC5zbGlkZV9fdGV4dCcpLmh0bWwoKSk7XG5cdFx0fVxuXG5cdFx0JCgnLnNsaWRlcicpLmVhY2goZnVuY3Rpb24oaSwgc2xpZGVyKSB7XG5cdFx0XHR2YXIgc2xpZGVzID0gJChzbGlkZXIpLmZpbmQoJy5zbGlkZScpLmxlbmd0aCxcblx0XHRcdFx0Y3VycmVudCA9ICQoc2xpZGVyKS5maW5kKCcuc2xpZGUnKS5maXJzdCgpLmFkZENsYXNzKCdjdXJyZW50JyksXG5cdFx0XHRcdHRhZyA9ICQoY3VycmVudCkuZGF0YSgndGFnJyk7XG5cblx0XHRcdHNsaWRlQ29udGVudChzbGlkZXIpO1xuXG5cdFx0XHRpZiAodGFnKSAkKHNsaWRlcikuZmluZCgnLnNsaWRlcl9fdGFnJykudGV4dCh0YWcpO1xuXG5cdFx0XHRpZiAoU3RyaW5nKHNsaWRlcykubGVuZ3RoID09PSAxKSBzbGlkZXMgPSAnMCcrc2xpZGVzO1xuXG5cdFx0XHQkKHNsaWRlcikuZmluZCgnLnNsaWRlcl9fY291bnQnKS50ZXh0KCcwMVxcXFwnK3NsaWRlcylcblx0XHR9KTtcblxuXHRcdCQoJy5zbGlkZScpLmVhY2goZnVuY3Rpb24oaSwgc2xpZGUpIHtcblx0XHRcdHZhciBpbWcgPSAkKHNsaWRlKS5maW5kKCdpbWcnKS5nZXQoMCksXG5cdFx0XHRcdGJnID0gJChzbGlkZSkuZmluZCgnLnNsaWRlX19iZycpLmdldCgwKTtcblxuXHRcdFx0aWYgKCFpbWcpIHJldHVybjtcblxuXHRcdFx0dmFyIHNyYyA9IGltZy5zcmM7XG5cblx0XHRcdCQoYmcpLmNzcyh7XG5cdFx0XHRcdCdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnK3NyYysnKScsXG5cdFx0XHR9KVxuXHRcdH0pO1xuXG5cdFx0JCgnLnNsaWRlcl9fYXJyb3cnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBkaXJlY3Rpb24gPSAkKHRoaXMpLmhhc0NsYXNzKCdzbGlkZXJfX2Fycm93X3ByZXYnKSxcblx0XHRcdFx0c2xpZGVyID0gJCh0aGlzKS5jbG9zZXN0KCcuc2xpZGVyJyksXG5cdFx0XHRcdHNsaWRlID0gJChzbGlkZXIpLmZpbmQoJy5zbGlkZS5jdXJyZW50Jyk7XG5cblx0XHRcdCQoc2xpZGUpLnJlbW92ZUNsYXNzKCdjdXJyZW50Jyk7XG5cblx0XHRcdHN3aXRjaCAoZGlyZWN0aW9uKSB7XG5cdFx0XHRcdGNhc2UgdHJ1ZTpcblx0XHRcdFx0XHR2YXIgcHJldiA9ICQoc2xpZGUpLnByZXYoKTtcblxuXHRcdFx0XHRcdGlmICgkKHByZXYpLmdldCgwKSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRwcmV2ID0gJChzbGlkZXIpLmZpbmQoJy5zbGlkZScpLmxhc3QoKVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdCQocHJldikuYWRkQ2xhc3MoJ2N1cnJlbnQnKTtcblxuXHRcdFx0XHRcdHNsaWRlQ29udGVudChzbGlkZXIpO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgZmFsc2U6XG5cdFx0XHRcdFx0dmFyIG5leHQgPSAkKHNsaWRlKS5uZXh0KCk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aWYgKCQobmV4dCkuZ2V0KDApID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdG5leHQgPSAkKHNsaWRlcikuZmluZCgnLnNsaWRlJykuZmlyc3QoKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQkKG5leHQpLmFkZENsYXNzKCdjdXJyZW50Jyk7XG5cblx0XHRcdFx0XHRzbGlkZUNvbnRlbnQoc2xpZGVyKTtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgaW5kZXggPSAkKHNsaWRlcikuZmluZCgnLnNsaWRlLmN1cnJlbnQnKS5pbmRleCgpKzEsXG5cdFx0XHRcdHNsaWRlcyA9ICQoc2xpZGVyKS5maW5kKCcuc2xpZGUnKS5sZW5ndGgsXG5cdFx0XHRcdHRhZyA9ICQoc2xpZGVyKS5maW5kKCcuc2xpZGUuY3VycmVudCcpLmRhdGEoJ3RhZycpO1xuXG5cdFx0XHRpZiAodGFnKSAkKHNsaWRlcikuZmluZCgnLnNsaWRlcl9fdGFnJykudGV4dCh0YWcpO1xuXHRcdFx0aWYgKFN0cmluZyhpbmRleCkubGVuZ3RoID09PSAxKSBpbmRleCA9ICcwJytpbmRleDtcblx0XHRcdGlmIChTdHJpbmcoc2xpZGVzKS5sZW5ndGggPT09IDEpIHNsaWRlcyA9ICcwJytzbGlkZXM7XG5cblx0XHRcdCQoc2xpZGVyKS5maW5kKCcuc2xpZGVyX19jb3VudCcpLnRleHQoaW5kZXgrJ1xcXFwnK3NsaWRlcyk7XG5cdFx0fSk7XG5cdH1cblxuXHRzbGlkZXIoKTtcblxuXHQkKFwiW2RhdGEtdmlkZW8taWRdXCIpLm1vZGFsVmlkZW8oKTtcblxuXG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdhJywgZnVuY3Rpb24oZXZlbnQpe1xuXHQgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHQgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuXHQgICAgICAgIHNjcm9sbFRvcDogJCggJC5hdHRyKHRoaXMsICdocmVmJykgKS5vZmZzZXQoKS50b3Bcblx0ICAgIH0sIDIwMDApO1xuXHR9KTtcblxufSk7Il19
