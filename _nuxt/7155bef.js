(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{250:function(t,e,o){var content=o(252);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(132).default)("c0a771a6",content,!0,{sourceMap:!1})},251:function(t,e,o){"use strict";o(250)},252:function(t,e,o){var n=o(131)(!1);n.push([t.i,"button[data-v-6adb3380]{height:100px;width:100px;background-color:grey}.player[data-v-6adb3380]{background-color:#00f}.computer[data-v-6adb3380]{background-color:red}.replay[data-v-6adb3380]{background-color:green;width:300px;font-size:40px}h1[data-v-6adb3380]{font-size:60px}",""]),t.exports=n},253:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{win:!1,lose:!1,tie:!1,one:{played:!1,computed:!1},two:{played:!1,computed:!1},three:{played:!1,computed:!1},four:{played:!1,computed:!1},five:{played:!1,computed:!1},six:{played:!1,computed:!1},seven:{played:!1,computed:!1},eight:{played:!1,computed:!1},nine:{played:!1,computed:!1}}},methods:{play:function(t){if(!(this.win||this.lose||this.tie||this[t].played||this[t].computed)){if(this[t].played=!0,this.validate())return;this.calculate(),this.validate()}},validate:function(){for(var t=0;t<3;t++){for(var e=0,o=0,n=0;n<3;n++)this[this.convert(3*t+n)].played?e++:this[this.convert(3*t+n)].computed&&o++;if(e>=3)return this.win=!0,!0;if(o>=3)return this.lose=!0,!0;e+o}for(var r=0;r<3;r++){for(var c=0,l=0,h=0;h<3;h++)this[this.convert(3*h+r)].played?c++:this[this.convert(3*h+r)].computed&&l++;if(c>=3)return this.win=!0,!0;if(l>=3)return this.lose=!0,!0}for(var d=0,v=0,y=0,f=0,i=0;i<3;i++)this[this.convert(4*i)].played?d++:this[this.convert(4*i)].computed&&v++,this[this.convert(2*i+2)].played?y++:this[this.convert(2*i+2)].computed&&f++;return d>=3||y>=3?(this.win=!0,!0):v>=3||f>=3?(this.lose=!0,!0):9==total&&(this.tie=!0,!0)},convert:function(t){return 0==t?"one":1==t?"two":2==t?"three":3==t?"four":4==t?"five":5==t?"six":6==t?"seven":7==t?"eight":8==t?"nine":void 0},calculate:function(){for(var t=[],i=0;i<9;i++)t.push(0);for(var e=0;e<3;e++){for(var o=0,n=0,col=0;col<3;col++)this[this.convert(3*e+col)].computed?o++:this[this.convert(3*e+col)].played&&n++;for(var r=0;r<3;r++)this[this.convert(3*e+r)].computed||this[this.convert(3*e+r)].played?t[3*e+r]=-1:(n>0&&(o=0),2==o&&(o+=1e4),2==n&&(o+=5e3),t[3*e+r]+=o)}for(var c=0;c<3;c++){for(var l=0,h=0,d=0;d<3;d++)this[this.convert(3*d+c)].computed&&l++,this[this.convert(3*d+c)].played&&h++;for(var v=0;v<3;v++)this[this.convert(3*v+c)].computed||this[this.convert(3*v+c)].played?t[3*v+c]=-1:(h>0&&(l=0),2==l&&(l+=1e4),2==h&&(l+=5e3),t[3*v+c]+=l)}for(var y=0,f=0,m=0,w=0,_=0;_<3;_++)this[this.convert(4*_)].computed&&y++,this[this.convert(2*_+2)].computed&&f++,this[this.convert(4*_)].played&&m++,this[this.convert(2*_+2)].played&&w++;for(var k=0;k<3;k++)this[this.convert(4*k)].played||this[this.convert(4*k)].computed?t[4*k]=-1:(m>0&&(y=0),2==y&&(y+=1e4),2==m&&(y+=5e3),t[4*k]+=y),this[this.convert(2*k+2)].played||this[this.convert(2*k+2)].computed?t[2*k+2]=-1:(w>0&&(f=0),2==f&&(f+=1e4),2==w&&(f+=5e3),t[2*k+2]+=f);for(var x=Math.floor(9*Math.random()),C=t[x],M=0;M<3;M++)for(var z=0;z<3;z++)t[3*M+z]>C&&(x=3*M+z,C=t[3*M+z]);this[this.convert(x)].computed=!0},replay:function(){this.win=!1,this.lose=!1,this.tie=!1,this.one.played=!1,this.one.computed=!1,this.two.played=!1,this.two.computed=!1,this.three.played=!1,this.three.computed=!1,this.four.played=!1,this.four.computed=!1,this.five.played=!1,this.five.computed=!1,this.six.played=!1,this.six.computed=!1,this.seven.played=!1,this.seven.computed=!1,this.eight.played=!1,this.eight.computed=!1,this.nine.played=!1,this.nine.computed=!1}}},r=(o(251),o(56)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("section",{staticClass:"row"},[e("button",{class:{player:t.one.played,computer:t.one.computed},on:{click:function(e){return t.play("one")}}}),t._v(" "),e("button",{class:{player:t.two.played,computer:t.two.computed},on:{click:function(e){return t.play("two")}}}),t._v(" "),e("button",{class:{player:t.three.played,computer:t.three.computed},on:{click:function(e){return t.play("three")}}})]),t._v(" "),e("section",{staticClass:"row"},[e("button",{class:{player:t.four.played,computer:t.four.computed},on:{click:function(e){return t.play("four")}}}),t._v(" "),e("button",{class:{player:t.five.played,computer:t.five.computed},on:{click:function(e){return t.play("five")}}}),t._v(" "),e("button",{class:{player:t.six.played,computer:t.six.computed},on:{click:function(e){return t.play("six")}}})]),t._v(" "),e("section",{staticClass:"row"},[e("button",{class:{player:t.seven.played,computer:t.seven.computed},on:{click:function(e){return t.play("seven")}}}),t._v(" "),e("button",{class:{player:t.eight.played,computer:t.eight.computed},on:{click:function(e){return t.play("eight")}}}),t._v(" "),e("button",{class:{player:t.nine.played,computer:t.nine.computed},on:{click:function(e){return t.play("nine")}}})]),t._v(" "),t.win?e("h1",[t._v("You win")]):t._e(),t._v(" "),t.lose?e("h1",[t._v("You lose")]):t._e(),t._v(" "),t.tie?e("h1",[t._v("The great god Cthulhu wins")]):t._e(),t._v(" "),t.win||t.lose||t.tie?e("button",{staticClass:"replay",on:{click:function(e){return t.replay()}}},[t._v("Play again?")]):t._e()])}),[],!1,null,"6adb3380",null);e.default=component.exports}}]);