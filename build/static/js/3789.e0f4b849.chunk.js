"use strict";(self.webpackChunkceremo_=self.webpackChunkceremo_||[]).push([[3789],{3789:function(e,a,t){t.r(a);var n=t(3433),i=t(5671),r=t(3144),o=t(136),s=t(516),l=t(2791),c=t(184),u="LEFT",g="RIGHT",h=function(e,a){for(var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=e,i=[];n<=a;)i.push(n),n+=t;return i},d=function(e){(0,o.Z)(t,e);var a=(0,s.Z)(t);function t(e){var r;(0,i.Z)(this,t),(r=a.call(this)).gotoPage=function(e){var a=r.props.onPageChanged,t=void 0===a?function(e){return e}:a,n=Math.max(0,Math.min(e,r.totalPages)),i={currentPage:n,totalPages:r.totalPages,pageLimit:r.pageLimit,totalRecords:r.totalRecords};r.setState({currentPage:n},(function(){return t(i)}))},r.handleClick=function(e,a){a.preventDefault(),r.gotoPage(e)},r.handleMoveLeft=function(e){e.preventDefault(),r.gotoPage(r.state.currentPage-2*r.pageNeighbours-1)},r.handleMoveRight=function(e){e.preventDefault(),r.gotoPage(r.state.currentPage+2*r.pageNeighbours+1)},r.fetchPageNumbers=function(){var e=r.totalPages,a=r.state.currentPage,t=r.pageNeighbours,i=2*r.pageNeighbours+3;if(e>i+2){var o=[],s=a-t,l=a+t,c=e-1,d=s>2?s:2,p=l<c?l:c,f=i-(o=h(d,p)).length-1,m=d>2,v=p<c,P=u,N=g;if(m&&!v){var b=h(d-f,d-1);o=[P].concat((0,n.Z)(b),(0,n.Z)(o))}else if(!m&&v){var x=h(p+1,p+f);o=[].concat((0,n.Z)(o),(0,n.Z)(x),[N])}else m&&v&&(o=[P].concat((0,n.Z)(o),[N]));return[1].concat((0,n.Z)(o),[e])}return h(1,e)};var o=e.totalRecords,s=void 0===o?null:o,l=e.pageLimit,c=void 0===l?30:l,d=e.pageNeighbours,p=void 0===d?0:d,f=e.sizing,m=void 0===f?"":f,v=e.alignment,P=void 0===v?"":v;return r.sizing="string"===typeof m?m:"",r.alignment="string"===typeof P?P:"",r.pageLimit="number"===typeof c?c:30,r.totalRecords="number"===typeof s?s:0,r.pageNeighbours="number"===typeof p?Math.max(0,Math.min(p,2)):0,r.totalPages=Math.ceil(r.totalRecords/r.pageLimit),r.state={currentPage:1},r}return(0,r.Z)(t,[{key:"componentDidMount",value:function(){this.gotoPage(1)}},{key:"render",value:function(){var e=this;if(!this.totalRecords)return null;if(1===this.totalPages)return null;var a=this.state.currentPage,t=this.fetchPageNumbers();return(0,c.jsx)("nav",{"aria-label":"Page navigation",children:(0,c.jsx)("ul",{className:"pagination ".concat(this.sizing," ").concat(this.alignment),children:t.map((function(t,n){return t===u?(0,c.jsx)("li",{className:"page-item",children:(0,c.jsxs)("button",{className:"page-link","aria-label":"Previous",onClick:e.handleMoveLeft,children:[(0,c.jsx)("span",{"aria-hidden":"true",children:"\xab"}),(0,c.jsx)("span",{className:"sr-only",children:"Previous"})]})},n):t===g?(0,c.jsx)("li",{className:"page-item",children:(0,c.jsxs)("a",{className:"page-link",href:"#!","aria-label":"Next",onClick:e.handleMoveRight,children:[(0,c.jsx)("span",{"aria-hidden":"true",children:"\xbb"}),(0,c.jsx)("span",{className:"sr-only",children:"Next"})]})},n):(0,c.jsx)("li",{className:"page-item".concat(a===t?" active":""),children:(0,c.jsx)("a",{className:"page-link",href:"#!",onClick:function(a){return e.handleClick(t,a)},children:t})},n)}))})})}}]),t}(l.Component);a.default=d}}]);
//# sourceMappingURL=3789.e0f4b849.chunk.js.map