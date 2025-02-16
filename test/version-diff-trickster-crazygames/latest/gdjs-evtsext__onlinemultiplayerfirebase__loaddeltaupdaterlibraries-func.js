
if (typeof gdjs.evtsExt__OnlineMultiplayerFirebase__LoadDeltaUpdaterLibraries !== "undefined") {
  gdjs.evtsExt__OnlineMultiplayerFirebase__LoadDeltaUpdaterLibraries.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__OnlineMultiplayerFirebase__LoadDeltaUpdaterLibraries = {};


gdjs.evtsExt__OnlineMultiplayerFirebase__LoadDeltaUpdaterLibraries.userFunc0x49fb940 = function(runtimeScene, eventsFunctionContext) {
"use strict";
var diff_match_patch=function(){this.Diff_Timeout=1;this.Diff_EditCost=4;this.Match_Threshold=.5;this.Match_Distance=1E3;this.Patch_DeleteThreshold=.5;this.Patch_Margin=4;this.Match_MaxBits=32},DIFF_DELETE=-1,DIFF_INSERT=1,DIFF_EQUAL=0;diff_match_patch.Diff=function(a,b){this[0]=a;this[1]=b};diff_match_patch.Diff.prototype.length=2;diff_match_patch.Diff.prototype.toString=function(){return this[0]+","+this[1]};
diff_match_patch.prototype.diff_main=function(a,b,c,d){"undefined"==typeof d&&(d=0>=this.Diff_Timeout?Number.MAX_VALUE:(new Date).getTime()+1E3*this.Diff_Timeout);if(null==a||null==b)throw Error("Null input. (diff_main)");if(a==b)return a?[new diff_match_patch.Diff(DIFF_EQUAL,a)]:[];"undefined"==typeof c&&(c=!0);var e=c,f=this.diff_commonPrefix(a,b);c=a.substring(0,f);a=a.substring(f);b=b.substring(f);f=this.diff_commonSuffix(a,b);var g=a.substring(a.length-f);a=a.substring(0,a.length-f);b=b.substring(0,
b.length-f);a=this.diff_compute_(a,b,e,d);c&&a.unshift(new diff_match_patch.Diff(DIFF_EQUAL,c));g&&a.push(new diff_match_patch.Diff(DIFF_EQUAL,g));this.diff_cleanupMerge(a);return a};
diff_match_patch.prototype.diff_compute_=function(a,b,c,d){if(!a)return[new diff_match_patch.Diff(DIFF_INSERT,b)];if(!b)return[new diff_match_patch.Diff(DIFF_DELETE,a)];var e=a.length>b.length?a:b,f=a.length>b.length?b:a,g=e.indexOf(f);return-1!=g?(c=[new diff_match_patch.Diff(DIFF_INSERT,e.substring(0,g)),new diff_match_patch.Diff(DIFF_EQUAL,f),new diff_match_patch.Diff(DIFF_INSERT,e.substring(g+f.length))],a.length>b.length&&(c[0][0]=c[2][0]=DIFF_DELETE),c):1==f.length?[new diff_match_patch.Diff(DIFF_DELETE,
a),new diff_match_patch.Diff(DIFF_INSERT,b)]:(e=this.diff_halfMatch_(a,b))?(b=e[1],f=e[3],a=e[4],e=this.diff_main(e[0],e[2],c,d),c=this.diff_main(b,f,c,d),e.concat([new diff_match_patch.Diff(DIFF_EQUAL,a)],c)):c&&100<a.length&&100<b.length?this.diff_lineMode_(a,b,d):this.diff_bisect_(a,b,d)};
diff_match_patch.prototype.diff_lineMode_=function(a,b,c){var d=this.diff_linesToChars_(a,b);a=d.chars1;b=d.chars2;d=d.lineArray;a=this.diff_main(a,b,!1,c);this.diff_charsToLines_(a,d);this.diff_cleanupSemantic(a);a.push(new diff_match_patch.Diff(DIFF_EQUAL,""));for(var e=d=b=0,f="",g="";b<a.length;){switch(a[b][0]){case DIFF_INSERT:e++;g+=a[b][1];break;case DIFF_DELETE:d++;f+=a[b][1];break;case DIFF_EQUAL:if(1<=d&&1<=e){a.splice(b-d-e,d+e);b=b-d-e;d=this.diff_main(f,g,!1,c);for(e=d.length-1;0<=e;e--)a.splice(b,
0,d[e]);b+=d.length}d=e=0;g=f=""}b++}a.pop();return a};
diff_match_patch.prototype.diff_bisect_=function(a,b,c){for(var d=a.length,e=b.length,f=Math.ceil((d+e)/2),g=2*f,h=Array(g),l=Array(g),k=0;k<g;k++)h[k]=-1,l[k]=-1;h[f+1]=0;l[f+1]=0;k=d-e;for(var m=0!=k%2,p=0,x=0,w=0,q=0,t=0;t<f&&!((new Date).getTime()>c);t++){for(var v=-t+p;v<=t-x;v+=2){var n=f+v;var r=v==-t||v!=t&&h[n-1]<h[n+1]?h[n+1]:h[n-1]+1;for(var y=r-v;r<d&&y<e&&a.charAt(r)==b.charAt(y);)r++,y++;h[n]=r;if(r>d)x+=2;else if(y>e)p+=2;else if(m&&(n=f+k-v,0<=n&&n<g&&-1!=l[n])){var u=d-l[n];if(r>=
u)return this.diff_bisectSplit_(a,b,r,y,c)}}for(v=-t+w;v<=t-q;v+=2){n=f+v;u=v==-t||v!=t&&l[n-1]<l[n+1]?l[n+1]:l[n-1]+1;for(r=u-v;u<d&&r<e&&a.charAt(d-u-1)==b.charAt(e-r-1);)u++,r++;l[n]=u;if(u>d)q+=2;else if(r>e)w+=2;else if(!m&&(n=f+k-v,0<=n&&n<g&&-1!=h[n]&&(r=h[n],y=f+r-n,u=d-u,r>=u)))return this.diff_bisectSplit_(a,b,r,y,c)}}return[new diff_match_patch.Diff(DIFF_DELETE,a),new diff_match_patch.Diff(DIFF_INSERT,b)]};
diff_match_patch.prototype.diff_bisectSplit_=function(a,b,c,d,e){var f=a.substring(0,c),g=b.substring(0,d);a=a.substring(c);b=b.substring(d);f=this.diff_main(f,g,!1,e);e=this.diff_main(a,b,!1,e);return f.concat(e)};
diff_match_patch.prototype.diff_linesToChars_=function(a,b){function c(a){for(var b="",c=0,g=-1,h=d.length;g<a.length-1;){g=a.indexOf("\n",c);-1==g&&(g=a.length-1);var l=a.substring(c,g+1);(e.hasOwnProperty?e.hasOwnProperty(l):void 0!==e[l])?b+=String.fromCharCode(e[l]):(h==f&&(l=a.substring(c),g=a.length),b+=String.fromCharCode(h),e[l]=h,d[h++]=l);c=g+1}return b}var d=[],e={};d[0]="";var f=4E4,g=c(a);f=65535;var h=c(b);return{chars1:g,chars2:h,lineArray:d}};
diff_match_patch.prototype.diff_charsToLines_=function(a,b){for(var c=0;c<a.length;c++){for(var d=a[c][1],e=[],f=0;f<d.length;f++)e[f]=b[d.charCodeAt(f)];a[c][1]=e.join("")}};diff_match_patch.prototype.diff_commonPrefix=function(a,b){if(!a||!b||a.charAt(0)!=b.charAt(0))return 0;for(var c=0,d=Math.min(a.length,b.length),e=d,f=0;c<e;)a.substring(f,e)==b.substring(f,e)?f=c=e:d=e,e=Math.floor((d-c)/2+c);return e};
diff_match_patch.prototype.diff_commonSuffix=function(a,b){if(!a||!b||a.charAt(a.length-1)!=b.charAt(b.length-1))return 0;for(var c=0,d=Math.min(a.length,b.length),e=d,f=0;c<e;)a.substring(a.length-e,a.length-f)==b.substring(b.length-e,b.length-f)?f=c=e:d=e,e=Math.floor((d-c)/2+c);return e};
diff_match_patch.prototype.diff_commonOverlap_=function(a,b){var c=a.length,d=b.length;if(0==c||0==d)return 0;c>d?a=a.substring(c-d):c<d&&(b=b.substring(0,c));c=Math.min(c,d);if(a==b)return c;d=0;for(var e=1;;){var f=a.substring(c-e);f=b.indexOf(f);if(-1==f)return d;e+=f;if(0==f||a.substring(c-e)==b.substring(0,e))d=e,e++}};
diff_match_patch.prototype.diff_halfMatch_=function(a,b){function c(a,b,c){for(var d=a.substring(c,c+Math.floor(a.length/4)),e=-1,g="",h,k,l,m;-1!=(e=b.indexOf(d,e+1));){var p=f.diff_commonPrefix(a.substring(c),b.substring(e)),u=f.diff_commonSuffix(a.substring(0,c),b.substring(0,e));g.length<u+p&&(g=b.substring(e-u,e)+b.substring(e,e+p),h=a.substring(0,c-u),k=a.substring(c+p),l=b.substring(0,e-u),m=b.substring(e+p))}return 2*g.length>=a.length?[h,k,l,m,g]:null}if(0>=this.Diff_Timeout)return null;
var d=a.length>b.length?a:b,e=a.length>b.length?b:a;if(4>d.length||2*e.length<d.length)return null;var f=this,g=c(d,e,Math.ceil(d.length/4));d=c(d,e,Math.ceil(d.length/2));if(g||d)g=d?g?g[4].length>d[4].length?g:d:d:g;else return null;if(a.length>b.length){d=g[0];e=g[1];var h=g[2];var l=g[3]}else h=g[0],l=g[1],d=g[2],e=g[3];return[d,e,h,l,g[4]]};
diff_match_patch.prototype.diff_cleanupSemantic=function(a){for(var b=!1,c=[],d=0,e=null,f=0,g=0,h=0,l=0,k=0;f<a.length;)a[f][0]==DIFF_EQUAL?(c[d++]=f,g=l,h=k,k=l=0,e=a[f][1]):(a[f][0]==DIFF_INSERT?l+=a[f][1].length:k+=a[f][1].length,e&&e.length<=Math.max(g,h)&&e.length<=Math.max(l,k)&&(a.splice(c[d-1],0,new diff_match_patch.Diff(DIFF_DELETE,e)),a[c[d-1]+1][0]=DIFF_INSERT,d--,d--,f=0<d?c[d-1]:-1,k=l=h=g=0,e=null,b=!0)),f++;b&&this.diff_cleanupMerge(a);this.diff_cleanupSemanticLossless(a);for(f=1;f<
a.length;){if(a[f-1][0]==DIFF_DELETE&&a[f][0]==DIFF_INSERT){b=a[f-1][1];c=a[f][1];d=this.diff_commonOverlap_(b,c);e=this.diff_commonOverlap_(c,b);if(d>=e){if(d>=b.length/2||d>=c.length/2)a.splice(f,0,new diff_match_patch.Diff(DIFF_EQUAL,c.substring(0,d))),a[f-1][1]=b.substring(0,b.length-d),a[f+1][1]=c.substring(d),f++}else if(e>=b.length/2||e>=c.length/2)a.splice(f,0,new diff_match_patch.Diff(DIFF_EQUAL,b.substring(0,e))),a[f-1][0]=DIFF_INSERT,a[f-1][1]=c.substring(0,c.length-e),a[f+1][0]=DIFF_DELETE,
a[f+1][1]=b.substring(e),f++;f++}f++}};
diff_match_patch.prototype.diff_cleanupSemanticLossless=function(a){function b(a,b){if(!a||!b)return 6;var c=a.charAt(a.length-1),d=b.charAt(0),e=c.match(diff_match_patch.nonAlphaNumericRegex_),f=d.match(diff_match_patch.nonAlphaNumericRegex_),g=e&&c.match(diff_match_patch.whitespaceRegex_),h=f&&d.match(diff_match_patch.whitespaceRegex_);c=g&&c.match(diff_match_patch.linebreakRegex_);d=h&&d.match(diff_match_patch.linebreakRegex_);var k=c&&a.match(diff_match_patch.blanklineEndRegex_),l=d&&b.match(diff_match_patch.blanklineStartRegex_);
return k||l?5:c||d?4:e&&!g&&h?3:g||h?2:e||f?1:0}for(var c=1;c<a.length-1;){if(a[c-1][0]==DIFF_EQUAL&&a[c+1][0]==DIFF_EQUAL){var d=a[c-1][1],e=a[c][1],f=a[c+1][1],g=this.diff_commonSuffix(d,e);if(g){var h=e.substring(e.length-g);d=d.substring(0,d.length-g);e=h+e.substring(0,e.length-g);f=h+f}g=d;h=e;for(var l=f,k=b(d,e)+b(e,f);e.charAt(0)===f.charAt(0);){d+=e.charAt(0);e=e.substring(1)+f.charAt(0);f=f.substring(1);var m=b(d,e)+b(e,f);m>=k&&(k=m,g=d,h=e,l=f)}a[c-1][1]!=g&&(g?a[c-1][1]=g:(a.splice(c-
1,1),c--),a[c][1]=h,l?a[c+1][1]=l:(a.splice(c+1,1),c--))}c++}};diff_match_patch.nonAlphaNumericRegex_=/[^a-zA-Z0-9]/;diff_match_patch.whitespaceRegex_=/\s/;diff_match_patch.linebreakRegex_=/[\r\n]/;diff_match_patch.blanklineEndRegex_=/\n\r?\n$/;diff_match_patch.blanklineStartRegex_=/^\r?\n\r?\n/;
diff_match_patch.prototype.diff_cleanupEfficiency=function(a){for(var b=!1,c=[],d=0,e=null,f=0,g=!1,h=!1,l=!1,k=!1;f<a.length;)a[f][0]==DIFF_EQUAL?(a[f][1].length<this.Diff_EditCost&&(l||k)?(c[d++]=f,g=l,h=k,e=a[f][1]):(d=0,e=null),l=k=!1):(a[f][0]==DIFF_DELETE?k=!0:l=!0,e&&(g&&h&&l&&k||e.length<this.Diff_EditCost/2&&3==g+h+l+k)&&(a.splice(c[d-1],0,new diff_match_patch.Diff(DIFF_DELETE,e)),a[c[d-1]+1][0]=DIFF_INSERT,d--,e=null,g&&h?(l=k=!0,d=0):(d--,f=0<d?c[d-1]:-1,l=k=!1),b=!0)),f++;b&&this.diff_cleanupMerge(a)};
diff_match_patch.prototype.diff_cleanupMerge=function(a){a.push(new diff_match_patch.Diff(DIFF_EQUAL,""));for(var b=0,c=0,d=0,e="",f="",g;b<a.length;)switch(a[b][0]){case DIFF_INSERT:d++;f+=a[b][1];b++;break;case DIFF_DELETE:c++;e+=a[b][1];b++;break;case DIFF_EQUAL:1<c+d?(0!==c&&0!==d&&(g=this.diff_commonPrefix(f,e),0!==g&&(0<b-c-d&&a[b-c-d-1][0]==DIFF_EQUAL?a[b-c-d-1][1]+=f.substring(0,g):(a.splice(0,0,new diff_match_patch.Diff(DIFF_EQUAL,f.substring(0,g))),b++),f=f.substring(g),e=e.substring(g)),
g=this.diff_commonSuffix(f,e),0!==g&&(a[b][1]=f.substring(f.length-g)+a[b][1],f=f.substring(0,f.length-g),e=e.substring(0,e.length-g))),b-=c+d,a.splice(b,c+d),e.length&&(a.splice(b,0,new diff_match_patch.Diff(DIFF_DELETE,e)),b++),f.length&&(a.splice(b,0,new diff_match_patch.Diff(DIFF_INSERT,f)),b++),b++):0!==b&&a[b-1][0]==DIFF_EQUAL?(a[b-1][1]+=a[b][1],a.splice(b,1)):b++,c=d=0,f=e=""}""===a[a.length-1][1]&&a.pop();c=!1;for(b=1;b<a.length-1;)a[b-1][0]==DIFF_EQUAL&&a[b+1][0]==DIFF_EQUAL&&(a[b][1].substring(a[b][1].length-
a[b-1][1].length)==a[b-1][1]?(a[b][1]=a[b-1][1]+a[b][1].substring(0,a[b][1].length-a[b-1][1].length),a[b+1][1]=a[b-1][1]+a[b+1][1],a.splice(b-1,1),c=!0):a[b][1].substring(0,a[b+1][1].length)==a[b+1][1]&&(a[b-1][1]+=a[b+1][1],a[b][1]=a[b][1].substring(a[b+1][1].length)+a[b+1][1],a.splice(b+1,1),c=!0)),b++;c&&this.diff_cleanupMerge(a)};
diff_match_patch.prototype.diff_xIndex=function(a,b){var c=0,d=0,e=0,f=0,g;for(g=0;g<a.length;g++){a[g][0]!==DIFF_INSERT&&(c+=a[g][1].length);a[g][0]!==DIFF_DELETE&&(d+=a[g][1].length);if(c>b)break;e=c;f=d}return a.length!=g&&a[g][0]===DIFF_DELETE?f:f+(b-e)};
diff_match_patch.prototype.diff_prettyHtml=function(a){for(var b=[],c=/&/g,d=/</g,e=/>/g,f=/\n/g,g=0;g<a.length;g++){var h=a[g][0],l=a[g][1].replace(c,"&amp;").replace(d,"&lt;").replace(e,"&gt;").replace(f,"&para;<br>");switch(h){case DIFF_INSERT:b[g]='<ins style="background:#e6ffe6;">'+l+"</ins>";break;case DIFF_DELETE:b[g]='<del style="background:#ffe6e6;">'+l+"</del>";break;case DIFF_EQUAL:b[g]="<span>"+l+"</span>"}}return b.join("")};
diff_match_patch.prototype.diff_text1=function(a){for(var b=[],c=0;c<a.length;c++)a[c][0]!==DIFF_INSERT&&(b[c]=a[c][1]);return b.join("")};diff_match_patch.prototype.diff_text2=function(a){for(var b=[],c=0;c<a.length;c++)a[c][0]!==DIFF_DELETE&&(b[c]=a[c][1]);return b.join("")};
diff_match_patch.prototype.diff_levenshtein=function(a){for(var b=0,c=0,d=0,e=0;e<a.length;e++){var f=a[e][1];switch(a[e][0]){case DIFF_INSERT:c+=f.length;break;case DIFF_DELETE:d+=f.length;break;case DIFF_EQUAL:b+=Math.max(c,d),d=c=0}}return b+=Math.max(c,d)};
diff_match_patch.prototype.diff_toDelta=function(a){for(var b=[],c=0;c<a.length;c++)switch(a[c][0]){case DIFF_INSERT:b[c]="+"+encodeURI(a[c][1]);break;case DIFF_DELETE:b[c]="-"+a[c][1].length;break;case DIFF_EQUAL:b[c]="="+a[c][1].length}return b.join("\t").replace(/%20/g," ")};
diff_match_patch.prototype.diff_fromDelta=function(a,b){for(var c=[],d=0,e=0,f=b.split(/\t/g),g=0;g<f.length;g++){var h=f[g].substring(1);switch(f[g].charAt(0)){case "+":try{c[d++]=new diff_match_patch.Diff(DIFF_INSERT,decodeURI(h))}catch(k){throw Error("Illegal escape in diff_fromDelta: "+h);}break;case "-":case "=":var l=parseInt(h,10);if(isNaN(l)||0>l)throw Error("Invalid number in diff_fromDelta: "+h);h=a.substring(e,e+=l);"="==f[g].charAt(0)?c[d++]=new diff_match_patch.Diff(DIFF_EQUAL,h):c[d++]=
new diff_match_patch.Diff(DIFF_DELETE,h);break;default:if(f[g])throw Error("Invalid diff operation in diff_fromDelta: "+f[g]);}}if(e!=a.length)throw Error("Delta length ("+e+") does not equal source text length ("+a.length+").");return c};diff_match_patch.prototype.match_main=function(a,b,c){if(null==a||null==b||null==c)throw Error("Null input. (match_main)");c=Math.max(0,Math.min(c,a.length));return a==b?0:a.length?a.substring(c,c+b.length)==b?c:this.match_bitap_(a,b,c):-1};
diff_match_patch.prototype.match_bitap_=function(a,b,c){function d(a,d){var e=a/b.length,g=Math.abs(c-d);return f.Match_Distance?e+g/f.Match_Distance:g?1:e}if(b.length>this.Match_MaxBits)throw Error("Pattern too long for this browser.");var e=this.match_alphabet_(b),f=this,g=this.Match_Threshold,h=a.indexOf(b,c);-1!=h&&(g=Math.min(d(0,h),g),h=a.lastIndexOf(b,c+b.length),-1!=h&&(g=Math.min(d(0,h),g)));var l=1<<b.length-1;h=-1;for(var k,m,p=b.length+a.length,x,w=0;w<b.length;w++){k=0;for(m=p;k<m;)d(w,
c+m)<=g?k=m:p=m,m=Math.floor((p-k)/2+k);p=m;k=Math.max(1,c-m+1);var q=Math.min(c+m,a.length)+b.length;m=Array(q+2);for(m[q+1]=(1<<w)-1;q>=k;q--){var t=e[a.charAt(q-1)];m[q]=0===w?(m[q+1]<<1|1)&t:(m[q+1]<<1|1)&t|(x[q+1]|x[q])<<1|1|x[q+1];if(m[q]&l&&(t=d(w,q-1),t<=g))if(g=t,h=q-1,h>c)k=Math.max(1,2*c-h);else break}if(d(w+1,c)>g)break;x=m}return h};
diff_match_patch.prototype.match_alphabet_=function(a){for(var b={},c=0;c<a.length;c++)b[a.charAt(c)]=0;for(c=0;c<a.length;c++)b[a.charAt(c)]|=1<<a.length-c-1;return b};
diff_match_patch.prototype.patch_addContext_=function(a,b){if(0!=b.length){if(null===a.start2)throw Error("patch not initialized");for(var c=b.substring(a.start2,a.start2+a.length1),d=0;b.indexOf(c)!=b.lastIndexOf(c)&&c.length<this.Match_MaxBits-this.Patch_Margin-this.Patch_Margin;)d+=this.Patch_Margin,c=b.substring(a.start2-d,a.start2+a.length1+d);d+=this.Patch_Margin;(c=b.substring(a.start2-d,a.start2))&&a.diffs.unshift(new diff_match_patch.Diff(DIFF_EQUAL,c));(d=b.substring(a.start2+a.length1,
a.start2+a.length1+d))&&a.diffs.push(new diff_match_patch.Diff(DIFF_EQUAL,d));a.start1-=c.length;a.start2-=c.length;a.length1+=c.length+d.length;a.length2+=c.length+d.length}};
diff_match_patch.prototype.patch_make=function(a,b,c){if("string"==typeof a&&"string"==typeof b&&"undefined"==typeof c){var d=a;b=this.diff_main(d,b,!0);2<b.length&&(this.diff_cleanupSemantic(b),this.diff_cleanupEfficiency(b))}else if(a&&"object"==typeof a&&"undefined"==typeof b&&"undefined"==typeof c)b=a,d=this.diff_text1(b);else if("string"==typeof a&&b&&"object"==typeof b&&"undefined"==typeof c)d=a;else if("string"==typeof a&&"string"==typeof b&&c&&"object"==typeof c)d=a,b=c;else throw Error("Unknown call format to patch_make.");
if(0===b.length)return[];c=[];a=new diff_match_patch.patch_obj;for(var e=0,f=0,g=0,h=d,l=0;l<b.length;l++){var k=b[l][0],m=b[l][1];e||k===DIFF_EQUAL||(a.start1=f,a.start2=g);switch(k){case DIFF_INSERT:a.diffs[e++]=b[l];a.length2+=m.length;d=d.substring(0,g)+m+d.substring(g);break;case DIFF_DELETE:a.length1+=m.length;a.diffs[e++]=b[l];d=d.substring(0,g)+d.substring(g+m.length);break;case DIFF_EQUAL:m.length<=2*this.Patch_Margin&&e&&b.length!=l+1?(a.diffs[e++]=b[l],a.length1+=m.length,a.length2+=m.length):
m.length>=2*this.Patch_Margin&&e&&(this.patch_addContext_(a,h),c.push(a),a=new diff_match_patch.patch_obj,e=0,h=d,f=g)}k!==DIFF_INSERT&&(f+=m.length);k!==DIFF_DELETE&&(g+=m.length)}e&&(this.patch_addContext_(a,h),c.push(a));return c};
diff_match_patch.prototype.patch_deepCopy=function(a){for(var b=[],c=0;c<a.length;c++){var d=a[c],e=new diff_match_patch.patch_obj;e.diffs=[];for(var f=0;f<d.diffs.length;f++)e.diffs[f]=new diff_match_patch.Diff(d.diffs[f][0],d.diffs[f][1]);e.start1=d.start1;e.start2=d.start2;e.length1=d.length1;e.length2=d.length2;b[c]=e}return b};
diff_match_patch.prototype.patch_apply=function(a,b){if(0==a.length)return[b,[]];a=this.patch_deepCopy(a);var c=this.patch_addPadding(a);b=c+b+c;this.patch_splitMax(a);for(var d=0,e=[],f=0;f<a.length;f++){var g=a[f].start2+d,h=this.diff_text1(a[f].diffs),l=-1;if(h.length>this.Match_MaxBits){var k=this.match_main(b,h.substring(0,this.Match_MaxBits),g);-1!=k&&(l=this.match_main(b,h.substring(h.length-this.Match_MaxBits),g+h.length-this.Match_MaxBits),-1==l||k>=l)&&(k=-1)}else k=this.match_main(b,h,
g);if(-1==k)e[f]=!1,d-=a[f].length2-a[f].length1;else if(e[f]=!0,d=k-g,g=-1==l?b.substring(k,k+h.length):b.substring(k,l+this.Match_MaxBits),h==g)b=b.substring(0,k)+this.diff_text2(a[f].diffs)+b.substring(k+h.length);else if(g=this.diff_main(h,g,!1),h.length>this.Match_MaxBits&&this.diff_levenshtein(g)/h.length>this.Patch_DeleteThreshold)e[f]=!1;else{this.diff_cleanupSemanticLossless(g);h=0;var m;for(l=0;l<a[f].diffs.length;l++){var p=a[f].diffs[l];p[0]!==DIFF_EQUAL&&(m=this.diff_xIndex(g,h));p[0]===
DIFF_INSERT?b=b.substring(0,k+m)+p[1]+b.substring(k+m):p[0]===DIFF_DELETE&&(b=b.substring(0,k+m)+b.substring(k+this.diff_xIndex(g,h+p[1].length)));p[0]!==DIFF_DELETE&&(h+=p[1].length)}}}b=b.substring(c.length,b.length-c.length);return[b,e]};
diff_match_patch.prototype.patch_addPadding=function(a){for(var b=this.Patch_Margin,c="",d=1;d<=b;d++)c+=String.fromCharCode(d);for(d=0;d<a.length;d++)a[d].start1+=b,a[d].start2+=b;d=a[0];var e=d.diffs;if(0==e.length||e[0][0]!=DIFF_EQUAL)e.unshift(new diff_match_patch.Diff(DIFF_EQUAL,c)),d.start1-=b,d.start2-=b,d.length1+=b,d.length2+=b;else if(b>e[0][1].length){var f=b-e[0][1].length;e[0][1]=c.substring(e[0][1].length)+e[0][1];d.start1-=f;d.start2-=f;d.length1+=f;d.length2+=f}d=a[a.length-1];e=d.diffs;
0==e.length||e[e.length-1][0]!=DIFF_EQUAL?(e.push(new diff_match_patch.Diff(DIFF_EQUAL,c)),d.length1+=b,d.length2+=b):b>e[e.length-1][1].length&&(f=b-e[e.length-1][1].length,e[e.length-1][1]+=c.substring(0,f),d.length1+=f,d.length2+=f);return c};
diff_match_patch.prototype.patch_splitMax=function(a){for(var b=this.Match_MaxBits,c=0;c<a.length;c++)if(!(a[c].length1<=b)){var d=a[c];a.splice(c--,1);for(var e=d.start1,f=d.start2,g="";0!==d.diffs.length;){var h=new diff_match_patch.patch_obj,l=!0;h.start1=e-g.length;h.start2=f-g.length;""!==g&&(h.length1=h.length2=g.length,h.diffs.push(new diff_match_patch.Diff(DIFF_EQUAL,g)));for(;0!==d.diffs.length&&h.length1<b-this.Patch_Margin;){g=d.diffs[0][0];var k=d.diffs[0][1];g===DIFF_INSERT?(h.length2+=
k.length,f+=k.length,h.diffs.push(d.diffs.shift()),l=!1):g===DIFF_DELETE&&1==h.diffs.length&&h.diffs[0][0]==DIFF_EQUAL&&k.length>2*b?(h.length1+=k.length,e+=k.length,l=!1,h.diffs.push(new diff_match_patch.Diff(g,k)),d.diffs.shift()):(k=k.substring(0,b-h.length1-this.Patch_Margin),h.length1+=k.length,e+=k.length,g===DIFF_EQUAL?(h.length2+=k.length,f+=k.length):l=!1,h.diffs.push(new diff_match_patch.Diff(g,k)),k==d.diffs[0][1]?d.diffs.shift():d.diffs[0][1]=d.diffs[0][1].substring(k.length))}g=this.diff_text2(h.diffs);
g=g.substring(g.length-this.Patch_Margin);k=this.diff_text1(d.diffs).substring(0,this.Patch_Margin);""!==k&&(h.length1+=k.length,h.length2+=k.length,0!==h.diffs.length&&h.diffs[h.diffs.length-1][0]===DIFF_EQUAL?h.diffs[h.diffs.length-1][1]+=k:h.diffs.push(new diff_match_patch.Diff(DIFF_EQUAL,k)));l||a.splice(++c,0,h)}}};diff_match_patch.prototype.patch_toText=function(a){for(var b=[],c=0;c<a.length;c++)b[c]=a[c];return b.join("")};
diff_match_patch.prototype.patch_fromText=function(a){var b=[];if(!a)return b;a=a.split("\n");for(var c=0,d=/^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;c<a.length;){var e=a[c].match(d);if(!e)throw Error("Invalid patch string: "+a[c]);var f=new diff_match_patch.patch_obj;b.push(f);f.start1=parseInt(e[1],10);""===e[2]?(f.start1--,f.length1=1):"0"==e[2]?f.length1=0:(f.start1--,f.length1=parseInt(e[2],10));f.start2=parseInt(e[3],10);""===e[4]?(f.start2--,f.length2=1):"0"==e[4]?f.length2=0:(f.start2--,f.length2=
parseInt(e[4],10));for(c++;c<a.length;){e=a[c].charAt(0);try{var g=decodeURI(a[c].substring(1))}catch(h){throw Error("Illegal escape in patch_fromText: "+g);}if("-"==e)f.diffs.push(new diff_match_patch.Diff(DIFF_DELETE,g));else if("+"==e)f.diffs.push(new diff_match_patch.Diff(DIFF_INSERT,g));else if(" "==e)f.diffs.push(new diff_match_patch.Diff(DIFF_EQUAL,g));else if("@"==e)break;else if(""!==e)throw Error('Invalid patch mode "'+e+'" in: '+g);c++}}return b};
diff_match_patch.patch_obj=function(){this.diffs=[];this.start2=this.start1=null;this.length2=this.length1=0};
diff_match_patch.patch_obj.prototype.toString=function(){for(var a=["@@ -"+(0===this.length1?this.start1+",0":1==this.length1?this.start1+1:this.start1+1+","+this.length1)+" +"+(0===this.length2?this.start2+",0":1==this.length2?this.start2+1:this.start2+1+","+this.length2)+" @@\n"],b,c=0;c<this.diffs.length;c++){switch(this.diffs[c][0]){case DIFF_INSERT:b="+";break;case DIFF_DELETE:b="-";break;case DIFF_EQUAL:b=" "}a[c+1]=b+encodeURI(this.diffs[c][1])+"\n"}return a.join("").replace(/%20/g," ")};
this.diff_match_patch=diff_match_patch;this.DIFF_DELETE=DIFF_DELETE;this.DIFF_INSERT=DIFF_INSERT;this.DIFF_EQUAL=DIFF_EQUAL;


/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /npm/jsondiffpatch@0.5.0/dist/jsondiffpatch.umd.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("./empty")):"function"==typeof define&&define.amd?define(["exports","./empty"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).jsondiffpatch={},t.chalk)}(this,(function(t,e){"use strict";class n{constructor(t){this.selfOptions=t||{},this.pipes={}}options(t){return t&&(this.selfOptions=t),this.selfOptions}pipe(t,e){let n=e;if("string"==typeof t){if(void 0===n)return this.pipes[t];this.pipes[t]=n}if(t&&t.name){if(n=t,n.processor===this)return n;this.pipes[n.name]=n}return n.processor=this,n}process(t,e){let n=t;n.options=this.options();let r,i,s=e||t.pipe||"default";for(;s;)void 0!==n.nextAfterChildren&&(n.next=n.nextAfterChildren,n.nextAfterChildren=null),"string"==typeof s&&(s=this.pipe(s)),s.process(n),i=n,r=s,s=null,n&&n.next&&(n=n.next,s=i.nextPipe||n.pipe||r);return n.hasResult?n.result:void 0}}class r{constructor(t){this.name=t,this.filters=[]}process(t){if(!this.processor)throw new Error("add this pipe to a processor before using it");const e=this.debug,n=this.filters.length,r=t;for(let t=0;t<n;t++){const n=this.filters[t];if(e&&this.log(`filter: ${n.filterName}`),n(r),"object"==typeof r&&r.exiting){r.exiting=!1;break}}!r.next&&this.resultCheck&&this.resultCheck(r)}log(t){console.log(`[jsondiffpatch] ${this.name} pipe, ${t}`)}append(){return this.filters.push(...arguments),this}prepend(){return this.filters.unshift(...arguments),this}indexOf(t){if(!t)throw new Error("a filter name is required");for(let e=0;e<this.filters.length;e++){if(this.filters[e].filterName===t)return e}throw new Error(`filter not found: ${t}`)}list(){return this.filters.map((t=>t.filterName))}after(t){const e=this.indexOf(t),n=Array.prototype.slice.call(arguments,1);if(!n.length)throw new Error("a filter is required");return n.unshift(e+1,0),Array.prototype.splice.apply(this.filters,n),this}before(t){const e=this.indexOf(t),n=Array.prototype.slice.call(arguments,1);if(!n.length)throw new Error("a filter is required");return n.unshift(e,0),Array.prototype.splice.apply(this.filters,n),this}replace(t){const e=this.indexOf(t),n=Array.prototype.slice.call(arguments,1);if(!n.length)throw new Error("a filter is required");return n.unshift(e,1),Array.prototype.splice.apply(this.filters,n),this}remove(t){const e=this.indexOf(t);return this.filters.splice(e,1),this}clear(){return this.filters.length=0,this}shouldHaveResult(t){if(!1===t)return void(this.resultCheck=null);if(this.resultCheck)return;const e=this;return this.resultCheck=t=>{if(!t.hasResult){console.log(t);const n=new Error(`${e.name} failed`);throw n.noResult=!0,n}},this}}class i{setResult(t){return this.result=t,this.hasResult=!0,this}exit(){return this.exiting=!0,this}switchTo(t,e){return"string"==typeof t||t instanceof r?this.nextPipe=t:(this.next=t,e&&(this.nextPipe=e)),this}push(t,e){return t.parent=this,void 0!==e&&(t.childName=e),t.root=this.root||this,t.options=t.options||this.options,this.children?(this.children[this.children.length-1].next=t,this.children.push(t)):(this.children=[t],this.nextAfterChildren=this.next||null,this.next=t),t.next=this,this}}const s="function"==typeof Array.isArray?Array.isArray:t=>t instanceof Array;function o(t){if("object"!=typeof t)return t;if(null===t)return null;if(s(t))return t.map(o);if(t instanceof Date)return new Date(t.getTime());if(t instanceof RegExp)return function(t){const e=/^\/(.*)\/([gimyu]*)$/.exec(t.toString());return new RegExp(e[1],e[2])}(t);const e={};for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=o(t[n]));return e}class a extends i{constructor(t,e){super(),this.left=t,this.right=e,this.pipe="diff"}setResult(t){if(this.options.cloneDiffValues&&"object"==typeof t){const e="function"==typeof this.options.cloneDiffValues?this.options.cloneDiffValues:o;"object"==typeof t[0]&&(t[0]=e(t[0])),"object"==typeof t[1]&&(t[1]=e(t[1]))}return i.prototype.setResult.apply(this,arguments)}}class l extends i{constructor(t,e){super(),this.left=t,this.delta=e,this.pipe="patch"}}class f extends i{constructor(t){super(),this.delta=t,this.pipe="reverse"}}const h="function"==typeof Array.isArray?Array.isArray:function(t){return t instanceof Array},c=function(t){if(t.left!==t.right)if(void 0!==t.left)if(void 0!==t.right){if("function"==typeof t.left||"function"==typeof t.right)throw new Error("functions are not supported");t.leftType=null===t.left?"null":typeof t.left,t.rightType=null===t.right?"null":typeof t.right,t.leftType===t.rightType&&"boolean"!==t.leftType&&"number"!==t.leftType?("object"===t.leftType&&(t.leftIsArray=h(t.left)),"object"===t.rightType&&(t.rightIsArray=h(t.right)),t.leftIsArray===t.rightIsArray?t.left instanceof RegExp&&(t.right instanceof RegExp?t.setResult([t.left.toString(),t.right.toString()]).exit():t.setResult([t.left,t.right]).exit()):t.setResult([t.left,t.right]).exit()):t.setResult([t.left,t.right]).exit()}else t.setResult([t.left,0,0]).exit();else{if("function"==typeof t.right)throw new Error("functions are not supported");t.setResult([t.right]).exit()}else t.setResult(void 0).exit()};c.filterName="trivial";const u=function(t){if(void 0!==t.delta){if(t.nested=!h(t.delta),!t.nested)if(1!==t.delta.length)if(2!==t.delta.length)3===t.delta.length&&0===t.delta[2]&&t.setResult(void 0).exit();else{if(t.left instanceof RegExp){const e=/^\/(.*)\/([gimyu]+)$/.exec(t.delta[1]);if(e)return void t.setResult(new RegExp(e[1],e[2])).exit()}t.setResult(t.delta[1]).exit()}else t.setResult(t.delta[0]).exit()}else t.setResult(t.left).exit()};u.filterName="trivial";const d=function(t){void 0!==t.delta?(t.nested=!h(t.delta),t.nested||(1!==t.delta.length?2!==t.delta.length?3===t.delta.length&&0===t.delta[2]&&t.setResult([t.delta[0]]).exit():t.setResult([t.delta[1],t.delta[0]]).exit():t.setResult([t.delta[0],0,0]).exit())):t.setResult(t.delta).exit()};function p(t){if(!t||!t.children)return;const e=t.children.length;let n,r=t.result;for(let i=0;i<e;i++)n=t.children[i],void 0!==n.result&&(r=r||{},r[n.childName]=n.result);r&&t.leftIsArray&&(r._t="a"),t.setResult(r).exit()}function g(t){if(t.leftIsArray||"object"!==t.leftType)return;let e,n;const r=t.options.propertyFilter;for(e in t.left)Object.prototype.hasOwnProperty.call(t.left,e)&&(r&&!r(e,t)||(n=new a(t.left[e],t.right[e]),t.push(n,e)));for(e in t.right)Object.prototype.hasOwnProperty.call(t.right,e)&&(r&&!r(e,t)||void 0===t.left[e]&&(n=new a(void 0,t.right[e]),t.push(n,e)));t.children&&0!==t.children.length?t.exit():t.setResult(void 0).exit()}d.filterName="trivial",p.filterName="collectChildren",g.filterName="objects";const m=function(t){if(!t.nested)return;if(t.delta._t)return;let e,n;for(e in t.delta)n=new l(t.left[e],t.delta[e]),t.push(n,e);t.exit()};m.filterName="objects";const v=function(t){if(!t||!t.children)return;if(t.delta._t)return;const e=t.children.length;let n;for(let r=0;r<e;r++)n=t.children[r],Object.prototype.hasOwnProperty.call(t.left,n.childName)&&void 0===n.result?delete t.left[n.childName]:t.left[n.childName]!==n.result&&(t.left[n.childName]=n.result);t.setResult(t.left).exit()};v.filterName="collectChildren";const y=function(t){if(!t.nested)return;if(t.delta._t)return;let e,n;for(e in t.delta)n=new f(t.delta[e]),t.push(n,e);t.exit()};function _(t){if(!t||!t.children)return;if(t.delta._t)return;const e=t.children.length;let n;const r={};for(let i=0;i<e;i++)n=t.children[i],r[n.childName]!==n.result&&(r[n.childName]=n.result);t.setResult(r).exit()}y.filterName="objects",_.filterName="collectChildren";const x=function(t,e,n,r){return t[n]===e[r]};var b=function(t,e,n,r){const i=r||{},s=function(t,e,n,r){const i=t.length,s=e.length;let o,a;const l=[i+1];for(o=0;o<i+1;o++)for(l[o]=[s+1],a=0;a<s+1;a++)l[o][a]=0;for(l.match=n,o=1;o<i+1;o++)for(a=1;a<s+1;a++)n(t,e,o-1,a-1,r)?l[o][a]=l[o-1][a-1]+1:l[o][a]=Math.max(l[o-1][a],l[o][a-1]);return l}(t,e,n||x,i),o=function(t,e,n,r){let i=e.length,s=n.length;const o={sequence:[],indices1:[],indices2:[]};for(;0!==i&&0!==s;)t.match(e,n,i-1,s-1,r)?(o.sequence.unshift(e[i-1]),o.indices1.unshift(i-1),o.indices2.unshift(s-1),--i,--s):t[i][s-1]>t[i-1][s]?--s:--i;return o}(s,t,e,i);return"string"==typeof t&&"string"==typeof e&&(o.sequence=o.sequence.join("")),o};const w="function"==typeof Array.isArray?Array.isArray:t=>t instanceof Array,j="function"==typeof Array.prototype.indexOf?(t,e)=>t.indexOf(e):(t,e)=>{const n=t.length;for(let r=0;r<n;r++)if(t[r]===e)return r;return-1};function D(t,e,n,r,i){const s=t[n],o=e[r];if(s===o)return!0;if("object"!=typeof s||"object"!=typeof o)return!1;const a=i.objectHash;if(!a)return i.matchByPosition&&n===r;let l,f;return"number"==typeof n?(i.hashCache1=i.hashCache1||[],l=i.hashCache1[n],void 0===l&&(i.hashCache1[n]=l=a(s,n))):l=a(s),void 0!==l&&("number"==typeof r?(i.hashCache2=i.hashCache2||[],f=i.hashCache2[r],void 0===f&&(i.hashCache2[r]=f=a(o,r))):f=a(o),void 0!==f&&l===f)}const M=function(t){if(!t.leftIsArray)return;const e={objectHash:t.options&&t.options.objectHash,matchByPosition:t.options&&t.options.matchByPosition};let n,r,i,s=0,o=0;const l=t.left,f=t.right,h=l.length,c=f.length;let u,d;for(h>0&&c>0&&!e.objectHash&&"boolean"!=typeof e.matchByPosition&&(e.matchByPosition=!function(t,e,n,r){for(let i=0;i<n;i++){const n=t[i];for(let t=0;t<r;t++){const r=e[t];if(i!==t&&n===r)return!0}}}(l,f,h,c));s<h&&s<c&&D(l,f,s,s,e);)n=s,u=new a(t.left[n],t.right[n]),t.push(u,n),s++;for(;o+s<h&&o+s<c&&D(l,f,h-1-o,c-1-o,e);)r=h-1-o,i=c-1-o,u=new a(t.left[r],t.right[i]),t.push(u,i),o++;if(s+o===h){if(h===c)return void t.setResult(void 0).exit();for(d=d||{_t:"a"},n=s;n<c-o;n++)d[n]=[f[n]];return void t.setResult(d).exit()}if(s+o===c){for(d=d||{_t:"a"},n=s;n<h-o;n++)d[`_${n}`]=[l[n],0,0];return void t.setResult(d).exit()}delete e.hashCache1,delete e.hashCache2;const p=l.slice(s,h-o),g=f.slice(s,c-o),m=b(p,g,D,e),v=[];for(d=d||{_t:"a"},n=s;n<h-o;n++)j(m.indices1,n-s)<0&&(d[`_${n}`]=[l[n],0,0],v.push(n));let y=!0;t.options&&t.options.arrays&&!1===t.options.arrays.detectMove&&(y=!1);let _=!1;t.options&&t.options.arrays&&t.options.arrays.includeValueOnMove&&(_=!0);const x=v.length;for(n=s;n<c-o;n++){const o=j(m.indices2,n-s);if(o<0){let o=!1;if(y&&x>0)for(let l=0;l<x;l++)if(r=v[l],D(p,g,r-s,n-s,e)){d[`_${r}`].splice(1,2,n,3),_||(d[`_${r}`][0]=""),i=n,u=new a(t.left[r],t.right[i]),t.push(u,i),v.splice(l,1),o=!0;break}o||(d[n]=[f[n]])}else r=m.indices1[o]+s,i=m.indices2[o]+s,u=new a(t.left[r],t.right[i]),t.push(u,i)}t.setResult(d).exit()};M.filterName="arrays";const A={numerically:(t,e)=>t-e,numericallyBy:t=>(e,n)=>e[t]-n[t]},$=function(t){if(!t.nested)return;if("a"!==t.delta._t)return;let e,n;const r=t.delta,i=t.left;let s=[],o=[];const a=[];for(e in r)if("_t"!==e)if("_"===e[0]){if(0!==r[e][2]&&3!==r[e][2])throw new Error(`only removal or move can be applied at original array indices, invalid diff type: ${r[e][2]}`);s.push(parseInt(e.slice(1),10))}else 1===r[e].length?o.push({index:parseInt(e,10),value:r[e][0]}):a.push({index:parseInt(e,10),delta:r[e]});for(s=s.sort(A.numerically),e=s.length-1;e>=0;e--){n=s[e];const t=r[`_${n}`],a=i.splice(n,1)[0];3===t[2]&&o.push({index:t[1],value:a})}o=o.sort(A.numericallyBy("index"));const f=o.length;for(e=0;e<f;e++){const t=o[e];i.splice(t.index,0,t.value)}const h=a.length;let c;if(h>0)for(e=0;e<h;e++){const n=a[e];c=new l(t.left[n.index],n.delta),t.push(c,n.index)}t.children?t.exit():t.setResult(t.left).exit()};$.filterName="arrays";const R=function(t){if(!t||!t.children)return;if("a"!==t.delta._t)return;const e=t.children.length;let n;for(let r=0;r<e;r++)n=t.children[r],t.left[n.childName]=n.result;t.setResult(t.left).exit()};R.filterName="arraysCollectChildren";const C=function(t){if(!t.nested)return void(3===t.delta[2]&&(t.newName=`_${t.delta[1]}`,t.setResult([t.delta[0],parseInt(t.childName.substr(1),10),3]).exit()));if("a"!==t.delta._t)return;let e,n;for(e in t.delta)"_t"!==e&&(n=new f(t.delta[e]),t.push(n,e));t.exit()};C.filterName="arrays";const E=(t,e,n)=>{if("string"==typeof e&&"_"===e[0])return parseInt(e.substr(1),10);if(w(n)&&0===n[2])return`_${e}`;let r=+e;for(const n in t){const i=t[n];if(w(i))if(3===i[2]){const t=parseInt(n.substr(1),10),s=i[1];if(s===+e)return t;t<=r&&s>r?r++:t>=r&&s<r&&r--}else if(0===i[2]){parseInt(n.substr(1),10)<=r&&r++}else 1===i.length&&n<=r&&r--}return r};function k(t){if(!t||!t.children)return;if("a"!==t.delta._t)return;const e=t.children.length;let n;const r={_t:"a"};for(let i=0;i<e;i++){n=t.children[i];let e=n.newName;void 0===e&&(e=E(t.delta,n.childName,n.result)),r[e]!==n.result&&(r[e]=n.result)}t.setResult(r).exit()}k.filterName="arraysCollectChildren";const O=function(t){t.left instanceof Date?(t.right instanceof Date?t.left.getTime()!==t.right.getTime()?t.setResult([t.left,t.right]):t.setResult(void 0):t.setResult([t.left,t.right]),t.exit()):t.right instanceof Date&&t.setResult([t.left,t.right]).exit()};function T(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}O.filterName="dates";var N={exports:{}};!function(t){var e=function(){this.Diff_Timeout=1,this.Diff_EditCost=4,this.Match_Threshold=.5,this.Match_Distance=1e3,this.Patch_DeleteThreshold=.5,this.Patch_Margin=4,this.Match_MaxBits=32},n=-1;e.Diff=function(t,e){return[t,e]},e.prototype.diff_main=function(t,n,r,i){void 0===i&&(i=this.Diff_Timeout<=0?Number.MAX_VALUE:(new Date).getTime()+1e3*this.Diff_Timeout);var s=i;if(null==t||null==n)throw new Error("Null input. (diff_main)");if(t==n)return t?[new e.Diff(0,t)]:[];void 0===r&&(r=!0);var o=r,a=this.diff_commonPrefix(t,n),l=t.substring(0,a);t=t.substring(a),n=n.substring(a),a=this.diff_commonSuffix(t,n);var f=t.substring(t.length-a);t=t.substring(0,t.length-a),n=n.substring(0,n.length-a);var h=this.diff_compute_(t,n,o,s);return l&&h.unshift(new e.Diff(0,l)),f&&h.push(new e.Diff(0,f)),this.diff_cleanupMerge(h),h},e.prototype.diff_compute_=function(t,r,i,s){var o;if(!t)return[new e.Diff(1,r)];if(!r)return[new e.Diff(n,t)];var a=t.length>r.length?t:r,l=t.length>r.length?r:t,f=a.indexOf(l);if(-1!=f)return o=[new e.Diff(1,a.substring(0,f)),new e.Diff(0,l),new e.Diff(1,a.substring(f+l.length))],t.length>r.length&&(o[0][0]=o[2][0]=n),o;if(1==l.length)return[new e.Diff(n,t),new e.Diff(1,r)];var h=this.diff_halfMatch_(t,r);if(h){var c=h[0],u=h[1],d=h[2],p=h[3],g=h[4],m=this.diff_main(c,d,i,s),v=this.diff_main(u,p,i,s);return m.concat([new e.Diff(0,g)],v)}return i&&t.length>100&&r.length>100?this.diff_lineMode_(t,r,s):this.diff_bisect_(t,r,s)},e.prototype.diff_lineMode_=function(t,r,i){var s=this.diff_linesToChars_(t,r);t=s.chars1,r=s.chars2;var o=s.lineArray,a=this.diff_main(t,r,!1,i);this.diff_charsToLines_(a,o),this.diff_cleanupSemantic(a),a.push(new e.Diff(0,""));for(var l=0,f=0,h=0,c="",u="";l<a.length;){switch(a[l][0]){case 1:h++,u+=a[l][1];break;case n:f++,c+=a[l][1];break;case 0:if(f>=1&&h>=1){a.splice(l-f-h,f+h),l=l-f-h;for(var d=this.diff_main(c,u,!1,i),p=d.length-1;p>=0;p--)a.splice(l,0,d[p]);l+=d.length}h=0,f=0,c="",u=""}l++}return a.pop(),a},e.prototype.diff_bisect_=function(t,r,i){for(var s=t.length,o=r.length,a=Math.ceil((s+o)/2),l=a,f=2*a,h=new Array(f),c=new Array(f),u=0;u<f;u++)h[u]=-1,c[u]=-1;h[l+1]=0,c[l+1]=0;for(var d=s-o,p=d%2!=0,g=0,m=0,v=0,y=0,_=0;_<a&&!((new Date).getTime()>i);_++){for(var x=-_+g;x<=_-m;x+=2){for(var b=l+x,w=($=x==-_||x!=_&&h[b-1]<h[b+1]?h[b+1]:h[b-1]+1)-x;$<s&&w<o&&t.charAt($)==r.charAt(w);)$++,w++;if(h[b]=$,$>s)m+=2;else if(w>o)g+=2;else if(p){if((M=l+d-x)>=0&&M<f&&-1!=c[M])if($>=(D=s-c[M]))return this.diff_bisectSplit_(t,r,$,w,i)}}for(var j=-_+v;j<=_-y;j+=2){for(var D,M=l+j,A=(D=j==-_||j!=_&&c[M-1]<c[M+1]?c[M+1]:c[M-1]+1)-j;D<s&&A<o&&t.charAt(s-D-1)==r.charAt(o-A-1);)D++,A++;if(c[M]=D,D>s)y+=2;else if(A>o)v+=2;else if(!p){if((b=l+d-j)>=0&&b<f&&-1!=h[b]){var $;w=l+($=h[b])-b;if($>=(D=s-D))return this.diff_bisectSplit_(t,r,$,w,i)}}}}return[new e.Diff(n,t),new e.Diff(1,r)]},e.prototype.diff_bisectSplit_=function(t,e,n,r,i){var s=t.substring(0,n),o=e.substring(0,r),a=t.substring(n),l=e.substring(r),f=this.diff_main(s,o,!1,i),h=this.diff_main(a,l,!1,i);return f.concat(h)},e.prototype.diff_linesToChars_=function(t,e){var n=[],r={};function i(t){for(var e="",i=0,o=-1,a=n.length;o<t.length-1;){-1==(o=t.indexOf("\n",i))&&(o=t.length-1);var l=t.substring(i,o+1);(r.hasOwnProperty?r.hasOwnProperty(l):void 0!==r[l])?e+=String.fromCharCode(r[l]):(a==s&&(l=t.substring(i),o=t.length),e+=String.fromCharCode(a),r[l]=a,n[a++]=l),i=o+1}return e}n[0]="";var s=4e4,o=i(t);return s=65535,{chars1:o,chars2:i(e),lineArray:n}},e.prototype.diff_charsToLines_=function(t,e){for(var n=0;n<t.length;n++){for(var r=t[n][1],i=[],s=0;s<r.length;s++)i[s]=e[r.charCodeAt(s)];t[n][1]=i.join("")}},e.prototype.diff_commonPrefix=function(t,e){if(!t||!e||t.charAt(0)!=e.charAt(0))return 0;for(var n=0,r=Math.min(t.length,e.length),i=r,s=0;n<i;)t.substring(s,i)==e.substring(s,i)?s=n=i:r=i,i=Math.floor((r-n)/2+n);return i},e.prototype.diff_commonSuffix=function(t,e){if(!t||!e||t.charAt(t.length-1)!=e.charAt(e.length-1))return 0;for(var n=0,r=Math.min(t.length,e.length),i=r,s=0;n<i;)t.substring(t.length-i,t.length-s)==e.substring(e.length-i,e.length-s)?s=n=i:r=i,i=Math.floor((r-n)/2+n);return i},e.prototype.diff_commonOverlap_=function(t,e){var n=t.length,r=e.length;if(0==n||0==r)return 0;n>r?t=t.substring(n-r):n<r&&(e=e.substring(0,n));var i=Math.min(n,r);if(t==e)return i;for(var s=0,o=1;;){var a=t.substring(i-o),l=e.indexOf(a);if(-1==l)return s;o+=l,0!=l&&t.substring(i-o)!=e.substring(0,o)||(s=o,o++)}},e.prototype.diff_halfMatch_=function(t,e){if(this.Diff_Timeout<=0)return null;var n=t.length>e.length?t:e,r=t.length>e.length?e:t;if(n.length<4||2*r.length<n.length)return null;var i=this;function s(t,e,n){for(var r,s,o,a,l=t.substring(n,n+Math.floor(t.length/4)),f=-1,h="";-1!=(f=e.indexOf(l,f+1));){var c=i.diff_commonPrefix(t.substring(n),e.substring(f)),u=i.diff_commonSuffix(t.substring(0,n),e.substring(0,f));h.length<u+c&&(h=e.substring(f-u,f)+e.substring(f,f+c),r=t.substring(0,n-u),s=t.substring(n+c),o=e.substring(0,f-u),a=e.substring(f+c))}return 2*h.length>=t.length?[r,s,o,a,h]:null}var o,a,l,f,h,c=s(n,r,Math.ceil(n.length/4)),u=s(n,r,Math.ceil(n.length/2));return c||u?(o=u?c&&c[4].length>u[4].length?c:u:c,t.length>e.length?(a=o[0],l=o[1],f=o[2],h=o[3]):(f=o[0],h=o[1],a=o[2],l=o[3]),[a,l,f,h,o[4]]):null},e.prototype.diff_cleanupSemantic=function(t){for(var r=!1,i=[],s=0,o=null,a=0,l=0,f=0,h=0,c=0;a<t.length;)0==t[a][0]?(i[s++]=a,l=h,f=c,h=0,c=0,o=t[a][1]):(1==t[a][0]?h+=t[a][1].length:c+=t[a][1].length,o&&o.length<=Math.max(l,f)&&o.length<=Math.max(h,c)&&(t.splice(i[s-1],0,new e.Diff(n,o)),t[i[s-1]+1][0]=1,s--,a=--s>0?i[s-1]:-1,l=0,f=0,h=0,c=0,o=null,r=!0)),a++;for(r&&this.diff_cleanupMerge(t),this.diff_cleanupSemanticLossless(t),a=1;a<t.length;){if(t[a-1][0]==n&&1==t[a][0]){var u=t[a-1][1],d=t[a][1],p=this.diff_commonOverlap_(u,d),g=this.diff_commonOverlap_(d,u);p>=g?(p>=u.length/2||p>=d.length/2)&&(t.splice(a,0,new e.Diff(0,d.substring(0,p))),t[a-1][1]=u.substring(0,u.length-p),t[a+1][1]=d.substring(p),a++):(g>=u.length/2||g>=d.length/2)&&(t.splice(a,0,new e.Diff(0,u.substring(0,g))),t[a-1][0]=1,t[a-1][1]=d.substring(0,d.length-g),t[a+1][0]=n,t[a+1][1]=u.substring(g),a++),a++}a++}},e.prototype.diff_cleanupSemanticLossless=function(t){function n(t,n){if(!t||!n)return 6;var r=t.charAt(t.length-1),i=n.charAt(0),s=r.match(e.nonAlphaNumericRegex_),o=i.match(e.nonAlphaNumericRegex_),a=s&&r.match(e.whitespaceRegex_),l=o&&i.match(e.whitespaceRegex_),f=a&&r.match(e.linebreakRegex_),h=l&&i.match(e.linebreakRegex_),c=f&&t.match(e.blanklineEndRegex_),u=h&&n.match(e.blanklineStartRegex_);return c||u?5:f||h?4:s&&!a&&l?3:a||l?2:s||o?1:0}for(var r=1;r<t.length-1;){if(0==t[r-1][0]&&0==t[r+1][0]){var i=t[r-1][1],s=t[r][1],o=t[r+1][1],a=this.diff_commonSuffix(i,s);if(a){var l=s.substring(s.length-a);i=i.substring(0,i.length-a),s=l+s.substring(0,s.length-a),o=l+o}for(var f=i,h=s,c=o,u=n(i,s)+n(s,o);s.charAt(0)===o.charAt(0);){i+=s.charAt(0),s=s.substring(1)+o.charAt(0),o=o.substring(1);var d=n(i,s)+n(s,o);d>=u&&(u=d,f=i,h=s,c=o)}t[r-1][1]!=f&&(f?t[r-1][1]=f:(t.splice(r-1,1),r--),t[r][1]=h,c?t[r+1][1]=c:(t.splice(r+1,1),r--))}r++}},e.nonAlphaNumericRegex_=/[^a-zA-Z0-9]/,e.whitespaceRegex_=/\s/,e.linebreakRegex_=/[\r\n]/,e.blanklineEndRegex_=/\n\r?\n$/,e.blanklineStartRegex_=/^\r?\n\r?\n/,e.prototype.diff_cleanupEfficiency=function(t){for(var r=!1,i=[],s=0,o=null,a=0,l=!1,f=!1,h=!1,c=!1;a<t.length;)0==t[a][0]?(t[a][1].length<this.Diff_EditCost&&(h||c)?(i[s++]=a,l=h,f=c,o=t[a][1]):(s=0,o=null),h=c=!1):(t[a][0]==n?c=!0:h=!0,o&&(l&&f&&h&&c||o.length<this.Diff_EditCost/2&&l+f+h+c==3)&&(t.splice(i[s-1],0,new e.Diff(n,o)),t[i[s-1]+1][0]=1,s--,o=null,l&&f?(h=c=!0,s=0):(a=--s>0?i[s-1]:-1,h=c=!1),r=!0)),a++;r&&this.diff_cleanupMerge(t)},e.prototype.diff_cleanupMerge=function(t){t.push(new e.Diff(0,""));for(var r,i=0,s=0,o=0,a="",l="";i<t.length;)switch(t[i][0]){case 1:o++,l+=t[i][1],i++;break;case n:s++,a+=t[i][1],i++;break;case 0:s+o>1?(0!==s&&0!==o&&(0!==(r=this.diff_commonPrefix(l,a))&&(i-s-o>0&&0==t[i-s-o-1][0]?t[i-s-o-1][1]+=l.substring(0,r):(t.splice(0,0,new e.Diff(0,l.substring(0,r))),i++),l=l.substring(r),a=a.substring(r)),0!==(r=this.diff_commonSuffix(l,a))&&(t[i][1]=l.substring(l.length-r)+t[i][1],l=l.substring(0,l.length-r),a=a.substring(0,a.length-r))),i-=s+o,t.splice(i,s+o),a.length&&(t.splice(i,0,new e.Diff(n,a)),i++),l.length&&(t.splice(i,0,new e.Diff(1,l)),i++),i++):0!==i&&0==t[i-1][0]?(t[i-1][1]+=t[i][1],t.splice(i,1)):i++,o=0,s=0,a="",l=""}""===t[t.length-1][1]&&t.pop();var f=!1;for(i=1;i<t.length-1;)0==t[i-1][0]&&0==t[i+1][0]&&(t[i][1].substring(t[i][1].length-t[i-1][1].length)==t[i-1][1]?(t[i][1]=t[i-1][1]+t[i][1].substring(0,t[i][1].length-t[i-1][1].length),t[i+1][1]=t[i-1][1]+t[i+1][1],t.splice(i-1,1),f=!0):t[i][1].substring(0,t[i+1][1].length)==t[i+1][1]&&(t[i-1][1]+=t[i+1][1],t[i][1]=t[i][1].substring(t[i+1][1].length)+t[i+1][1],t.splice(i+1,1),f=!0)),i++;f&&this.diff_cleanupMerge(t)},e.prototype.diff_xIndex=function(t,e){var r,i=0,s=0,o=0,a=0;for(r=0;r<t.length&&(1!==t[r][0]&&(i+=t[r][1].length),t[r][0]!==n&&(s+=t[r][1].length),!(i>e));r++)o=i,a=s;return t.length!=r&&t[r][0]===n?a:a+(e-o)},e.prototype.diff_prettyHtml=function(t){for(var e=[],r=/&/g,i=/</g,s=/>/g,o=/\n/g,a=0;a<t.length;a++){var l=t[a][0],f=t[a][1].replace(r,"&amp;").replace(i,"&lt;").replace(s,"&gt;").replace(o,"&para;<br>");switch(l){case 1:e[a]='<ins style="background:#e6ffe6;">'+f+"</ins>";break;case n:e[a]='<del style="background:#ffe6e6;">'+f+"</del>";break;case 0:e[a]="<span>"+f+"</span>"}}return e.join("")},e.prototype.diff_text1=function(t){for(var e=[],n=0;n<t.length;n++)1!==t[n][0]&&(e[n]=t[n][1]);return e.join("")},e.prototype.diff_text2=function(t){for(var e=[],r=0;r<t.length;r++)t[r][0]!==n&&(e[r]=t[r][1]);return e.join("")},e.prototype.diff_levenshtein=function(t){for(var e=0,r=0,i=0,s=0;s<t.length;s++){var o=t[s][0],a=t[s][1];switch(o){case 1:r+=a.length;break;case n:i+=a.length;break;case 0:e+=Math.max(r,i),r=0,i=0}}return e+=Math.max(r,i)},e.prototype.diff_toDelta=function(t){for(var e=[],r=0;r<t.length;r++)switch(t[r][0]){case 1:e[r]="+"+encodeURI(t[r][1]);break;case n:e[r]="-"+t[r][1].length;break;case 0:e[r]="="+t[r][1].length}return e.join("\t").replace(/%20/g," ")},e.prototype.diff_fromDelta=function(t,r){for(var i=[],s=0,o=0,a=r.split(/\t/g),l=0;l<a.length;l++){var f=a[l].substring(1);switch(a[l].charAt(0)){case"+":try{i[s++]=new e.Diff(1,decodeURI(f))}catch(t){throw new Error("Illegal escape in diff_fromDelta: "+f)}break;case"-":case"=":var h=parseInt(f,10);if(isNaN(h)||h<0)throw new Error("Invalid number in diff_fromDelta: "+f);var c=t.substring(o,o+=h);"="==a[l].charAt(0)?i[s++]=new e.Diff(0,c):i[s++]=new e.Diff(n,c);break;default:if(a[l])throw new Error("Invalid diff operation in diff_fromDelta: "+a[l])}}if(o!=t.length)throw new Error("Delta length ("+o+") does not equal source text length ("+t.length+").");return i},e.prototype.match_main=function(t,e,n){if(null==t||null==e||null==n)throw new Error("Null input. (match_main)");return n=Math.max(0,Math.min(n,t.length)),t==e?0:t.length?t.substring(n,n+e.length)==e?n:this.match_bitap_(t,e,n):-1},e.prototype.match_bitap_=function(t,e,n){if(e.length>this.Match_MaxBits)throw new Error("Pattern too long for this browser.");var r=this.match_alphabet_(e),i=this;function s(t,r){var s=t/e.length,o=Math.abs(n-r);return i.Match_Distance?s+o/i.Match_Distance:o?1:s}var o=this.Match_Threshold,a=t.indexOf(e,n);-1!=a&&(o=Math.min(s(0,a),o),-1!=(a=t.lastIndexOf(e,n+e.length))&&(o=Math.min(s(0,a),o)));var l,f,h=1<<e.length-1;a=-1;for(var c,u=e.length+t.length,d=0;d<e.length;d++){for(l=0,f=u;l<f;)s(d,n+f)<=o?l=f:u=f,f=Math.floor((u-l)/2+l);u=f;var p=Math.max(1,n-f+1),g=Math.min(n+f,t.length)+e.length,m=Array(g+2);m[g+1]=(1<<d)-1;for(var v=g;v>=p;v--){var y=r[t.charAt(v-1)];if(m[v]=0===d?(m[v+1]<<1|1)&y:(m[v+1]<<1|1)&y|(c[v+1]|c[v])<<1|1|c[v+1],m[v]&h){var _=s(d,v-1);if(_<=o){if(o=_,!((a=v-1)>n))break;p=Math.max(1,2*n-a)}}}if(s(d+1,n)>o)break;c=m}return a},e.prototype.match_alphabet_=function(t){for(var e={},n=0;n<t.length;n++)e[t.charAt(n)]=0;for(n=0;n<t.length;n++)e[t.charAt(n)]|=1<<t.length-n-1;return e},e.prototype.patch_addContext_=function(t,n){if(0!=n.length){if(null===t.start2)throw Error("patch not initialized");for(var r=n.substring(t.start2,t.start2+t.length1),i=0;n.indexOf(r)!=n.lastIndexOf(r)&&r.length<this.Match_MaxBits-this.Patch_Margin-this.Patch_Margin;)i+=this.Patch_Margin,r=n.substring(t.start2-i,t.start2+t.length1+i);i+=this.Patch_Margin;var s=n.substring(t.start2-i,t.start2);s&&t.diffs.unshift(new e.Diff(0,s));var o=n.substring(t.start2+t.length1,t.start2+t.length1+i);o&&t.diffs.push(new e.Diff(0,o)),t.start1-=s.length,t.start2-=s.length,t.length1+=s.length+o.length,t.length2+=s.length+o.length}},e.prototype.patch_make=function(t,r,i){var s,o;if("string"==typeof t&&"string"==typeof r&&void 0===i)s=t,(o=this.diff_main(s,r,!0)).length>2&&(this.diff_cleanupSemantic(o),this.diff_cleanupEfficiency(o));else if(t&&"object"==typeof t&&void 0===r&&void 0===i)o=t,s=this.diff_text1(o);else if("string"==typeof t&&r&&"object"==typeof r&&void 0===i)s=t,o=r;else{if("string"!=typeof t||"string"!=typeof r||!i||"object"!=typeof i)throw new Error("Unknown call format to patch_make.");s=t,o=i}if(0===o.length)return[];for(var a=[],l=new e.patch_obj,f=0,h=0,c=0,u=s,d=s,p=0;p<o.length;p++){var g=o[p][0],m=o[p][1];switch(f||0===g||(l.start1=h,l.start2=c),g){case 1:l.diffs[f++]=o[p],l.length2+=m.length,d=d.substring(0,c)+m+d.substring(c);break;case n:l.length1+=m.length,l.diffs[f++]=o[p],d=d.substring(0,c)+d.substring(c+m.length);break;case 0:m.length<=2*this.Patch_Margin&&f&&o.length!=p+1?(l.diffs[f++]=o[p],l.length1+=m.length,l.length2+=m.length):m.length>=2*this.Patch_Margin&&f&&(this.patch_addContext_(l,u),a.push(l),l=new e.patch_obj,f=0,u=d,h=c)}1!==g&&(h+=m.length),g!==n&&(c+=m.length)}return f&&(this.patch_addContext_(l,u),a.push(l)),a},e.prototype.patch_deepCopy=function(t){for(var n=[],r=0;r<t.length;r++){var i=t[r],s=new e.patch_obj;s.diffs=[];for(var o=0;o<i.diffs.length;o++)s.diffs[o]=new e.Diff(i.diffs[o][0],i.diffs[o][1]);s.start1=i.start1,s.start2=i.start2,s.length1=i.length1,s.length2=i.length2,n[r]=s}return n},e.prototype.patch_apply=function(t,e){if(0==t.length)return[e,[]];t=this.patch_deepCopy(t);var r=this.patch_addPadding(t);e=r+e+r,this.patch_splitMax(t);for(var i=0,s=[],o=0;o<t.length;o++){var a,l,f=t[o].start2+i,h=this.diff_text1(t[o].diffs),c=-1;if(h.length>this.Match_MaxBits?-1!=(a=this.match_main(e,h.substring(0,this.Match_MaxBits),f))&&(-1==(c=this.match_main(e,h.substring(h.length-this.Match_MaxBits),f+h.length-this.Match_MaxBits))||a>=c)&&(a=-1):a=this.match_main(e,h,f),-1==a)s[o]=!1,i-=t[o].length2-t[o].length1;else if(s[o]=!0,i=a-f,h==(l=-1==c?e.substring(a,a+h.length):e.substring(a,c+this.Match_MaxBits)))e=e.substring(0,a)+this.diff_text2(t[o].diffs)+e.substring(a+h.length);else{var u=this.diff_main(h,l,!1);if(h.length>this.Match_MaxBits&&this.diff_levenshtein(u)/h.length>this.Patch_DeleteThreshold)s[o]=!1;else{this.diff_cleanupSemanticLossless(u);for(var d,p=0,g=0;g<t[o].diffs.length;g++){var m=t[o].diffs[g];0!==m[0]&&(d=this.diff_xIndex(u,p)),1===m[0]?e=e.substring(0,a+d)+m[1]+e.substring(a+d):m[0]===n&&(e=e.substring(0,a+d)+e.substring(a+this.diff_xIndex(u,p+m[1].length))),m[0]!==n&&(p+=m[1].length)}}}}return[e=e.substring(r.length,e.length-r.length),s]},e.prototype.patch_addPadding=function(t){for(var n=this.Patch_Margin,r="",i=1;i<=n;i++)r+=String.fromCharCode(i);for(i=0;i<t.length;i++)t[i].start1+=n,t[i].start2+=n;var s=t[0],o=s.diffs;if(0==o.length||0!=o[0][0])o.unshift(new e.Diff(0,r)),s.start1-=n,s.start2-=n,s.length1+=n,s.length2+=n;else if(n>o[0][1].length){var a=n-o[0][1].length;o[0][1]=r.substring(o[0][1].length)+o[0][1],s.start1-=a,s.start2-=a,s.length1+=a,s.length2+=a}if(0==(o=(s=t[t.length-1]).diffs).length||0!=o[o.length-1][0])o.push(new e.Diff(0,r)),s.length1+=n,s.length2+=n;else if(n>o[o.length-1][1].length){a=n-o[o.length-1][1].length;o[o.length-1][1]+=r.substring(0,a),s.length1+=a,s.length2+=a}return r},e.prototype.patch_splitMax=function(t){for(var r=this.Match_MaxBits,i=0;i<t.length;i++)if(!(t[i].length1<=r)){var s=t[i];t.splice(i--,1);for(var o=s.start1,a=s.start2,l="";0!==s.diffs.length;){var f=new e.patch_obj,h=!0;for(f.start1=o-l.length,f.start2=a-l.length,""!==l&&(f.length1=f.length2=l.length,f.diffs.push(new e.Diff(0,l)));0!==s.diffs.length&&f.length1<r-this.Patch_Margin;){var c=s.diffs[0][0],u=s.diffs[0][1];1===c?(f.length2+=u.length,a+=u.length,f.diffs.push(s.diffs.shift()),h=!1):c===n&&1==f.diffs.length&&0==f.diffs[0][0]&&u.length>2*r?(f.length1+=u.length,o+=u.length,h=!1,f.diffs.push(new e.Diff(c,u)),s.diffs.shift()):(u=u.substring(0,r-f.length1-this.Patch_Margin),f.length1+=u.length,o+=u.length,0===c?(f.length2+=u.length,a+=u.length):h=!1,f.diffs.push(new e.Diff(c,u)),u==s.diffs[0][1]?s.diffs.shift():s.diffs[0][1]=s.diffs[0][1].substring(u.length))}l=(l=this.diff_text2(f.diffs)).substring(l.length-this.Patch_Margin);var d=this.diff_text1(s.diffs).substring(0,this.Patch_Margin);""!==d&&(f.length1+=d.length,f.length2+=d.length,0!==f.diffs.length&&0===f.diffs[f.diffs.length-1][0]?f.diffs[f.diffs.length-1][1]+=d:f.diffs.push(new e.Diff(0,d))),h||t.splice(++i,0,f)}}},e.prototype.patch_toText=function(t){for(var e=[],n=0;n<t.length;n++)e[n]=t[n];return e.join("")},e.prototype.patch_fromText=function(t){var r=[];if(!t)return r;for(var i=t.split("\n"),s=0,o=/^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;s<i.length;){var a=i[s].match(o);if(!a)throw new Error("Invalid patch string: "+i[s]);var l=new e.patch_obj;for(r.push(l),l.start1=parseInt(a[1],10),""===a[2]?(l.start1--,l.length1=1):"0"==a[2]?l.length1=0:(l.start1--,l.length1=parseInt(a[2],10)),l.start2=parseInt(a[3],10),""===a[4]?(l.start2--,l.length2=1):"0"==a[4]?l.length2=0:(l.start2--,l.length2=parseInt(a[4],10)),s++;s<i.length;){var f=i[s].charAt(0);try{var h=decodeURI(i[s].substring(1))}catch(t){throw new Error("Illegal escape in patch_fromText: "+h)}if("-"==f)l.diffs.push(new e.Diff(n,h));else if("+"==f)l.diffs.push(new e.Diff(1,h));else if(" "==f)l.diffs.push(new e.Diff(0,h));else{if("@"==f)break;if(""!==f)throw new Error('Invalid patch mode "'+f+'" in: '+h)}s++}}return r},(e.patch_obj=function(){this.diffs=[],this.start1=null,this.start2=null,this.length1=0,this.length2=0}).prototype.toString=function(){for(var t,e=["@@ -"+(0===this.length1?this.start1+",0":1==this.length1?this.start1+1:this.start1+1+","+this.length1)+" +"+(0===this.length2?this.start2+",0":1==this.length2?this.start2+1:this.start2+1+","+this.length2)+" @@\n"],r=0;r<this.diffs.length;r++){switch(this.diffs[r][0]){case 1:t="+";break;case n:t="-";break;case 0:t=" "}e[r+1]=t+encodeURI(this.diffs[r][1])+"\n"}return e.join("").replace(/%20/g," ")},t.exports=e,t.exports.diff_match_patch=e,t.exports.DIFF_DELETE=n,t.exports.DIFF_INSERT=1,t.exports.DIFF_EQUAL=0}(N);var P=T(N.exports);let I=null;const S=function(t){if(!I){let e;if("undefined"!=typeof diff_match_patch)e="function"==typeof diff_match_patch?new diff_match_patch:new diff_match_patch.diff_match_patch;else if(P)try{e=P&&new P}catch(t){e=null}if(!e){if(!t)return null;const e=new Error("text diff_match_patch library not found");throw e.diff_match_patch_not_found=!0,e}I={diff:function(t,n){return e.patch_toText(e.patch_make(t,n))},patch:function(t,n){const r=e.patch_apply(e.patch_fromText(n),t);for(let t=0;t<r[1].length;t++)if(!r[1][t]){new Error("text patch failed").textPatchFailed=!0}return r[0]}}}return I},B=function(t){if("string"!==t.leftType)return;const e=t.options&&t.options.textDiff&&t.options.textDiff.minLength||60;if(t.left.length<e||t.right.length<e)return void t.setResult([t.left,t.right]).exit();const n=S();if(!n)return void t.setResult([t.left,t.right]).exit();const r=n.diff;t.setResult([r(t.left,t.right),0,2]).exit()};B.filterName="texts";const L=function(t){if(t.nested)return;if(2!==t.delta[2])return;const e=S(!0).patch;t.setResult(e(t.left,t.delta[0])).exit()};L.filterName="texts";const F=function(t){let e,n,r,i,s=null;const o=/^@@ +-(\d+),(\d+) +\+(\d+),(\d+) +@@$/;let a;const l=t.split("\n");for(e=0,n=l.length;e<n;e++){r=l[e];const t=r.slice(0,1);"@"===t?(s=o.exec(r),a=e,l[a]="@@ -"+s[3]+","+s[4]+" +"+s[1]+","+s[2]+" @@"):"+"===t?(l[e]="-"+l[e].slice(1),"+"===l[e-1].slice(0,1)&&(i=l[e],l[e]=l[e-1],l[e-1]=i)):"-"===t&&(l[e]="+"+l[e].slice(1))}return l.join("\n")},V=function(t){t.nested||2===t.delta[2]&&t.setResult([F(t.delta[0]),0,2]).exit()};V.filterName="texts";class q{constructor(t){this.processor=new n(t),this.processor.pipe(new r("diff").append(p,c,O,B,g,M).shouldHaveResult()),this.processor.pipe(new r("patch").append(v,R,u,L,m,$).shouldHaveResult()),this.processor.pipe(new r("reverse").append(_,k,d,V,y,C).shouldHaveResult())}options(){return this.processor.options(...arguments)}diff(t,e){return this.processor.process(new a(t,e))}patch(t,e){return this.processor.process(new l(t,e))}reverse(t){return this.processor.process(new f(t))}unpatch(t,e){return this.patch(t,this.reverse(e))}clone(t){return o(t)}}const U="function"==typeof Array.isArray?Array.isArray:t=>t instanceof Array,z="function"==typeof Object.keys?t=>Object.keys(t):t=>{const e=[];for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e},H=t=>"_t"===t?-1:"_"===t.substr(0,1)?parseInt(t.slice(1),10):parseInt(t,10)+.1,Q=(t,e)=>H(t)-H(e);class J{format(t,e){const n={};return this.prepareContext(n),this.recurse(n,t,e),this.finalize(n)}prepareContext(t){t.buffer=[],t.out=function(){this.buffer.push(...arguments)}}typeFormattterNotFound(t,e){throw new Error(`cannot format delta type: ${e}`)}typeFormattterErrorFormatter(t,e){return e.toString()}finalize(t){let{buffer:e}=t;if(U(e))return e.join("")}recurse(t,e,n,r,i,s,o){const a=e&&s?s.value:n;if(void 0===e&&void 0===r)return;const l=this.getDeltaType(e,s),f="node"===l?"a"===e._t?"array":"object":"";let h;void 0!==r?this.nodeBegin(t,r,i,l,f,o):this.rootBegin(t,l,f);try{h=this[`format_${l}`]||this.typeFormattterNotFound(t,l),h.call(this,t,e,a,r,i,s)}catch(n){this.typeFormattterErrorFormatter(t,n,e,a,r,i,s),"undefined"!=typeof console&&console.error&&console.error(n.stack)}void 0!==r?this.nodeEnd(t,r,i,l,f,o):this.rootEnd(t,l,f)}formatDeltaChildren(t,e,n){const r=this;this.forEachDeltaKey(e,n,((i,s,o,a)=>{r.recurse(t,e[i],n?n[s]:void 0,i,s,o,a)}))}forEachDeltaKey(t,e,n){const r=z(t),i="a"===t._t,s={};let o;if(void 0!==e)for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&(void 0!==t[o]||i&&void 0!==t[`_${o}`]||r.push(o));for(o in t)if(Object.prototype.hasOwnProperty.call(t,o)){const n=t[o];U(n)&&3===n[2]&&(s[n[1].toString()]={key:o,value:e&&e[parseInt(o.substr(1))]},!1!==this.includeMoveDestinations&&void 0===e&&void 0===t[n[1]]&&r.push(n[1].toString()))}i?r.sort(Q):r.sort();for(let t=0,e=r.length;t<e;t++){const o=r[t];if(i&&"_t"===o)continue;const l=i?"number"==typeof o?o:parseInt("_"===(a=o).substr(0,1)?a.slice(1):a,10):o,f=t===e-1;n(o,l,s[l],f)}var a}getDeltaType(t,e){if(void 0===t)return void 0!==e?"movedestination":"unchanged";if(U(t)){if(1===t.length)return"added";if(2===t.length)return"modified";if(3===t.length&&0===t[2])return"deleted";if(3===t.length&&2===t[2])return"textdiff";if(3===t.length&&3===t[2])return"moved"}else if("object"==typeof t)return"node";return"unknown"}parseTextDiff(t){const e=[],n=t.split("\n@@ ");for(let t=0,r=n.length;t<r;t++){const r=n[t],i={pieces:[]},s=/^(?:@@ )?[-+]?(\d+),(\d+)/.exec(r).slice(1);i.location={line:s[0],chr:s[1]};const o=r.split("\n").slice(1);for(let t=0,e=o.length;t<e;t++){const e=o[t];if(!e.length)continue;const n={type:"context"};"+"===e.substr(0,1)?n.type="added":"-"===e.substr(0,1)&&(n.type="deleted"),n.text=e.slice(1),i.pieces.push(n)}e.push(i)}return e}}var K=Object.freeze({__proto__:null,default:J});class Z extends J{typeFormattterErrorFormatter(t,e){t.out(`<pre class="jsondiffpatch-error">${e}</pre>`)}formatValue(t,e){t.out(`<pre>${W(JSON.stringify(e,null,2))}</pre>`)}formatTextDiffString(t,e){const n=this.parseTextDiff(e);t.out('<ul class="jsondiffpatch-textdiff">');for(let e=0,r=n.length;e<r;e++){const r=n[e];t.out(`<li><div class="jsondiffpatch-textdiff-location"><span class="jsondiffpatch-textdiff-line-number">${r.location.line}</span><span class="jsondiffpatch-textdiff-char">${r.location.chr}</span></div><div class="jsondiffpatch-textdiff-line">`);const i=r.pieces;for(let e=0,n=i.length;e<n;e++){const n=i[e];t.out(`<span class="jsondiffpatch-textdiff-${n.type}">${W(decodeURI(n.text))}</span>`)}t.out("</div></li>")}t.out("</ul>")}rootBegin(t,e,n){const r=`jsondiffpatch-${e}${n?` jsondiffpatch-child-node-type-${n}`:""}`;t.out(`<div class="jsondiffpatch-delta ${r}">`)}rootEnd(t){t.out("</div>"+(t.hasArrows?`<script type="text/javascript">setTimeout(${X.toString()},10);<\/script>`:""))}nodeBegin(t,e,n,r,i){const s=`jsondiffpatch-${r}${i?` jsondiffpatch-child-node-type-${i}`:""}`;t.out(`<li class="${s}" data-key="${n}"><div class="jsondiffpatch-property-name">${n}</div>`)}nodeEnd(t){t.out("</li>")}format_unchanged(t,e,n){void 0!==n&&(t.out('<div class="jsondiffpatch-value">'),this.formatValue(t,n),t.out("</div>"))}format_movedestination(t,e,n){void 0!==n&&(t.out('<div class="jsondiffpatch-value">'),this.formatValue(t,n),t.out("</div>"))}format_node(t,e,n){const r="a"===e._t?"array":"object";t.out(`<ul class="jsondiffpatch-node jsondiffpatch-node-type-${r}">`),this.formatDeltaChildren(t,e,n),t.out("</ul>")}format_added(t,e){t.out('<div class="jsondiffpatch-value">'),this.formatValue(t,e[0]),t.out("</div>")}format_modified(t,e){t.out('<div class="jsondiffpatch-value jsondiffpatch-left-value">'),this.formatValue(t,e[0]),t.out('</div><div class="jsondiffpatch-value jsondiffpatch-right-value">'),this.formatValue(t,e[1]),t.out("</div>")}format_deleted(t,e){t.out('<div class="jsondiffpatch-value">'),this.formatValue(t,e[0]),t.out("</div>")}format_moved(t,e){t.out('<div class="jsondiffpatch-value">'),this.formatValue(t,e[0]),t.out(`</div><div class="jsondiffpatch-moved-destination">${e[1]}</div>`),t.out('<div class="jsondiffpatch-arrow" style="position: relative; left: -34px;">\n          <svg width="30" height="60" style="position: absolute; display: none;">\n          <defs>\n              <marker id="markerArrow" markerWidth="8" markerHeight="8"\n                 refx="2" refy="4"\n                     orient="auto" markerUnits="userSpaceOnUse">\n                  <path d="M1,1 L1,7 L7,4 L1,1" style="fill: #339;" />\n              </marker>\n          </defs>\n          <path d="M30,0 Q-10,25 26,50"\n            style="stroke: #88f; stroke-width: 2px; fill: none; stroke-opacity: 0.5; marker-end: url(#markerArrow);"\n          ></path>\n          </svg>\n      </div>'),t.hasArrows=!0}format_textdiff(t,e){t.out('<div class="jsondiffpatch-value">'),this.formatTextDiffString(t,e[0]),t.out("</div>")}}function W(t){let e=t;const n=[[/&/g,"&amp;"],[/</g,"&lt;"],[/>/g,"&gt;"],[/'/g,"&apos;"],[/"/g,"&quot;"]];for(let t=0;t<n.length;t++)e=e.replace(n[t][0],n[t][1]);return e}const X=function(t){const e=t||document;((t,e,n)=>{const r=t.querySelectorAll(e);for(let t=0,e=r.length;t<e;t++)n(r[t])})(e,".jsondiffpatch-arrow",(t=>{let{parentNode:e,children:n,style:r}=t;const i=e,s=n[0],o=s.children[1];s.style.display="none";const a=(t=>{let{textContent:e,innerText:n}=t;return e||n})(i.querySelector(".jsondiffpatch-moved-destination"));let l;if(((t,e)=>{let{children:n}=t;for(let t=0,r=n.length;t<r;t++)e(n[t],t)})(i.parentNode,(t=>{t.getAttribute("data-key")===a&&(l=t)})),l)try{const t=l.offsetTop-i.offsetTop;s.setAttribute("height",Math.abs(t)+6),r.top=`${-8+(t>0?0:t)}px`;const e=t>0?`M30,0 Q-10,${Math.round(t/2)} 26,${t-4}`:`M30,${-t} Q-10,${Math.round(-t/2)} 26,4`;o.setAttribute("d",e),s.style.display=""}catch(t){}}))},G=(t,e,n)=>{const r=e||document.body,i="jsondiffpatch-unchanged-",s={showing:`${i}showing`,hiding:`${i}hiding`,visible:`${i}visible`,hidden:`${i}hidden`},o=r.classList;if(!o)return;if(!n)return o.remove(s.showing),o.remove(s.hiding),o.remove(s.visible),o.remove(s.hidden),void(!1===t&&o.add(s.hidden));!1===t?(o.remove(s.showing),o.add(s.visible),setTimeout((()=>{o.add(s.hiding)}),10)):(o.remove(s.hiding),o.add(s.showing),o.remove(s.hidden));const a=setInterval((()=>{X(r)}),100);setTimeout((()=>{o.remove(s.showing),o.remove(s.hiding),!1===t?(o.add(s.hidden),o.remove(s.visible)):(o.add(s.visible),o.remove(s.hidden)),setTimeout((()=>{o.remove(s.visible),clearInterval(a)}),n+400)}),n)};let Y;var tt=Object.freeze({__proto__:null,default:Z,format:function(t,e){return Y||(Y=new Z),Y.format(t,e)},hideUnchanged:(t,e)=>G(!1,t,e),showUnchanged:G});class et extends J{constructor(){super(),this.includeMoveDestinations=!1}prepareContext(t){super.prepareContext(t),t.indent=function(t){this.indentLevel=(this.indentLevel||0)+(void 0===t?1:t),this.indentPad=new Array(this.indentLevel+1).join("&nbsp;&nbsp;")},t.row=(e,n)=>{t.out('<tr><td style="white-space: nowrap;"><pre class="jsondiffpatch-annotated-indent" style="display: inline-block">'),t.out(t.indentPad),t.out('</pre><pre style="display: inline-block">'),t.out(e),t.out('</pre></td><td class="jsondiffpatch-delta-note"><div>'),t.out(n),t.out("</div></td></tr>")}}typeFormattterErrorFormatter(t,e){t.row("",`<pre class="jsondiffpatch-error">${e}</pre>`)}formatTextDiffString(t,e){const n=this.parseTextDiff(e);t.out('<ul class="jsondiffpatch-textdiff">');for(let e=0,r=n.length;e<r;e++){const r=n[e];t.out(`<li><div class="jsondiffpatch-textdiff-location"><span class="jsondiffpatch-textdiff-line-number">${r.location.line}</span><span class="jsondiffpatch-textdiff-char">${r.location.chr}</span></div><div class="jsondiffpatch-textdiff-line">`);const i=r.pieces;for(let e=0,n=i.length;e<n;e++){const n=i[e];t.out(`<span class="jsondiffpatch-textdiff-${n.type}">${n.text}</span>`)}t.out("</div></li>")}t.out("</ul>")}rootBegin(t,e,n){t.out('<table class="jsondiffpatch-annotated-delta">'),"node"===e&&(t.row("{"),t.indent()),"array"===n&&t.row('"_t": "a",',"Array delta (member names indicate array indices)")}rootEnd(t,e){"node"===e&&(t.indent(-1),t.row("}")),t.out("</table>")}nodeBegin(t,e,n,r,i){t.row(`&quot;${e}&quot;: {`),"node"===r&&t.indent(),"array"===i&&t.row('"_t": "a",',"Array delta (member names indicate array indices)")}nodeEnd(t,e,n,r,i,s){"node"===r&&t.indent(-1),t.row("}"+(s?"":","))}format_unchanged(){}format_movedestination(){}format_node(t,e,n){this.formatDeltaChildren(t,e,n)}}const nt=t=>`<pre style="display:inline-block">&quot;${t}&quot;</pre>`,rt={added(t,e,n,r){const i=" <pre>([newValue])</pre>";return void 0===r?`new value${i}`:"number"==typeof r?`insert at index ${r}${i}`:`add property ${nt(r)}${i}`},modified(t,e,n,r){const i=" <pre>([previousValue, newValue])</pre>";return void 0===r?`modify value${i}`:"number"==typeof r?`modify at index ${r}${i}`:`modify property ${nt(r)}${i}`},deleted(t,e,n,r){const i=" <pre>([previousValue, 0, 0])</pre>";return void 0===r?`delete value${i}`:"number"==typeof r?`remove index ${r}${i}`:`delete property ${nt(r)}${i}`},moved:(t,e,n,r)=>`move from <span title="(position to remove at original state)">index ${r}</span> to <span title="(position to insert at final state)">index ${t[1]}</span>`,textdiff:(t,e,n,r)=>`text diff${void 0===r?"":"number"==typeof r?` at index ${r}`:` at property ${nt(r)}`}, format is <a href="https://code.google.com/p/google-diff-match-patch/wiki/Unidiff">a variation of Unidiff</a>`},it=function(t,e){const n=this.getDeltaType(e),r=rt[n],i=r&&r.apply(r,Array.prototype.slice.call(arguments,1));let s=JSON.stringify(e,null,2);"textdiff"===n&&(s=s.split("\\n").join('\\n"+\n   "')),t.indent(),t.row(s,i),t.indent(-1)};let st;et.prototype.format_added=it,et.prototype.format_modified=it,et.prototype.format_deleted=it,et.prototype.format_moved=it,et.prototype.format_textdiff=it;var ot=Object.freeze({__proto__:null,default:et,format:function(t,e){return st||(st=new et),st.format(t,e)}});const at="add",lt="remove",ft="replace",ht="move";class ct extends J{constructor(){super(),this.includeMoveDestinations=!0}prepareContext(t){super.prepareContext(t),t.result=[],t.path=[],t.pushCurrentOp=function(t){const{op:e,value:n}=t,r={op:e,path:this.currentPath()};void 0!==n&&(r.value=n),this.result.push(r)},t.pushMoveOp=function(t){const e=this.currentPath();this.result.push({op:ht,from:e,path:this.toPath(t)})},t.currentPath=function(){return`/${this.path.join("/")}`},t.toPath=function(t){const e=this.path.slice();return e[e.length-1]=t,`/${e.join("/")}`}}typeFormattterErrorFormatter(t,e){t.out(`[ERROR] ${e}`)}rootBegin(){}rootEnd(){}nodeBegin(t,e,n){let{path:r}=t;r.push(n)}nodeEnd(t){let{path:e}=t;e.pop()}format_unchanged(){}format_movedestination(){}format_node(t,e,n){this.formatDeltaChildren(t,e,n)}format_added(t,e){t.pushCurrentOp({op:at,value:e[0]})}format_modified(t,e){t.pushCurrentOp({op:ft,value:e[1]})}format_deleted(t){t.pushCurrentOp({op:lt})}format_moved(t,e){const n=e[1];t.pushMoveOp(n)}format_textdiff(){throw new Error("Not implemented")}format(t,e){const n={};return this.prepareContext(n),this.recurse(n,t,e),n.result}}const ut=t=>t[t.length-1],dt=t=>{return n=(t,e)=>{const n=t.path.split("/"),r=e.path.split("/");return n.length!==r.length?n.length-r.length:((t,e)=>{const n=parseInt(t,10),r=parseInt(e,10);return isNaN(n)||isNaN(r)?0:r-n})(ut(n),ut(r))},(e=t).sort(n),e;var e,n},pt=(t,e)=>{const n=Array(e.length+1).fill().map((()=>[]));return t.map((t=>{let n=e.map((e=>e(t))).indexOf(!0);return n<0&&(n=e.length),{item:t,position:n}})).reduce(((t,e)=>(t[e.position].push(e.item),t)),n)},gt=t=>{let{op:e}=t;return"move"===e},mt=t=>{let{op:e}=t;return"remove"===e};let vt;const yt=(t,e)=>(vt||(vt=new ct),(t=>{const[e,n,r]=pt(t,[gt,mt]);return[...dt(n),...e,...r]})(vt.format(t,e)));var _t=Object.freeze({__proto__:null,default:ct,format:yt,log:(t,e)=>{console.log(yt(t,e))},partitionOps:pt});function xt(t){return e&&e[t]||function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e}}const bt={added:xt("green"),deleted:xt("red"),movedestination:xt("gray"),moved:xt("yellow"),unchanged:xt("gray"),error:xt("white.bgRed"),textDiffLine:xt("gray")};class wt extends J{constructor(){super(),this.includeMoveDestinations=!1}prepareContext(t){super.prepareContext(t),t.indent=function(t){this.indentLevel=(this.indentLevel||0)+(void 0===t?1:t),this.indentPad=new Array(this.indentLevel+1).join("  "),this.outLine()},t.outLine=function(){this.buffer.push(`\n${this.indentPad||""}`)},t.out=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];for(let t=0,n=e.length;t<n;t++){let n=e[t].split("\n").join(`\n${this.indentPad||""}`);this.color&&this.color[0]&&(n=this.color[0](n)),this.buffer.push(n)}},t.pushColor=function(t){this.color=this.color||[],this.color.unshift(t)},t.popColor=function(){this.color=this.color||[],this.color.shift()}}typeFormattterErrorFormatter(t,e){t.pushColor(bt.error),t.out(`[ERROR]${e}`),t.popColor()}formatValue(t,e){t.out(JSON.stringify(e,null,2))}formatTextDiffString(t,e){const n=this.parseTextDiff(e);t.indent();for(let e=0,r=n.length;e<r;e++){const i=n[e];t.pushColor(bt.textDiffLine),t.out(`${i.location.line},${i.location.chr} `),t.popColor();const s=i.pieces;for(let e=0,n=s.length;e<n;e++){const n=s[e];t.pushColor(bt[n.type]),t.out(n.text),t.popColor()}e<r-1&&t.outLine()}t.indent(-1)}rootBegin(t,e,n){t.pushColor(bt[e]),"node"===e&&(t.out("array"===n?"[":"{"),t.indent())}rootEnd(t,e,n){"node"===e&&(t.indent(-1),t.out("array"===n?"]":"}")),t.popColor()}nodeBegin(t,e,n,r,i){t.pushColor(bt[r]),t.out(`${n}: `),"node"===r&&(t.out("array"===i?"[":"{"),t.indent())}nodeEnd(t,e,n,r,i,s){"node"===r&&(t.indent(-1),t.out("array"===i?"]":"}"+(s?"":","))),s||t.outLine(),t.popColor()}format_unchanged(t,e,n){void 0!==n&&this.formatValue(t,n)}format_movedestination(t,e,n){void 0!==n&&this.formatValue(t,n)}format_node(t,e,n){this.formatDeltaChildren(t,e,n)}format_added(t,e){this.formatValue(t,e[0])}format_modified(t,e){t.pushColor(bt.deleted),this.formatValue(t,e[0]),t.popColor(),t.out(" => "),t.pushColor(bt.added),this.formatValue(t,e[1]),t.popColor()}format_deleted(t,e){this.formatValue(t,e[0])}format_moved(t,e){t.out(`==> ${e[1]}`)}format_textdiff(t,e){this.formatTextDiffString(t,e[0])}}let jt;const Dt=(t,e)=>(jt||(jt=new wt),jt.format(t,e));var Mt=Object.freeze({__proto__:null,default:wt,format:Dt,log:function(t,e){console.log(Dt(t,e))}}),At=Object.freeze({__proto__:null,annotated:ot,base:K,console:Mt,html:tt,jsonpatch:_t});let $t;t.DiffPatcher=q,t.clone=function(){return $t||($t=new q),$t.clone.apply($t,arguments)},t.console=Mt,t.create=function(t){return new q(t)},t.dateReviver=function(t,e){let n;return"string"==typeof e&&(n=/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d*))?(Z|([+-])(\d{2}):(\d{2}))$/.exec(e),n)?new Date(Date.UTC(+n[1],+n[2]-1,+n[3],+n[4],+n[5],+n[6],+(n[7]||0))):e},t.diff=function(){return $t||($t=new q),$t.diff.apply($t,arguments)},t.formatters=At,t.patch=function(){return $t||($t=new q),$t.patch.apply($t,arguments)},t.reverse=function(){return $t||($t=new q),$t.reverse.apply($t,arguments)},t.unpatch=function(){return $t||($t=new q),$t.unpatch.apply($t,arguments)}}));
//# sourceMappingURL=/sm/d38eaa61bf65994bff5a7260846052c149b75b3590a44bdffbc6864deb19050b.map


/*!
 * protobuf.js v7.3.2 (c) 2016, daniel wirtz
 * compiled wed, 12 jun 2024 08:24:21 utc
 * licensed under the bsd-3-clause license
 * see: https://github.com/dcodeio/protobuf.js for details
 */
!function(nt){"use strict";!function(r,e,t){var i=function t(i){var n=e[i];return n||r[i][0].call(n=e[i]={exports:{}},t,n,n.exports),n.exports}(t[0]);i.util.global.protobuf=i,"function"==typeof define&&define.amd&&define(["long"],function(t){return t&&t.isLong&&(i.util.Long=t,i.configure()),i}),"object"==typeof module&&module&&module.exports&&(module.exports=i)}({1:[function(t,i,n){i.exports=function(t,i){var n=Array(arguments.length-1),s=0,r=2,o=!0;for(;r<arguments.length;)n[s++]=arguments[r++];return new Promise(function(r,e){n[s]=function(t){if(o)if(o=!1,t)e(t);else{for(var i=Array(arguments.length-1),n=0;n<i.length;)i[n++]=arguments[n];r.apply(null,i)}};try{t.apply(i||null,n)}catch(t){o&&(o=!1,e(t))}})}},{}],2:[function(t,i,n){n.length=function(t){var i=t.length;if(!i)return 0;for(var n=0;1<--i%4&&"="==(t[0|i]||"");)++n;return Math.ceil(3*t.length)/4-n};for(var h=Array(64),f=Array(123),r=0;r<64;)f[h[r]=r<26?r+65:r<52?r+71:r<62?r-4:r-59|43]=r++;n.encode=function(t,i,n){for(var r,e=null,s=[],o=0,u=0;i<n;){var f=t[i++];switch(u){case 0:s[o++]=h[f>>2],r=(3&f)<<4,u=1;break;case 1:s[o++]=h[r|f>>4],r=(15&f)<<2,u=2;break;case 2:s[o++]=h[r|f>>6],s[o++]=h[63&f],u=0}8191<o&&((e=e||[]).push(String.fromCharCode.apply(String,s)),o=0)}return u&&(s[o++]=h[r],s[o++]=61,1===u&&(s[o++]=61)),e?(o&&e.push(String.fromCharCode.apply(String,s.slice(0,o))),e.join("")):String.fromCharCode.apply(String,s.slice(0,o))};var a="invalid encoding";n.decode=function(t,i,n){for(var r,e=n,s=0,o=0;o<t.length;){var u=t.charCodeAt(o++);if(61==u&&1<s)break;if((u=f[u])===nt)throw Error(a);switch(s){case 0:r=u,s=1;break;case 1:i[n++]=r<<2|(48&u)>>4,r=u,s=2;break;case 2:i[n++]=(15&r)<<4|(60&u)>>2,r=u,s=3;break;case 3:i[n++]=(3&r)<<6|u,s=0}}if(1===s)throw Error(a);return n-e},n.test=function(t){return/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(t)}},{}],3:[function(t,i,n){function c(i,n){"string"==typeof i&&(n=i,i=nt);var f=[];function h(t){if("string"!=typeof t){var i=a();if(c.verbose&&console.log("codegen: "+i),i="return "+i,t){for(var n=Object.keys(t),r=Array(n.length+1),e=Array(n.length),s=0;s<n.length;)r[s]=n[s],e[s]=t[n[s++]];return r[s]=i,Function.apply(null,r).apply(null,e)}return Function(i)()}for(var o=Array(arguments.length-1),u=0;u<o.length;)o[u]=arguments[++u];if(u=0,t=t.replace(/%([%dfijs])/g,function(t,i){var n=o[u++];switch(i){case"d":case"f":return""+ +(""+n);case"i":return""+Math.floor(n);case"j":return JSON.stringify(n);case"s":return""+n}return"%"}),u!==o.length)throw Error("parameter count mismatch");return f.push(t),h}function a(t){return"function "+(t||n||"")+"("+(i&&i.join(",")||"")+"){\n  "+f.join("\n  ")+"\n}"}return h.toString=a,h}(i.exports=c).verbose=!1},{}],4:[function(t,i,n){function r(){this.i={}}(i.exports=r).prototype.on=function(t,i,n){return(this.i[t]||(this.i[t]=[])).push({fn:i,ctx:n||this}),this},r.prototype.off=function(t,i){if(t===nt)this.i={};else if(i===nt)this.i[t]=[];else for(var n=this.i[t],r=0;r<n.length;)n[r].fn===i?n.splice(r,1):++r;return this},r.prototype.emit=function(t){var i=this.i[t];if(i){for(var n=[],r=1;r<arguments.length;)n.push(arguments[r++]);for(r=0;r<i.length;)i[r].fn.apply(i[r++].ctx,n)}return this}},{}],5:[function(t,i,n){i.exports=u;var s=t(1),o=t(7)("fs");function u(n,r,e){return r="function"==typeof r?(e=r,{}):r||{},e?!r.xhr&&o&&o.readFile?o.readFile(n,function(t,i){return t&&"undefined"!=typeof XMLHttpRequest?u.xhr(n,r,e):t?e(t):e(null,r.binary?i:i.toString("utf8"))}):u.xhr(n,r,e):s(u,this,n,r)}u.xhr=function(t,n,r){var e=new XMLHttpRequest;e.onreadystatechange=function(){if(4!==e.readyState)return nt;if(0!==e.status&&200!==e.status)return r(Error("status "+e.status));if(n.binary){if(!(t=e.response))for(var t=[],i=0;i<e.responseText.length;++i)t.push(255&e.responseText.charCodeAt(i));return r(null,"undefined"!=typeof Uint8Array?new Uint8Array(t):t)}return r(null,e.responseText)},n.binary&&("overrideMimeType"in e&&e.overrideMimeType("text/plain; charset=x-user-defined"),e.responseType="arraybuffer"),e.open("GET",t),e.send()}},{1:1,7:7}],6:[function(t,i,n){function r(t){function i(t,i,n,r){var e=i<0?1:0;t(0===(i=e?-i:i)?0<1/i?0:2147483648:isNaN(i)?2143289344:34028234663852886e22<i?(e<<31|2139095040)>>>0:i<11754943508222875e-54?(e<<31|Math.round(i/1401298464324817e-60))>>>0:(e<<31|127+(t=Math.floor(Math.log(i)/Math.LN2))<<23|8388607&Math.round(i*Math.pow(2,-t)*8388608))>>>0,n,r)}function n(t,i,n){t=t(i,n),i=2*(t>>31)+1,n=t>>>23&255,t&=8388607;return 255==n?t?NaN:1/0*i:0==n?1401298464324817e-60*i*t:i*Math.pow(2,n-150)*(8388608+t)}function r(t,i,n){u[0]=t,i[n]=f[0],i[n+1]=f[1],i[n+2]=f[2],i[n+3]=f[3]}function e(t,i,n){u[0]=t,i[n]=f[3],i[n+1]=f[2],i[n+2]=f[1],i[n+3]=f[0]}function s(t,i){return f[0]=t[i],f[1]=t[i+1],f[2]=t[i+2],f[3]=t[i+3],u[0]}function o(t,i){return f[3]=t[i],f[2]=t[i+1],f[1]=t[i+2],f[0]=t[i+3],u[0]}var u,f,h,a,c;function l(t,i,n,r,e,s){var o,u=r<0?1:0;0===(r=u?-r:r)?(t(0,e,s+i),t(0<1/r?0:2147483648,e,s+n)):isNaN(r)?(t(0,e,s+i),t(2146959360,e,s+n)):17976931348623157e292<r?(t(0,e,s+i),t((u<<31|2146435072)>>>0,e,s+n)):r<22250738585072014e-324?(t((o=r/5e-324)>>>0,e,s+i),t((u<<31|o/4294967296)>>>0,e,s+n)):(t(4503599627370496*(o=r*Math.pow(2,-(r=1024===(r=Math.floor(Math.log(r)/Math.LN2))?1023:r)))>>>0,e,s+i),t((u<<31|r+1023<<20|1048576*o&1048575)>>>0,e,s+n))}function d(t,i,n,r,e){i=t(r,e+i),t=t(r,e+n),r=2*(t>>31)+1,e=t>>>20&2047,n=4294967296*(1048575&t)+i;return 2047==e?n?NaN:1/0*r:0==e?5e-324*r*n:r*Math.pow(2,e-1075)*(n+4503599627370496)}function p(t,i,n){h[0]=t,i[n]=a[0],i[n+1]=a[1],i[n+2]=a[2],i[n+3]=a[3],i[n+4]=a[4],i[n+5]=a[5],i[n+6]=a[6],i[n+7]=a[7]}function v(t,i,n){h[0]=t,i[n]=a[7],i[n+1]=a[6],i[n+2]=a[5],i[n+3]=a[4],i[n+4]=a[3],i[n+5]=a[2],i[n+6]=a[1],i[n+7]=a[0]}function b(t,i){return a[0]=t[i],a[1]=t[i+1],a[2]=t[i+2],a[3]=t[i+3],a[4]=t[i+4],a[5]=t[i+5],a[6]=t[i+6],a[7]=t[i+7],h[0]}function w(t,i){return a[7]=t[i],a[6]=t[i+1],a[5]=t[i+2],a[4]=t[i+3],a[3]=t[i+4],a[2]=t[i+5],a[1]=t[i+6],a[0]=t[i+7],h[0]}return"undefined"!=typeof Float32Array?(u=new Float32Array([-0]),f=new Uint8Array(u.buffer),c=128===f[3],t.writeFloatLE=c?r:e,t.writeFloatBE=c?e:r,t.readFloatLE=c?s:o,t.readFloatBE=c?o:s):(t.writeFloatLE=i.bind(null,y),t.writeFloatBE=i.bind(null,m),t.readFloatLE=n.bind(null,g),t.readFloatBE=n.bind(null,j)),"undefined"!=typeof Float64Array?(h=new Float64Array([-0]),a=new Uint8Array(h.buffer),c=128===a[7],t.writeDoubleLE=c?p:v,t.writeDoubleBE=c?v:p,t.readDoubleLE=c?b:w,t.readDoubleBE=c?w:b):(t.writeDoubleLE=l.bind(null,y,0,4),t.writeDoubleBE=l.bind(null,m,4,0),t.readDoubleLE=d.bind(null,g,0,4),t.readDoubleBE=d.bind(null,j,4,0)),t}function y(t,i,n){i[n]=255&t,i[n+1]=t>>>8&255,i[n+2]=t>>>16&255,i[n+3]=t>>>24}function m(t,i,n){i[n]=t>>>24,i[n+1]=t>>>16&255,i[n+2]=t>>>8&255,i[n+3]=255&t}function g(t,i){return(t[i]|t[i+1]<<8|t[i+2]<<16|t[i+3]<<24)>>>0}function j(t,i){return(t[i]<<24|t[i+1]<<16|t[i+2]<<8|t[i+3])>>>0}i.exports=r(r)},{}],7:[function(t,i,n){function r(t){try{var i=eval("require")(t);if(i&&(i.length||Object.keys(i).length))return i}catch(t){}return null}i.exports=r},{}],8:[function(t,i,n){var e=n.isAbsolute=function(t){return/^(?:\/|\w+:)/.test(t)},r=n.normalize=function(t){var i=(t=t.replace(/\\/g,"/").replace(/\/{2,}/g,"/")).split("/"),n=e(t),t="";n&&(t=i.shift()+"/");for(var r=0;r<i.length;)".."===i[r]?0<r&&".."!==i[r-1]?i.splice(--r,2):n?i.splice(r,1):++r:"."===i[r]?i.splice(r,1):++r;return t+i.join("/")};n.resolve=function(t,i,n){return n||(i=r(i)),!e(i)&&(t=(t=n?t:r(t)).replace(/(?:\/|^)[^/]+$/,"")).length?r(t+"/"+i):i}},{}],9:[function(t,i,n){i.exports=function(i,n,t){var r=t||8192,e=r>>>1,s=null,o=r;return function(t){if(t<1||e<t)return i(t);r<o+t&&(s=i(r),o=0);t=n.call(s,o,o+=t);return 7&o&&(o=1+(7|o)),t}}},{}],10:[function(t,i,n){n.length=function(t){for(var i,n=0,r=0;r<t.length;++r)(i=t.charCodeAt(r))<128?n+=1:i<2048?n+=2:55296==(64512&i)&&56320==(64512&t.charCodeAt(r+1))?(++r,n+=4):n+=3;return n},n.read=function(t,i,n){if(n-i<1)return"";for(var r,e=null,s=[],o=0;i<n;)(r=t[i++])<128?s[o++]=r:191<r&&r<224?s[o++]=(31&r)<<6|63&t[i++]:239<r&&r<365?(r=((7&r)<<18|(63&t[i++])<<12|(63&t[i++])<<6|63&t[i++])-65536,s[o++]=55296+(r>>10),s[o++]=56320+(1023&r)):s[o++]=(15&r)<<12|(63&t[i++])<<6|63&t[i++],8191<o&&((e=e||[]).push(String.fromCharCode.apply(String,s)),o=0);return e?(o&&e.push(String.fromCharCode.apply(String,s.slice(0,o))),e.join("")):String.fromCharCode.apply(String,s.slice(0,o))},n.write=function(t,i,n){for(var r,e,s=n,o=0;o<t.length;++o)(r=t.charCodeAt(o))<128?i[n++]=r:(r<2048?i[n++]=r>>6|192:(55296==(64512&r)&&56320==(64512&(e=t.charCodeAt(o+1)))?(++o,i[n++]=(r=65536+((1023&r)<<10)+(1023&e))>>18|240,i[n++]=r>>12&63|128):i[n++]=r>>12|224,i[n++]=r>>6&63|128),i[n++]=63&r|128);return n-s}},{}],11:[function(t,i,n){i.exports=e;var r=/\/|\./;function e(t,i){r.test(t)||(t="google/protobuf/"+t+".proto",i={nested:{google:{nested:{protobuf:{nested:i}}}}}),e[t]=i}e("any",{Any:{fields:{type_url:{type:"string",id:1},value:{type:"bytes",id:2}}}}),e("duration",{Duration:i={fields:{seconds:{type:"int64",id:1},nanos:{type:"int32",id:2}}}}),e("timestamp",{Timestamp:i}),e("empty",{Empty:{fields:{}}}),e("struct",{Struct:{fields:{fields:{keyType:"string",type:"Value",id:1}}},Value:{oneofs:{kind:{oneof:["nullValue","numberValue","stringValue","boolValue","structValue","listValue"]}},fields:{nullValue:{type:"NullValue",id:1},numberValue:{type:"double",id:2},stringValue:{type:"string",id:3},boolValue:{type:"bool",id:4},structValue:{type:"Struct",id:5},listValue:{type:"ListValue",id:6}}},NullValue:{values:{NULL_VALUE:0}},ListValue:{fields:{values:{rule:"repeated",type:"Value",id:1}}}}),e("wrappers",{DoubleValue:{fields:{value:{type:"double",id:1}}},FloatValue:{fields:{value:{type:"float",id:1}}},Int64Value:{fields:{value:{type:"int64",id:1}}},UInt64Value:{fields:{value:{type:"uint64",id:1}}},Int32Value:{fields:{value:{type:"int32",id:1}}},UInt32Value:{fields:{value:{type:"uint32",id:1}}},BoolValue:{fields:{value:{type:"bool",id:1}}},StringValue:{fields:{value:{type:"string",id:1}}},BytesValue:{fields:{value:{type:"bytes",id:1}}}}),e("field_mask",{FieldMask:{fields:{paths:{rule:"repeated",type:"string",id:1}}}}),e.get=function(t){return e[t]||null}},{}],12:[function(t,i,n){var l=t(15),d=t(37);function o(t,i,n,r){var e=!1;if(i.resolvedType)if(i.resolvedType instanceof l){t("switch(d%s){",r);for(var s=i.resolvedType.values,o=Object.keys(s),u=0;u<o.length;++u)s[o[u]]!==i.typeDefault||e||(t("default:")('if(typeof(d%s)==="number"){m%s=d%s;break}',r,r,r),i.repeated||t("break"),e=!0),t("case%j:",o[u])("case %i:",s[o[u]])("m%s=%j",r,s[o[u]])("break");t("}")}else t('if(typeof d%s!=="object")',r)("throw TypeError(%j)",i.fullName+": object expected")("m%s=types[%i].fromObject(d%s)",r,n,r);else{var f=!1;switch(i.type){case"double":case"float":t("m%s=Number(d%s)",r,r);break;case"uint32":case"fixed32":t("m%s=d%s>>>0",r,r);break;case"int32":case"sint32":case"sfixed32":t("m%s=d%s|0",r,r);break;case"uint64":f=!0;case"int64":case"sint64":case"fixed64":case"sfixed64":t("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j",r,r,f)('else if(typeof d%s==="string")',r)("m%s=parseInt(d%s,10)",r,r)('else if(typeof d%s==="number")',r)("m%s=d%s",r,r)('else if(typeof d%s==="object")',r)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)",r,r,r,f?"true":"");break;case"bytes":t('if(typeof d%s==="string")',r)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)",r,r,r)("else if(d%s.length >= 0)",r)("m%s=d%s",r,r);break;case"string":t("m%s=String(d%s)",r,r);break;case"bool":t("m%s=Boolean(d%s)",r,r)}}return t}function p(t,i,n,r){if(i.resolvedType)i.resolvedType instanceof l?t("d%s=o.enums===String?(types[%i].values[m%s]===undefined?m%s:types[%i].values[m%s]):m%s",r,n,r,r,n,r,r):t("d%s=types[%i].toObject(m%s,o)",r,n,r);else{var e=!1;switch(i.type){case"double":case"float":t("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s",r,r,r,r);break;case"uint64":e=!0;case"int64":case"sint64":case"fixed64":case"sfixed64":t('if(typeof m%s==="number")',r)("d%s=o.longs===String?String(m%s):m%s",r,r,r)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s",r,r,r,r,e?"true":"",r);break;case"bytes":t("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s",r,r,r,r,r);break;default:t("d%s=m%s",r,r)}}return t}n.fromObject=function(t){var i=t.fieldsArray,n=d.codegen(["d"],t.name+"$fromObject")("if(d instanceof this.ctor)")("return d");if(!i.length)return n("return new this.ctor");n("var m=new this.ctor");for(var r=0;r<i.length;++r){var e=i[r].resolve(),s=d.safeProp(e.name);e.map?(n("if(d%s){",s)('if(typeof d%s!=="object")',s)("throw TypeError(%j)",e.fullName+": object expected")("m%s={}",s)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){",s),o(n,e,r,s+"[ks[i]]")("}")("}")):e.repeated?(n("if(d%s){",s)("if(!Array.isArray(d%s))",s)("throw TypeError(%j)",e.fullName+": array expected")("m%s=[]",s)("for(var i=0;i<d%s.length;++i){",s),o(n,e,r,s+"[i]")("}")("}")):(e.resolvedType instanceof l||n("if(d%s!=null){",s),o(n,e,r,s),e.resolvedType instanceof l||n("}"))}return n("return m")},n.toObject=function(t){var i=t.fieldsArray.slice().sort(d.compareFieldsById);if(!i.length)return d.codegen()("return {}");for(var n=d.codegen(["m","o"],t.name+"$toObject")("if(!o)")("o={}")("var d={}"),r=[],e=[],s=[],o=0;o<i.length;++o)i[o].partOf||(i[o].resolve().repeated?r:i[o].map?e:s).push(i[o]);if(r.length){for(n("if(o.arrays||o.defaults){"),o=0;o<r.length;++o)n("d%s=[]",d.safeProp(r[o].name));n("}")}if(e.length){for(n("if(o.objects||o.defaults){"),o=0;o<e.length;++o)n("d%s={}",d.safeProp(e[o].name));n("}")}if(s.length){for(n("if(o.defaults){"),o=0;o<s.length;++o){var u,f=s[o],h=d.safeProp(f.name);f.resolvedType instanceof l?n("d%s=o.enums===String?%j:%j",h,f.resolvedType.valuesById[f.typeDefault],f.typeDefault):f.long?n("if(util.Long){")("var n=new util.Long(%i,%i,%j)",f.typeDefault.low,f.typeDefault.high,f.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n",h)("}else")("d%s=o.longs===String?%j:%i",h,f.typeDefault.toString(),f.typeDefault.toNumber()):f.bytes?(u="["+Array.prototype.slice.call(f.typeDefault).join(",")+"]",n("if(o.bytes===String)d%s=%j",h,String.fromCharCode.apply(String,f.typeDefault))("else{")("d%s=%s",h,u)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)",h,h)("}")):n("d%s=%j",h,f.typeDefault)}n("}")}for(var a=!1,o=0;o<i.length;++o){var f=i[o],c=t.e.indexOf(f),h=d.safeProp(f.name);f.map?(a||(a=!0,n("var ks2")),n("if(m%s&&(ks2=Object.keys(m%s)).length){",h,h)("d%s={}",h)("for(var j=0;j<ks2.length;++j){"),p(n,f,c,h+"[ks2[j]]")("}")):f.repeated?(n("if(m%s&&m%s.length){",h,h)("d%s=[]",h)("for(var j=0;j<m%s.length;++j){",h),p(n,f,c,h+"[j]")("}")):(n("if(m%s!=null&&m.hasOwnProperty(%j)){",h,f.name),p(n,f,c,h),f.partOf&&n("if(o.oneofs)")("d%s=%j",d.safeProp(f.partOf.name),f.name)),n("}")}return n("return d")}},{15:15,37:37}],13:[function(t,i,n){i.exports=function(t){var i=h.codegen(["r","l"],t.name+"$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor"+(t.fieldsArray.filter(function(t){return t.map}).length?",k,value":""))("while(r.pos<c){")("var t=r.uint32()");t.group&&i("if((t&7)===4)")("break");i("switch(t>>>3){");for(var n=0;n<t.fieldsArray.length;++n){var r=t.e[n].resolve(),e=r.resolvedType instanceof u?"int32":r.type,s="m"+h.safeProp(r.name);i("case %i: {",r.id),r.map?(i("if(%s===util.emptyObject)",s)("%s={}",s)("var c2 = r.uint32()+r.pos"),f.defaults[r.keyType]!==nt?i("k=%j",f.defaults[r.keyType]):i("k=null"),f.defaults[e]!==nt?i("value=%j",f.defaults[e]):i("value=null"),i("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break",r.keyType)("case 2:"),f.basic[e]===nt?i("value=types[%i].decode(r,r.uint32())",n):i("value=r.%s()",e),i("break")("default:")("r.skipType(tag2&7)")("break")("}")("}"),f.long[r.keyType]!==nt?i('%s[typeof k==="object"?util.longToHash(k):k]=value',s):i("%s[k]=value",s)):r.repeated?(i("if(!(%s&&%s.length))",s,s)("%s=[]",s),f.packed[e]!==nt&&i("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())",s,e)("}else"),f.basic[e]===nt?i(r.resolvedType.group?"%s.push(types[%i].decode(r))":"%s.push(types[%i].decode(r,r.uint32()))",s,n):i("%s.push(r.%s())",s,e)):f.basic[e]===nt?i(r.resolvedType.group?"%s=types[%i].decode(r)":"%s=types[%i].decode(r,r.uint32())",s,n):i("%s=r.%s()",s,e),i("break")("}")}for(i("default:")("r.skipType(t&7)")("break")("}")("}"),n=0;n<t.e.length;++n){var o=t.e[n];o.required&&i("if(!m.hasOwnProperty(%j))",o.name)("throw util.ProtocolError(%j,{instance:m})","missing required '"+o.name+"'")}return i("return m")};var u=t(15),f=t(36),h=t(37)},{15:15,36:36,37:37}],14:[function(t,i,n){i.exports=function(t){for(var i,n=c.codegen(["m","w"],t.name+"$encode")("if(!w)")("w=Writer.create()"),r=t.fieldsArray.slice().sort(c.compareFieldsById),e=0;e<r.length;++e){var s=r[e].resolve(),o=t.e.indexOf(s),u=s.resolvedType instanceof h?"int32":s.type,f=a.basic[u];i="m"+c.safeProp(s.name),s.map?(n("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){",i,s.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){",i)("w.uint32(%i).fork().uint32(%i).%s(ks[i])",(s.id<<3|2)>>>0,8|a.mapKey[s.keyType],s.keyType),f===nt?n("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()",o,i):n(".uint32(%i).%s(%s[ks[i]]).ldelim()",16|f,u,i),n("}")("}")):s.repeated?(n("if(%s!=null&&%s.length){",i,i),s.packed&&a.packed[u]!==nt?n("w.uint32(%i).fork()",(s.id<<3|2)>>>0)("for(var i=0;i<%s.length;++i)",i)("w.%s(%s[i])",u,i)("w.ldelim()"):(n("for(var i=0;i<%s.length;++i)",i),f===nt?l(n,s,o,i+"[i]"):n("w.uint32(%i).%s(%s[i])",(s.id<<3|f)>>>0,u,i)),n("}")):(s.optional&&n("if(%s!=null&&Object.hasOwnProperty.call(m,%j))",i,s.name),f===nt?l(n,s,o,i):n("w.uint32(%i).%s(%s)",(s.id<<3|f)>>>0,u,i))}return n("return w")};var h=t(15),a=t(36),c=t(37);function l(t,i,n,r){i.resolvedType.group?t("types[%i].encode(%s,w.uint32(%i)).uint32(%i)",n,r,(i.id<<3|3)>>>0,(i.id<<3|4)>>>0):t("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()",n,r,(i.id<<3|2)>>>0)}},{15:15,36:36,37:37}],15:[function(t,i,n){i.exports=s;var f=t(24),r=(((s.prototype=Object.create(f.prototype)).constructor=s).className="Enum",t(23)),e=t(37);function s(t,i,n,r,e,s){if(f.call(this,t,n),i&&"object"!=typeof i)throw TypeError("values must be an object");if(this.valuesById={},this.values=Object.create(this.valuesById),this.comment=r,this.comments=e||{},this.valuesOptions=s,this.reserved=nt,i)for(var o=Object.keys(i),u=0;u<o.length;++u)"number"==typeof i[o[u]]&&(this.valuesById[this.values[o[u]]=i[o[u]]]=o[u])}s.fromJSON=function(t,i){t=new s(t,i.values,i.options,i.comment,i.comments);return t.reserved=i.reserved,t},s.prototype.toJSON=function(t){t=!!t&&!!t.keepComments;return e.toObject(["options",this.options,"valuesOptions",this.valuesOptions,"values",this.values,"reserved",this.reserved&&this.reserved.length?this.reserved:nt,"comment",t?this.comment:nt,"comments",t?this.comments:nt])},s.prototype.add=function(t,i,n,r){if(!e.isString(t))throw TypeError("name must be a string");if(!e.isInteger(i))throw TypeError("id must be an integer");if(this.values[t]!==nt)throw Error("duplicate name '"+t+"' in "+this);if(this.isReservedId(i))throw Error("id "+i+" is reserved in "+this);if(this.isReservedName(t))throw Error("name '"+t+"' is reserved in "+this);if(this.valuesById[i]!==nt){if(!this.options||!this.options.allow_alias)throw Error("duplicate id "+i+" in "+this);this.values[t]=i}else this.valuesById[this.values[t]=i]=t;return r&&(this.valuesOptions===nt&&(this.valuesOptions={}),this.valuesOptions[t]=r||null),this.comments[t]=n||null,this},s.prototype.remove=function(t){if(!e.isString(t))throw TypeError("name must be a string");var i=this.values[t];if(null==i)throw Error("name '"+t+"' does not exist in "+this);return delete this.valuesById[i],delete this.values[t],delete this.comments[t],this.valuesOptions&&delete this.valuesOptions[t],this},s.prototype.isReservedId=function(t){return r.isReservedId(this.reserved,t)},s.prototype.isReservedName=function(t){return r.isReservedName(this.reserved,t)}},{23:23,24:24,37:37}],16:[function(t,i,n){i.exports=o;var r,u=t(24),e=(((o.prototype=Object.create(u.prototype)).constructor=o).className="Field",t(15)),f=t(36),h=t(37),a=/^required|optional|repeated$/;function o(t,i,n,r,e,s,o){if(h.isObject(r)?(o=e,s=r,r=e=nt):h.isObject(e)&&(o=s,s=e,e=nt),u.call(this,t,s),!h.isInteger(i)||i<0)throw TypeError("id must be a non-negative integer");if(!h.isString(n))throw TypeError("type must be a string");if(r!==nt&&!a.test(r=r.toString().toLowerCase()))throw TypeError("rule must be a string rule");if(e!==nt&&!h.isString(e))throw TypeError("extend must be a string");this.rule=(r="proto3_optional"===r?"optional":r)&&"optional"!==r?r:nt,this.type=n,this.id=i,this.extend=e||nt,this.required="required"===r,this.optional=!this.required,this.repeated="repeated"===r,this.map=!1,this.message=null,this.partOf=null,this.typeDefault=null,this.defaultValue=null,this.long=!!h.Long&&f.long[n]!==nt,this.bytes="bytes"===n,this.resolvedType=null,this.extensionField=null,this.declaringField=null,this.o=null,this.comment=o}o.fromJSON=function(t,i){return new o(t,i.id,i.type,i.rule,i.extend,i.options,i.comment)},Object.defineProperty(o.prototype,"packed",{get:function(){return null===this.o&&(this.o=!1!==this.getOption("packed")),this.o}}),o.prototype.setOption=function(t,i,n){return"packed"===t&&(this.o=null),u.prototype.setOption.call(this,t,i,n)},o.prototype.toJSON=function(t){t=!!t&&!!t.keepComments;return h.toObject(["rule","optional"!==this.rule&&this.rule||nt,"type",this.type,"id",this.id,"extend",this.extend,"options",this.options,"comment",t?this.comment:nt])},o.prototype.resolve=function(){var t;return this.resolved?this:((this.typeDefault=f.defaults[this.type])===nt?(this.resolvedType=(this.declaringField||this).parent.lookupTypeOrEnum(this.type),this.resolvedType instanceof r?this.typeDefault=null:this.typeDefault=this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]):this.options&&this.options.proto3_optional&&(this.typeDefault=null),this.options&&null!=this.options.default&&(this.typeDefault=this.options.default,this.resolvedType instanceof e&&"string"==typeof this.typeDefault&&(this.typeDefault=this.resolvedType.values[this.typeDefault])),this.options&&(!0!==this.options.packed&&(this.options.packed===nt||!this.resolvedType||this.resolvedType instanceof e)||delete this.options.packed,Object.keys(this.options).length||(this.options=nt)),this.long?(this.typeDefault=h.Long.fromNumber(this.typeDefault,"u"==(this.type[0]||"")),Object.freeze&&Object.freeze(this.typeDefault)):this.bytes&&"string"==typeof this.typeDefault&&(h.base64.test(this.typeDefault)?h.base64.decode(this.typeDefault,t=h.newBuffer(h.base64.length(this.typeDefault)),0):h.utf8.write(this.typeDefault,t=h.newBuffer(h.utf8.length(this.typeDefault)),0),this.typeDefault=t),this.map?this.defaultValue=h.emptyObject:this.repeated?this.defaultValue=h.emptyArray:this.defaultValue=this.typeDefault,this.parent instanceof r&&(this.parent.ctor.prototype[this.name]=this.defaultValue),u.prototype.resolve.call(this))},o.d=function(n,r,e,s){return"function"==typeof r?r=h.decorateType(r).name:r&&"object"==typeof r&&(r=h.decorateEnum(r).name),function(t,i){h.decorateType(t.constructor).add(new o(i,n,r,e,{default:s}))}},o.u=function(t){r=t}},{15:15,24:24,36:36,37:37}],17:[function(t,i,n){var r=i.exports=t(18);r.build="light",r.load=function(t,i,n){return(i="function"==typeof i?(n=i,new r.Root):i||new r.Root).load(t,n)},r.loadSync=function(t,i){return(i=i||new r.Root).loadSync(t)},r.encoder=t(14),r.decoder=t(13),r.verifier=t(40),r.converter=t(12),r.ReflectionObject=t(24),r.Namespace=t(23),r.Root=t(29),r.Enum=t(15),r.Type=t(35),r.Field=t(16),r.OneOf=t(25),r.MapField=t(20),r.Service=t(33),r.Method=t(22),r.Message=t(21),r.wrappers=t(41),r.types=t(36),r.util=t(37),r.ReflectionObject.u(r.Root),r.Namespace.u(r.Type,r.Service,r.Enum),r.Root.u(r.Type),r.Field.u(r.Type)},{12:12,13:13,14:14,15:15,16:16,18:18,20:20,21:21,22:22,23:23,24:24,25:25,29:29,33:33,35:35,36:36,37:37,40:40,41:41}],18:[function(t,i,n){var r=n;function e(){r.util.u(),r.Writer.u(r.BufferWriter),r.Reader.u(r.BufferReader)}r.build="minimal",r.Writer=t(42),r.BufferWriter=t(43),r.Reader=t(27),r.BufferReader=t(28),r.util=t(39),r.rpc=t(31),r.roots=t(30),r.configure=e,e()},{27:27,28:28,30:30,31:31,39:39,42:42,43:43}],19:[function(t,i,n){i=i.exports=t(17);i.build="full",i.tokenize=t(34),i.parse=t(26),i.common=t(11),i.Root.u(i.Type,i.parse,i.common)},{11:11,17:17,26:26,34:34}],20:[function(t,i,n){i.exports=s;var o=t(16),r=(((s.prototype=Object.create(o.prototype)).constructor=s).className="MapField",t(36)),u=t(37);function s(t,i,n,r,e,s){if(o.call(this,t,i,r,nt,nt,e,s),!u.isString(n))throw TypeError("keyType must be a string");this.keyType=n,this.resolvedKeyType=null,this.map=!0}s.fromJSON=function(t,i){return new s(t,i.id,i.keyType,i.type,i.options,i.comment)},s.prototype.toJSON=function(t){t=!!t&&!!t.keepComments;return u.toObject(["keyType",this.keyType,"type",this.type,"id",this.id,"extend",this.extend,"options",this.options,"comment",t?this.comment:nt])},s.prototype.resolve=function(){if(this.resolved)return this;if(r.mapKey[this.keyType]===nt)throw Error("invalid key type: "+this.keyType);return o.prototype.resolve.call(this)},s.d=function(n,r,e){return"function"==typeof e?e=u.decorateType(e).name:e&&"object"==typeof e&&(e=u.decorateEnum(e).name),function(t,i){u.decorateType(t.constructor).add(new s(i,n,r,e))}}},{16:16,36:36,37:37}],21:[function(t,i,n){i.exports=e;var r=t(39);function e(t){if(t)for(var i=Object.keys(t),n=0;n<i.length;++n)this[i[n]]=t[i[n]]}e.create=function(t){return this.$type.create(t)},e.encode=function(t,i){return this.$type.encode(t,i)},e.encodeDelimited=function(t,i){return this.$type.encodeDelimited(t,i)},e.decode=function(t){return this.$type.decode(t)},e.decodeDelimited=function(t){return this.$type.decodeDelimited(t)},e.verify=function(t){return this.$type.verify(t)},e.fromObject=function(t){return this.$type.fromObject(t)},e.toObject=function(t,i){return this.$type.toObject(t,i)},e.prototype.toJSON=function(){return this.$type.toObject(this,r.toJSONOptions)}},{39:39}],22:[function(t,i,n){i.exports=r;var h=t(24),a=(((r.prototype=Object.create(h.prototype)).constructor=r).className="Method",t(37));function r(t,i,n,r,e,s,o,u,f){if(a.isObject(e)?(o=e,e=s=nt):a.isObject(s)&&(o=s,s=nt),i!==nt&&!a.isString(i))throw TypeError("type must be a string");if(!a.isString(n))throw TypeError("requestType must be a string");if(!a.isString(r))throw TypeError("responseType must be a string");h.call(this,t,o),this.type=i||"rpc",this.requestType=n,this.requestStream=!!e||nt,this.responseType=r,this.responseStream=!!s||nt,this.resolvedRequestType=null,this.resolvedResponseType=null,this.comment=u,this.parsedOptions=f}r.fromJSON=function(t,i){return new r(t,i.type,i.requestType,i.responseType,i.requestStream,i.responseStream,i.options,i.comment,i.parsedOptions)},r.prototype.toJSON=function(t){t=!!t&&!!t.keepComments;return a.toObject(["type","rpc"!==this.type&&this.type||nt,"requestType",this.requestType,"requestStream",this.requestStream,"responseType",this.responseType,"responseStream",this.responseStream,"options",this.options,"comment",t?this.comment:nt,"parsedOptions",this.parsedOptions])},r.prototype.resolve=function(){return this.resolved?this:(this.resolvedRequestType=this.parent.lookupType(this.requestType),this.resolvedResponseType=this.parent.lookupType(this.responseType),h.prototype.resolve.call(this))}},{24:24,37:37}],23:[function(t,i,n){i.exports=c;var e,s,o,r=t(24),u=(((c.prototype=Object.create(r.prototype)).constructor=c).className="Namespace",t(16)),f=t(37),h=t(25);function a(t,i){if(!t||!t.length)return nt;for(var n={},r=0;r<t.length;++r)n[t[r].name]=t[r].toJSON(i);return n}function c(t,i){r.call(this,t,i),this.nested=nt,this.f=null}function l(t){return t.f=null,t}c.fromJSON=function(t,i){return new c(t,i.options).addJSON(i.nested)},c.arrayToJSON=a,c.isReservedId=function(t,i){if(t)for(var n=0;n<t.length;++n)if("string"!=typeof t[n]&&t[n][0]<=i&&t[n][1]>i)return!0;return!1},c.isReservedName=function(t,i){if(t)for(var n=0;n<t.length;++n)if(t[n]===i)return!0;return!1},Object.defineProperty(c.prototype,"nestedArray",{get:function(){return this.f||(this.f=f.toArray(this.nested))}}),c.prototype.toJSON=function(t){return f.toObject(["options",this.options,"nested",a(this.nestedArray,t)])},c.prototype.addJSON=function(t){if(t)for(var i,n=Object.keys(t),r=0;r<n.length;++r)i=t[n[r]],this.add((i.fields!==nt?e:i.values!==nt?o:i.methods!==nt?s:i.id!==nt?u:c).fromJSON(n[r],i));return this},c.prototype.get=function(t){return this.nested&&this.nested[t]||null},c.prototype.getEnum=function(t){if(this.nested&&this.nested[t]instanceof o)return this.nested[t].values;throw Error("no such enum: "+t)},c.prototype.add=function(t){if(!(t instanceof u&&t.extend!==nt||t instanceof e||t instanceof h||t instanceof o||t instanceof s||t instanceof c))throw TypeError("object must be a valid nested object");if(this.nested){var i=this.get(t.name);if(i){if(!(i instanceof c&&t instanceof c)||i instanceof e||i instanceof s)throw Error("duplicate name '"+t.name+"' in "+this);for(var n=i.nestedArray,r=0;r<n.length;++r)t.add(n[r]);this.remove(i),this.nested||(this.nested={}),t.setOptions(i.options,!0)}}else this.nested={};return(this.nested[t.name]=t).onAdd(this),l(this)},c.prototype.remove=function(t){if(!(t instanceof r))throw TypeError("object must be a ReflectionObject");if(t.parent!==this)throw Error(t+" is not a member of "+this);return delete this.nested[t.name],Object.keys(this.nested).length||(this.nested=nt),t.onRemove(this),l(this)},c.prototype.define=function(t,i){if(f.isString(t))t=t.split(".");else if(!Array.isArray(t))throw TypeError("illegal path");if(t&&t.length&&""===t[0])throw Error("path must be relative");for(var n=this;0<t.length;){var r=t.shift();if(n.nested&&n.nested[r]){if(!((n=n.nested[r])instanceof c))throw Error("path conflicts with non-namespace objects")}else n.add(n=new c(r))}return i&&n.addJSON(i),n},c.prototype.resolveAll=function(){for(var t=this.nestedArray,i=0;i<t.length;)t[i]instanceof c?t[i++].resolveAll():t[i++].resolve();return this.resolve()},c.prototype.lookup=function(t,i,n){if("boolean"==typeof i?(n=i,i=nt):i&&!Array.isArray(i)&&(i=[i]),f.isString(t)&&t.length){if("."===t)return this.root;t=t.split(".")}else if(!t.length)return this;if(""===t[0])return this.root.lookup(t.slice(1),i);var r=this.get(t[0]);if(r){if(1===t.length){if(!i||~i.indexOf(r.constructor))return r}else if(r instanceof c&&(r=r.lookup(t.slice(1),i,!0)))return r}else for(var e=0;e<this.nestedArray.length;++e)if(this.f[e]instanceof c&&(r=this.f[e].lookup(t,i,!0)))return r;return null===this.parent||n?null:this.parent.lookup(t,i)},c.prototype.lookupType=function(t){var i=this.lookup(t,[e]);if(i)return i;throw Error("no such type: "+t)},c.prototype.lookupEnum=function(t){var i=this.lookup(t,[o]);if(i)return i;throw Error("no such Enum '"+t+"' in "+this)},c.prototype.lookupTypeOrEnum=function(t){var i=this.lookup(t,[e,o]);if(i)return i;throw Error("no such Type or Enum '"+t+"' in "+this)},c.prototype.lookupService=function(t){var i=this.lookup(t,[s]);if(i)return i;throw Error("no such Service '"+t+"' in "+this)},c.u=function(t,i,n){e=t,s=i,o=n}},{16:16,24:24,25:25,37:37}],24:[function(t,i,n){(i.exports=e).className="ReflectionObject";var r,o=t(37);function e(t,i){if(!o.isString(t))throw TypeError("name must be a string");if(i&&!o.isObject(i))throw TypeError("options must be an object");this.options=i,this.parsedOptions=null,this.name=t,this.parent=null,this.resolved=!1,this.comment=null,this.filename=null}Object.defineProperties(e.prototype,{root:{get:function(){for(var t=this;null!==t.parent;)t=t.parent;return t}},fullName:{get:function(){for(var t=[this.name],i=this.parent;i;)t.unshift(i.name),i=i.parent;return t.join(".")}}}),e.prototype.toJSON=function(){throw Error()},e.prototype.onAdd=function(t){this.parent&&this.parent!==t&&this.parent.remove(this),this.parent=t,this.resolved=!1;t=t.root;t instanceof r&&t.h(this)},e.prototype.onRemove=function(t){t=t.root;t instanceof r&&t.a(this),this.parent=null,this.resolved=!1},e.prototype.resolve=function(){return this.resolved||this.root instanceof r&&(this.resolved=!0),this},e.prototype.getOption=function(t){return this.options?this.options[t]:nt},e.prototype.setOption=function(t,i,n){return n&&this.options&&this.options[t]!==nt||((this.options||(this.options={}))[t]=i),this},e.prototype.setParsedOption=function(i,t,n){this.parsedOptions||(this.parsedOptions=[]);var r,e,s=this.parsedOptions;return n?(r=s.find(function(t){return Object.prototype.hasOwnProperty.call(t,i)}))?(e=r[i],o.setProperty(e,n,t)):((r={})[i]=o.setProperty({},n,t),s.push(r)):((e={})[i]=t,s.push(e)),this},e.prototype.setOptions=function(t,i){if(t)for(var n=Object.keys(t),r=0;r<n.length;++r)this.setOption(n[r],t[n[r]],i);return this},e.prototype.toString=function(){var t=this.constructor.className,i=this.fullName;return i.length?t+" "+i:t},e.u=function(t){r=t}},{37:37}],25:[function(t,i,n){i.exports=o;var e=t(24),r=(((o.prototype=Object.create(e.prototype)).constructor=o).className="OneOf",t(16)),s=t(37);function o(t,i,n,r){if(Array.isArray(i)||(n=i,i=nt),e.call(this,t,n),i!==nt&&!Array.isArray(i))throw TypeError("fieldNames must be an Array");this.oneof=i||[],this.fieldsArray=[],this.comment=r}function u(t){if(t.parent)for(var i=0;i<t.fieldsArray.length;++i)t.fieldsArray[i].parent||t.parent.add(t.fieldsArray[i])}o.fromJSON=function(t,i){return new o(t,i.oneof,i.options,i.comment)},o.prototype.toJSON=function(t){t=!!t&&!!t.keepComments;return s.toObject(["options",this.options,"oneof",this.oneof,"comment",t?this.comment:nt])},o.prototype.add=function(t){if(t instanceof r)return t.parent&&t.parent!==this.parent&&t.parent.remove(t),this.oneof.push(t.name),this.fieldsArray.push(t),u(t.partOf=this),this;throw TypeError("field must be a Field")},o.prototype.remove=function(t){if(!(t instanceof r))throw TypeError("field must be a Field");var i=this.fieldsArray.indexOf(t);if(i<0)throw Error(t+" is not a member of "+this);return this.fieldsArray.splice(i,1),-1<(i=this.oneof.indexOf(t.name))&&this.oneof.splice(i,1),t.partOf=null,this},o.prototype.onAdd=function(t){e.prototype.onAdd.call(this,t);for(var i=0;i<this.oneof.length;++i){var n=t.get(this.oneof[i]);n&&!n.partOf&&(n.partOf=this).fieldsArray.push(n)}u(this)},o.prototype.onRemove=function(t){for(var i,n=0;n<this.fieldsArray.length;++n)(i=this.fieldsArray[n]).parent&&i.parent.remove(i);e.prototype.onRemove.call(this,t)},o.d=function(){for(var n=Array(arguments.length),t=0;t<arguments.length;)n[t]=arguments[t++];return function(t,i){s.decorateType(t.constructor).add(new o(i,n)),Object.defineProperty(t,i,{get:s.oneOfGetter(n),set:s.oneOfSetter(n)})}}},{16:16,24:24,37:37}],26:[function(t,i,n){(i.exports=it).filename=null,it.defaults={keepCase:!1};var I=t(34),F=t(29),L=t(35),U=t(16),q=t(20),R=t(25),z=t(15),Z=t(33),B=t(22),P=t(36),H=t(37),X=/^[1-9][0-9]*$/,C=/^-?[1-9][0-9]*$/,D=/^0[x][0-9a-fA-F]+$/,J=/^-?0[x][0-9a-fA-F]+$/,W=/^0[0-7]+$/,G=/^-?0[0-7]+$/,K=/^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/,Q=/^[a-zA-Z_][a-zA-Z_0-9]*$/,Y=/^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/,tt=/^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;function it(t,i,n){i instanceof F||(n=i,i=new F);var r,e,s,o,h,u,f,a=(n=n||it.defaults).preferTrailingComment||!1,c=I(t,n.alternateCommentMode||!1),l=c.next,d=c.push,p=c.peek,v=c.skip,b=c.cmnt,w=!0,y=!1,m=i,g=n.keepCase?function(t){return t}:H.camelCase;function j(t,i,n){var r=it.filename;return n||(it.filename=null),Error("illegal "+(i||"token")+" '"+t+"' ("+(r?r+", ":"")+"line "+c.line+")")}function k(){var t,i=[];do{if('"'!==(t=l())&&"'"!==t)throw j(t)}while(i.push(l()),v(t),'"'===(t=p())||"'"===t);return i.join("")}function O(i){var n=l();switch(n){case"'":case'"':return d(n),k();case"true":case"TRUE":return!0;case"false":case"FALSE":return!1}try{var t=n,r=!0,e=1;switch("-"==(t[0]||"")&&(e=-1,t=t.substring(1)),t){case"inf":case"INF":case"Inf":return e*(1/0);case"nan":case"NAN":case"Nan":case"NaN":return NaN;case"0":return 0}if(X.test(t))return e*parseInt(t,10);if(D.test(t))return e*parseInt(t,16);if(W.test(t))return e*parseInt(t,8);if(K.test(t))return e*parseFloat(t);throw j(t,"number",r)}catch(t){if(i&&Y.test(n))return n;throw j(n,"value")}}function E(t,i){for(var n;!i||'"'!==(n=p())&&"'"!==n?t.push([n=A(l()),v("to",!0)?A(l()):n]):t.push(k()),v(",",!0););var r={options:nt,setOption:function(t,i){this.options===nt&&(this.options={}),this.options[t]=i}};S(r,function(t){if("option"!==t)throw j(t);$(r,t),v(";")},function(){M(r)})}function A(t,i){switch(t){case"max":case"MAX":case"Max":return 536870911;case"0":return 0}if(i||"-"!=(t[0]||"")){if(C.test(t))return parseInt(t,10);if(J.test(t))return parseInt(t,16);if(G.test(t))return parseInt(t,8)}throw j(t,"id")}function x(t,i){switch(i){case"option":return $(t,i),v(";"),1;case"message":return T(t),1;case"enum":return V(t),1;case"service":var h,n=t,r=i;if(Q.test(r=l()))return S(h=new Z(r),function(t){if(!x(h,t)){if("rpc"!==t)throw j(t);var i=h,n=b(),r=t;if(!Q.test(t=l()))throw j(t,"name");var e,s,o,u=t;if(v("("),v("stream",!0)&&(s=!0),!Y.test(t=l()))throw j(t);if(e=t,v(")"),v("returns"),v("("),v("stream",!0)&&(o=!0),!Y.test(t=l()))throw j(t);t=t,v(")");var f=new B(u,r,e,t,s,o);f.comment=n,S(f,function(t){if("option"!==t)throw j(t);$(f,t),v(";")}),i.add(f)}}),n.add(h),1;throw j(r,"service name");case"extend":var e,s=t,n=i;if(Y.test(n=l()))return e=n,S(null,function(t){switch(t){case"required":case"repeated":N(s,t,e);break;case"optional":N(s,y?"proto3_optional":"optional",e);break;default:if(!y||!Y.test(t))throw j(t);d(t),N(s,"optional",e)}}),1;throw j(n,"reference")}}function S(t,i,n){var r,e=c.line;if(t&&("string"!=typeof t.comment&&(t.comment=b()),t.filename=it.filename),v("{",!0)){for(;"}"!==(r=l());)i(r);v(";",!0)}else n&&n(),v(";"),t&&("string"!=typeof t.comment||a)&&(t.comment=b(e)||t.comment)}function T(t,i){if(!Q.test(i=l()))throw j(i,"type name");var u=new L(i);S(u,function(t){if(!x(u,t))switch(t){case"map":var i=u,n=(v("<"),l());if(P.mapKey[n]===nt)throw j(n,"type");v(",");var r=l();if(!Y.test(r))throw j(r,"type");v(">");var e=l();if(!Q.test(e))throw j(e,"name");v("=");var s=new q(g(e),A(l()),n,r);S(s,function(t){if("option"!==t)throw j(t);$(s,t),v(";")},function(){M(s)}),i.add(s);break;case"required":case"repeated":N(u,t);break;case"optional":N(u,y?"proto3_optional":"optional");break;case"oneof":e=u,n=t;if(!Q.test(n=l()))throw j(n,"name");var o=new R(g(n));S(o,function(t){"option"===t?($(o,t),v(";")):(d(t),N(o,"optional"))}),e.add(o);break;case"extensions":E(u.extensions||(u.extensions=[]));break;case"reserved":E(u.reserved||(u.reserved=[]),!0);break;default:if(!y||!Y.test(t))throw j(t);d(t),N(u,"optional")}}),t.add(u)}function N(t,i,n){var r=l();if("group"===r){var e,s,o=t,u=i,f=l();if(Q.test(f))return s=H.lcFirst(f),f===s&&(f=H.ucFirst(f)),v("="),h=A(l()),(e=new L(f)).group=!0,(s=new U(s,h,f,u)).filename=it.filename,S(e,function(t){switch(t){case"option":$(e,t),v(";");break;case"required":case"repeated":N(e,t);break;case"optional":N(e,y?"proto3_optional":"optional");break;case"message":T(e);break;case"enum":V(e);break;default:throw j(t)}}),void o.add(e).add(s);throw j(f,"name")}for(;r.endsWith(".")||p().startsWith(".");)r+=l();if(!Y.test(r))throw j(r,"type");var h=l();if(!Q.test(h))throw j(h,"name");h=g(h),v("=");var a=new U(h,A(l()),r,i,n);S(a,function(t){if("option"!==t)throw j(t);$(a,t),v(";")},function(){M(a)}),"proto3_optional"===i?(u=new R("_"+h),a.setOption("proto3_optional",!0),u.add(a),t.add(u)):t.add(a),y||!a.repeated||P.packed[r]===nt&&P.basic[r]!==nt||a.setOption("packed",!1,!0)}function V(t,i){if(!Q.test(i=l()))throw j(i,"name");var s=new z(i);S(s,function(t){switch(t){case"option":$(s,t),v(";");break;case"reserved":E(s.reserved||(s.reserved=[]),!0);break;default:var i=s,n=t;if(!Q.test(n))throw j(n,"name");v("=");var r=A(l(),!0),e={options:nt,setOption:function(t,i){this.options===nt&&(this.options={}),this.options[t]=i}};return S(e,function(t){if("option"!==t)throw j(t);$(e,t),v(";")},function(){M(e)}),void i.add(n,r,e.comment,e.options)}}),t.add(s)}function $(t,i){var n=v("(",!0);if(!Y.test(i=l()))throw j(i,"name");var r,e=i,s=e,n=(n&&(v(")"),s=e="("+e+")",i=p(),tt.test(i)&&(r=i.slice(1),e+=i,l())),v("="),function t(i,n){if(v("{",!0)){for(var r={};!v("}",!0);){if(!Q.test(h=l()))throw j(h,"name");if(null===h)throw j(h,"end of input");var e,s,o=h;if(v(":",!0),"{"===p())e=t(i,n+"."+h);else if("["===p()){if(e=[],v("[",!0)){for(;s=O(!0),e.push(s),v(",",!0););v("]"),void 0!==s&&_(i,n+"."+h,s)}}else e=O(!0),_(i,n+"."+h,e);var u=r[o];u&&(e=[].concat(u).concat(e)),r[o]=e,v(",",!0),v(";",!0)}return r}var f=O(!0);_(i,n,f);return f}(t,e));i=s,e=n,s=r,(n=t).setParsedOption&&n.setParsedOption(i,e,s)}function _(t,i,n){t.setOption&&t.setOption(i,n)}function M(t){if(v("[",!0)){for(;$(t,"option"),v(",",!0););v("]")}}for(;null!==(h=l());)switch(h){case"package":if(!w)throw j(h);if(r!==nt)throw j("package");if(r=l(),!Y.test(r))throw j(r,"name");m=m.define(r),v(";");break;case"import":if(!w)throw j(h);switch(f=u=void 0,p()){case"weak":f=s=s||[],l();break;case"public":l();default:f=e=e||[]}u=k(),v(";"),f.push(u);break;case"syntax":if(!w)throw j(h);if(v("="),o=k(),!(y="proto3"===o)&&"proto2"!==o)throw j(o,"syntax");v(";");break;case"option":$(m,h),v(";");break;default:if(x(m,h)){w=!1;continue}throw j(h)}return it.filename=null,{package:r,imports:e,weakImports:s,syntax:o,root:i}}},{15:15,16:16,20:20,22:22,25:25,29:29,33:33,34:34,35:35,36:36,37:37}],27:[function(t,i,n){i.exports=f;var r,e=t(39),s=e.LongBits,o=e.utf8;function u(t,i){return RangeError("index out of range: "+t.pos+" + "+(i||1)+" > "+t.len)}function f(t){this.buf=t,this.pos=0,this.len=t.length}function h(){return e.Buffer?function(t){return(f.create=function(t){return e.Buffer.isBuffer(t)?new r(t):c(t)})(t)}:c}var a,c="undefined"!=typeof Uint8Array?function(t){if(t instanceof Uint8Array||Array.isArray(t))return new f(t);throw Error("illegal buffer")}:function(t){if(Array.isArray(t))return new f(t);throw Error("illegal buffer")};function l(){var t=new s(0,0),i=0;if(!(4<this.len-this.pos)){for(;i<3;++i){if(this.pos>=this.len)throw u(this);if(t.lo=(t.lo|(127&this.buf[this.pos])<<7*i)>>>0,this.buf[this.pos++]<128)return t}return t.lo=(t.lo|(127&this.buf[this.pos++])<<7*i)>>>0,t}for(;i<4;++i)if(t.lo=(t.lo|(127&this.buf[this.pos])<<7*i)>>>0,this.buf[this.pos++]<128)return t;if(t.lo=(t.lo|(127&this.buf[this.pos])<<28)>>>0,t.hi=(t.hi|(127&this.buf[this.pos])>>4)>>>0,this.buf[this.pos++]<128)return t;if(i=0,4<this.len-this.pos){for(;i<5;++i)if(t.hi=(t.hi|(127&this.buf[this.pos])<<7*i+3)>>>0,this.buf[this.pos++]<128)return t}else for(;i<5;++i){if(this.pos>=this.len)throw u(this);if(t.hi=(t.hi|(127&this.buf[this.pos])<<7*i+3)>>>0,this.buf[this.pos++]<128)return t}throw Error("invalid varint encoding")}function d(t,i){return(t[i-4]|t[i-3]<<8|t[i-2]<<16|t[i-1]<<24)>>>0}function p(){if(this.pos+8>this.len)throw u(this,8);return new s(d(this.buf,this.pos+=4),d(this.buf,this.pos+=4))}f.create=h(),f.prototype.c=e.Array.prototype.subarray||e.Array.prototype.slice,f.prototype.uint32=(a=4294967295,function(){if(a=(127&this.buf[this.pos])>>>0,this.buf[this.pos++]<128||(a=(a|(127&this.buf[this.pos])<<7)>>>0,this.buf[this.pos++]<128||(a=(a|(127&this.buf[this.pos])<<14)>>>0,this.buf[this.pos++]<128||(a=(a|(127&this.buf[this.pos])<<21)>>>0,this.buf[this.pos++]<128||(a=(a|(15&this.buf[this.pos])<<28)>>>0,this.buf[this.pos++]<128||!((this.pos+=5)>this.len))))))return a;throw this.pos=this.len,u(this,10)}),f.prototype.int32=function(){return 0|this.uint32()},f.prototype.sint32=function(){var t=this.uint32();return t>>>1^-(1&t)|0},f.prototype.bool=function(){return 0!==this.uint32()},f.prototype.fixed32=function(){if(this.pos+4>this.len)throw u(this,4);return d(this.buf,this.pos+=4)},f.prototype.sfixed32=function(){if(this.pos+4>this.len)throw u(this,4);return 0|d(this.buf,this.pos+=4)},f.prototype.float=function(){if(this.pos+4>this.len)throw u(this,4);var t=e.float.readFloatLE(this.buf,this.pos);return this.pos+=4,t},f.prototype.double=function(){if(this.pos+8>this.len)throw u(this,4);var t=e.float.readDoubleLE(this.buf,this.pos);return this.pos+=8,t},f.prototype.bytes=function(){var t=this.uint32(),i=this.pos,n=this.pos+t;if(n>this.len)throw u(this,t);return this.pos+=t,Array.isArray(this.buf)?this.buf.slice(i,n):i===n?(t=e.Buffer)?t.alloc(0):new this.buf.constructor(0):this.c.call(this.buf,i,n)},f.prototype.string=function(){var t=this.bytes();return o.read(t,0,t.length)},f.prototype.skip=function(t){if("number"==typeof t){if(this.pos+t>this.len)throw u(this,t);this.pos+=t}else do{if(this.pos>=this.len)throw u(this)}while(128&this.buf[this.pos++]);return this},f.prototype.skipType=function(t){switch(t){case 0:this.skip();break;case 1:this.skip(8);break;case 2:this.skip(this.uint32());break;case 3:for(;4!=(t=7&this.uint32());)this.skipType(t);break;case 5:this.skip(4);break;default:throw Error("invalid wire type "+t+" at offset "+this.pos)}return this},f.u=function(t){r=t,f.create=h(),r.u();var i=e.Long?"toLong":"toNumber";e.merge(f.prototype,{int64:function(){return l.call(this)[i](!1)},uint64:function(){return l.call(this)[i](!0)},sint64:function(){return l.call(this).zzDecode()[i](!1)},fixed64:function(){return p.call(this)[i](!0)},sfixed64:function(){return p.call(this)[i](!1)}})}},{39:39}],28:[function(t,i,n){i.exports=s;var r=t(27),e=((s.prototype=Object.create(r.prototype)).constructor=s,t(39));function s(t){r.call(this,t)}s.u=function(){e.Buffer&&(s.prototype.c=e.Buffer.prototype.slice)},s.prototype.string=function(){var t=this.uint32();return this.buf.utf8Slice?this.buf.utf8Slice(this.pos,this.pos=Math.min(this.pos+t,this.len)):this.buf.toString("utf-8",this.pos,this.pos=Math.min(this.pos+t,this.len))},s.u()},{27:27,39:39}],29:[function(t,i,n){i.exports=f;var r,d,p,e=t(23),s=(((f.prototype=Object.create(e.prototype)).constructor=f).className="Root",t(16)),o=t(15),u=t(25),v=t(37);function f(t){e.call(this,"",t),this.deferred=[],this.files=[]}function b(){}f.fromJSON=function(t,i){return i=i||new f,t.options&&i.setOptions(t.options),i.addJSON(t.nested)},f.prototype.resolvePath=v.path.resolve,f.prototype.fetch=v.fetch,f.prototype.load=function t(i,s,e){"function"==typeof s&&(e=s,s=nt);var o=this;if(!e)return v.asPromise(t,o,i,s);var u=e===b;function f(t,i){if(e){if(u)throw t;var n=e;e=null,n(t,i)}}function h(t){var i=t.lastIndexOf("google/protobuf/");if(-1<i){t=t.substring(i);if(t in p)return t}return null}function a(t,i){try{if(v.isString(i)&&"{"==(i[0]||"")&&(i=JSON.parse(i)),v.isString(i)){d.filename=t;var n,r=d(i,o,s),e=0;if(r.imports)for(;e<r.imports.length;++e)(n=h(r.imports[e])||o.resolvePath(t,r.imports[e]))&&c(n);if(r.weakImports)for(e=0;e<r.weakImports.length;++e)(n=h(r.weakImports[e])||o.resolvePath(t,r.weakImports[e]))&&c(n,!0)}else o.setOptions(i.options).addJSON(i.nested)}catch(t){f(t)}u||l||f(null,o)}function c(n,r){if(n=h(n)||n,!~o.files.indexOf(n))if(o.files.push(n),n in p)u?a(n,p[n]):(++l,setTimeout(function(){--l,a(n,p[n])}));else if(u){var t;try{t=v.fs.readFileSync(n).toString("utf8")}catch(t){return void(r||f(t))}a(n,t)}else++l,o.fetch(n,function(t,i){--l,e&&(t?r?l||f(null,o):f(t):a(n,i))})}var l=0;v.isString(i)&&(i=[i]);for(var n,r=0;r<i.length;++r)(n=o.resolvePath("",i[r]))&&c(n);return u?o:(l||f(null,o),nt)},f.prototype.loadSync=function(t,i){if(v.isNode)return this.load(t,i,b);throw Error("not supported")},f.prototype.resolveAll=function(){if(this.deferred.length)throw Error("unresolvable extensions: "+this.deferred.map(function(t){return"'extend "+t.extend+"' in "+t.parent.fullName}).join(", "));return e.prototype.resolveAll.call(this)};var h=/^[A-Z]/;function a(t,i){var n,r=i.parent.lookup(i.extend);if(r)return n=new s(i.fullName,i.id,i.type,i.rule,nt,i.options),r.get(n.name)||((n.declaringField=i).extensionField=n,r.add(n)),1}f.prototype.h=function(t){if(t instanceof s)t.extend===nt||t.extensionField||a(0,t)||this.deferred.push(t);else if(t instanceof o)h.test(t.name)&&(t.parent[t.name]=t.values);else if(!(t instanceof u)){if(t instanceof r)for(var i=0;i<this.deferred.length;)a(0,this.deferred[i])?this.deferred.splice(i,1):++i;for(var n=0;n<t.nestedArray.length;++n)this.h(t.f[n]);h.test(t.name)&&(t.parent[t.name]=t)}},f.prototype.a=function(t){var i;if(t instanceof s)t.extend!==nt&&(t.extensionField?(t.extensionField.parent.remove(t.extensionField),t.extensionField=null):-1<(i=this.deferred.indexOf(t))&&this.deferred.splice(i,1));else if(t instanceof o)h.test(t.name)&&delete t.parent[t.name];else if(t instanceof e){for(var n=0;n<t.nestedArray.length;++n)this.a(t.f[n]);h.test(t.name)&&delete t.parent[t.name]}},f.u=function(t,i,n){r=t,d=i,p=n}},{15:15,16:16,23:23,25:25,37:37}],30:[function(t,i,n){i.exports={}},{}],31:[function(t,i,n){n.Service=t(32)},{32:32}],32:[function(t,i,n){i.exports=r;var u=t(39);function r(t,i,n){if("function"!=typeof t)throw TypeError("rpcImpl must be a function");u.EventEmitter.call(this),this.rpcImpl=t,this.requestDelimited=!!i,this.responseDelimited=!!n}((r.prototype=Object.create(u.EventEmitter.prototype)).constructor=r).prototype.rpcCall=function t(n,i,r,e,s){if(!e)throw TypeError("request must be specified");var o=this;if(!s)return u.asPromise(t,o,n,i,r,e);if(!o.rpcImpl)return setTimeout(function(){s(Error("already ended"))},0),nt;try{return o.rpcImpl(n,i[o.requestDelimited?"encodeDelimited":"encode"](e).finish(),function(t,i){if(t)return o.emit("error",t,n),s(t);if(null===i)return o.end(!0),nt;if(!(i instanceof r))try{i=r[o.responseDelimited?"decodeDelimited":"decode"](i)}catch(t){return o.emit("error",t,n),s(t)}return o.emit("data",i,n),s(null,i)})}catch(t){return o.emit("error",t,n),setTimeout(function(){s(t)},0),nt}},r.prototype.end=function(t){return this.rpcImpl&&(t||this.rpcImpl(null,null,null),this.rpcImpl=null,this.emit("end").off()),this}},{39:39}],33:[function(t,i,n){i.exports=o;var r=t(23),s=(((o.prototype=Object.create(r.prototype)).constructor=o).className="Service",t(22)),u=t(37),f=t(31);function o(t,i){r.call(this,t,i),this.methods={},this.l=null}function e(t){return t.l=null,t}o.fromJSON=function(t,i){var n=new o(t,i.options);if(i.methods)for(var r=Object.keys(i.methods),e=0;e<r.length;++e)n.add(s.fromJSON(r[e],i.methods[r[e]]));return i.nested&&n.addJSON(i.nested),n.comment=i.comment,n},o.prototype.toJSON=function(t){var i=r.prototype.toJSON.call(this,t),n=!!t&&!!t.keepComments;return u.toObject(["options",i&&i.options||nt,"methods",r.arrayToJSON(this.methodsArray,t)||{},"nested",i&&i.nested||nt,"comment",n?this.comment:nt])},Object.defineProperty(o.prototype,"methodsArray",{get:function(){return this.l||(this.l=u.toArray(this.methods))}}),o.prototype.get=function(t){return this.methods[t]||r.prototype.get.call(this,t)},o.prototype.resolveAll=function(){for(var t=this.methodsArray,i=0;i<t.length;++i)t[i].resolve();return r.prototype.resolve.call(this)},o.prototype.add=function(t){if(this.get(t.name))throw Error("duplicate name '"+t.name+"' in "+this);return t instanceof s?e((this.methods[t.name]=t).parent=this):r.prototype.add.call(this,t)},o.prototype.remove=function(t){if(t instanceof s){if(this.methods[t.name]!==t)throw Error(t+" is not a member of "+this);return delete this.methods[t.name],t.parent=null,e(this)}return r.prototype.remove.call(this,t)},o.prototype.create=function(t,i,n){for(var r,e=new f.Service(t,i,n),s=0;s<this.methodsArray.length;++s){var o=u.lcFirst((r=this.l[s]).resolve().name).replace(/[^$\w_]/g,"");e[o]=u.codegen(["r","c"],u.isReserved(o)?o+"_":o)("return this.rpcCall(m,q,s,r,c)")({m:r,q:r.resolvedRequestType.ctor,s:r.resolvedResponseType.ctor})}return e}},{22:22,23:23,31:31,37:37}],34:[function(t,i,n){i.exports=s;var O=/[\s{}=;:[\],'"()<>]/g,E=/(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,A=/(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g,x=/^ *[*/]+ */,S=/^\s*\*?\/*/,T=/\n/g,N=/\s/,r=/\\(.?)/g,e={0:"\0",r:"\r",n:"\n",t:"\t"};function V(t){return t.replace(r,function(t,i){switch(i){case"\\":case"":return i;default:return e[i]||""}})}function s(h,a){h=h.toString();var c=0,l=h.length,d=1,f=0,p={},v=[],b=null;function w(t){return Error("illegal "+t+" (line "+d+")")}function y(t){return h[0|t]||""}function m(t,i,n){var r,e={type:h[0|t++]||"",lineEmpty:!1,leading:n},n=a?2:3,s=t-n;do{if(--s<0||"\n"==(r=h[0|s]||"")){e.lineEmpty=!0;break}}while(" "===r||"\t"===r);for(var o=h.substring(t,i).split(T),u=0;u<o.length;++u)o[u]=o[u].replace(a?S:x,"").trim();e.text=o.join("\n").trim(),p[d]=e,f=d}function g(t){var i=j(t),t=h.substring(t,i);return/^\s*\/\//.test(t)}function j(t){for(var i=t;i<l&&"\n"!==y(i);)i++;return i}function r(){if(0<v.length)return v.shift();if(b){var t="'"===b?A:E,i=(t.lastIndex=c-1,t.exec(h));if(i)return c=t.lastIndex,k(b),b=null,V(i[1]);throw w("string")}var n,r,e,s,o,u=0===c;do{if(c===l)return null;for(n=!1;N.test(e=y(c));)if("\n"===e&&(u=!0,++d),++c===l)return null;if("/"===y(c)){if(++c===l)throw w("comment");if("/"===y(c))if(a){if(o=!1,g((s=c)-1))for(o=!0;(c=j(c))!==l&&(c++,u&&g(c)););else c=Math.min(l,j(c)+1);o&&(m(s,c,u),u=!0),d++}else{for(o="/"===y(s=c+1);"\n"!==y(++c);)if(c===l)return null;++c,o&&(m(s,c-1,u),u=!0),++d}else{if("*"!==(e=y(c)))return"/";s=c+1,o=a||"*"===y(s);do{if("\n"===e&&++d,++c===l)throw w("comment")}while(r=e,e=y(c),"*"!==r||"/"!==e);++c,o&&(m(s,c-2,u),u=!0)}n=!0}}while(n);var f=c;if(O.lastIndex=0,!O.test(y(f++)))for(;f<l&&!O.test(y(f));)++f;t=h.substring(c,c=f);return'"'!=t&&"'"!=t||(b=t),t}function k(t){v.push(t)}function e(){if(!v.length){var t=r();if(null===t)return null;k(t)}return v[0]}return Object.defineProperty({next:r,peek:e,push:k,skip:function(t,i){var n=e();if(n===t)return r(),!0;if(i)return!1;throw w("token '"+n+"', '"+t+"' expected")},cmnt:function(t){var i,n=null;return t===nt?(i=p[d-1],delete p[d-1],i&&(a||"*"===i.type||i.lineEmpty)&&(n=i.leading?i.text:null)):(f<t&&e(),i=p[t],delete p[t],!i||i.lineEmpty||!a&&"/"!==i.type||(n=i.leading?null:i.text)),n}},"line",{get:function(){return d}})}s.unescape=V},{}],35:[function(t,i,n){i.exports=m;var o=t(23),u=(((m.prototype=Object.create(o.prototype)).constructor=m).className="Type",t(15)),f=t(25),h=t(16),a=t(20),c=t(33),e=t(21),s=t(27),l=t(42),d=t(37),p=t(14),v=t(13),b=t(40),w=t(12),y=t(41);function m(t,i){o.call(this,t,i),this.fields={},this.oneofs=nt,this.extensions=nt,this.reserved=nt,this.group=nt,this.p=null,this.e=null,this.v=null,this.b=null}function r(t){return t.p=t.e=t.v=null,delete t.encode,delete t.decode,delete t.verify,t}Object.defineProperties(m.prototype,{fieldsById:{get:function(){if(!this.p){this.p={};for(var t=Object.keys(this.fields),i=0;i<t.length;++i){var n=this.fields[t[i]],r=n.id;if(this.p[r])throw Error("duplicate id "+r+" in "+this);this.p[r]=n}}return this.p}},fieldsArray:{get:function(){return this.e||(this.e=d.toArray(this.fields))}},oneofsArray:{get:function(){return this.v||(this.v=d.toArray(this.oneofs))}},ctor:{get:function(){return this.b||(this.ctor=m.generateConstructor(this)())},set:function(t){for(var i=t.prototype,n=(i instanceof e||((t.prototype=new e).constructor=t,d.merge(t.prototype,i)),t.$type=t.prototype.$type=this,d.merge(t,e,!0),this.b=t,0);n<this.fieldsArray.length;++n)this.e[n].resolve();for(var r={},n=0;n<this.oneofsArray.length;++n)r[this.v[n].resolve().name]={get:d.oneOfGetter(this.v[n].oneof),set:d.oneOfSetter(this.v[n].oneof)};n&&Object.defineProperties(t.prototype,r)}}}),m.generateConstructor=function(t){for(var i,n=d.codegen(["p"],t.name),r=0;r<t.fieldsArray.length;++r)(i=t.e[r]).map?n("this%s={}",d.safeProp(i.name)):i.repeated&&n("this%s=[]",d.safeProp(i.name));return n("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]")},m.fromJSON=function(t,i){for(var n=new m(t,i.options),r=(n.extensions=i.extensions,n.reserved=i.reserved,Object.keys(i.fields)),e=0;e<r.length;++e)n.add((void 0!==i.fields[r[e]].keyType?a:h).fromJSON(r[e],i.fields[r[e]]));if(i.oneofs)for(r=Object.keys(i.oneofs),e=0;e<r.length;++e)n.add(f.fromJSON(r[e],i.oneofs[r[e]]));if(i.nested)for(r=Object.keys(i.nested),e=0;e<r.length;++e){var s=i.nested[r[e]];n.add((s.id!==nt?h:s.fields!==nt?m:s.values!==nt?u:s.methods!==nt?c:o).fromJSON(r[e],s))}return i.extensions&&i.extensions.length&&(n.extensions=i.extensions),i.reserved&&i.reserved.length&&(n.reserved=i.reserved),i.group&&(n.group=!0),i.comment&&(n.comment=i.comment),n},m.prototype.toJSON=function(t){var i=o.prototype.toJSON.call(this,t),n=!!t&&!!t.keepComments;return d.toObject(["options",i&&i.options||nt,"oneofs",o.arrayToJSON(this.oneofsArray,t),"fields",o.arrayToJSON(this.fieldsArray.filter(function(t){return!t.declaringField}),t)||{},"extensions",this.extensions&&this.extensions.length?this.extensions:nt,"reserved",this.reserved&&this.reserved.length?this.reserved:nt,"group",this.group||nt,"nested",i&&i.nested||nt,"comment",n?this.comment:nt])},m.prototype.resolveAll=function(){for(var t=this.fieldsArray,i=0;i<t.length;)t[i++].resolve();for(var n=this.oneofsArray,i=0;i<n.length;)n[i++].resolve();return o.prototype.resolveAll.call(this)},m.prototype.get=function(t){return this.fields[t]||this.oneofs&&this.oneofs[t]||this.nested&&this.nested[t]||null},m.prototype.add=function(t){if(this.get(t.name))throw Error("duplicate name '"+t.name+"' in "+this);if(t instanceof h&&t.extend===nt){if((this.p||this.fieldsById)[t.id])throw Error("duplicate id "+t.id+" in "+this);if(this.isReservedId(t.id))throw Error("id "+t.id+" is reserved in "+this);if(this.isReservedName(t.name))throw Error("name '"+t.name+"' is reserved in "+this);return t.parent&&t.parent.remove(t),(this.fields[t.name]=t).message=this,t.onAdd(this),r(this)}return t instanceof f?(this.oneofs||(this.oneofs={}),(this.oneofs[t.name]=t).onAdd(this),r(this)):o.prototype.add.call(this,t)},m.prototype.remove=function(t){if(t instanceof h&&t.extend===nt){if(this.fields&&this.fields[t.name]===t)return delete this.fields[t.name],t.parent=null,t.onRemove(this),r(this);throw Error(t+" is not a member of "+this)}if(t instanceof f){if(this.oneofs&&this.oneofs[t.name]===t)return delete this.oneofs[t.name],t.parent=null,t.onRemove(this),r(this);throw Error(t+" is not a member of "+this)}return o.prototype.remove.call(this,t)},m.prototype.isReservedId=function(t){return o.isReservedId(this.reserved,t)},m.prototype.isReservedName=function(t){return o.isReservedName(this.reserved,t)},m.prototype.create=function(t){return new this.ctor(t)},m.prototype.setup=function(){for(var t=this.fullName,i=[],n=0;n<this.fieldsArray.length;++n)i.push(this.e[n].resolve().resolvedType);this.encode=p(this)({Writer:l,types:i,util:d}),this.decode=v(this)({Reader:s,types:i,util:d}),this.verify=b(this)({types:i,util:d}),this.fromObject=w.fromObject(this)({types:i,util:d}),this.toObject=w.toObject(this)({types:i,util:d});var r,t=y[t];return t&&((r=Object.create(this)).fromObject=this.fromObject,this.fromObject=t.fromObject.bind(r),r.toObject=this.toObject,this.toObject=t.toObject.bind(r)),this},m.prototype.encode=function(t,i){return this.setup().encode(t,i)},m.prototype.encodeDelimited=function(t,i){return this.encode(t,i&&i.len?i.fork():i).ldelim()},m.prototype.decode=function(t,i){return this.setup().decode(t,i)},m.prototype.decodeDelimited=function(t){return t instanceof s||(t=s.create(t)),this.decode(t,t.uint32())},m.prototype.verify=function(t){return this.setup().verify(t)},m.prototype.fromObject=function(t){return this.setup().fromObject(t)},m.prototype.toObject=function(t,i){return this.setup().toObject(t,i)},m.d=function(i){return function(t){d.decorateType(t,i)}}},{12:12,13:13,14:14,15:15,16:16,20:20,21:21,23:23,25:25,27:27,33:33,37:37,40:40,41:41,42:42}],36:[function(t,i,n){var t=t(37),e=["double","float","int32","uint32","sint32","fixed32","sfixed32","int64","uint64","sint64","fixed64","sfixed64","bool","string","bytes"];function r(t,i){var n=0,r={};for(i|=0;n<t.length;)r[e[n+i]]=t[n++];return r}n.basic=r([1,5,0,0,0,5,5,0,0,0,1,1,0,2,2]),n.defaults=r([0,0,0,0,0,0,0,0,0,0,0,0,!1,"",t.emptyArray,null]),n.long=r([0,0,0,1,1],7),n.mapKey=r([0,0,0,5,5,0,0,0,1,1,0,2],2),n.packed=r([1,5,0,0,0,5,5,0,0,0,1,1,0])},{37:37}],37:[function(n,t,i){var r,e,s=t.exports=n(39),o=n(30),u=(s.codegen=n(3),s.fetch=n(5),s.path=n(8),s.fs=s.inquire("fs"),s.toArray=function(t){if(t){for(var i=Object.keys(t),n=Array(i.length),r=0;r<i.length;)n[r]=t[i[r++]];return n}return[]},s.toObject=function(t){for(var i={},n=0;n<t.length;){var r=t[n++],e=t[n++];e!==nt&&(i[r]=e)}return i},/\\/g),f=/"/g,h=(s.isReserved=function(t){return/^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(t)},s.safeProp=function(t){return!/^[$\w_]+$/.test(t)||s.isReserved(t)?'["'+t.replace(u,"\\\\").replace(f,'\\"')+'"]':"."+t},s.ucFirst=function(t){return(t[0]||"").toUpperCase()+t.substring(1)},/_([a-z])/g),a=(s.camelCase=function(t){return t.substring(0,1)+t.substring(1).replace(h,function(t,i){return i.toUpperCase()})},s.compareFieldsById=function(t,i){return t.id-i.id},s.decorateType=function(t,i){return t.$type?(i&&t.$type.name!==i&&(s.decorateRoot.remove(t.$type),t.$type.name=i,s.decorateRoot.add(t.$type)),t.$type):(i=new(r=r||n(35))(i||t.name),s.decorateRoot.add(i),i.ctor=t,Object.defineProperty(t,"$type",{value:i,enumerable:!1}),Object.defineProperty(t.prototype,"$type",{value:i,enumerable:!1}),i)},0);s.decorateEnum=function(t){var i;return t.$type||(i=new(e=e||n(15))("Enum"+a++,t),s.decorateRoot.add(i),Object.defineProperty(t,"$type",{value:i,enumerable:!1}),i)},s.setProperty=function(t,i,n){if("object"!=typeof t)throw TypeError("dst must be an object");if(i)return function t(i,n,r){var e=n.shift();return"__proto__"!==e&&"prototype"!==e&&(0<n.length?i[e]=t(i[e]||{},n,r):((n=i[e])&&(r=[].concat(n).concat(r)),i[e]=r)),i}(t,i=i.split("."),n);throw TypeError("path must be specified")},Object.defineProperty(s,"decorateRoot",{get:function(){return o.decorated||(o.decorated=new(n(29)))}})},{15:15,29:29,3:3,30:30,35:35,39:39,5:5,8:8}],38:[function(t,i,n){i.exports=e;var r=t(39);function e(t,i){this.lo=t>>>0,this.hi=i>>>0}var s=e.zero=new e(0,0),o=(s.toNumber=function(){return 0},s.zzEncode=s.zzDecode=function(){return this},s.length=function(){return 1},e.zeroHash="\0\0\0\0\0\0\0\0",e.fromNumber=function(t){var i,n;return 0===t?s:(n=(t=(i=t<0)?-t:t)>>>0,t=(t-n)/4294967296>>>0,i&&(t=~t>>>0,n=~n>>>0,4294967295<++n&&(n=0,4294967295<++t&&(t=0))),new e(n,t))},e.from=function(t){if("number"==typeof t)return e.fromNumber(t);if(r.isString(t)){if(!r.Long)return e.fromNumber(parseInt(t,10));t=r.Long.fromString(t)}return t.low||t.high?new e(t.low>>>0,t.high>>>0):s},e.prototype.toNumber=function(t){var i;return!t&&this.hi>>>31?(t=1+~this.lo>>>0,i=~this.hi>>>0,-(t+4294967296*(i=t?i:i+1>>>0))):this.lo+4294967296*this.hi},e.prototype.toLong=function(t){return r.Long?new r.Long(0|this.lo,0|this.hi,!!t):{low:0|this.lo,high:0|this.hi,unsigned:!!t}},String.prototype.charCodeAt);e.fromHash=function(t){return"\0\0\0\0\0\0\0\0"===t?s:new e((o.call(t,0)|o.call(t,1)<<8|o.call(t,2)<<16|o.call(t,3)<<24)>>>0,(o.call(t,4)|o.call(t,5)<<8|o.call(t,6)<<16|o.call(t,7)<<24)>>>0)},e.prototype.toHash=function(){return String.fromCharCode(255&this.lo,this.lo>>>8&255,this.lo>>>16&255,this.lo>>>24,255&this.hi,this.hi>>>8&255,this.hi>>>16&255,this.hi>>>24)},e.prototype.zzEncode=function(){var t=this.hi>>31;return this.hi=((this.hi<<1|this.lo>>>31)^t)>>>0,this.lo=(this.lo<<1^t)>>>0,this},e.prototype.zzDecode=function(){var t=-(1&this.lo);return this.lo=((this.lo>>>1|this.hi<<31)^t)>>>0,this.hi=(this.hi>>>1^t)>>>0,this},e.prototype.length=function(){var t=this.lo,i=(this.lo>>>28|this.hi<<4)>>>0,n=this.hi>>>24;return 0==n?0==i?t<16384?t<128?1:2:t<2097152?3:4:i<16384?i<128?5:6:i<2097152?7:8:n<128?9:10}},{39:39}],39:[function(t,i,n){var r=n;function e(t,i,n){for(var r=Object.keys(i),e=0;e<r.length;++e)t[r[e]]!==nt&&n||(t[r[e]]=i[r[e]]);return t}function s(t){function n(t,i){if(!(this instanceof n))return new n(t,i);Object.defineProperty(this,"message",{get:function(){return t}}),Error.captureStackTrace?Error.captureStackTrace(this,n):Object.defineProperty(this,"stack",{value:Error().stack||""}),i&&e(this,i)}return n.prototype=Object.create(Error.prototype,{constructor:{value:n,writable:!0,enumerable:!1,configurable:!0},name:{get:function(){return t},set:nt,enumerable:!1,configurable:!0},toString:{value:function(){return this.name+": "+this.message},writable:!0,enumerable:!1,configurable:!0}}),n}r.asPromise=t(1),r.base64=t(2),r.EventEmitter=t(4),r.float=t(6),r.inquire=t(7),r.utf8=t(10),r.pool=t(9),r.LongBits=t(38),r.isNode=!!("undefined"!=typeof global&&global&&global.process&&global.process.versions&&global.process.versions.node),r.global=r.isNode&&global||"undefined"!=typeof window&&window||"undefined"!=typeof self&&self||this,r.emptyArray=Object.freeze?Object.freeze([]):[],r.emptyObject=Object.freeze?Object.freeze({}):{},r.isInteger=Number.isInteger||function(t){return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t},r.isString=function(t){return"string"==typeof t||t instanceof String},r.isObject=function(t){return t&&"object"==typeof t},r.isset=r.isSet=function(t,i){var n=t[i];return null!=n&&t.hasOwnProperty(i)&&("object"!=typeof n||0<(Array.isArray(n)?n:Object.keys(n)).length)},r.Buffer=function(){try{var t=r.inquire("buffer").Buffer;return t.prototype.utf8Write?t:null}catch(t){return null}}(),r.w=null,r.y=null,r.newBuffer=function(t){return"number"==typeof t?r.Buffer?r.y(t):new r.Array(t):r.Buffer?r.w(t):"undefined"==typeof Uint8Array?t:new Uint8Array(t)},r.Array="undefined"!=typeof Uint8Array?Uint8Array:Array,r.Long=r.global.dcodeIO&&r.global.dcodeIO.Long||r.global.Long||r.inquire("long"),r.key2Re=/^true|false|0|1$/,r.key32Re=/^-?(?:0|[1-9][0-9]*)$/,r.key64Re=/^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/,r.longToHash=function(t){return t?r.LongBits.from(t).toHash():r.LongBits.zeroHash},r.longFromHash=function(t,i){t=r.LongBits.fromHash(t);return r.Long?r.Long.fromBits(t.lo,t.hi,i):t.toNumber(!!i)},r.merge=e,r.lcFirst=function(t){return(t[0]||"").toLowerCase()+t.substring(1)},r.newError=s,r.ProtocolError=s("ProtocolError"),r.oneOfGetter=function(t){for(var n={},i=0;i<t.length;++i)n[t[i]]=1;return function(){for(var t=Object.keys(this),i=t.length-1;-1<i;--i)if(1===n[t[i]]&&this[t[i]]!==nt&&null!==this[t[i]])return t[i]}},r.oneOfSetter=function(n){return function(t){for(var i=0;i<n.length;++i)n[i]!==t&&delete this[n[i]]}},r.toJSONOptions={longs:String,enums:String,bytes:String,json:!0},r.u=function(){var n=r.Buffer;n?(r.w=n.from!==Uint8Array.from&&n.from||function(t,i){return new n(t,i)},r.y=n.allocUnsafe||function(t){return new n(t)}):r.w=r.y=null}},{1:1,10:10,2:2,38:38,4:4,6:6,7:7,9:9}],40:[function(t,i,n){i.exports=function(t){var i=f.codegen(["m"],t.name+"$verify")('if(typeof m!=="object"||m===null)')("return%j","object expected"),n=t.oneofsArray,r={};n.length&&i("var p={}");for(var e=0;e<t.fieldsArray.length;++e){var s,o=t.e[e].resolve(),u="m"+f.safeProp(o.name);o.optional&&i("if(%s!=null&&m.hasOwnProperty(%j)){",u,o.name),o.map?(i("if(!util.isObject(%s))",u)("return%j",h(o,"object"))("var k=Object.keys(%s)",u)("for(var i=0;i<k.length;++i){"),function(t,i,n){switch(i.keyType){case"int32":case"uint32":case"sint32":case"fixed32":case"sfixed32":t("if(!util.key32Re.test(%s))",n)("return%j",h(i,"integer key"));break;case"int64":case"uint64":case"sint64":case"fixed64":case"sfixed64":t("if(!util.key64Re.test(%s))",n)("return%j",h(i,"integer|Long key"));break;case"bool":t("if(!util.key2Re.test(%s))",n)("return%j",h(i,"boolean key"))}}(i,o,"k[i]"),a(i,o,e,u+"[k[i]]")("}")):o.repeated?(i("if(!Array.isArray(%s))",u)("return%j",h(o,"array"))("for(var i=0;i<%s.length;++i){",u),a(i,o,e,u+"[i]")("}")):(o.partOf&&(s=f.safeProp(o.partOf.name),1===r[o.partOf.name]&&i("if(p%s===1)",s)("return%j",o.partOf.name+": multiple values"),r[o.partOf.name]=1,i("p%s=1",s)),a(i,o,e,u)),o.optional&&i("}")}return i("return null")};var o=t(15),f=t(37);function h(t,i){return t.name+": "+i+(t.repeated&&"array"!==i?"[]":t.map&&"object"!==i?"{k:"+t.keyType+"}":"")+" expected"}function a(t,i,n,r){if(i.resolvedType)if(i.resolvedType instanceof o){t("switch(%s){",r)("default:")("return%j",h(i,"enum value"));for(var e=Object.keys(i.resolvedType.values),s=0;s<e.length;++s)t("case %i:",i.resolvedType.values[e[s]]);t("break")("}")}else t("{")("var e=types[%i].verify(%s);",n,r)("if(e)")("return%j+e",i.name+".")("}");else switch(i.type){case"int32":case"uint32":case"sint32":case"fixed32":case"sfixed32":t("if(!util.isInteger(%s))",r)("return%j",h(i,"integer"));break;case"int64":case"uint64":case"sint64":case"fixed64":case"sfixed64":t("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))",r,r,r,r)("return%j",h(i,"integer|Long"));break;case"float":case"double":t('if(typeof %s!=="number")',r)("return%j",h(i,"number"));break;case"bool":t('if(typeof %s!=="boolean")',r)("return%j",h(i,"boolean"));break;case"string":t("if(!util.isString(%s))",r)("return%j",h(i,"string"));break;case"bytes":t('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))',r,r,r)("return%j",h(i,"buffer"))}return t}},{15:15,37:37}],41:[function(t,i,n){var o=t(21);n[".google.protobuf.Any"]={fromObject:function(t){if(t&&t["@type"]){var i,n=t["@type"].substring(1+t["@type"].lastIndexOf("/")),n=this.lookup(n);if(n)return~(i="."==(t["@type"][0]||"")?t["@type"].slice(1):t["@type"]).indexOf("/")||(i="/"+i),this.create({type_url:i,value:n.encode(n.fromObject(t)).finish()})}return this.fromObject(t)},toObject:function(t,i){var n,r,e="",s="";return i&&i.json&&t.type_url&&t.value&&(s=t.type_url.substring(1+t.type_url.lastIndexOf("/")),e=t.type_url.substring(0,1+t.type_url.lastIndexOf("/")),(n=this.lookup(s))&&(t=n.decode(t.value))),!(t instanceof this.ctor)&&t instanceof o?(n=t.$type.toObject(t,i),r="."===t.$type.fullName[0]?t.$type.fullName.slice(1):t.$type.fullName,n["@type"]=s=(e=""===e?"type.googleapis.com/":e)+r,n):this.toObject(t,i)}}},{21:21}],42:[function(t,i,n){i.exports=c;var r,e=t(39),s=e.LongBits,o=e.base64,u=e.utf8;function f(t,i,n){this.fn=t,this.len=i,this.next=nt,this.val=n}function h(){}function a(t){this.head=t.head,this.tail=t.tail,this.len=t.len,this.next=t.states}function c(){this.len=0,this.head=new f(h,0,0),this.tail=this.head,this.states=null}function l(){return e.Buffer?function(){return(c.create=function(){return new r})()}:function(){return new c}}function d(t,i,n){i[n]=255&t}function p(t,i){this.len=t,this.next=nt,this.val=i}function v(t,i,n){for(;t.hi;)i[n++]=127&t.lo|128,t.lo=(t.lo>>>7|t.hi<<25)>>>0,t.hi>>>=7;for(;127<t.lo;)i[n++]=127&t.lo|128,t.lo=t.lo>>>7;i[n++]=t.lo}function b(t,i,n){i[n]=255&t,i[n+1]=t>>>8&255,i[n+2]=t>>>16&255,i[n+3]=t>>>24}c.create=l(),c.alloc=function(t){return new e.Array(t)},e.Array!==Array&&(c.alloc=e.pool(c.alloc,e.Array.prototype.subarray)),c.prototype.g=function(t,i,n){return this.tail=this.tail.next=new f(t,i,n),this.len+=i,this},(p.prototype=Object.create(f.prototype)).fn=function(t,i,n){for(;127<t;)i[n++]=127&t|128,t>>>=7;i[n]=t},c.prototype.uint32=function(t){return this.len+=(this.tail=this.tail.next=new p((t>>>=0)<128?1:t<16384?2:t<2097152?3:t<268435456?4:5,t)).len,this},c.prototype.int32=function(t){return t<0?this.g(v,10,s.fromNumber(t)):this.uint32(t)},c.prototype.sint32=function(t){return this.uint32((t<<1^t>>31)>>>0)},c.prototype.int64=c.prototype.uint64=function(t){t=s.from(t);return this.g(v,t.length(),t)},c.prototype.sint64=function(t){t=s.from(t).zzEncode();return this.g(v,t.length(),t)},c.prototype.bool=function(t){return this.g(d,1,t?1:0)},c.prototype.sfixed32=c.prototype.fixed32=function(t){return this.g(b,4,t>>>0)},c.prototype.sfixed64=c.prototype.fixed64=function(t){t=s.from(t);return this.g(b,4,t.lo).g(b,4,t.hi)},c.prototype.float=function(t){return this.g(e.float.writeFloatLE,4,t)},c.prototype.double=function(t){return this.g(e.float.writeDoubleLE,8,t)};var w=e.Array.prototype.set?function(t,i,n){i.set(t,n)}:function(t,i,n){for(var r=0;r<t.length;++r)i[n+r]=t[r]};c.prototype.bytes=function(t){var i,n=t.length>>>0;return n?(e.isString(t)&&(i=c.alloc(n=o.length(t)),o.decode(t,i,0),t=i),this.uint32(n).g(w,n,t)):this.g(d,1,0)},c.prototype.string=function(t){var i=u.length(t);return i?this.uint32(i).g(u.write,i,t):this.g(d,1,0)},c.prototype.fork=function(){return this.states=new a(this),this.head=this.tail=new f(h,0,0),this.len=0,this},c.prototype.reset=function(){return this.states?(this.head=this.states.head,this.tail=this.states.tail,this.len=this.states.len,this.states=this.states.next):(this.head=this.tail=new f(h,0,0),this.len=0),this},c.prototype.ldelim=function(){var t=this.head,i=this.tail,n=this.len;return this.reset().uint32(n),n&&(this.tail.next=t.next,this.tail=i,this.len+=n),this},c.prototype.finish=function(){for(var t=this.head.next,i=this.constructor.alloc(this.len),n=0;t;)t.fn(t.val,i,n),n+=t.len,t=t.next;return i},c.u=function(t){r=t,c.create=l(),r.u()}},{39:39}],43:[function(t,i,n){i.exports=s;var r=t(42),e=((s.prototype=Object.create(r.prototype)).constructor=s,t(39));function s(){r.call(this)}function o(t,i,n){t.length<40?e.utf8.write(t,i,n):i.utf8Write?i.utf8Write(t,n):i.write(t,n)}s.u=function(){s.alloc=e.y,s.writeBytesBuffer=e.Buffer&&e.Buffer.prototype instanceof Uint8Array&&"set"===e.Buffer.prototype.set.name?function(t,i,n){i.set(t,n)}:function(t,i,n){if(t.copy)t.copy(i,n,0,t.length);else for(var r=0;r<t.length;)i[n++]=t[r++]}},s.prototype.bytes=function(t){var i=(t=e.isString(t)?e.w(t,"base64"):t).length>>>0;return this.uint32(i),i&&this.g(s.writeBytesBuffer,i,t),this},s.prototype.string=function(t){var i=e.Buffer.byteLength(t);return this.uint32(i),i&&this.g(o,i,t),this},s.u()},{39:39,42:42}]},{},[19])}();
//# sourceMappingURL=protobuf.min.js.map

/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).pako={})}(this,(function(t){"use strict";function e(t){let e=t.length;for(;--e>=0;)t[e]=0}const a=256,i=286,n=30,s=15,r=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),o=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),l=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),h=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),d=new Array(576);e(d);const _=new Array(60);e(_);const f=new Array(512);e(f);const c=new Array(256);e(c);const u=new Array(29);e(u);const w=new Array(n);function m(t,e,a,i,n){this.static_tree=t,this.extra_bits=e,this.extra_base=a,this.elems=i,this.max_length=n,this.has_stree=t&&t.length}let b,g,p;function k(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}e(w);const v=t=>t<256?f[t]:f[256+(t>>>7)],y=(t,e)=>{t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255},x=(t,e,a)=>{t.bi_valid>16-a?(t.bi_buf|=e<<t.bi_valid&65535,y(t,t.bi_buf),t.bi_buf=e>>16-t.bi_valid,t.bi_valid+=a-16):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=a)},z=(t,e,a)=>{x(t,a[2*e],a[2*e+1])},A=(t,e)=>{let a=0;do{a|=1&t,t>>>=1,a<<=1}while(--e>0);return a>>>1},E=(t,e,a)=>{const i=new Array(16);let n,r,o=0;for(n=1;n<=s;n++)o=o+a[n-1]<<1,i[n]=o;for(r=0;r<=e;r++){let e=t[2*r+1];0!==e&&(t[2*r]=A(i[e]++,e))}},R=t=>{let e;for(e=0;e<i;e++)t.dyn_ltree[2*e]=0;for(e=0;e<n;e++)t.dyn_dtree[2*e]=0;for(e=0;e<19;e++)t.bl_tree[2*e]=0;t.dyn_ltree[512]=1,t.opt_len=t.static_len=0,t.sym_next=t.matches=0},Z=t=>{t.bi_valid>8?y(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0},U=(t,e,a,i)=>{const n=2*e,s=2*a;return t[n]<t[s]||t[n]===t[s]&&i[e]<=i[a]},S=(t,e,a)=>{const i=t.heap[a];let n=a<<1;for(;n<=t.heap_len&&(n<t.heap_len&&U(e,t.heap[n+1],t.heap[n],t.depth)&&n++,!U(e,i,t.heap[n],t.depth));)t.heap[a]=t.heap[n],a=n,n<<=1;t.heap[a]=i},D=(t,e,i)=>{let n,s,l,h,d=0;if(0!==t.sym_next)do{n=255&t.pending_buf[t.sym_buf+d++],n+=(255&t.pending_buf[t.sym_buf+d++])<<8,s=t.pending_buf[t.sym_buf+d++],0===n?z(t,s,e):(l=c[s],z(t,l+a+1,e),h=r[l],0!==h&&(s-=u[l],x(t,s,h)),n--,l=v(n),z(t,l,i),h=o[l],0!==h&&(n-=w[l],x(t,n,h)))}while(d<t.sym_next);z(t,256,e)},T=(t,e)=>{const a=e.dyn_tree,i=e.stat_desc.static_tree,n=e.stat_desc.has_stree,r=e.stat_desc.elems;let o,l,h,d=-1;for(t.heap_len=0,t.heap_max=573,o=0;o<r;o++)0!==a[2*o]?(t.heap[++t.heap_len]=d=o,t.depth[o]=0):a[2*o+1]=0;for(;t.heap_len<2;)h=t.heap[++t.heap_len]=d<2?++d:0,a[2*h]=1,t.depth[h]=0,t.opt_len--,n&&(t.static_len-=i[2*h+1]);for(e.max_code=d,o=t.heap_len>>1;o>=1;o--)S(t,a,o);h=r;do{o=t.heap[1],t.heap[1]=t.heap[t.heap_len--],S(t,a,1),l=t.heap[1],t.heap[--t.heap_max]=o,t.heap[--t.heap_max]=l,a[2*h]=a[2*o]+a[2*l],t.depth[h]=(t.depth[o]>=t.depth[l]?t.depth[o]:t.depth[l])+1,a[2*o+1]=a[2*l+1]=h,t.heap[1]=h++,S(t,a,1)}while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],((t,e)=>{const a=e.dyn_tree,i=e.max_code,n=e.stat_desc.static_tree,r=e.stat_desc.has_stree,o=e.stat_desc.extra_bits,l=e.stat_desc.extra_base,h=e.stat_desc.max_length;let d,_,f,c,u,w,m=0;for(c=0;c<=s;c++)t.bl_count[c]=0;for(a[2*t.heap[t.heap_max]+1]=0,d=t.heap_max+1;d<573;d++)_=t.heap[d],c=a[2*a[2*_+1]+1]+1,c>h&&(c=h,m++),a[2*_+1]=c,_>i||(t.bl_count[c]++,u=0,_>=l&&(u=o[_-l]),w=a[2*_],t.opt_len+=w*(c+u),r&&(t.static_len+=w*(n[2*_+1]+u)));if(0!==m){do{for(c=h-1;0===t.bl_count[c];)c--;t.bl_count[c]--,t.bl_count[c+1]+=2,t.bl_count[h]--,m-=2}while(m>0);for(c=h;0!==c;c--)for(_=t.bl_count[c];0!==_;)f=t.heap[--d],f>i||(a[2*f+1]!==c&&(t.opt_len+=(c-a[2*f+1])*a[2*f],a[2*f+1]=c),_--)}})(t,e),E(a,d,t.bl_count)},O=(t,e,a)=>{let i,n,s=-1,r=e[1],o=0,l=7,h=4;for(0===r&&(l=138,h=3),e[2*(a+1)+1]=65535,i=0;i<=a;i++)n=r,r=e[2*(i+1)+1],++o<l&&n===r||(o<h?t.bl_tree[2*n]+=o:0!==n?(n!==s&&t.bl_tree[2*n]++,t.bl_tree[32]++):o<=10?t.bl_tree[34]++:t.bl_tree[36]++,o=0,s=n,0===r?(l=138,h=3):n===r?(l=6,h=3):(l=7,h=4))},I=(t,e,a)=>{let i,n,s=-1,r=e[1],o=0,l=7,h=4;for(0===r&&(l=138,h=3),i=0;i<=a;i++)if(n=r,r=e[2*(i+1)+1],!(++o<l&&n===r)){if(o<h)do{z(t,n,t.bl_tree)}while(0!=--o);else 0!==n?(n!==s&&(z(t,n,t.bl_tree),o--),z(t,16,t.bl_tree),x(t,o-3,2)):o<=10?(z(t,17,t.bl_tree),x(t,o-3,3)):(z(t,18,t.bl_tree),x(t,o-11,7));o=0,s=n,0===r?(l=138,h=3):n===r?(l=6,h=3):(l=7,h=4)}};let F=!1;const L=(t,e,a,i)=>{x(t,0+(i?1:0),3),Z(t),y(t,a),y(t,~a),a&&t.pending_buf.set(t.window.subarray(e,e+a),t.pending),t.pending+=a};var N=(t,e,i,n)=>{let s,r,o=0;t.level>0?(2===t.strm.data_type&&(t.strm.data_type=(t=>{let e,i=4093624447;for(e=0;e<=31;e++,i>>>=1)if(1&i&&0!==t.dyn_ltree[2*e])return 0;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return 1;for(e=32;e<a;e++)if(0!==t.dyn_ltree[2*e])return 1;return 0})(t)),T(t,t.l_desc),T(t,t.d_desc),o=(t=>{let e;for(O(t,t.dyn_ltree,t.l_desc.max_code),O(t,t.dyn_dtree,t.d_desc.max_code),T(t,t.bl_desc),e=18;e>=3&&0===t.bl_tree[2*h[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e})(t),s=t.opt_len+3+7>>>3,r=t.static_len+3+7>>>3,r<=s&&(s=r)):s=r=i+5,i+4<=s&&-1!==e?L(t,e,i,n):4===t.strategy||r===s?(x(t,2+(n?1:0),3),D(t,d,_)):(x(t,4+(n?1:0),3),((t,e,a,i)=>{let n;for(x(t,e-257,5),x(t,a-1,5),x(t,i-4,4),n=0;n<i;n++)x(t,t.bl_tree[2*h[n]+1],3);I(t,t.dyn_ltree,e-1),I(t,t.dyn_dtree,a-1)})(t,t.l_desc.max_code+1,t.d_desc.max_code+1,o+1),D(t,t.dyn_ltree,t.dyn_dtree)),R(t),n&&Z(t)},B={_tr_init:t=>{F||((()=>{let t,e,a,h,k;const v=new Array(16);for(a=0,h=0;h<28;h++)for(u[h]=a,t=0;t<1<<r[h];t++)c[a++]=h;for(c[a-1]=h,k=0,h=0;h<16;h++)for(w[h]=k,t=0;t<1<<o[h];t++)f[k++]=h;for(k>>=7;h<n;h++)for(w[h]=k<<7,t=0;t<1<<o[h]-7;t++)f[256+k++]=h;for(e=0;e<=s;e++)v[e]=0;for(t=0;t<=143;)d[2*t+1]=8,t++,v[8]++;for(;t<=255;)d[2*t+1]=9,t++,v[9]++;for(;t<=279;)d[2*t+1]=7,t++,v[7]++;for(;t<=287;)d[2*t+1]=8,t++,v[8]++;for(E(d,287,v),t=0;t<n;t++)_[2*t+1]=5,_[2*t]=A(t,5);b=new m(d,r,257,i,s),g=new m(_,o,0,n,s),p=new m(new Array(0),l,0,19,7)})(),F=!0),t.l_desc=new k(t.dyn_ltree,b),t.d_desc=new k(t.dyn_dtree,g),t.bl_desc=new k(t.bl_tree,p),t.bi_buf=0,t.bi_valid=0,R(t)},_tr_stored_block:L,_tr_flush_block:N,_tr_tally:(t,e,i)=>(t.pending_buf[t.sym_buf+t.sym_next++]=e,t.pending_buf[t.sym_buf+t.sym_next++]=e>>8,t.pending_buf[t.sym_buf+t.sym_next++]=i,0===e?t.dyn_ltree[2*i]++:(t.matches++,e--,t.dyn_ltree[2*(c[i]+a+1)]++,t.dyn_dtree[2*v(e)]++),t.sym_next===t.sym_end),_tr_align:t=>{x(t,2,3),z(t,256,d),(t=>{16===t.bi_valid?(y(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)})(t)}};var C=(t,e,a,i)=>{let n=65535&t|0,s=t>>>16&65535|0,r=0;for(;0!==a;){r=a>2e3?2e3:a,a-=r;do{n=n+e[i++]|0,s=s+n|0}while(--r);n%=65521,s%=65521}return n|s<<16|0};const M=new Uint32Array((()=>{let t,e=[];for(var a=0;a<256;a++){t=a;for(var i=0;i<8;i++)t=1&t?3988292384^t>>>1:t>>>1;e[a]=t}return e})());var H=(t,e,a,i)=>{const n=M,s=i+a;t^=-1;for(let a=i;a<s;a++)t=t>>>8^n[255&(t^e[a])];return-1^t},j={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},K={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:P,_tr_stored_block:Y,_tr_flush_block:G,_tr_tally:X,_tr_align:W}=B,{Z_NO_FLUSH:q,Z_PARTIAL_FLUSH:J,Z_FULL_FLUSH:Q,Z_FINISH:V,Z_BLOCK:$,Z_OK:tt,Z_STREAM_END:et,Z_STREAM_ERROR:at,Z_DATA_ERROR:it,Z_BUF_ERROR:nt,Z_DEFAULT_COMPRESSION:st,Z_FILTERED:rt,Z_HUFFMAN_ONLY:ot,Z_RLE:lt,Z_FIXED:ht,Z_DEFAULT_STRATEGY:dt,Z_UNKNOWN:_t,Z_DEFLATED:ft}=K,ct=258,ut=262,wt=42,mt=113,bt=666,gt=(t,e)=>(t.msg=j[e],e),pt=t=>2*t-(t>4?9:0),kt=t=>{let e=t.length;for(;--e>=0;)t[e]=0},vt=t=>{let e,a,i,n=t.w_size;e=t.hash_size,i=e;do{a=t.head[--i],t.head[i]=a>=n?a-n:0}while(--e);e=n,i=e;do{a=t.prev[--i],t.prev[i]=a>=n?a-n:0}while(--e)};let yt=(t,e,a)=>(e<<t.hash_shift^a)&t.hash_mask;const xt=t=>{const e=t.state;let a=e.pending;a>t.avail_out&&(a=t.avail_out),0!==a&&(t.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+a),t.next_out),t.next_out+=a,e.pending_out+=a,t.total_out+=a,t.avail_out-=a,e.pending-=a,0===e.pending&&(e.pending_out=0))},zt=(t,e)=>{G(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,xt(t.strm)},At=(t,e)=>{t.pending_buf[t.pending++]=e},Et=(t,e)=>{t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e},Rt=(t,e,a,i)=>{let n=t.avail_in;return n>i&&(n=i),0===n?0:(t.avail_in-=n,e.set(t.input.subarray(t.next_in,t.next_in+n),a),1===t.state.wrap?t.adler=C(t.adler,e,n,a):2===t.state.wrap&&(t.adler=H(t.adler,e,n,a)),t.next_in+=n,t.total_in+=n,n)},Zt=(t,e)=>{let a,i,n=t.max_chain_length,s=t.strstart,r=t.prev_length,o=t.nice_match;const l=t.strstart>t.w_size-ut?t.strstart-(t.w_size-ut):0,h=t.window,d=t.w_mask,_=t.prev,f=t.strstart+ct;let c=h[s+r-1],u=h[s+r];t.prev_length>=t.good_match&&(n>>=2),o>t.lookahead&&(o=t.lookahead);do{if(a=e,h[a+r]===u&&h[a+r-1]===c&&h[a]===h[s]&&h[++a]===h[s+1]){s+=2,a++;do{}while(h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&s<f);if(i=ct-(f-s),s=f-ct,i>r){if(t.match_start=e,r=i,i>=o)break;c=h[s+r-1],u=h[s+r]}}}while((e=_[e&d])>l&&0!=--n);return r<=t.lookahead?r:t.lookahead},Ut=t=>{const e=t.w_size;let a,i,n;do{if(i=t.window_size-t.lookahead-t.strstart,t.strstart>=e+(e-ut)&&(t.window.set(t.window.subarray(e,e+e-i),0),t.match_start-=e,t.strstart-=e,t.block_start-=e,t.insert>t.strstart&&(t.insert=t.strstart),vt(t),i+=e),0===t.strm.avail_in)break;if(a=Rt(t.strm,t.window,t.strstart+t.lookahead,i),t.lookahead+=a,t.lookahead+t.insert>=3)for(n=t.strstart-t.insert,t.ins_h=t.window[n],t.ins_h=yt(t,t.ins_h,t.window[n+1]);t.insert&&(t.ins_h=yt(t,t.ins_h,t.window[n+3-1]),t.prev[n&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=n,n++,t.insert--,!(t.lookahead+t.insert<3)););}while(t.lookahead<ut&&0!==t.strm.avail_in)},St=(t,e)=>{let a,i,n,s=t.pending_buf_size-5>t.w_size?t.w_size:t.pending_buf_size-5,r=0,o=t.strm.avail_in;do{if(a=65535,n=t.bi_valid+42>>3,t.strm.avail_out<n)break;if(n=t.strm.avail_out-n,i=t.strstart-t.block_start,a>i+t.strm.avail_in&&(a=i+t.strm.avail_in),a>n&&(a=n),a<s&&(0===a&&e!==V||e===q||a!==i+t.strm.avail_in))break;r=e===V&&a===i+t.strm.avail_in?1:0,Y(t,0,0,r),t.pending_buf[t.pending-4]=a,t.pending_buf[t.pending-3]=a>>8,t.pending_buf[t.pending-2]=~a,t.pending_buf[t.pending-1]=~a>>8,xt(t.strm),i&&(i>a&&(i=a),t.strm.output.set(t.window.subarray(t.block_start,t.block_start+i),t.strm.next_out),t.strm.next_out+=i,t.strm.avail_out-=i,t.strm.total_out+=i,t.block_start+=i,a-=i),a&&(Rt(t.strm,t.strm.output,t.strm.next_out,a),t.strm.next_out+=a,t.strm.avail_out-=a,t.strm.total_out+=a)}while(0===r);return o-=t.strm.avail_in,o&&(o>=t.w_size?(t.matches=2,t.window.set(t.strm.input.subarray(t.strm.next_in-t.w_size,t.strm.next_in),0),t.strstart=t.w_size,t.insert=t.strstart):(t.window_size-t.strstart<=o&&(t.strstart-=t.w_size,t.window.set(t.window.subarray(t.w_size,t.w_size+t.strstart),0),t.matches<2&&t.matches++,t.insert>t.strstart&&(t.insert=t.strstart)),t.window.set(t.strm.input.subarray(t.strm.next_in-o,t.strm.next_in),t.strstart),t.strstart+=o,t.insert+=o>t.w_size-t.insert?t.w_size-t.insert:o),t.block_start=t.strstart),t.high_water<t.strstart&&(t.high_water=t.strstart),r?4:e!==q&&e!==V&&0===t.strm.avail_in&&t.strstart===t.block_start?2:(n=t.window_size-t.strstart,t.strm.avail_in>n&&t.block_start>=t.w_size&&(t.block_start-=t.w_size,t.strstart-=t.w_size,t.window.set(t.window.subarray(t.w_size,t.w_size+t.strstart),0),t.matches<2&&t.matches++,n+=t.w_size,t.insert>t.strstart&&(t.insert=t.strstart)),n>t.strm.avail_in&&(n=t.strm.avail_in),n&&(Rt(t.strm,t.window,t.strstart,n),t.strstart+=n,t.insert+=n>t.w_size-t.insert?t.w_size-t.insert:n),t.high_water<t.strstart&&(t.high_water=t.strstart),n=t.bi_valid+42>>3,n=t.pending_buf_size-n>65535?65535:t.pending_buf_size-n,s=n>t.w_size?t.w_size:n,i=t.strstart-t.block_start,(i>=s||(i||e===V)&&e!==q&&0===t.strm.avail_in&&i<=n)&&(a=i>n?n:i,r=e===V&&0===t.strm.avail_in&&a===i?1:0,Y(t,t.block_start,a,r),t.block_start+=a,xt(t.strm)),r?3:1)},Dt=(t,e)=>{let a,i;for(;;){if(t.lookahead<ut){if(Ut(t),t.lookahead<ut&&e===q)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=yt(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==a&&t.strstart-a<=t.w_size-ut&&(t.match_length=Zt(t,a)),t.match_length>=3)if(i=X(t,t.strstart-t.match_start,t.match_length-3),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=3){t.match_length--;do{t.strstart++,t.ins_h=yt(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!=--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=yt(t,t.ins_h,t.window[t.strstart+1]);else i=X(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(i&&(zt(t,!1),0===t.strm.avail_out))return 1}return t.insert=t.strstart<2?t.strstart:2,e===V?(zt(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(zt(t,!1),0===t.strm.avail_out)?1:2},Tt=(t,e)=>{let a,i,n;for(;;){if(t.lookahead<ut){if(Ut(t),t.lookahead<ut&&e===q)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=yt(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=2,0!==a&&t.prev_length<t.max_lazy_match&&t.strstart-a<=t.w_size-ut&&(t.match_length=Zt(t,a),t.match_length<=5&&(t.strategy===rt||3===t.match_length&&t.strstart-t.match_start>4096)&&(t.match_length=2)),t.prev_length>=3&&t.match_length<=t.prev_length){n=t.strstart+t.lookahead-3,i=X(t,t.strstart-1-t.prev_match,t.prev_length-3),t.lookahead-=t.prev_length-1,t.prev_length-=2;do{++t.strstart<=n&&(t.ins_h=yt(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!=--t.prev_length);if(t.match_available=0,t.match_length=2,t.strstart++,i&&(zt(t,!1),0===t.strm.avail_out))return 1}else if(t.match_available){if(i=X(t,0,t.window[t.strstart-1]),i&&zt(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return 1}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(i=X(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<2?t.strstart:2,e===V?(zt(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(zt(t,!1),0===t.strm.avail_out)?1:2};function Ot(t,e,a,i,n){this.good_length=t,this.max_lazy=e,this.nice_length=a,this.max_chain=i,this.func=n}const It=[new Ot(0,0,0,0,St),new Ot(4,4,8,4,Dt),new Ot(4,5,16,8,Dt),new Ot(4,6,32,32,Dt),new Ot(4,4,16,16,Tt),new Ot(8,16,32,32,Tt),new Ot(8,16,128,128,Tt),new Ot(8,32,128,256,Tt),new Ot(32,128,258,1024,Tt),new Ot(32,258,258,4096,Tt)];function Ft(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=ft,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(1146),this.dyn_dtree=new Uint16Array(122),this.bl_tree=new Uint16Array(78),kt(this.dyn_ltree),kt(this.dyn_dtree),kt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(16),this.heap=new Uint16Array(573),kt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(573),kt(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const Lt=t=>{if(!t)return 1;const e=t.state;return!e||e.strm!==t||e.status!==wt&&57!==e.status&&69!==e.status&&73!==e.status&&91!==e.status&&103!==e.status&&e.status!==mt&&e.status!==bt?1:0},Nt=t=>{if(Lt(t))return gt(t,at);t.total_in=t.total_out=0,t.data_type=_t;const e=t.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=2===e.wrap?57:e.wrap?wt:mt,t.adler=2===e.wrap?0:1,e.last_flush=-2,P(e),tt},Bt=t=>{const e=Nt(t);var a;return e===tt&&((a=t.state).window_size=2*a.w_size,kt(a.head),a.max_lazy_match=It[a.level].max_lazy,a.good_match=It[a.level].good_length,a.nice_match=It[a.level].nice_length,a.max_chain_length=It[a.level].max_chain,a.strstart=0,a.block_start=0,a.lookahead=0,a.insert=0,a.match_length=a.prev_length=2,a.match_available=0,a.ins_h=0),e},Ct=(t,e,a,i,n,s)=>{if(!t)return at;let r=1;if(e===st&&(e=6),i<0?(r=0,i=-i):i>15&&(r=2,i-=16),n<1||n>9||a!==ft||i<8||i>15||e<0||e>9||s<0||s>ht||8===i&&1!==r)return gt(t,at);8===i&&(i=9);const o=new Ft;return t.state=o,o.strm=t,o.status=wt,o.wrap=r,o.gzhead=null,o.w_bits=i,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=n+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+3-1)/3),o.window=new Uint8Array(2*o.w_size),o.head=new Uint16Array(o.hash_size),o.prev=new Uint16Array(o.w_size),o.lit_bufsize=1<<n+6,o.pending_buf_size=4*o.lit_bufsize,o.pending_buf=new Uint8Array(o.pending_buf_size),o.sym_buf=o.lit_bufsize,o.sym_end=3*(o.lit_bufsize-1),o.level=e,o.strategy=s,o.method=a,Bt(t)};var Mt={deflateInit:(t,e)=>Ct(t,e,ft,15,8,dt),deflateInit2:Ct,deflateReset:Bt,deflateResetKeep:Nt,deflateSetHeader:(t,e)=>Lt(t)||2!==t.state.wrap?at:(t.state.gzhead=e,tt),deflate:(t,e)=>{if(Lt(t)||e>$||e<0)return t?gt(t,at):at;const a=t.state;if(!t.output||0!==t.avail_in&&!t.input||a.status===bt&&e!==V)return gt(t,0===t.avail_out?nt:at);const i=a.last_flush;if(a.last_flush=e,0!==a.pending){if(xt(t),0===t.avail_out)return a.last_flush=-1,tt}else if(0===t.avail_in&&pt(e)<=pt(i)&&e!==V)return gt(t,nt);if(a.status===bt&&0!==t.avail_in)return gt(t,nt);if(a.status===wt&&0===a.wrap&&(a.status=mt),a.status===wt){let e=ft+(a.w_bits-8<<4)<<8,i=-1;if(i=a.strategy>=ot||a.level<2?0:a.level<6?1:6===a.level?2:3,e|=i<<6,0!==a.strstart&&(e|=32),e+=31-e%31,Et(a,e),0!==a.strstart&&(Et(a,t.adler>>>16),Et(a,65535&t.adler)),t.adler=1,a.status=mt,xt(t),0!==a.pending)return a.last_flush=-1,tt}if(57===a.status)if(t.adler=0,At(a,31),At(a,139),At(a,8),a.gzhead)At(a,(a.gzhead.text?1:0)+(a.gzhead.hcrc?2:0)+(a.gzhead.extra?4:0)+(a.gzhead.name?8:0)+(a.gzhead.comment?16:0)),At(a,255&a.gzhead.time),At(a,a.gzhead.time>>8&255),At(a,a.gzhead.time>>16&255),At(a,a.gzhead.time>>24&255),At(a,9===a.level?2:a.strategy>=ot||a.level<2?4:0),At(a,255&a.gzhead.os),a.gzhead.extra&&a.gzhead.extra.length&&(At(a,255&a.gzhead.extra.length),At(a,a.gzhead.extra.length>>8&255)),a.gzhead.hcrc&&(t.adler=H(t.adler,a.pending_buf,a.pending,0)),a.gzindex=0,a.status=69;else if(At(a,0),At(a,0),At(a,0),At(a,0),At(a,0),At(a,9===a.level?2:a.strategy>=ot||a.level<2?4:0),At(a,3),a.status=mt,xt(t),0!==a.pending)return a.last_flush=-1,tt;if(69===a.status){if(a.gzhead.extra){let e=a.pending,i=(65535&a.gzhead.extra.length)-a.gzindex;for(;a.pending+i>a.pending_buf_size;){let n=a.pending_buf_size-a.pending;if(a.pending_buf.set(a.gzhead.extra.subarray(a.gzindex,a.gzindex+n),a.pending),a.pending=a.pending_buf_size,a.gzhead.hcrc&&a.pending>e&&(t.adler=H(t.adler,a.pending_buf,a.pending-e,e)),a.gzindex+=n,xt(t),0!==a.pending)return a.last_flush=-1,tt;e=0,i-=n}let n=new Uint8Array(a.gzhead.extra);a.pending_buf.set(n.subarray(a.gzindex,a.gzindex+i),a.pending),a.pending+=i,a.gzhead.hcrc&&a.pending>e&&(t.adler=H(t.adler,a.pending_buf,a.pending-e,e)),a.gzindex=0}a.status=73}if(73===a.status){if(a.gzhead.name){let e,i=a.pending;do{if(a.pending===a.pending_buf_size){if(a.gzhead.hcrc&&a.pending>i&&(t.adler=H(t.adler,a.pending_buf,a.pending-i,i)),xt(t),0!==a.pending)return a.last_flush=-1,tt;i=0}e=a.gzindex<a.gzhead.name.length?255&a.gzhead.name.charCodeAt(a.gzindex++):0,At(a,e)}while(0!==e);a.gzhead.hcrc&&a.pending>i&&(t.adler=H(t.adler,a.pending_buf,a.pending-i,i)),a.gzindex=0}a.status=91}if(91===a.status){if(a.gzhead.comment){let e,i=a.pending;do{if(a.pending===a.pending_buf_size){if(a.gzhead.hcrc&&a.pending>i&&(t.adler=H(t.adler,a.pending_buf,a.pending-i,i)),xt(t),0!==a.pending)return a.last_flush=-1,tt;i=0}e=a.gzindex<a.gzhead.comment.length?255&a.gzhead.comment.charCodeAt(a.gzindex++):0,At(a,e)}while(0!==e);a.gzhead.hcrc&&a.pending>i&&(t.adler=H(t.adler,a.pending_buf,a.pending-i,i))}a.status=103}if(103===a.status){if(a.gzhead.hcrc){if(a.pending+2>a.pending_buf_size&&(xt(t),0!==a.pending))return a.last_flush=-1,tt;At(a,255&t.adler),At(a,t.adler>>8&255),t.adler=0}if(a.status=mt,xt(t),0!==a.pending)return a.last_flush=-1,tt}if(0!==t.avail_in||0!==a.lookahead||e!==q&&a.status!==bt){let i=0===a.level?St(a,e):a.strategy===ot?((t,e)=>{let a;for(;;){if(0===t.lookahead&&(Ut(t),0===t.lookahead)){if(e===q)return 1;break}if(t.match_length=0,a=X(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,a&&(zt(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===V?(zt(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(zt(t,!1),0===t.strm.avail_out)?1:2})(a,e):a.strategy===lt?((t,e)=>{let a,i,n,s;const r=t.window;for(;;){if(t.lookahead<=ct){if(Ut(t),t.lookahead<=ct&&e===q)return 1;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=3&&t.strstart>0&&(n=t.strstart-1,i=r[n],i===r[++n]&&i===r[++n]&&i===r[++n])){s=t.strstart+ct;do{}while(i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&n<s);t.match_length=ct-(s-n),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=3?(a=X(t,1,t.match_length-3),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(a=X(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),a&&(zt(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===V?(zt(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(zt(t,!1),0===t.strm.avail_out)?1:2})(a,e):It[a.level].func(a,e);if(3!==i&&4!==i||(a.status=bt),1===i||3===i)return 0===t.avail_out&&(a.last_flush=-1),tt;if(2===i&&(e===J?W(a):e!==$&&(Y(a,0,0,!1),e===Q&&(kt(a.head),0===a.lookahead&&(a.strstart=0,a.block_start=0,a.insert=0))),xt(t),0===t.avail_out))return a.last_flush=-1,tt}return e!==V?tt:a.wrap<=0?et:(2===a.wrap?(At(a,255&t.adler),At(a,t.adler>>8&255),At(a,t.adler>>16&255),At(a,t.adler>>24&255),At(a,255&t.total_in),At(a,t.total_in>>8&255),At(a,t.total_in>>16&255),At(a,t.total_in>>24&255)):(Et(a,t.adler>>>16),Et(a,65535&t.adler)),xt(t),a.wrap>0&&(a.wrap=-a.wrap),0!==a.pending?tt:et)},deflateEnd:t=>{if(Lt(t))return at;const e=t.state.status;return t.state=null,e===mt?gt(t,it):tt},deflateSetDictionary:(t,e)=>{let a=e.length;if(Lt(t))return at;const i=t.state,n=i.wrap;if(2===n||1===n&&i.status!==wt||i.lookahead)return at;if(1===n&&(t.adler=C(t.adler,e,a,0)),i.wrap=0,a>=i.w_size){0===n&&(kt(i.head),i.strstart=0,i.block_start=0,i.insert=0);let t=new Uint8Array(i.w_size);t.set(e.subarray(a-i.w_size,a),0),e=t,a=i.w_size}const s=t.avail_in,r=t.next_in,o=t.input;for(t.avail_in=a,t.next_in=0,t.input=e,Ut(i);i.lookahead>=3;){let t=i.strstart,e=i.lookahead-2;do{i.ins_h=yt(i,i.ins_h,i.window[t+3-1]),i.prev[t&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=t,t++}while(--e);i.strstart=t,i.lookahead=2,Ut(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=2,i.match_available=0,t.next_in=r,t.input=o,t.avail_in=s,i.wrap=n,tt},deflateInfo:"pako deflate (from Nodeca project)"};const Ht=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var jt=function(t){const e=Array.prototype.slice.call(arguments,1);for(;e.length;){const a=e.shift();if(a){if("object"!=typeof a)throw new TypeError(a+"must be non-object");for(const e in a)Ht(a,e)&&(t[e]=a[e])}}return t},Kt=t=>{let e=0;for(let a=0,i=t.length;a<i;a++)e+=t[a].length;const a=new Uint8Array(e);for(let e=0,i=0,n=t.length;e<n;e++){let n=t[e];a.set(n,i),i+=n.length}return a};let Pt=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){Pt=!1}const Yt=new Uint8Array(256);for(let t=0;t<256;t++)Yt[t]=t>=252?6:t>=248?5:t>=240?4:t>=224?3:t>=192?2:1;Yt[254]=Yt[254]=1;var Gt=t=>{if("function"==typeof TextEncoder&&TextEncoder.prototype.encode)return(new TextEncoder).encode(t);let e,a,i,n,s,r=t.length,o=0;for(n=0;n<r;n++)a=t.charCodeAt(n),55296==(64512&a)&&n+1<r&&(i=t.charCodeAt(n+1),56320==(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),n++)),o+=a<128?1:a<2048?2:a<65536?3:4;for(e=new Uint8Array(o),s=0,n=0;s<o;n++)a=t.charCodeAt(n),55296==(64512&a)&&n+1<r&&(i=t.charCodeAt(n+1),56320==(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),n++)),a<128?e[s++]=a:a<2048?(e[s++]=192|a>>>6,e[s++]=128|63&a):a<65536?(e[s++]=224|a>>>12,e[s++]=128|a>>>6&63,e[s++]=128|63&a):(e[s++]=240|a>>>18,e[s++]=128|a>>>12&63,e[s++]=128|a>>>6&63,e[s++]=128|63&a);return e},Xt=(t,e)=>{const a=e||t.length;if("function"==typeof TextDecoder&&TextDecoder.prototype.decode)return(new TextDecoder).decode(t.subarray(0,e));let i,n;const s=new Array(2*a);for(n=0,i=0;i<a;){let e=t[i++];if(e<128){s[n++]=e;continue}let r=Yt[e];if(r>4)s[n++]=65533,i+=r-1;else{for(e&=2===r?31:3===r?15:7;r>1&&i<a;)e=e<<6|63&t[i++],r--;r>1?s[n++]=65533:e<65536?s[n++]=e:(e-=65536,s[n++]=55296|e>>10&1023,s[n++]=56320|1023&e)}}return((t,e)=>{if(e<65534&&t.subarray&&Pt)return String.fromCharCode.apply(null,t.length===e?t:t.subarray(0,e));let a="";for(let i=0;i<e;i++)a+=String.fromCharCode(t[i]);return a})(s,n)},Wt=(t,e)=>{(e=e||t.length)>t.length&&(e=t.length);let a=e-1;for(;a>=0&&128==(192&t[a]);)a--;return a<0||0===a?e:a+Yt[t[a]]>e?a:e};var qt=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0};const Jt=Object.prototype.toString,{Z_NO_FLUSH:Qt,Z_SYNC_FLUSH:Vt,Z_FULL_FLUSH:$t,Z_FINISH:te,Z_OK:ee,Z_STREAM_END:ae,Z_DEFAULT_COMPRESSION:ie,Z_DEFAULT_STRATEGY:ne,Z_DEFLATED:se}=K;function re(t){this.options=jt({level:ie,method:se,chunkSize:16384,windowBits:15,memLevel:8,strategy:ne},t||{});let e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new qt,this.strm.avail_out=0;let a=Mt.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(a!==ee)throw new Error(j[a]);if(e.header&&Mt.deflateSetHeader(this.strm,e.header),e.dictionary){let t;if(t="string"==typeof e.dictionary?Gt(e.dictionary):"[object ArrayBuffer]"===Jt.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,a=Mt.deflateSetDictionary(this.strm,t),a!==ee)throw new Error(j[a]);this._dict_set=!0}}function oe(t,e){const a=new re(e);if(a.push(t,!0),a.err)throw a.msg||j[a.err];return a.result}re.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize;let n,s;if(this.ended)return!1;for(s=e===~~e?e:!0===e?te:Qt,"string"==typeof t?a.input=Gt(t):"[object ArrayBuffer]"===Jt.call(t)?a.input=new Uint8Array(t):a.input=t,a.next_in=0,a.avail_in=a.input.length;;)if(0===a.avail_out&&(a.output=new Uint8Array(i),a.next_out=0,a.avail_out=i),(s===Vt||s===$t)&&a.avail_out<=6)this.onData(a.output.subarray(0,a.next_out)),a.avail_out=0;else{if(n=Mt.deflate(a,s),n===ae)return a.next_out>0&&this.onData(a.output.subarray(0,a.next_out)),n=Mt.deflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===ee;if(0!==a.avail_out){if(s>0&&a.next_out>0)this.onData(a.output.subarray(0,a.next_out)),a.avail_out=0;else if(0===a.avail_in)break}else this.onData(a.output)}return!0},re.prototype.onData=function(t){this.chunks.push(t)},re.prototype.onEnd=function(t){t===ee&&(this.result=Kt(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};var le={Deflate:re,deflate:oe,deflateRaw:function(t,e){return(e=e||{}).raw=!0,oe(t,e)},gzip:function(t,e){return(e=e||{}).gzip=!0,oe(t,e)},constants:K};const he=16209;var de=function(t,e){let a,i,n,s,r,o,l,h,d,_,f,c,u,w,m,b,g,p,k,v,y,x,z,A;const E=t.state;a=t.next_in,z=t.input,i=a+(t.avail_in-5),n=t.next_out,A=t.output,s=n-(e-t.avail_out),r=n+(t.avail_out-257),o=E.dmax,l=E.wsize,h=E.whave,d=E.wnext,_=E.window,f=E.hold,c=E.bits,u=E.lencode,w=E.distcode,m=(1<<E.lenbits)-1,b=(1<<E.distbits)-1;t:do{c<15&&(f+=z[a++]<<c,c+=8,f+=z[a++]<<c,c+=8),g=u[f&m];e:for(;;){if(p=g>>>24,f>>>=p,c-=p,p=g>>>16&255,0===p)A[n++]=65535&g;else{if(!(16&p)){if(0==(64&p)){g=u[(65535&g)+(f&(1<<p)-1)];continue e}if(32&p){E.mode=16191;break t}t.msg="invalid literal/length code",E.mode=he;break t}k=65535&g,p&=15,p&&(c<p&&(f+=z[a++]<<c,c+=8),k+=f&(1<<p)-1,f>>>=p,c-=p),c<15&&(f+=z[a++]<<c,c+=8,f+=z[a++]<<c,c+=8),g=w[f&b];a:for(;;){if(p=g>>>24,f>>>=p,c-=p,p=g>>>16&255,!(16&p)){if(0==(64&p)){g=w[(65535&g)+(f&(1<<p)-1)];continue a}t.msg="invalid distance code",E.mode=he;break t}if(v=65535&g,p&=15,c<p&&(f+=z[a++]<<c,c+=8,c<p&&(f+=z[a++]<<c,c+=8)),v+=f&(1<<p)-1,v>o){t.msg="invalid distance too far back",E.mode=he;break t}if(f>>>=p,c-=p,p=n-s,v>p){if(p=v-p,p>h&&E.sane){t.msg="invalid distance too far back",E.mode=he;break t}if(y=0,x=_,0===d){if(y+=l-p,p<k){k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}}else if(d<p){if(y+=l+d-p,p-=d,p<k){k-=p;do{A[n++]=_[y++]}while(--p);if(y=0,d<k){p=d,k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}}}else if(y+=d-p,p<k){k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}for(;k>2;)A[n++]=x[y++],A[n++]=x[y++],A[n++]=x[y++],k-=3;k&&(A[n++]=x[y++],k>1&&(A[n++]=x[y++]))}else{y=n-v;do{A[n++]=A[y++],A[n++]=A[y++],A[n++]=A[y++],k-=3}while(k>2);k&&(A[n++]=A[y++],k>1&&(A[n++]=A[y++]))}break}}break}}while(a<i&&n<r);k=c>>3,a-=k,c-=k<<3,f&=(1<<c)-1,t.next_in=a,t.next_out=n,t.avail_in=a<i?i-a+5:5-(a-i),t.avail_out=n<r?r-n+257:257-(n-r),E.hold=f,E.bits=c};const _e=15,fe=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),ce=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),ue=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),we=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]);var me=(t,e,a,i,n,s,r,o)=>{const l=o.bits;let h,d,_,f,c,u,w=0,m=0,b=0,g=0,p=0,k=0,v=0,y=0,x=0,z=0,A=null;const E=new Uint16Array(16),R=new Uint16Array(16);let Z,U,S,D=null;for(w=0;w<=_e;w++)E[w]=0;for(m=0;m<i;m++)E[e[a+m]]++;for(p=l,g=_e;g>=1&&0===E[g];g--);if(p>g&&(p=g),0===g)return n[s++]=20971520,n[s++]=20971520,o.bits=1,0;for(b=1;b<g&&0===E[b];b++);for(p<b&&(p=b),y=1,w=1;w<=_e;w++)if(y<<=1,y-=E[w],y<0)return-1;if(y>0&&(0===t||1!==g))return-1;for(R[1]=0,w=1;w<_e;w++)R[w+1]=R[w]+E[w];for(m=0;m<i;m++)0!==e[a+m]&&(r[R[e[a+m]]++]=m);if(0===t?(A=D=r,u=20):1===t?(A=fe,D=ce,u=257):(A=ue,D=we,u=0),z=0,m=0,w=b,c=s,k=p,v=0,_=-1,x=1<<p,f=x-1,1===t&&x>852||2===t&&x>592)return 1;for(;;){Z=w-v,r[m]+1<u?(U=0,S=r[m]):r[m]>=u?(U=D[r[m]-u],S=A[r[m]-u]):(U=96,S=0),h=1<<w-v,d=1<<k,b=d;do{d-=h,n[c+(z>>v)+d]=Z<<24|U<<16|S|0}while(0!==d);for(h=1<<w-1;z&h;)h>>=1;if(0!==h?(z&=h-1,z+=h):z=0,m++,0==--E[w]){if(w===g)break;w=e[a+r[m]]}if(w>p&&(z&f)!==_){for(0===v&&(v=p),c+=b,k=w-v,y=1<<k;k+v<g&&(y-=E[k+v],!(y<=0));)k++,y<<=1;if(x+=1<<k,1===t&&x>852||2===t&&x>592)return 1;_=z&f,n[_]=p<<24|k<<16|c-s|0}}return 0!==z&&(n[c+z]=w-v<<24|64<<16|0),o.bits=p,0};const{Z_FINISH:be,Z_BLOCK:ge,Z_TREES:pe,Z_OK:ke,Z_STREAM_END:ve,Z_NEED_DICT:ye,Z_STREAM_ERROR:xe,Z_DATA_ERROR:ze,Z_MEM_ERROR:Ae,Z_BUF_ERROR:Ee,Z_DEFLATED:Re}=K,Ze=16180,Ue=16190,Se=16191,De=16192,Te=16194,Oe=16199,Ie=16200,Fe=16206,Le=16209,Ne=t=>(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24);function Be(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const Ce=t=>{if(!t)return 1;const e=t.state;return!e||e.strm!==t||e.mode<Ze||e.mode>16211?1:0},Me=t=>{if(Ce(t))return xe;const e=t.state;return t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=Ze,e.last=0,e.havedict=0,e.flags=-1,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(852),e.distcode=e.distdyn=new Int32Array(592),e.sane=1,e.back=-1,ke},He=t=>{if(Ce(t))return xe;const e=t.state;return e.wsize=0,e.whave=0,e.wnext=0,Me(t)},je=(t,e)=>{let a;if(Ce(t))return xe;const i=t.state;return e<0?(a=0,e=-e):(a=5+(e>>4),e<48&&(e&=15)),e&&(e<8||e>15)?xe:(null!==i.window&&i.wbits!==e&&(i.window=null),i.wrap=a,i.wbits=e,He(t))},Ke=(t,e)=>{if(!t)return xe;const a=new Be;t.state=a,a.strm=t,a.window=null,a.mode=Ze;const i=je(t,e);return i!==ke&&(t.state=null),i};let Pe,Ye,Ge=!0;const Xe=t=>{if(Ge){Pe=new Int32Array(512),Ye=new Int32Array(32);let e=0;for(;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(me(1,t.lens,0,288,Pe,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5;me(2,t.lens,0,32,Ye,0,t.work,{bits:5}),Ge=!1}t.lencode=Pe,t.lenbits=9,t.distcode=Ye,t.distbits=5},We=(t,e,a,i)=>{let n;const s=t.state;return null===s.window&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new Uint8Array(s.wsize)),i>=s.wsize?(s.window.set(e.subarray(a-s.wsize,a),0),s.wnext=0,s.whave=s.wsize):(n=s.wsize-s.wnext,n>i&&(n=i),s.window.set(e.subarray(a-i,a-i+n),s.wnext),(i-=n)?(s.window.set(e.subarray(a-i,a),0),s.wnext=i,s.whave=s.wsize):(s.wnext+=n,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=n))),0};var qe={inflateReset:He,inflateReset2:je,inflateResetKeep:Me,inflateInit:t=>Ke(t,15),inflateInit2:Ke,inflate:(t,e)=>{let a,i,n,s,r,o,l,h,d,_,f,c,u,w,m,b,g,p,k,v,y,x,z=0;const A=new Uint8Array(4);let E,R;const Z=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(Ce(t)||!t.output||!t.input&&0!==t.avail_in)return xe;a=t.state,a.mode===Se&&(a.mode=De),r=t.next_out,n=t.output,l=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,h=a.hold,d=a.bits,_=o,f=l,x=ke;t:for(;;)switch(a.mode){case Ze:if(0===a.wrap){a.mode=De;break}for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(2&a.wrap&&35615===h){0===a.wbits&&(a.wbits=15),a.check=0,A[0]=255&h,A[1]=h>>>8&255,a.check=H(a.check,A,2,0),h=0,d=0,a.mode=16181;break}if(a.head&&(a.head.done=!1),!(1&a.wrap)||(((255&h)<<8)+(h>>8))%31){t.msg="incorrect header check",a.mode=Le;break}if((15&h)!==Re){t.msg="unknown compression method",a.mode=Le;break}if(h>>>=4,d-=4,y=8+(15&h),0===a.wbits&&(a.wbits=y),y>15||y>a.wbits){t.msg="invalid window size",a.mode=Le;break}a.dmax=1<<a.wbits,a.flags=0,t.adler=a.check=1,a.mode=512&h?16189:Se,h=0,d=0;break;case 16181:for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(a.flags=h,(255&a.flags)!==Re){t.msg="unknown compression method",a.mode=Le;break}if(57344&a.flags){t.msg="unknown header flags set",a.mode=Le;break}a.head&&(a.head.text=h>>8&1),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=H(a.check,A,2,0)),h=0,d=0,a.mode=16182;case 16182:for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.head&&(a.head.time=h),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,A[2]=h>>>16&255,A[3]=h>>>24&255,a.check=H(a.check,A,4,0)),h=0,d=0,a.mode=16183;case 16183:for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.head&&(a.head.xflags=255&h,a.head.os=h>>8),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=H(a.check,A,2,0)),h=0,d=0,a.mode=16184;case 16184:if(1024&a.flags){for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.length=h,a.head&&(a.head.extra_len=h),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=H(a.check,A,2,0)),h=0,d=0}else a.head&&(a.head.extra=null);a.mode=16185;case 16185:if(1024&a.flags&&(c=a.length,c>o&&(c=o),c&&(a.head&&(y=a.head.extra_len-a.length,a.head.extra||(a.head.extra=new Uint8Array(a.head.extra_len)),a.head.extra.set(i.subarray(s,s+c),y)),512&a.flags&&4&a.wrap&&(a.check=H(a.check,i,c,s)),o-=c,s+=c,a.length-=c),a.length))break t;a.length=0,a.mode=16186;case 16186:if(2048&a.flags){if(0===o)break t;c=0;do{y=i[s+c++],a.head&&y&&a.length<65536&&(a.head.name+=String.fromCharCode(y))}while(y&&c<o);if(512&a.flags&&4&a.wrap&&(a.check=H(a.check,i,c,s)),o-=c,s+=c,y)break t}else a.head&&(a.head.name=null);a.length=0,a.mode=16187;case 16187:if(4096&a.flags){if(0===o)break t;c=0;do{y=i[s+c++],a.head&&y&&a.length<65536&&(a.head.comment+=String.fromCharCode(y))}while(y&&c<o);if(512&a.flags&&4&a.wrap&&(a.check=H(a.check,i,c,s)),o-=c,s+=c,y)break t}else a.head&&(a.head.comment=null);a.mode=16188;case 16188:if(512&a.flags){for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(4&a.wrap&&h!==(65535&a.check)){t.msg="header crc mismatch",a.mode=Le;break}h=0,d=0}a.head&&(a.head.hcrc=a.flags>>9&1,a.head.done=!0),t.adler=a.check=0,a.mode=Se;break;case 16189:for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}t.adler=a.check=Ne(h),h=0,d=0,a.mode=Ue;case Ue:if(0===a.havedict)return t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,ye;t.adler=a.check=1,a.mode=Se;case Se:if(e===ge||e===pe)break t;case De:if(a.last){h>>>=7&d,d-=7&d,a.mode=Fe;break}for(;d<3;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}switch(a.last=1&h,h>>>=1,d-=1,3&h){case 0:a.mode=16193;break;case 1:if(Xe(a),a.mode=Oe,e===pe){h>>>=2,d-=2;break t}break;case 2:a.mode=16196;break;case 3:t.msg="invalid block type",a.mode=Le}h>>>=2,d-=2;break;case 16193:for(h>>>=7&d,d-=7&d;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if((65535&h)!=(h>>>16^65535)){t.msg="invalid stored block lengths",a.mode=Le;break}if(a.length=65535&h,h=0,d=0,a.mode=Te,e===pe)break t;case Te:a.mode=16195;case 16195:if(c=a.length,c){if(c>o&&(c=o),c>l&&(c=l),0===c)break t;n.set(i.subarray(s,s+c),r),o-=c,s+=c,l-=c,r+=c,a.length-=c;break}a.mode=Se;break;case 16196:for(;d<14;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(a.nlen=257+(31&h),h>>>=5,d-=5,a.ndist=1+(31&h),h>>>=5,d-=5,a.ncode=4+(15&h),h>>>=4,d-=4,a.nlen>286||a.ndist>30){t.msg="too many length or distance symbols",a.mode=Le;break}a.have=0,a.mode=16197;case 16197:for(;a.have<a.ncode;){for(;d<3;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.lens[Z[a.have++]]=7&h,h>>>=3,d-=3}for(;a.have<19;)a.lens[Z[a.have++]]=0;if(a.lencode=a.lendyn,a.lenbits=7,E={bits:a.lenbits},x=me(0,a.lens,0,19,a.lencode,0,a.work,E),a.lenbits=E.bits,x){t.msg="invalid code lengths set",a.mode=Le;break}a.have=0,a.mode=16198;case 16198:for(;a.have<a.nlen+a.ndist;){for(;z=a.lencode[h&(1<<a.lenbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(g<16)h>>>=m,d-=m,a.lens[a.have++]=g;else{if(16===g){for(R=m+2;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(h>>>=m,d-=m,0===a.have){t.msg="invalid bit length repeat",a.mode=Le;break}y=a.lens[a.have-1],c=3+(3&h),h>>>=2,d-=2}else if(17===g){for(R=m+3;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=m,d-=m,y=0,c=3+(7&h),h>>>=3,d-=3}else{for(R=m+7;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=m,d-=m,y=0,c=11+(127&h),h>>>=7,d-=7}if(a.have+c>a.nlen+a.ndist){t.msg="invalid bit length repeat",a.mode=Le;break}for(;c--;)a.lens[a.have++]=y}}if(a.mode===Le)break;if(0===a.lens[256]){t.msg="invalid code -- missing end-of-block",a.mode=Le;break}if(a.lenbits=9,E={bits:a.lenbits},x=me(1,a.lens,0,a.nlen,a.lencode,0,a.work,E),a.lenbits=E.bits,x){t.msg="invalid literal/lengths set",a.mode=Le;break}if(a.distbits=6,a.distcode=a.distdyn,E={bits:a.distbits},x=me(2,a.lens,a.nlen,a.ndist,a.distcode,0,a.work,E),a.distbits=E.bits,x){t.msg="invalid distances set",a.mode=Le;break}if(a.mode=Oe,e===pe)break t;case Oe:a.mode=Ie;case Ie:if(o>=6&&l>=258){t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,de(t,f),r=t.next_out,n=t.output,l=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,h=a.hold,d=a.bits,a.mode===Se&&(a.back=-1);break}for(a.back=0;z=a.lencode[h&(1<<a.lenbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(b&&0==(240&b)){for(p=m,k=b,v=g;z=a.lencode[v+((h&(1<<p+k)-1)>>p)],m=z>>>24,b=z>>>16&255,g=65535&z,!(p+m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=p,d-=p,a.back+=p}if(h>>>=m,d-=m,a.back+=m,a.length=g,0===b){a.mode=16205;break}if(32&b){a.back=-1,a.mode=Se;break}if(64&b){t.msg="invalid literal/length code",a.mode=Le;break}a.extra=15&b,a.mode=16201;case 16201:if(a.extra){for(R=a.extra;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.length+=h&(1<<a.extra)-1,h>>>=a.extra,d-=a.extra,a.back+=a.extra}a.was=a.length,a.mode=16202;case 16202:for(;z=a.distcode[h&(1<<a.distbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(0==(240&b)){for(p=m,k=b,v=g;z=a.distcode[v+((h&(1<<p+k)-1)>>p)],m=z>>>24,b=z>>>16&255,g=65535&z,!(p+m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=p,d-=p,a.back+=p}if(h>>>=m,d-=m,a.back+=m,64&b){t.msg="invalid distance code",a.mode=Le;break}a.offset=g,a.extra=15&b,a.mode=16203;case 16203:if(a.extra){for(R=a.extra;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.offset+=h&(1<<a.extra)-1,h>>>=a.extra,d-=a.extra,a.back+=a.extra}if(a.offset>a.dmax){t.msg="invalid distance too far back",a.mode=Le;break}a.mode=16204;case 16204:if(0===l)break t;if(c=f-l,a.offset>c){if(c=a.offset-c,c>a.whave&&a.sane){t.msg="invalid distance too far back",a.mode=Le;break}c>a.wnext?(c-=a.wnext,u=a.wsize-c):u=a.wnext-c,c>a.length&&(c=a.length),w=a.window}else w=n,u=r-a.offset,c=a.length;c>l&&(c=l),l-=c,a.length-=c;do{n[r++]=w[u++]}while(--c);0===a.length&&(a.mode=Ie);break;case 16205:if(0===l)break t;n[r++]=a.length,l--,a.mode=Ie;break;case Fe:if(a.wrap){for(;d<32;){if(0===o)break t;o--,h|=i[s++]<<d,d+=8}if(f-=l,t.total_out+=f,a.total+=f,4&a.wrap&&f&&(t.adler=a.check=a.flags?H(a.check,n,f,r-f):C(a.check,n,f,r-f)),f=l,4&a.wrap&&(a.flags?h:Ne(h))!==a.check){t.msg="incorrect data check",a.mode=Le;break}h=0,d=0}a.mode=16207;case 16207:if(a.wrap&&a.flags){for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(4&a.wrap&&h!==(4294967295&a.total)){t.msg="incorrect length check",a.mode=Le;break}h=0,d=0}a.mode=16208;case 16208:x=ve;break t;case Le:x=ze;break t;case 16210:return Ae;default:return xe}return t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,(a.wsize||f!==t.avail_out&&a.mode<Le&&(a.mode<Fe||e!==be))&&We(t,t.output,t.next_out,f-t.avail_out),_-=t.avail_in,f-=t.avail_out,t.total_in+=_,t.total_out+=f,a.total+=f,4&a.wrap&&f&&(t.adler=a.check=a.flags?H(a.check,n,f,t.next_out-f):C(a.check,n,f,t.next_out-f)),t.data_type=a.bits+(a.last?64:0)+(a.mode===Se?128:0)+(a.mode===Oe||a.mode===Te?256:0),(0===_&&0===f||e===be)&&x===ke&&(x=Ee),x},inflateEnd:t=>{if(Ce(t))return xe;let e=t.state;return e.window&&(e.window=null),t.state=null,ke},inflateGetHeader:(t,e)=>{if(Ce(t))return xe;const a=t.state;return 0==(2&a.wrap)?xe:(a.head=e,e.done=!1,ke)},inflateSetDictionary:(t,e)=>{const a=e.length;let i,n,s;return Ce(t)?xe:(i=t.state,0!==i.wrap&&i.mode!==Ue?xe:i.mode===Ue&&(n=1,n=C(n,e,a,0),n!==i.check)?ze:(s=We(t,e,a,a),s?(i.mode=16210,Ae):(i.havedict=1,ke)))},inflateInfo:"pako inflate (from Nodeca project)"};var Je=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1};const Qe=Object.prototype.toString,{Z_NO_FLUSH:Ve,Z_FINISH:$e,Z_OK:ta,Z_STREAM_END:ea,Z_NEED_DICT:aa,Z_STREAM_ERROR:ia,Z_DATA_ERROR:na,Z_MEM_ERROR:sa}=K;function ra(t){this.options=jt({chunkSize:65536,windowBits:15,to:""},t||{});const e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(e.windowBits>=0&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&0==(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new qt,this.strm.avail_out=0;let a=qe.inflateInit2(this.strm,e.windowBits);if(a!==ta)throw new Error(j[a]);if(this.header=new Je,qe.inflateGetHeader(this.strm,this.header),e.dictionary&&("string"==typeof e.dictionary?e.dictionary=Gt(e.dictionary):"[object ArrayBuffer]"===Qe.call(e.dictionary)&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(a=qe.inflateSetDictionary(this.strm,e.dictionary),a!==ta)))throw new Error(j[a])}function oa(t,e){const a=new ra(e);if(a.push(t),a.err)throw a.msg||j[a.err];return a.result}ra.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize,n=this.options.dictionary;let s,r,o;if(this.ended)return!1;for(r=e===~~e?e:!0===e?$e:Ve,"[object ArrayBuffer]"===Qe.call(t)?a.input=new Uint8Array(t):a.input=t,a.next_in=0,a.avail_in=a.input.length;;){for(0===a.avail_out&&(a.output=new Uint8Array(i),a.next_out=0,a.avail_out=i),s=qe.inflate(a,r),s===aa&&n&&(s=qe.inflateSetDictionary(a,n),s===ta?s=qe.inflate(a,r):s===na&&(s=aa));a.avail_in>0&&s===ea&&a.state.wrap>0&&0!==t[a.next_in];)qe.inflateReset(a),s=qe.inflate(a,r);switch(s){case ia:case na:case aa:case sa:return this.onEnd(s),this.ended=!0,!1}if(o=a.avail_out,a.next_out&&(0===a.avail_out||s===ea))if("string"===this.options.to){let t=Wt(a.output,a.next_out),e=a.next_out-t,n=Xt(a.output,t);a.next_out=e,a.avail_out=i-e,e&&a.output.set(a.output.subarray(t,t+e),0),this.onData(n)}else this.onData(a.output.length===a.next_out?a.output:a.output.subarray(0,a.next_out));if(s!==ta||0!==o){if(s===ea)return s=qe.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,!0;if(0===a.avail_in)break}}return!0},ra.prototype.onData=function(t){this.chunks.push(t)},ra.prototype.onEnd=function(t){t===ta&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=Kt(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};var la={Inflate:ra,inflate:oa,inflateRaw:function(t,e){return(e=e||{}).raw=!0,oa(t,e)},ungzip:oa,constants:K};const{Deflate:ha,deflate:da,deflateRaw:_a,gzip:fa}=le,{Inflate:ca,inflate:ua,inflateRaw:wa,ungzip:ma}=la;var ba=ha,ga=da,pa=_a,ka=fa,va=ca,ya=ua,xa=wa,za=ma,Aa=K,Ea={Deflate:ba,deflate:ga,deflateRaw:pa,gzip:ka,Inflate:va,inflate:ya,inflateRaw:xa,ungzip:za,constants:Aa};t.Deflate=ba,t.Inflate=va,t.constants=Aa,t.default=Ea,t.deflate=ga,t.deflateRaw=pa,t.gzip=ka,t.inflate=ya,t.inflateRaw=xa,t.ungzip=za,Object.defineProperty(t,"__esModule",{value:!0})}));

!function(t,e){"object" == typeof exports ? module.exports = exports = e() : "function" == typeof define && define.amd ? define([], e) : (t.CryptoJS = e(), typeof window !== "undefined" && (window.CryptoJS = t.CryptoJS))}(this,function(){var n,o,s,a,h,t,e,l,r,i,c,f,d,u,p,S,x,b,A,H,z,_,v,g,y,B,w,k,m,C,D,E,R,M,F,P,W,O,I,U=U||function(h){var i;if("undefined"!=typeof window&&window.crypto&&(i=window.crypto),"undefined"!=typeof self&&self.crypto&&(i=self.crypto),!(i=!(i=!(i="undefined"!=typeof globalThis&&globalThis.crypto?globalThis.crypto:i)&&"undefined"!=typeof window&&window.msCrypto?window.msCrypto:i)&&"undefined"!=typeof global&&global.crypto?global.crypto:i)&&"function"==typeof require)try{i=require("crypto")}catch(t){}var r=Object.create||function(t){return e.prototype=t,t=new e,e.prototype=null,t};function e(){}var t={},n=t.lib={},o=n.Base={extend:function(t){var e=r(this);return t&&e.mixIn(t),e.hasOwnProperty("init")&&this.init!==e.init||(e.init=function(){e.$super.init.apply(this,arguments)}),(e.init.prototype=e).$super=this,e},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},l=n.WordArray=o.extend({init:function(t,e){t=this.words=t||[],this.sigBytes=null!=e?e:4*t.length},toString:function(t){return(t||c).stringify(this)},concat:function(t){var e=this.words,r=t.words,i=this.sigBytes,n=t.sigBytes;if(this.clamp(),i%4)for(var o=0;o<n;o++){var s=r[o>>>2]>>>24-o%4*8&255;e[i+o>>>2]|=s<<24-(i+o)%4*8}else for(var c=0;c<n;c+=4)e[i+c>>>2]=r[c>>>2];return this.sigBytes+=n,this},clamp:function(){var t=this.words,e=this.sigBytes;t[e>>>2]&=4294967295<<32-e%4*8,t.length=h.ceil(e/4)},clone:function(){var t=o.clone.call(this);return t.words=this.words.slice(0),t},random:function(t){for(var e=[],r=0;r<t;r+=4)e.push(function(){if(i){if("function"==typeof i.getRandomValues)try{return i.getRandomValues(new Uint32Array(1))[0]}catch(t){}if("function"==typeof i.randomBytes)try{return i.randomBytes(4).readInt32LE()}catch(t){}}throw new Error("Native crypto module could not be used to get secure random number.")}());return new l.init(e,t)}}),s=t.enc={},c=s.Hex={stringify:function(t){for(var e=t.words,r=t.sigBytes,i=[],n=0;n<r;n++){var o=e[n>>>2]>>>24-n%4*8&255;i.push((o>>>4).toString(16)),i.push((15&o).toString(16))}return i.join("")},parse:function(t){for(var e=t.length,r=[],i=0;i<e;i+=2)r[i>>>3]|=parseInt(t.substr(i,2),16)<<24-i%8*4;return new l.init(r,e/2)}},a=s.Latin1={stringify:function(t){for(var e=t.words,r=t.sigBytes,i=[],n=0;n<r;n++){var o=e[n>>>2]>>>24-n%4*8&255;i.push(String.fromCharCode(o))}return i.join("")},parse:function(t){for(var e=t.length,r=[],i=0;i<e;i++)r[i>>>2]|=(255&t.charCodeAt(i))<<24-i%4*8;return new l.init(r,e)}},f=s.Utf8={stringify:function(t){try{return decodeURIComponent(escape(a.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(t){return a.parse(unescape(encodeURIComponent(t)))}},d=n.BufferedBlockAlgorithm=o.extend({reset:function(){this._data=new l.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=f.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(t){var e,r=this._data,i=r.words,n=r.sigBytes,o=this.blockSize,s=n/(4*o),c=(s=t?h.ceil(s):h.max((0|s)-this._minBufferSize,0))*o,n=h.min(4*c,n);if(c){for(var a=0;a<c;a+=o)this._doProcessBlock(i,a);e=i.splice(0,c),r.sigBytes-=n}return new l.init(e,n)},clone:function(){var t=o.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),u=(n.Hasher=d.extend({cfg:o.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){d.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(r){return function(t,e){return new r.init(e).finalize(t)}},_createHmacHelper:function(r){return function(t,e){return new u.HMAC.init(r,e).finalize(t)}}}),t.algo={});return t}(Math);function K(t,e,r){return t&e|~t&r}function X(t,e,r){return t&r|e&~r}function L(t,e){return t<<e|t>>>32-e}function j(t,e,r,i){var n,o=this._iv;o?(n=o.slice(0),this._iv=void 0):n=this._prevBlock,i.encryptBlock(n,0);for(var s=0;s<r;s++)t[e+s]^=n[s]}function T(t){var e,r,i;return 255==(t>>24&255)?(r=t>>8&255,i=255&t,255===(e=t>>16&255)?(e=0,255===r?(r=0,255===i?i=0:++i):++r):++e,t=0,t+=e<<16,t+=r<<8,t+=i):t+=1<<24,t}function N(){for(var t=this._X,e=this._C,r=0;r<8;r++)E[r]=e[r];e[0]=e[0]+1295307597+this._b|0,e[1]=e[1]+3545052371+(e[0]>>>0<E[0]>>>0?1:0)|0,e[2]=e[2]+886263092+(e[1]>>>0<E[1]>>>0?1:0)|0,e[3]=e[3]+1295307597+(e[2]>>>0<E[2]>>>0?1:0)|0,e[4]=e[4]+3545052371+(e[3]>>>0<E[3]>>>0?1:0)|0,e[5]=e[5]+886263092+(e[4]>>>0<E[4]>>>0?1:0)|0,e[6]=e[6]+1295307597+(e[5]>>>0<E[5]>>>0?1:0)|0,e[7]=e[7]+3545052371+(e[6]>>>0<E[6]>>>0?1:0)|0,this._b=e[7]>>>0<E[7]>>>0?1:0;for(r=0;r<8;r++){var i=t[r]+e[r],n=65535&i,o=i>>>16;R[r]=((n*n>>>17)+n*o>>>15)+o*o^((4294901760&i)*i|0)+((65535&i)*i|0)}t[0]=R[0]+(R[7]<<16|R[7]>>>16)+(R[6]<<16|R[6]>>>16)|0,t[1]=R[1]+(R[0]<<8|R[0]>>>24)+R[7]|0,t[2]=R[2]+(R[1]<<16|R[1]>>>16)+(R[0]<<16|R[0]>>>16)|0,t[3]=R[3]+(R[2]<<8|R[2]>>>24)+R[1]|0,t[4]=R[4]+(R[3]<<16|R[3]>>>16)+(R[2]<<16|R[2]>>>16)|0,t[5]=R[5]+(R[4]<<8|R[4]>>>24)+R[3]|0,t[6]=R[6]+(R[5]<<16|R[5]>>>16)+(R[4]<<16|R[4]>>>16)|0,t[7]=R[7]+(R[6]<<8|R[6]>>>24)+R[5]|0}function q(){for(var t=this._X,e=this._C,r=0;r<8;r++)O[r]=e[r];e[0]=e[0]+1295307597+this._b|0,e[1]=e[1]+3545052371+(e[0]>>>0<O[0]>>>0?1:0)|0,e[2]=e[2]+886263092+(e[1]>>>0<O[1]>>>0?1:0)|0,e[3]=e[3]+1295307597+(e[2]>>>0<O[2]>>>0?1:0)|0,e[4]=e[4]+3545052371+(e[3]>>>0<O[3]>>>0?1:0)|0,e[5]=e[5]+886263092+(e[4]>>>0<O[4]>>>0?1:0)|0,e[6]=e[6]+1295307597+(e[5]>>>0<O[5]>>>0?1:0)|0,e[7]=e[7]+3545052371+(e[6]>>>0<O[6]>>>0?1:0)|0,this._b=e[7]>>>0<O[7]>>>0?1:0;for(r=0;r<8;r++){var i=t[r]+e[r],n=65535&i,o=i>>>16;I[r]=((n*n>>>17)+n*o>>>15)+o*o^((4294901760&i)*i|0)+((65535&i)*i|0)}t[0]=I[0]+(I[7]<<16|I[7]>>>16)+(I[6]<<16|I[6]>>>16)|0,t[1]=I[1]+(I[0]<<8|I[0]>>>24)+I[7]|0,t[2]=I[2]+(I[1]<<16|I[1]>>>16)+(I[0]<<16|I[0]>>>16)|0,t[3]=I[3]+(I[2]<<8|I[2]>>>24)+I[1]|0,t[4]=I[4]+(I[3]<<16|I[3]>>>16)+(I[2]<<16|I[2]>>>16)|0,t[5]=I[5]+(I[4]<<8|I[4]>>>24)+I[3]|0,t[6]=I[6]+(I[5]<<16|I[5]>>>16)+(I[4]<<16|I[4]>>>16)|0,t[7]=I[7]+(I[6]<<8|I[6]>>>24)+I[5]|0}return F=(M=U).lib,n=F.Base,o=F.WordArray,(M=M.x64={}).Word=n.extend({init:function(t,e){this.high=t,this.low=e}}),M.WordArray=n.extend({init:function(t,e){t=this.words=t||[],this.sigBytes=null!=e?e:8*t.length},toX32:function(){for(var t=this.words,e=t.length,r=[],i=0;i<e;i++){var n=t[i];r.push(n.high),r.push(n.low)}return o.create(r,this.sigBytes)},clone:function(){for(var t=n.clone.call(this),e=t.words=this.words.slice(0),r=e.length,i=0;i<r;i++)e[i]=e[i].clone();return t}}),"function"==typeof ArrayBuffer&&(P=U.lib.WordArray,s=P.init,(P.init=function(t){if((t=(t=t instanceof ArrayBuffer?new Uint8Array(t):t)instanceof Int8Array||"undefined"!=typeof Uint8ClampedArray&&t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array||t instanceof Float64Array?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):t)instanceof Uint8Array){for(var e=t.byteLength,r=[],i=0;i<e;i++)r[i>>>2]|=t[i]<<24-i%4*8;s.call(this,r,e)}else s.apply(this,arguments)}).prototype=P),function(){var t=U,n=t.lib.WordArray,t=t.enc;t.Utf16=t.Utf16BE={stringify:function(t){for(var e=t.words,r=t.sigBytes,i=[],n=0;n<r;n+=2){var o=e[n>>>2]>>>16-n%4*8&65535;i.push(String.fromCharCode(o))}return i.join("")},parse:function(t){for(var e=t.length,r=[],i=0;i<e;i++)r[i>>>1]|=t.charCodeAt(i)<<16-i%2*16;return n.create(r,2*e)}};function s(t){return t<<8&4278255360|t>>>8&16711935}t.Utf16LE={stringify:function(t){for(var e=t.words,r=t.sigBytes,i=[],n=0;n<r;n+=2){var o=s(e[n>>>2]>>>16-n%4*8&65535);i.push(String.fromCharCode(o))}return i.join("")},parse:function(t){for(var e=t.length,r=[],i=0;i<e;i++)r[i>>>1]|=s(t.charCodeAt(i)<<16-i%2*16);return n.create(r,2*e)}}}(),a=(w=U).lib.WordArray,w.enc.Base64={stringify:function(t){var e=t.words,r=t.sigBytes,i=this._map;t.clamp();for(var n=[],o=0;o<r;o+=3)for(var s=(e[o>>>2]>>>24-o%4*8&255)<<16|(e[o+1>>>2]>>>24-(o+1)%4*8&255)<<8|e[o+2>>>2]>>>24-(o+2)%4*8&255,c=0;c<4&&o+.75*c<r;c++)n.push(i.charAt(s>>>6*(3-c)&63));var a=i.charAt(64);if(a)for(;n.length%4;)n.push(a);return n.join("")},parse:function(t){var e=t.length,r=this._map;if(!(i=this._reverseMap))for(var i=this._reverseMap=[],n=0;n<r.length;n++)i[r.charCodeAt(n)]=n;var o=r.charAt(64);return!o||-1!==(o=t.indexOf(o))&&(e=o),function(t,e,r){for(var i=[],n=0,o=0;o<e;o++){var s,c;o%4&&(s=r[t.charCodeAt(o-1)]<<o%4*2,c=r[t.charCodeAt(o)]>>>6-o%4*2,c=s|c,i[n>>>2]|=c<<24-n%4*8,n++)}return a.create(i,n)}(t,e,i)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="},h=(F=U).lib.WordArray,F.enc.Base64url={stringify:function(t,e=!0){var r=t.words,i=t.sigBytes,n=e?this._safe_map:this._map;t.clamp();for(var o=[],s=0;s<i;s+=3)for(var c=(r[s>>>2]>>>24-s%4*8&255)<<16|(r[s+1>>>2]>>>24-(s+1)%4*8&255)<<8|r[s+2>>>2]>>>24-(s+2)%4*8&255,a=0;a<4&&s+.75*a<i;a++)o.push(n.charAt(c>>>6*(3-a)&63));var h=n.charAt(64);if(h)for(;o.length%4;)o.push(h);return o.join("")},parse:function(t,e=!0){var r=t.length,i=e?this._safe_map:this._map;if(!(n=this._reverseMap))for(var n=this._reverseMap=[],o=0;o<i.length;o++)n[i.charCodeAt(o)]=o;e=i.charAt(64);return!e||-1!==(e=t.indexOf(e))&&(r=e),function(t,e,r){for(var i=[],n=0,o=0;o<e;o++){var s,c;o%4&&(s=r[t.charCodeAt(o-1)]<<o%4*2,c=r[t.charCodeAt(o)]>>>6-o%4*2,c=s|c,i[n>>>2]|=c<<24-n%4*8,n++)}return h.create(i,n)}(t,r,n)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",_safe_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"},function(a){var t=U,e=t.lib,r=e.WordArray,i=e.Hasher,e=t.algo,A=[];!function(){for(var t=0;t<64;t++)A[t]=4294967296*a.abs(a.sin(t+1))|0}();e=e.MD5=i.extend({_doReset:function(){this._hash=new r.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(t,e){for(var r=0;r<16;r++){var i=e+r,n=t[i];t[i]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8)}var o=this._hash.words,s=t[e+0],c=t[e+1],a=t[e+2],h=t[e+3],l=t[e+4],f=t[e+5],d=t[e+6],u=t[e+7],p=t[e+8],_=t[e+9],y=t[e+10],v=t[e+11],g=t[e+12],B=t[e+13],w=t[e+14],k=t[e+15],m=H(m=o[0],b=o[1],x=o[2],S=o[3],s,7,A[0]),S=H(S,m,b,x,c,12,A[1]),x=H(x,S,m,b,a,17,A[2]),b=H(b,x,S,m,h,22,A[3]);m=H(m,b,x,S,l,7,A[4]),S=H(S,m,b,x,f,12,A[5]),x=H(x,S,m,b,d,17,A[6]),b=H(b,x,S,m,u,22,A[7]),m=H(m,b,x,S,p,7,A[8]),S=H(S,m,b,x,_,12,A[9]),x=H(x,S,m,b,y,17,A[10]),b=H(b,x,S,m,v,22,A[11]),m=H(m,b,x,S,g,7,A[12]),S=H(S,m,b,x,B,12,A[13]),x=H(x,S,m,b,w,17,A[14]),m=z(m,b=H(b,x,S,m,k,22,A[15]),x,S,c,5,A[16]),S=z(S,m,b,x,d,9,A[17]),x=z(x,S,m,b,v,14,A[18]),b=z(b,x,S,m,s,20,A[19]),m=z(m,b,x,S,f,5,A[20]),S=z(S,m,b,x,y,9,A[21]),x=z(x,S,m,b,k,14,A[22]),b=z(b,x,S,m,l,20,A[23]),m=z(m,b,x,S,_,5,A[24]),S=z(S,m,b,x,w,9,A[25]),x=z(x,S,m,b,h,14,A[26]),b=z(b,x,S,m,p,20,A[27]),m=z(m,b,x,S,B,5,A[28]),S=z(S,m,b,x,a,9,A[29]),x=z(x,S,m,b,u,14,A[30]),m=C(m,b=z(b,x,S,m,g,20,A[31]),x,S,f,4,A[32]),S=C(S,m,b,x,p,11,A[33]),x=C(x,S,m,b,v,16,A[34]),b=C(b,x,S,m,w,23,A[35]),m=C(m,b,x,S,c,4,A[36]),S=C(S,m,b,x,l,11,A[37]),x=C(x,S,m,b,u,16,A[38]),b=C(b,x,S,m,y,23,A[39]),m=C(m,b,x,S,B,4,A[40]),S=C(S,m,b,x,s,11,A[41]),x=C(x,S,m,b,h,16,A[42]),b=C(b,x,S,m,d,23,A[43]),m=C(m,b,x,S,_,4,A[44]),S=C(S,m,b,x,g,11,A[45]),x=C(x,S,m,b,k,16,A[46]),m=D(m,b=C(b,x,S,m,a,23,A[47]),x,S,s,6,A[48]),S=D(S,m,b,x,u,10,A[49]),x=D(x,S,m,b,w,15,A[50]),b=D(b,x,S,m,f,21,A[51]),m=D(m,b,x,S,g,6,A[52]),S=D(S,m,b,x,h,10,A[53]),x=D(x,S,m,b,y,15,A[54]),b=D(b,x,S,m,c,21,A[55]),m=D(m,b,x,S,p,6,A[56]),S=D(S,m,b,x,k,10,A[57]),x=D(x,S,m,b,d,15,A[58]),b=D(b,x,S,m,B,21,A[59]),m=D(m,b,x,S,l,6,A[60]),S=D(S,m,b,x,v,10,A[61]),x=D(x,S,m,b,a,15,A[62]),b=D(b,x,S,m,_,21,A[63]),o[0]=o[0]+m|0,o[1]=o[1]+b|0,o[2]=o[2]+x|0,o[3]=o[3]+S|0},_doFinalize:function(){var t=this._data,e=t.words,r=8*this._nDataBytes,i=8*t.sigBytes;e[i>>>5]|=128<<24-i%32;var n=a.floor(r/4294967296),r=r;e[15+(64+i>>>9<<4)]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8),e[14+(64+i>>>9<<4)]=16711935&(r<<8|r>>>24)|4278255360&(r<<24|r>>>8),t.sigBytes=4*(e.length+1),this._process();for(var e=this._hash,o=e.words,s=0;s<4;s++){var c=o[s];o[s]=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8)}return e},clone:function(){var t=i.clone.call(this);return t._hash=this._hash.clone(),t}});function H(t,e,r,i,n,o,s){s=t+(e&r|~e&i)+n+s;return(s<<o|s>>>32-o)+e}function z(t,e,r,i,n,o,s){s=t+(e&i|r&~i)+n+s;return(s<<o|s>>>32-o)+e}function C(t,e,r,i,n,o,s){s=t+(e^r^i)+n+s;return(s<<o|s>>>32-o)+e}function D(t,e,r,i,n,o,s){s=t+(r^(e|~i))+n+s;return(s<<o|s>>>32-o)+e}t.MD5=i._createHelper(e),t.HmacMD5=i._createHmacHelper(e)}(Math),P=(M=U).lib,t=P.WordArray,e=P.Hasher,P=M.algo,l=[],P=P.SHA1=e.extend({_doReset:function(){this._hash=new t.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(t,e){for(var r=this._hash.words,i=r[0],n=r[1],o=r[2],s=r[3],c=r[4],a=0;a<80;a++){a<16?l[a]=0|t[e+a]:(h=l[a-3]^l[a-8]^l[a-14]^l[a-16],l[a]=h<<1|h>>>31);var h=(i<<5|i>>>27)+c+l[a];h+=a<20?1518500249+(n&o|~n&s):a<40?1859775393+(n^o^s):a<60?(n&o|n&s|o&s)-1894007588:(n^o^s)-899497514,c=s,s=o,o=n<<30|n>>>2,n=i,i=h}r[0]=r[0]+i|0,r[1]=r[1]+n|0,r[2]=r[2]+o|0,r[3]=r[3]+s|0,r[4]=r[4]+c|0},_doFinalize:function(){var t=this._data,e=t.words,r=8*this._nDataBytes,i=8*t.sigBytes;return e[i>>>5]|=128<<24-i%32,e[14+(64+i>>>9<<4)]=Math.floor(r/4294967296),e[15+(64+i>>>9<<4)]=r,t.sigBytes=4*e.length,this._process(),this._hash},clone:function(){var t=e.clone.call(this);return t._hash=this._hash.clone(),t}}),M.SHA1=e._createHelper(P),M.HmacSHA1=e._createHmacHelper(P),function(n){var t=U,e=t.lib,r=e.WordArray,i=e.Hasher,e=t.algo,o=[],p=[];!function(){function t(t){return 4294967296*(t-(0|t))|0}for(var e=2,r=0;r<64;)!function(t){for(var e=n.sqrt(t),r=2;r<=e;r++)if(!(t%r))return;return 1}(e)||(r<8&&(o[r]=t(n.pow(e,.5))),p[r]=t(n.pow(e,1/3)),r++),e++}();var _=[],e=e.SHA256=i.extend({_doReset:function(){this._hash=new r.init(o.slice(0))},_doProcessBlock:function(t,e){for(var r=this._hash.words,i=r[0],n=r[1],o=r[2],s=r[3],c=r[4],a=r[5],h=r[6],l=r[7],f=0;f<64;f++){f<16?_[f]=0|t[e+f]:(d=_[f-15],u=_[f-2],_[f]=((d<<25|d>>>7)^(d<<14|d>>>18)^d>>>3)+_[f-7]+((u<<15|u>>>17)^(u<<13|u>>>19)^u>>>10)+_[f-16]);var d=i&n^i&o^n&o,u=l+((c<<26|c>>>6)^(c<<21|c>>>11)^(c<<7|c>>>25))+(c&a^~c&h)+p[f]+_[f],l=h,h=a,a=c,c=s+u|0,s=o,o=n,n=i,i=u+(((i<<30|i>>>2)^(i<<19|i>>>13)^(i<<10|i>>>22))+d)|0}r[0]=r[0]+i|0,r[1]=r[1]+n|0,r[2]=r[2]+o|0,r[3]=r[3]+s|0,r[4]=r[4]+c|0,r[5]=r[5]+a|0,r[6]=r[6]+h|0,r[7]=r[7]+l|0},_doFinalize:function(){var t=this._data,e=t.words,r=8*this._nDataBytes,i=8*t.sigBytes;return e[i>>>5]|=128<<24-i%32,e[14+(64+i>>>9<<4)]=n.floor(r/4294967296),e[15+(64+i>>>9<<4)]=r,t.sigBytes=4*e.length,this._process(),this._hash},clone:function(){var t=i.clone.call(this);return t._hash=this._hash.clone(),t}});t.SHA256=i._createHelper(e),t.HmacSHA256=i._createHmacHelper(e)}(Math),r=(w=U).lib.WordArray,F=w.algo,i=F.SHA256,F=F.SHA224=i.extend({_doReset:function(){this._hash=new r.init([3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])},_doFinalize:function(){var t=i._doFinalize.call(this);return t.sigBytes-=4,t}}),w.SHA224=i._createHelper(F),w.HmacSHA224=i._createHmacHelper(F),function(){var t=U,e=t.lib.Hasher,r=t.x64,i=r.Word,n=r.WordArray,r=t.algo;function o(){return i.create.apply(i,arguments)}var t1=[o(1116352408,3609767458),o(1899447441,602891725),o(3049323471,3964484399),o(3921009573,2173295548),o(961987163,4081628472),o(1508970993,3053834265),o(2453635748,2937671579),o(2870763221,3664609560),o(3624381080,2734883394),o(310598401,1164996542),o(607225278,1323610764),o(1426881987,3590304994),o(1925078388,4068182383),o(2162078206,991336113),o(2614888103,633803317),o(3248222580,3479774868),o(3835390401,2666613458),o(4022224774,944711139),o(264347078,2341262773),o(604807628,2007800933),o(770255983,1495990901),o(1249150122,1856431235),o(1555081692,3175218132),o(1996064986,2198950837),o(2554220882,3999719339),o(2821834349,766784016),o(2952996808,2566594879),o(3210313671,3203337956),o(3336571891,1034457026),o(3584528711,2466948901),o(113926993,3758326383),o(338241895,168717936),o(666307205,1188179964),o(773529912,1546045734),o(1294757372,1522805485),o(1396182291,2643833823),o(1695183700,2343527390),o(1986661051,1014477480),o(2177026350,1206759142),o(2456956037,344077627),o(2730485921,1290863460),o(2820302411,3158454273),o(3259730800,3505952657),o(3345764771,106217008),o(3516065817,3606008344),o(3600352804,1432725776),o(4094571909,1467031594),o(275423344,851169720),o(430227734,3100823752),o(506948616,1363258195),o(659060556,3750685593),o(883997877,3785050280),o(958139571,3318307427),o(1322822218,3812723403),o(1537002063,2003034995),o(1747873779,3602036899),o(1955562222,1575990012),o(2024104815,1125592928),o(2227730452,2716904306),o(2361852424,442776044),o(2428436474,593698344),o(2756734187,3733110249),o(3204031479,2999351573),o(3329325298,3815920427),o(3391569614,3928383900),o(3515267271,566280711),o(3940187606,3454069534),o(4118630271,4000239992),o(116418474,1914138554),o(174292421,2731055270),o(289380356,3203993006),o(460393269,320620315),o(685471733,587496836),o(852142971,1086792851),o(1017036298,365543100),o(1126000580,2618297676),o(1288033470,3409855158),o(1501505948,4234509866),o(1607167915,987167468),o(1816402316,1246189591)],e1=[];!function(){for(var t=0;t<80;t++)e1[t]=o()}();r=r.SHA512=e.extend({_doReset:function(){this._hash=new n.init([new i.init(1779033703,4089235720),new i.init(3144134277,2227873595),new i.init(1013904242,4271175723),new i.init(2773480762,1595750129),new i.init(1359893119,2917565137),new i.init(2600822924,725511199),new i.init(528734635,4215389547),new i.init(1541459225,327033209)])},_doProcessBlock:function(t,e){for(var r=this._hash.words,i=r[0],n=r[1],o=r[2],s=r[3],c=r[4],a=r[5],h=r[6],l=r[7],f=i.high,d=i.low,u=n.high,p=n.low,_=o.high,y=o.low,v=s.high,g=s.low,B=c.high,w=c.low,k=a.high,m=a.low,S=h.high,x=h.low,b=l.high,r=l.low,A=f,H=d,z=u,C=p,D=_,E=y,R=v,M=g,F=B,P=w,W=k,O=m,I=S,U=x,K=b,X=r,L=0;L<80;L++){var j,T,N=e1[L];L<16?(T=N.high=0|t[e+2*L],j=N.low=0|t[e+2*L+1]):($=(q=e1[L-15]).high,J=q.low,G=(Q=e1[L-2]).high,V=Q.low,Z=(Y=e1[L-7]).high,q=Y.low,Y=(Q=e1[L-16]).high,T=(T=(($>>>1|J<<31)^($>>>8|J<<24)^$>>>7)+Z+((j=(Z=(J>>>1|$<<31)^(J>>>8|$<<24)^(J>>>7|$<<25))+q)>>>0<Z>>>0?1:0))+((G>>>19|V<<13)^(G<<3|V>>>29)^G>>>6)+((j+=J=(V>>>19|G<<13)^(V<<3|G>>>29)^(V>>>6|G<<26))>>>0<J>>>0?1:0),j+=$=Q.low,N.high=T=T+Y+(j>>>0<$>>>0?1:0),N.low=j);var q=F&W^~F&I,Z=P&O^~P&U,V=A&z^A&D^z&D,G=(H>>>28|A<<4)^(H<<30|A>>>2)^(H<<25|A>>>7),J=t1[L],Q=J.high,Y=J.low,$=X+((P>>>14|F<<18)^(P>>>18|F<<14)^(P<<23|F>>>9)),N=K+((F>>>14|P<<18)^(F>>>18|P<<14)^(F<<23|P>>>9))+($>>>0<X>>>0?1:0),J=G+(H&C^H&E^C&E),K=I,X=U,I=W,U=O,W=F,O=P,F=R+(N=(N=(N=N+q+(($=$+Z)>>>0<Z>>>0?1:0))+Q+(($=$+Y)>>>0<Y>>>0?1:0))+T+(($=$+j)>>>0<j>>>0?1:0))+((P=M+$|0)>>>0<M>>>0?1:0)|0,R=D,M=E,D=z,E=C,z=A,C=H,A=N+(((A>>>28|H<<4)^(A<<30|H>>>2)^(A<<25|H>>>7))+V+(J>>>0<G>>>0?1:0))+((H=$+J|0)>>>0<$>>>0?1:0)|0}d=i.low=d+H,i.high=f+A+(d>>>0<H>>>0?1:0),p=n.low=p+C,n.high=u+z+(p>>>0<C>>>0?1:0),y=o.low=y+E,o.high=_+D+(y>>>0<E>>>0?1:0),g=s.low=g+M,s.high=v+R+(g>>>0<M>>>0?1:0),w=c.low=w+P,c.high=B+F+(w>>>0<P>>>0?1:0),m=a.low=m+O,a.high=k+W+(m>>>0<O>>>0?1:0),x=h.low=x+U,h.high=S+I+(x>>>0<U>>>0?1:0),r=l.low=r+X,l.high=b+K+(r>>>0<X>>>0?1:0)},_doFinalize:function(){var t=this._data,e=t.words,r=8*this._nDataBytes,i=8*t.sigBytes;return e[i>>>5]|=128<<24-i%32,e[30+(128+i>>>10<<5)]=Math.floor(r/4294967296),e[31+(128+i>>>10<<5)]=r,t.sigBytes=4*e.length,this._process(),this._hash.toX32()},clone:function(){var t=e.clone.call(this);return t._hash=this._hash.clone(),t},blockSize:32});t.SHA512=e._createHelper(r),t.HmacSHA512=e._createHmacHelper(r)}(),P=(M=U).x64,c=P.Word,f=P.WordArray,P=M.algo,d=P.SHA512,P=P.SHA384=d.extend({_doReset:function(){this._hash=new f.init([new c.init(3418070365,3238371032),new c.init(1654270250,914150663),new c.init(2438529370,812702999),new c.init(355462360,4144912697),new c.init(1731405415,4290775857),new c.init(2394180231,1750603025),new c.init(3675008525,1694076839),new c.init(1203062813,3204075428)])},_doFinalize:function(){var t=d._doFinalize.call(this);return t.sigBytes-=16,t}}),M.SHA384=d._createHelper(P),M.HmacSHA384=d._createHmacHelper(P),function(l){var t=U,e=t.lib,f=e.WordArray,i=e.Hasher,d=t.x64.Word,e=t.algo,A=[],H=[],z=[];!function(){for(var t=1,e=0,r=0;r<24;r++){A[t+5*e]=(r+1)*(r+2)/2%64;var i=(2*t+3*e)%5;t=e%5,e=i}for(t=0;t<5;t++)for(e=0;e<5;e++)H[t+5*e]=e+(2*t+3*e)%5*5;for(var n=1,o=0;o<24;o++){for(var s,c=0,a=0,h=0;h<7;h++)1&n&&((s=(1<<h)-1)<32?a^=1<<s:c^=1<<s-32),128&n?n=n<<1^113:n<<=1;z[o]=d.create(c,a)}}();var C=[];!function(){for(var t=0;t<25;t++)C[t]=d.create()}();e=e.SHA3=i.extend({cfg:i.cfg.extend({outputLength:512}),_doReset:function(){for(var t=this._state=[],e=0;e<25;e++)t[e]=new d.init;this.blockSize=(1600-2*this.cfg.outputLength)/32},_doProcessBlock:function(t,e){for(var r=this._state,i=this.blockSize/2,n=0;n<i;n++){var o=t[e+2*n],s=t[e+2*n+1],o=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8);(m=r[n]).high^=s=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),m.low^=o}for(var c=0;c<24;c++){for(var a=0;a<5;a++){for(var h=0,l=0,f=0;f<5;f++)h^=(m=r[a+5*f]).high,l^=m.low;var d=C[a];d.high=h,d.low=l}for(a=0;a<5;a++)for(var u=C[(a+4)%5],p=C[(a+1)%5],_=p.high,p=p.low,h=u.high^(_<<1|p>>>31),l=u.low^(p<<1|_>>>31),f=0;f<5;f++)(m=r[a+5*f]).high^=h,m.low^=l;for(var y=1;y<25;y++){var v=(m=r[y]).high,g=m.low,B=A[y];l=B<32?(h=v<<B|g>>>32-B,g<<B|v>>>32-B):(h=g<<B-32|v>>>64-B,v<<B-32|g>>>64-B);B=C[H[y]];B.high=h,B.low=l}var w=C[0],k=r[0];w.high=k.high,w.low=k.low;for(a=0;a<5;a++)for(f=0;f<5;f++){var m=r[y=a+5*f],S=C[y],x=C[(a+1)%5+5*f],b=C[(a+2)%5+5*f];m.high=S.high^~x.high&b.high,m.low=S.low^~x.low&b.low}m=r[0],k=z[c];m.high^=k.high,m.low^=k.low}},_doFinalize:function(){var t=this._data,e=t.words,r=(this._nDataBytes,8*t.sigBytes),i=32*this.blockSize;e[r>>>5]|=1<<24-r%32,e[(l.ceil((1+r)/i)*i>>>5)-1]|=128,t.sigBytes=4*e.length,this._process();for(var n=this._state,e=this.cfg.outputLength/8,o=e/8,s=[],c=0;c<o;c++){var a=n[c],h=a.high,a=a.low,h=16711935&(h<<8|h>>>24)|4278255360&(h<<24|h>>>8);s.push(a=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8)),s.push(h)}return new f.init(s,e)},clone:function(){for(var t=i.clone.call(this),e=t._state=this._state.slice(0),r=0;r<25;r++)e[r]=e[r].clone();return t}});t.SHA3=i._createHelper(e),t.HmacSHA3=i._createHmacHelper(e)}(Math),Math,F=(w=U).lib,u=F.WordArray,p=F.Hasher,F=w.algo,S=u.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),x=u.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),b=u.create([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),A=u.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),H=u.create([0,1518500249,1859775393,2400959708,2840853838]),z=u.create([1352829926,1548603684,1836072691,2053994217,0]),F=F.RIPEMD160=p.extend({_doReset:function(){this._hash=u.create([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(t,e){for(var r=0;r<16;r++){var i=e+r,n=t[i];t[i]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8)}for(var o,s,c,a,h,l,f=this._hash.words,d=H.words,u=z.words,p=S.words,_=x.words,y=b.words,v=A.words,g=o=f[0],B=s=f[1],w=c=f[2],k=a=f[3],m=h=f[4],r=0;r<80;r+=1)l=o+t[e+p[r]]|0,l+=r<16?(s^c^a)+d[0]:r<32?K(s,c,a)+d[1]:r<48?((s|~c)^a)+d[2]:r<64?X(s,c,a)+d[3]:(s^(c|~a))+d[4],l=(l=L(l|=0,y[r]))+h|0,o=h,h=a,a=L(c,10),c=s,s=l,l=g+t[e+_[r]]|0,l+=r<16?(B^(w|~k))+u[0]:r<32?X(B,w,k)+u[1]:r<48?((B|~w)^k)+u[2]:r<64?K(B,w,k)+u[3]:(B^w^k)+u[4],l=(l=L(l|=0,v[r]))+m|0,g=m,m=k,k=L(w,10),w=B,B=l;l=f[1]+c+k|0,f[1]=f[2]+a+m|0,f[2]=f[3]+h+g|0,f[3]=f[4]+o+B|0,f[4]=f[0]+s+w|0,f[0]=l},_doFinalize:function(){var t=this._data,e=t.words,r=8*this._nDataBytes,i=8*t.sigBytes;e[i>>>5]|=128<<24-i%32,e[14+(64+i>>>9<<4)]=16711935&(r<<8|r>>>24)|4278255360&(r<<24|r>>>8),t.sigBytes=4*(e.length+1),this._process();for(var e=this._hash,n=e.words,o=0;o<5;o++){var s=n[o];n[o]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8)}return e},clone:function(){var t=p.clone.call(this);return t._hash=this._hash.clone(),t}}),w.RIPEMD160=p._createHelper(F),w.HmacRIPEMD160=p._createHmacHelper(F),P=(M=U).lib.Base,_=M.enc.Utf8,M.algo.HMAC=P.extend({init:function(t,e){t=this._hasher=new t.init,"string"==typeof e&&(e=_.parse(e));var r=t.blockSize,i=4*r;(e=e.sigBytes>i?t.finalize(e):e).clamp();for(var t=this._oKey=e.clone(),e=this._iKey=e.clone(),n=t.words,o=e.words,s=0;s<r;s++)n[s]^=1549556828,o[s]^=909522486;t.sigBytes=e.sigBytes=i,this.reset()},reset:function(){var t=this._hasher;t.reset(),t.update(this._iKey)},update:function(t){return this._hasher.update(t),this},finalize:function(t){var e=this._hasher,t=e.finalize(t);return e.reset(),e.finalize(this._oKey.clone().concat(t))}}),F=(w=U).lib,M=F.Base,v=F.WordArray,P=w.algo,F=P.SHA1,g=P.HMAC,y=P.PBKDF2=M.extend({cfg:M.extend({keySize:4,hasher:F,iterations:1}),init:function(t){this.cfg=this.cfg.extend(t)},compute:function(t,e){for(var r=this.cfg,i=g.create(r.hasher,t),n=v.create(),o=v.create([1]),s=n.words,c=o.words,a=r.keySize,h=r.iterations;s.length<a;){var l=i.update(e).finalize(o);i.reset();for(var f=l.words,d=f.length,u=l,p=1;p<h;p++){u=i.finalize(u),i.reset();for(var _=u.words,y=0;y<d;y++)f[y]^=_[y]}n.concat(l),c[0]++}return n.sigBytes=4*a,n}}),w.PBKDF2=function(t,e,r){return y.create(r).compute(t,e)},M=(P=U).lib,F=M.Base,B=M.WordArray,w=P.algo,M=w.MD5,k=w.EvpKDF=F.extend({cfg:F.extend({keySize:4,hasher:M,iterations:1}),init:function(t){this.cfg=this.cfg.extend(t)},compute:function(t,e){for(var r,i=this.cfg,n=i.hasher.create(),o=B.create(),s=o.words,c=i.keySize,a=i.iterations;s.length<c;){r&&n.update(r),r=n.update(t).finalize(e),n.reset();for(var h=1;h<a;h++)r=n.finalize(r),n.reset();o.concat(r)}return o.sigBytes=4*c,o}}),P.EvpKDF=function(t,e,r){return k.create(r).compute(t,e)},U.lib.Cipher||function(){var t=U,e=t.lib,r=e.Base,s=e.WordArray,i=e.BufferedBlockAlgorithm,n=t.enc,o=(n.Utf8,n.Base64),c=t.algo.EvpKDF,a=e.Cipher=i.extend({cfg:r.extend(),createEncryptor:function(t,e){return this.create(this._ENC_XFORM_MODE,t,e)},createDecryptor:function(t,e){return this.create(this._DEC_XFORM_MODE,t,e)},init:function(t,e,r){this.cfg=this.cfg.extend(r),this._xformMode=t,this._key=e,this.reset()},reset:function(){i.reset.call(this),this._doReset()},process:function(t){return this._append(t),this._process()},finalize:function(t){return t&&this._append(t),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(i){return{encrypt:function(t,e,r){return h(e).encrypt(i,t,e,r)},decrypt:function(t,e,r){return h(e).decrypt(i,t,e,r)}}}});function h(t){return"string"==typeof t?p:u}e.StreamCipher=a.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var l=t.mode={},n=e.BlockCipherMode=r.extend({createEncryptor:function(t,e){return this.Encryptor.create(t,e)},createDecryptor:function(t,e){return this.Decryptor.create(t,e)},init:function(t,e){this._cipher=t,this._iv=e}}),n=l.CBC=((l=n.extend()).Encryptor=l.extend({processBlock:function(t,e){var r=this._cipher,i=r.blockSize;f.call(this,t,e,i),r.encryptBlock(t,e),this._prevBlock=t.slice(e,e+i)}}),l.Decryptor=l.extend({processBlock:function(t,e){var r=this._cipher,i=r.blockSize,n=t.slice(e,e+i);r.decryptBlock(t,e),f.call(this,t,e,i),this._prevBlock=n}}),l);function f(t,e,r){var i,n=this._iv;n?(i=n,this._iv=void 0):i=this._prevBlock;for(var o=0;o<r;o++)t[e+o]^=i[o]}var l=(t.pad={}).Pkcs7={pad:function(t,e){for(var e=4*e,r=e-t.sigBytes%e,i=r<<24|r<<16|r<<8|r,n=[],o=0;o<r;o+=4)n.push(i);e=s.create(n,r);t.concat(e)},unpad:function(t){var e=255&t.words[t.sigBytes-1>>>2];t.sigBytes-=e}},d=(e.BlockCipher=a.extend({cfg:a.cfg.extend({mode:n,padding:l}),reset:function(){var t;a.reset.call(this);var e=this.cfg,r=e.iv,e=e.mode;this._xformMode==this._ENC_XFORM_MODE?t=e.createEncryptor:(t=e.createDecryptor,this._minBufferSize=1),this._mode&&this._mode.__creator==t?this._mode.init(this,r&&r.words):(this._mode=t.call(e,this,r&&r.words),this._mode.__creator=t)},_doProcessBlock:function(t,e){this._mode.processBlock(t,e)},_doFinalize:function(){var t,e=this.cfg.padding;return this._xformMode==this._ENC_XFORM_MODE?(e.pad(this._data,this.blockSize),t=this._process(!0)):(t=this._process(!0),e.unpad(t)),t},blockSize:4}),e.CipherParams=r.extend({init:function(t){this.mixIn(t)},toString:function(t){return(t||this.formatter).stringify(this)}})),l=(t.format={}).OpenSSL={stringify:function(t){var e=t.ciphertext,t=t.salt,e=t?s.create([1398893684,1701076831]).concat(t).concat(e):e;return e.toString(o)},parse:function(t){var e,r=o.parse(t),t=r.words;return 1398893684==t[0]&&1701076831==t[1]&&(e=s.create(t.slice(2,4)),t.splice(0,4),r.sigBytes-=16),d.create({ciphertext:r,salt:e})}},u=e.SerializableCipher=r.extend({cfg:r.extend({format:l}),encrypt:function(t,e,r,i){i=this.cfg.extend(i);var n=t.createEncryptor(r,i),e=n.finalize(e),n=n.cfg;return d.create({ciphertext:e,key:r,iv:n.iv,algorithm:t,mode:n.mode,padding:n.padding,blockSize:t.blockSize,formatter:i.format})},decrypt:function(t,e,r,i){return i=this.cfg.extend(i),e=this._parse(e,i.format),t.createDecryptor(r,i).finalize(e.ciphertext)},_parse:function(t,e){return"string"==typeof t?e.parse(t,this):t}}),t=(t.kdf={}).OpenSSL={execute:function(t,e,r,i){i=i||s.random(8);t=c.create({keySize:e+r}).compute(t,i),r=s.create(t.words.slice(e),4*r);return t.sigBytes=4*e,d.create({key:t,iv:r,salt:i})}},p=e.PasswordBasedCipher=u.extend({cfg:u.cfg.extend({kdf:t}),encrypt:function(t,e,r,i){r=(i=this.cfg.extend(i)).kdf.execute(r,t.keySize,t.ivSize);i.iv=r.iv;i=u.encrypt.call(this,t,e,r.key,i);return i.mixIn(r),i},decrypt:function(t,e,r,i){i=this.cfg.extend(i),e=this._parse(e,i.format);r=i.kdf.execute(r,t.keySize,t.ivSize,e.salt);return i.iv=r.iv,u.decrypt.call(this,t,e,r.key,i)}})}(),U.mode.CFB=((F=U.lib.BlockCipherMode.extend()).Encryptor=F.extend({processBlock:function(t,e){var r=this._cipher,i=r.blockSize;j.call(this,t,e,i,r),this._prevBlock=t.slice(e,e+i)}}),F.Decryptor=F.extend({processBlock:function(t,e){var r=this._cipher,i=r.blockSize,n=t.slice(e,e+i);j.call(this,t,e,i,r),this._prevBlock=n}}),F),U.mode.CTR=(M=U.lib.BlockCipherMode.extend(),P=M.Encryptor=M.extend({processBlock:function(t,e){var r=this._cipher,i=r.blockSize,n=this._iv,o=this._counter;n&&(o=this._counter=n.slice(0),this._iv=void 0);var s=o.slice(0);r.encryptBlock(s,0),o[i-1]=o[i-1]+1|0;for(var c=0;c<i;c++)t[e+c]^=s[c]}}),M.Decryptor=P,M),U.mode.CTRGladman=(F=U.lib.BlockCipherMode.extend(),P=F.Encryptor=F.extend({processBlock:function(t,e){var r=this._cipher,i=r.blockSize,n=this._iv,o=this._counter;n&&(o=this._counter=n.slice(0),this._iv=void 0),0===((n=o)[0]=T(n[0]))&&(n[1]=T(n[1]));var s=o.slice(0);r.encryptBlock(s,0);for(var c=0;c<i;c++)t[e+c]^=s[c]}}),F.Decryptor=P,F),U.mode.OFB=(M=U.lib.BlockCipherMode.extend(),P=M.Encryptor=M.extend({processBlock:function(t,e){var r=this._cipher,i=r.blockSize,n=this._iv,o=this._keystream;n&&(o=this._keystream=n.slice(0),this._iv=void 0),r.encryptBlock(o,0);for(var s=0;s<i;s++)t[e+s]^=o[s]}}),M.Decryptor=P,M),U.mode.ECB=((F=U.lib.BlockCipherMode.extend()).Encryptor=F.extend({processBlock:function(t,e){this._cipher.encryptBlock(t,e)}}),F.Decryptor=F.extend({processBlock:function(t,e){this._cipher.decryptBlock(t,e)}}),F),U.pad.AnsiX923={pad:function(t,e){var r=t.sigBytes,e=4*e,e=e-r%e,r=r+e-1;t.clamp(),t.words[r>>>2]|=e<<24-r%4*8,t.sigBytes+=e},unpad:function(t){var e=255&t.words[t.sigBytes-1>>>2];t.sigBytes-=e}},U.pad.Iso10126={pad:function(t,e){e*=4,e-=t.sigBytes%e;t.concat(U.lib.WordArray.random(e-1)).concat(U.lib.WordArray.create([e<<24],1))},unpad:function(t){var e=255&t.words[t.sigBytes-1>>>2];t.sigBytes-=e}},U.pad.Iso97971={pad:function(t,e){t.concat(U.lib.WordArray.create([2147483648],1)),U.pad.ZeroPadding.pad(t,e)},unpad:function(t){U.pad.ZeroPadding.unpad(t),t.sigBytes--}},U.pad.ZeroPadding={pad:function(t,e){e*=4;t.clamp(),t.sigBytes+=e-(t.sigBytes%e||e)},unpad:function(t){for(var e=t.words,r=t.sigBytes-1,r=t.sigBytes-1;0<=r;r--)if(e[r>>>2]>>>24-r%4*8&255){t.sigBytes=r+1;break}}},U.pad.NoPadding={pad:function(){},unpad:function(){}},m=(P=U).lib.CipherParams,C=P.enc.Hex,P.format.Hex={stringify:function(t){return t.ciphertext.toString(C)},parse:function(t){t=C.parse(t);return m.create({ciphertext:t})}},function(){var t=U,e=t.lib.BlockCipher,r=t.algo,h=[],l=[],f=[],d=[],u=[],p=[],_=[],y=[],v=[],g=[];!function(){for(var t=[],e=0;e<256;e++)t[e]=e<128?e<<1:e<<1^283;for(var r=0,i=0,e=0;e<256;e++){var n=i^i<<1^i<<2^i<<3^i<<4;h[r]=n=n>>>8^255&n^99;var o=t[l[n]=r],s=t[o],c=t[s],a=257*t[n]^16843008*n;f[r]=a<<24|a>>>8,d[r]=a<<16|a>>>16,u[r]=a<<8|a>>>24,p[r]=a,_[n]=(a=16843009*c^65537*s^257*o^16843008*r)<<24|a>>>8,y[n]=a<<16|a>>>16,v[n]=a<<8|a>>>24,g[n]=a,r?(r=o^t[t[t[c^o]]],i^=t[t[i]]):r=i=1}}();var B=[0,1,2,4,8,16,32,64,128,27,54],r=r.AES=e.extend({_doReset:function(){if(!this._nRounds||this._keyPriorReset!==this._key){for(var t=this._keyPriorReset=this._key,e=t.words,r=t.sigBytes/4,i=4*(1+(this._nRounds=6+r)),n=this._keySchedule=[],o=0;o<i;o++)o<r?n[o]=e[o]:(a=n[o-1],o%r?6<r&&o%r==4&&(a=h[a>>>24]<<24|h[a>>>16&255]<<16|h[a>>>8&255]<<8|h[255&a]):(a=h[(a=a<<8|a>>>24)>>>24]<<24|h[a>>>16&255]<<16|h[a>>>8&255]<<8|h[255&a],a^=B[o/r|0]<<24),n[o]=n[o-r]^a);for(var s=this._invKeySchedule=[],c=0;c<i;c++){var a,o=i-c;a=c%4?n[o]:n[o-4],s[c]=c<4||o<=4?a:_[h[a>>>24]]^y[h[a>>>16&255]]^v[h[a>>>8&255]]^g[h[255&a]]}}},encryptBlock:function(t,e){this._doCryptBlock(t,e,this._keySchedule,f,d,u,p,h)},decryptBlock:function(t,e){var r=t[e+1];t[e+1]=t[e+3],t[e+3]=r,this._doCryptBlock(t,e,this._invKeySchedule,_,y,v,g,l);r=t[e+1];t[e+1]=t[e+3],t[e+3]=r},_doCryptBlock:function(t,e,r,i,n,o,s,c){for(var a=this._nRounds,h=t[e]^r[0],l=t[e+1]^r[1],f=t[e+2]^r[2],d=t[e+3]^r[3],u=4,p=1;p<a;p++)var _=i[h>>>24]^n[l>>>16&255]^o[f>>>8&255]^s[255&d]^r[u++],y=i[l>>>24]^n[f>>>16&255]^o[d>>>8&255]^s[255&h]^r[u++],v=i[f>>>24]^n[d>>>16&255]^o[h>>>8&255]^s[255&l]^r[u++],g=i[d>>>24]^n[h>>>16&255]^o[l>>>8&255]^s[255&f]^r[u++],h=_,l=y,f=v,d=g;_=(c[h>>>24]<<24|c[l>>>16&255]<<16|c[f>>>8&255]<<8|c[255&d])^r[u++],y=(c[l>>>24]<<24|c[f>>>16&255]<<16|c[d>>>8&255]<<8|c[255&h])^r[u++],v=(c[f>>>24]<<24|c[d>>>16&255]<<16|c[h>>>8&255]<<8|c[255&l])^r[u++],g=(c[d>>>24]<<24|c[h>>>16&255]<<16|c[l>>>8&255]<<8|c[255&f])^r[u++];t[e]=_,t[e+1]=y,t[e+2]=v,t[e+3]=g},keySize:8});t.AES=e._createHelper(r)}(),function(){var t=U,e=t.lib,i=e.WordArray,r=e.BlockCipher,e=t.algo,h=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],l=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],f=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],d=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],u=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679],n=e.DES=r.extend({_doReset:function(){for(var t=this._key.words,e=[],r=0;r<56;r++){var i=h[r]-1;e[r]=t[i>>>5]>>>31-i%32&1}for(var n=this._subKeys=[],o=0;o<16;o++){for(var s=n[o]=[],c=f[o],r=0;r<24;r++)s[r/6|0]|=e[(l[r]-1+c)%28]<<31-r%6,s[4+(r/6|0)]|=e[28+(l[r+24]-1+c)%28]<<31-r%6;s[0]=s[0]<<1|s[0]>>>31;for(r=1;r<7;r++)s[r]=s[r]>>>4*(r-1)+3;s[7]=s[7]<<5|s[7]>>>27}for(var a=this._invSubKeys=[],r=0;r<16;r++)a[r]=n[15-r]},encryptBlock:function(t,e){this._doCryptBlock(t,e,this._subKeys)},decryptBlock:function(t,e){this._doCryptBlock(t,e,this._invSubKeys)},_doCryptBlock:function(t,e,r){this._lBlock=t[e],this._rBlock=t[e+1],p.call(this,4,252645135),p.call(this,16,65535),_.call(this,2,858993459),_.call(this,8,16711935),p.call(this,1,1431655765);for(var i=0;i<16;i++){for(var n=r[i],o=this._lBlock,s=this._rBlock,c=0,a=0;a<8;a++)c|=d[a][((s^n[a])&u[a])>>>0];this._lBlock=s,this._rBlock=o^c}var h=this._lBlock;this._lBlock=this._rBlock,this._rBlock=h,p.call(this,1,1431655765),_.call(this,8,16711935),_.call(this,2,858993459),p.call(this,16,65535),p.call(this,4,252645135),t[e]=this._lBlock,t[e+1]=this._rBlock},keySize:2,ivSize:2,blockSize:2});function p(t,e){e=(this._lBlock>>>t^this._rBlock)&e;this._rBlock^=e,this._lBlock^=e<<t}function _(t,e){e=(this._rBlock>>>t^this._lBlock)&e;this._lBlock^=e,this._rBlock^=e<<t}t.DES=r._createHelper(n);e=e.TripleDES=r.extend({_doReset:function(){var t=this._key.words;if(2!==t.length&&4!==t.length&&t.length<6)throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");var e=t.slice(0,2),r=t.length<4?t.slice(0,2):t.slice(2,4),t=t.length<6?t.slice(0,2):t.slice(4,6);this._des1=n.createEncryptor(i.create(e)),this._des2=n.createEncryptor(i.create(r)),this._des3=n.createEncryptor(i.create(t))},encryptBlock:function(t,e){this._des1.encryptBlock(t,e),this._des2.decryptBlock(t,e),this._des3.encryptBlock(t,e)},decryptBlock:function(t,e){this._des3.decryptBlock(t,e),this._des2.encryptBlock(t,e),this._des1.decryptBlock(t,e)},keySize:6,ivSize:2,blockSize:2});t.TripleDES=r._createHelper(e)}(),function(){var t=U,e=t.lib.StreamCipher,r=t.algo,i=r.RC4=e.extend({_doReset:function(){for(var t=this._key,e=t.words,r=t.sigBytes,i=this._S=[],n=0;n<256;n++)i[n]=n;for(var n=0,o=0;n<256;n++){var s=n%r,s=e[s>>>2]>>>24-s%4*8&255,o=(o+i[n]+s)%256,s=i[n];i[n]=i[o],i[o]=s}this._i=this._j=0},_doProcessBlock:function(t,e){t[e]^=n.call(this)},keySize:8,ivSize:0});function n(){for(var t=this._S,e=this._i,r=this._j,i=0,n=0;n<4;n++){var r=(r+t[e=(e+1)%256])%256,o=t[e];t[e]=t[r],t[r]=o,i|=t[(t[e]+t[r])%256]<<24-8*n}return this._i=e,this._j=r,i}t.RC4=e._createHelper(i);r=r.RC4Drop=i.extend({cfg:i.cfg.extend({drop:192}),_doReset:function(){i._doReset.call(this);for(var t=this.cfg.drop;0<t;t--)n.call(this)}});t.RC4Drop=e._createHelper(r)}(),F=(M=U).lib.StreamCipher,P=M.algo,D=[],E=[],R=[],P=P.Rabbit=F.extend({_doReset:function(){for(var t=this._key.words,e=this.cfg.iv,r=0;r<4;r++)t[r]=16711935&(t[r]<<8|t[r]>>>24)|4278255360&(t[r]<<24|t[r]>>>8);for(var i=this._X=[t[0],t[3]<<16|t[2]>>>16,t[1],t[0]<<16|t[3]>>>16,t[2],t[1]<<16|t[0]>>>16,t[3],t[2]<<16|t[1]>>>16],n=this._C=[t[2]<<16|t[2]>>>16,4294901760&t[0]|65535&t[1],t[3]<<16|t[3]>>>16,4294901760&t[1]|65535&t[2],t[0]<<16|t[0]>>>16,4294901760&t[2]|65535&t[3],t[1]<<16|t[1]>>>16,4294901760&t[3]|65535&t[0]],r=this._b=0;r<4;r++)N.call(this);for(r=0;r<8;r++)n[r]^=i[r+4&7];if(e){var o=e.words,s=o[0],c=o[1],e=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),o=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8),s=e>>>16|4294901760&o,c=o<<16|65535&e;n[0]^=e,n[1]^=s,n[2]^=o,n[3]^=c,n[4]^=e,n[5]^=s,n[6]^=o,n[7]^=c;for(r=0;r<4;r++)N.call(this)}},_doProcessBlock:function(t,e){var r=this._X;N.call(this),D[0]=r[0]^r[5]>>>16^r[3]<<16,D[1]=r[2]^r[7]>>>16^r[5]<<16,D[2]=r[4]^r[1]>>>16^r[7]<<16,D[3]=r[6]^r[3]>>>16^r[1]<<16;for(var i=0;i<4;i++)D[i]=16711935&(D[i]<<8|D[i]>>>24)|4278255360&(D[i]<<24|D[i]>>>8),t[e+i]^=D[i]},blockSize:4,ivSize:2}),M.Rabbit=F._createHelper(P),F=(M=U).lib.StreamCipher,P=M.algo,W=[],O=[],I=[],P=P.RabbitLegacy=F.extend({_doReset:function(){for(var t=this._key.words,e=this.cfg.iv,r=this._X=[t[0],t[3]<<16|t[2]>>>16,t[1],t[0]<<16|t[3]>>>16,t[2],t[1]<<16|t[0]>>>16,t[3],t[2]<<16|t[1]>>>16],i=this._C=[t[2]<<16|t[2]>>>16,4294901760&t[0]|65535&t[1],t[3]<<16|t[3]>>>16,4294901760&t[1]|65535&t[2],t[0]<<16|t[0]>>>16,4294901760&t[2]|65535&t[3],t[1]<<16|t[1]>>>16,4294901760&t[3]|65535&t[0]],n=this._b=0;n<4;n++)q.call(this);for(n=0;n<8;n++)i[n]^=r[n+4&7];if(e){var o=e.words,s=o[0],t=o[1],e=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),o=16711935&(t<<8|t>>>24)|4278255360&(t<<24|t>>>8),s=e>>>16|4294901760&o,t=o<<16|65535&e;i[0]^=e,i[1]^=s,i[2]^=o,i[3]^=t,i[4]^=e,i[5]^=s,i[6]^=o,i[7]^=t;for(n=0;n<4;n++)q.call(this)}},_doProcessBlock:function(t,e){var r=this._X;q.call(this),W[0]=r[0]^r[5]>>>16^r[3]<<16,W[1]=r[2]^r[7]>>>16^r[5]<<16,W[2]=r[4]^r[1]>>>16^r[7]<<16,W[3]=r[6]^r[3]>>>16^r[1]<<16;for(var i=0;i<4;i++)W[i]=16711935&(W[i]<<8|W[i]>>>24)|4278255360&(W[i]<<24|W[i]>>>8),t[e+i]^=W[i]},blockSize:4,ivSize:2}),M.RabbitLegacy=F._createHelper(P),U});

/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).jsyaml={})}(this,(function(e){"use strict";function t(e){return null==e}var n={isNothing:t,isObject:function(e){return"object"==typeof e&&null!==e},toArray:function(e){return Array.isArray(e)?e:t(e)?[]:[e]},repeat:function(e,t){var n,i="";for(n=0;n<t;n+=1)i+=e;return i},isNegativeZero:function(e){return 0===e&&Number.NEGATIVE_INFINITY===1/e},extend:function(e,t){var n,i,r,o;if(t)for(n=0,i=(o=Object.keys(t)).length;n<i;n+=1)e[r=o[n]]=t[r];return e}};function i(e,t){var n="",i=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(n+='in "'+e.mark.name+'" '),n+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(n+="\n\n"+e.mark.snippet),i+" "+n):i}function r(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=i(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack||""}r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r.prototype.toString=function(e){return this.name+": "+i(this,e)};var o=r;function a(e,t,n,i,r){var o="",a="",l=Math.floor(r/2)-1;return i-t>l&&(t=i-l+(o=" ... ").length),n-i>l&&(n=i+l-(a=" ...").length),{str:o+e.slice(t,n).replace(/\t/g,"→")+a,pos:i-t+o.length}}function l(e,t){return n.repeat(" ",t-e.length)+e}var c=function(e,t){if(t=Object.create(t||null),!e.buffer)return null;t.maxLength||(t.maxLength=79),"number"!=typeof t.indent&&(t.indent=1),"number"!=typeof t.linesBefore&&(t.linesBefore=3),"number"!=typeof t.linesAfter&&(t.linesAfter=2);for(var i,r=/\r?\n|\r|\0/g,o=[0],c=[],s=-1;i=r.exec(e.buffer);)c.push(i.index),o.push(i.index+i[0].length),e.position<=i.index&&s<0&&(s=o.length-2);s<0&&(s=o.length-1);var u,p,f="",d=Math.min(e.line+t.linesAfter,c.length).toString().length,h=t.maxLength-(t.indent+d+3);for(u=1;u<=t.linesBefore&&!(s-u<0);u++)p=a(e.buffer,o[s-u],c[s-u],e.position-(o[s]-o[s-u]),h),f=n.repeat(" ",t.indent)+l((e.line-u+1).toString(),d)+" | "+p.str+"\n"+f;for(p=a(e.buffer,o[s],c[s],e.position,h),f+=n.repeat(" ",t.indent)+l((e.line+1).toString(),d)+" | "+p.str+"\n",f+=n.repeat("-",t.indent+d+3+p.pos)+"^\n",u=1;u<=t.linesAfter&&!(s+u>=c.length);u++)p=a(e.buffer,o[s+u],c[s+u],e.position-(o[s]-o[s+u]),h),f+=n.repeat(" ",t.indent)+l((e.line+u+1).toString(),d)+" | "+p.str+"\n";return f.replace(/\n$/,"")},s=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],u=["scalar","sequence","mapping"];var p=function(e,t){if(t=t||{},Object.keys(t).forEach((function(t){if(-1===s.indexOf(t))throw new o('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')})),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(e){return e},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=function(e){var t={};return null!==e&&Object.keys(e).forEach((function(n){e[n].forEach((function(e){t[String(e)]=n}))})),t}(t.styleAliases||null),-1===u.indexOf(this.kind))throw new o('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')};function f(e,t){var n=[];return e[t].forEach((function(e){var t=n.length;n.forEach((function(n,i){n.tag===e.tag&&n.kind===e.kind&&n.multi===e.multi&&(t=i)})),n[t]=e})),n}function d(e){return this.extend(e)}d.prototype.extend=function(e){var t=[],n=[];if(e instanceof p)n.push(e);else if(Array.isArray(e))n=n.concat(e);else{if(!e||!Array.isArray(e.implicit)&&!Array.isArray(e.explicit))throw new o("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");e.implicit&&(t=t.concat(e.implicit)),e.explicit&&(n=n.concat(e.explicit))}t.forEach((function(e){if(!(e instanceof p))throw new o("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(e.loadKind&&"scalar"!==e.loadKind)throw new o("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(e.multi)throw new o("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")})),n.forEach((function(e){if(!(e instanceof p))throw new o("Specified list of YAML types (or a single Type object) contains a non-Type object.")}));var i=Object.create(d.prototype);return i.implicit=(this.implicit||[]).concat(t),i.explicit=(this.explicit||[]).concat(n),i.compiledImplicit=f(i,"implicit"),i.compiledExplicit=f(i,"explicit"),i.compiledTypeMap=function(){var e,t,n={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function i(e){e.multi?(n.multi[e.kind].push(e),n.multi.fallback.push(e)):n[e.kind][e.tag]=n.fallback[e.tag]=e}for(e=0,t=arguments.length;e<t;e+=1)arguments[e].forEach(i);return n}(i.compiledImplicit,i.compiledExplicit),i};var h=d,g=new p("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return null!==e?e:""}}),m=new p("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return null!==e?e:[]}}),y=new p("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return null!==e?e:{}}}),b=new h({explicit:[g,m,y]});var A=new p("tag:yaml.org,2002:null",{kind:"scalar",resolve:function(e){if(null===e)return!0;var t=e.length;return 1===t&&"~"===e||4===t&&("null"===e||"Null"===e||"NULL"===e)},construct:function(){return null},predicate:function(e){return null===e},represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});var v=new p("tag:yaml.org,2002:bool",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t=e.length;return 4===t&&("true"===e||"True"===e||"TRUE"===e)||5===t&&("false"===e||"False"===e||"FALSE"===e)},construct:function(e){return"true"===e||"True"===e||"TRUE"===e},predicate:function(e){return"[object Boolean]"===Object.prototype.toString.call(e)},represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function w(e){return 48<=e&&e<=55}function k(e){return 48<=e&&e<=57}var C=new p("tag:yaml.org,2002:int",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t,n,i=e.length,r=0,o=!1;if(!i)return!1;if("-"!==(t=e[r])&&"+"!==t||(t=e[++r]),"0"===t){if(r+1===i)return!0;if("b"===(t=e[++r])){for(r++;r<i;r++)if("_"!==(t=e[r])){if("0"!==t&&"1"!==t)return!1;o=!0}return o&&"_"!==t}if("x"===t){for(r++;r<i;r++)if("_"!==(t=e[r])){if(!(48<=(n=e.charCodeAt(r))&&n<=57||65<=n&&n<=70||97<=n&&n<=102))return!1;o=!0}return o&&"_"!==t}if("o"===t){for(r++;r<i;r++)if("_"!==(t=e[r])){if(!w(e.charCodeAt(r)))return!1;o=!0}return o&&"_"!==t}}if("_"===t)return!1;for(;r<i;r++)if("_"!==(t=e[r])){if(!k(e.charCodeAt(r)))return!1;o=!0}return!(!o||"_"===t)},construct:function(e){var t,n=e,i=1;if(-1!==n.indexOf("_")&&(n=n.replace(/_/g,"")),"-"!==(t=n[0])&&"+"!==t||("-"===t&&(i=-1),t=(n=n.slice(1))[0]),"0"===n)return 0;if("0"===t){if("b"===n[1])return i*parseInt(n.slice(2),2);if("x"===n[1])return i*parseInt(n.slice(2),16);if("o"===n[1])return i*parseInt(n.slice(2),8)}return i*parseInt(n,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&e%1==0&&!n.isNegativeZero(e)},represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),x=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");var I=/^[-+]?[0-9]+e/;var S=new p("tag:yaml.org,2002:float",{kind:"scalar",resolve:function(e){return null!==e&&!(!x.test(e)||"_"===e[e.length-1])},construct:function(e){var t,n;return n="-"===(t=e.replace(/_/g,"").toLowerCase())[0]?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),".inf"===t?1===n?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:".nan"===t?NaN:n*parseFloat(t,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&(e%1!=0||n.isNegativeZero(e))},represent:function(e,t){var i;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(n.isNegativeZero(e))return"-0.0";return i=e.toString(10),I.test(i)?i.replace("e",".e"):i},defaultStyle:"lowercase"}),O=b.extend({implicit:[A,v,C,S]}),j=O,T=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),N=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");var F=new p("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:function(e){return null!==e&&(null!==T.exec(e)||null!==N.exec(e))},construct:function(e){var t,n,i,r,o,a,l,c,s=0,u=null;if(null===(t=T.exec(e))&&(t=N.exec(e)),null===t)throw new Error("Date resolve error");if(n=+t[1],i=+t[2]-1,r=+t[3],!t[4])return new Date(Date.UTC(n,i,r));if(o=+t[4],a=+t[5],l=+t[6],t[7]){for(s=t[7].slice(0,3);s.length<3;)s+="0";s=+s}return t[9]&&(u=6e4*(60*+t[10]+ +(t[11]||0)),"-"===t[9]&&(u=-u)),c=new Date(Date.UTC(n,i,r,o,a,l,s)),u&&c.setTime(c.getTime()-u),c},instanceOf:Date,represent:function(e){return e.toISOString()}});var E=new p("tag:yaml.org,2002:merge",{kind:"scalar",resolve:function(e){return"<<"===e||null===e}}),M="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";var L=new p("tag:yaml.org,2002:binary",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t,n,i=0,r=e.length,o=M;for(n=0;n<r;n++)if(!((t=o.indexOf(e.charAt(n)))>64)){if(t<0)return!1;i+=6}return i%8==0},construct:function(e){var t,n,i=e.replace(/[\r\n=]/g,""),r=i.length,o=M,a=0,l=[];for(t=0;t<r;t++)t%4==0&&t&&(l.push(a>>16&255),l.push(a>>8&255),l.push(255&a)),a=a<<6|o.indexOf(i.charAt(t));return 0===(n=r%4*6)?(l.push(a>>16&255),l.push(a>>8&255),l.push(255&a)):18===n?(l.push(a>>10&255),l.push(a>>2&255)):12===n&&l.push(a>>4&255),new Uint8Array(l)},predicate:function(e){return"[object Uint8Array]"===Object.prototype.toString.call(e)},represent:function(e){var t,n,i="",r=0,o=e.length,a=M;for(t=0;t<o;t++)t%3==0&&t&&(i+=a[r>>18&63],i+=a[r>>12&63],i+=a[r>>6&63],i+=a[63&r]),r=(r<<8)+e[t];return 0===(n=o%3)?(i+=a[r>>18&63],i+=a[r>>12&63],i+=a[r>>6&63],i+=a[63&r]):2===n?(i+=a[r>>10&63],i+=a[r>>4&63],i+=a[r<<2&63],i+=a[64]):1===n&&(i+=a[r>>2&63],i+=a[r<<4&63],i+=a[64],i+=a[64]),i}}),_=Object.prototype.hasOwnProperty,D=Object.prototype.toString;var U=new p("tag:yaml.org,2002:omap",{kind:"sequence",resolve:function(e){if(null===e)return!0;var t,n,i,r,o,a=[],l=e;for(t=0,n=l.length;t<n;t+=1){if(i=l[t],o=!1,"[object Object]"!==D.call(i))return!1;for(r in i)if(_.call(i,r)){if(o)return!1;o=!0}if(!o)return!1;if(-1!==a.indexOf(r))return!1;a.push(r)}return!0},construct:function(e){return null!==e?e:[]}}),q=Object.prototype.toString;var Y=new p("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:function(e){if(null===e)return!0;var t,n,i,r,o,a=e;for(o=new Array(a.length),t=0,n=a.length;t<n;t+=1){if(i=a[t],"[object Object]"!==q.call(i))return!1;if(1!==(r=Object.keys(i)).length)return!1;o[t]=[r[0],i[r[0]]]}return!0},construct:function(e){if(null===e)return[];var t,n,i,r,o,a=e;for(o=new Array(a.length),t=0,n=a.length;t<n;t+=1)i=a[t],r=Object.keys(i),o[t]=[r[0],i[r[0]]];return o}}),R=Object.prototype.hasOwnProperty;var B=new p("tag:yaml.org,2002:set",{kind:"mapping",resolve:function(e){if(null===e)return!0;var t,n=e;for(t in n)if(R.call(n,t)&&null!==n[t])return!1;return!0},construct:function(e){return null!==e?e:{}}}),K=j.extend({implicit:[F,E],explicit:[L,U,Y,B]}),P=Object.prototype.hasOwnProperty,W=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,H=/[\x85\u2028\u2029]/,$=/[,\[\]\{\}]/,G=/^(?:!|!!|![a-z\-]+!)$/i,V=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function Z(e){return Object.prototype.toString.call(e)}function J(e){return 10===e||13===e}function Q(e){return 9===e||32===e}function z(e){return 9===e||32===e||10===e||13===e}function X(e){return 44===e||91===e||93===e||123===e||125===e}function ee(e){var t;return 48<=e&&e<=57?e-48:97<=(t=32|e)&&t<=102?t-97+10:-1}function te(e){return 48===e?"\0":97===e?"":98===e?"\b":116===e||9===e?"\t":110===e?"\n":118===e?"\v":102===e?"\f":114===e?"\r":101===e?"":32===e?" ":34===e?'"':47===e?"/":92===e?"\\":78===e?"":95===e?" ":76===e?"\u2028":80===e?"\u2029":""}function ne(e){return e<=65535?String.fromCharCode(e):String.fromCharCode(55296+(e-65536>>10),56320+(e-65536&1023))}for(var ie=new Array(256),re=new Array(256),oe=0;oe<256;oe++)ie[oe]=te(oe)?1:0,re[oe]=te(oe);function ae(e,t){this.input=e,this.filename=t.filename||null,this.schema=t.schema||K,this.onWarning=t.onWarning||null,this.legacy=t.legacy||!1,this.json=t.json||!1,this.listener=t.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function le(e,t){var n={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return n.snippet=c(n),new o(t,n)}function ce(e,t){throw le(e,t)}function se(e,t){e.onWarning&&e.onWarning.call(null,le(e,t))}var ue={YAML:function(e,t,n){var i,r,o;null!==e.version&&ce(e,"duplication of %YAML directive"),1!==n.length&&ce(e,"YAML directive accepts exactly one argument"),null===(i=/^([0-9]+)\.([0-9]+)$/.exec(n[0]))&&ce(e,"ill-formed argument of the YAML directive"),r=parseInt(i[1],10),o=parseInt(i[2],10),1!==r&&ce(e,"unacceptable YAML version of the document"),e.version=n[0],e.checkLineBreaks=o<2,1!==o&&2!==o&&se(e,"unsupported YAML version of the document")},TAG:function(e,t,n){var i,r;2!==n.length&&ce(e,"TAG directive accepts exactly two arguments"),i=n[0],r=n[1],G.test(i)||ce(e,"ill-formed tag handle (first argument) of the TAG directive"),P.call(e.tagMap,i)&&ce(e,'there is a previously declared suffix for "'+i+'" tag handle'),V.test(r)||ce(e,"ill-formed tag prefix (second argument) of the TAG directive");try{r=decodeURIComponent(r)}catch(t){ce(e,"tag prefix is malformed: "+r)}e.tagMap[i]=r}};function pe(e,t,n,i){var r,o,a,l;if(t<n){if(l=e.input.slice(t,n),i)for(r=0,o=l.length;r<o;r+=1)9===(a=l.charCodeAt(r))||32<=a&&a<=1114111||ce(e,"expected valid JSON character");else W.test(l)&&ce(e,"the stream contains non-printable characters");e.result+=l}}function fe(e,t,i,r){var o,a,l,c;for(n.isObject(i)||ce(e,"cannot merge mappings; the provided source object is unacceptable"),l=0,c=(o=Object.keys(i)).length;l<c;l+=1)a=o[l],P.call(t,a)||(t[a]=i[a],r[a]=!0)}function de(e,t,n,i,r,o,a,l,c){var s,u;if(Array.isArray(r))for(s=0,u=(r=Array.prototype.slice.call(r)).length;s<u;s+=1)Array.isArray(r[s])&&ce(e,"nested arrays are not supported inside keys"),"object"==typeof r&&"[object Object]"===Z(r[s])&&(r[s]="[object Object]");if("object"==typeof r&&"[object Object]"===Z(r)&&(r="[object Object]"),r=String(r),null===t&&(t={}),"tag:yaml.org,2002:merge"===i)if(Array.isArray(o))for(s=0,u=o.length;s<u;s+=1)fe(e,t,o[s],n);else fe(e,t,o,n);else e.json||P.call(n,r)||!P.call(t,r)||(e.line=a||e.line,e.lineStart=l||e.lineStart,e.position=c||e.position,ce(e,"duplicated mapping key")),"__proto__"===r?Object.defineProperty(t,r,{configurable:!0,enumerable:!0,writable:!0,value:o}):t[r]=o,delete n[r];return t}function he(e){var t;10===(t=e.input.charCodeAt(e.position))?e.position++:13===t?(e.position++,10===e.input.charCodeAt(e.position)&&e.position++):ce(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function ge(e,t,n){for(var i=0,r=e.input.charCodeAt(e.position);0!==r;){for(;Q(r);)9===r&&-1===e.firstTabInLine&&(e.firstTabInLine=e.position),r=e.input.charCodeAt(++e.position);if(t&&35===r)do{r=e.input.charCodeAt(++e.position)}while(10!==r&&13!==r&&0!==r);if(!J(r))break;for(he(e),r=e.input.charCodeAt(e.position),i++,e.lineIndent=0;32===r;)e.lineIndent++,r=e.input.charCodeAt(++e.position)}return-1!==n&&0!==i&&e.lineIndent<n&&se(e,"deficient indentation"),i}function me(e){var t,n=e.position;return!(45!==(t=e.input.charCodeAt(n))&&46!==t||t!==e.input.charCodeAt(n+1)||t!==e.input.charCodeAt(n+2)||(n+=3,0!==(t=e.input.charCodeAt(n))&&!z(t)))}function ye(e,t){1===t?e.result+=" ":t>1&&(e.result+=n.repeat("\n",t-1))}function be(e,t){var n,i,r=e.tag,o=e.anchor,a=[],l=!1;if(-1!==e.firstTabInLine)return!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=a),i=e.input.charCodeAt(e.position);0!==i&&(-1!==e.firstTabInLine&&(e.position=e.firstTabInLine,ce(e,"tab characters must not be used in indentation")),45===i)&&z(e.input.charCodeAt(e.position+1));)if(l=!0,e.position++,ge(e,!0,-1)&&e.lineIndent<=t)a.push(null),i=e.input.charCodeAt(e.position);else if(n=e.line,we(e,t,3,!1,!0),a.push(e.result),ge(e,!0,-1),i=e.input.charCodeAt(e.position),(e.line===n||e.lineIndent>t)&&0!==i)ce(e,"bad indentation of a sequence entry");else if(e.lineIndent<t)break;return!!l&&(e.tag=r,e.anchor=o,e.kind="sequence",e.result=a,!0)}function Ae(e){var t,n,i,r,o=!1,a=!1;if(33!==(r=e.input.charCodeAt(e.position)))return!1;if(null!==e.tag&&ce(e,"duplication of a tag property"),60===(r=e.input.charCodeAt(++e.position))?(o=!0,r=e.input.charCodeAt(++e.position)):33===r?(a=!0,n="!!",r=e.input.charCodeAt(++e.position)):n="!",t=e.position,o){do{r=e.input.charCodeAt(++e.position)}while(0!==r&&62!==r);e.position<e.length?(i=e.input.slice(t,e.position),r=e.input.charCodeAt(++e.position)):ce(e,"unexpected end of the stream within a verbatim tag")}else{for(;0!==r&&!z(r);)33===r&&(a?ce(e,"tag suffix cannot contain exclamation marks"):(n=e.input.slice(t-1,e.position+1),G.test(n)||ce(e,"named tag handle cannot contain such characters"),a=!0,t=e.position+1)),r=e.input.charCodeAt(++e.position);i=e.input.slice(t,e.position),$.test(i)&&ce(e,"tag suffix cannot contain flow indicator characters")}i&&!V.test(i)&&ce(e,"tag name cannot contain such characters: "+i);try{i=decodeURIComponent(i)}catch(t){ce(e,"tag name is malformed: "+i)}return o?e.tag=i:P.call(e.tagMap,n)?e.tag=e.tagMap[n]+i:"!"===n?e.tag="!"+i:"!!"===n?e.tag="tag:yaml.org,2002:"+i:ce(e,'undeclared tag handle "'+n+'"'),!0}function ve(e){var t,n;if(38!==(n=e.input.charCodeAt(e.position)))return!1;for(null!==e.anchor&&ce(e,"duplication of an anchor property"),n=e.input.charCodeAt(++e.position),t=e.position;0!==n&&!z(n)&&!X(n);)n=e.input.charCodeAt(++e.position);return e.position===t&&ce(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(t,e.position),!0}function we(e,t,i,r,o){var a,l,c,s,u,p,f,d,h,g=1,m=!1,y=!1;if(null!==e.listener&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,a=l=c=4===i||3===i,r&&ge(e,!0,-1)&&(m=!0,e.lineIndent>t?g=1:e.lineIndent===t?g=0:e.lineIndent<t&&(g=-1)),1===g)for(;Ae(e)||ve(e);)ge(e,!0,-1)?(m=!0,c=a,e.lineIndent>t?g=1:e.lineIndent===t?g=0:e.lineIndent<t&&(g=-1)):c=!1;if(c&&(c=m||o),1!==g&&4!==i||(d=1===i||2===i?t:t+1,h=e.position-e.lineStart,1===g?c&&(be(e,h)||function(e,t,n){var i,r,o,a,l,c,s,u=e.tag,p=e.anchor,f={},d=Object.create(null),h=null,g=null,m=null,y=!1,b=!1;if(-1!==e.firstTabInLine)return!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=f),s=e.input.charCodeAt(e.position);0!==s;){if(y||-1===e.firstTabInLine||(e.position=e.firstTabInLine,ce(e,"tab characters must not be used in indentation")),i=e.input.charCodeAt(e.position+1),o=e.line,63!==s&&58!==s||!z(i)){if(a=e.line,l=e.lineStart,c=e.position,!we(e,n,2,!1,!0))break;if(e.line===o){for(s=e.input.charCodeAt(e.position);Q(s);)s=e.input.charCodeAt(++e.position);if(58===s)z(s=e.input.charCodeAt(++e.position))||ce(e,"a whitespace character is expected after the key-value separator within a block mapping"),y&&(de(e,f,d,h,g,null,a,l,c),h=g=m=null),b=!0,y=!1,r=!1,h=e.tag,g=e.result;else{if(!b)return e.tag=u,e.anchor=p,!0;ce(e,"can not read an implicit mapping pair; a colon is missed")}}else{if(!b)return e.tag=u,e.anchor=p,!0;ce(e,"can not read a block mapping entry; a multiline key may not be an implicit key")}}else 63===s?(y&&(de(e,f,d,h,g,null,a,l,c),h=g=m=null),b=!0,y=!0,r=!0):y?(y=!1,r=!0):ce(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,s=i;if((e.line===o||e.lineIndent>t)&&(y&&(a=e.line,l=e.lineStart,c=e.position),we(e,t,4,!0,r)&&(y?g=e.result:m=e.result),y||(de(e,f,d,h,g,m,a,l,c),h=g=m=null),ge(e,!0,-1),s=e.input.charCodeAt(e.position)),(e.line===o||e.lineIndent>t)&&0!==s)ce(e,"bad indentation of a mapping entry");else if(e.lineIndent<t)break}return y&&de(e,f,d,h,g,null,a,l,c),b&&(e.tag=u,e.anchor=p,e.kind="mapping",e.result=f),b}(e,h,d))||function(e,t){var n,i,r,o,a,l,c,s,u,p,f,d,h=!0,g=e.tag,m=e.anchor,y=Object.create(null);if(91===(d=e.input.charCodeAt(e.position)))a=93,s=!1,o=[];else{if(123!==d)return!1;a=125,s=!0,o={}}for(null!==e.anchor&&(e.anchorMap[e.anchor]=o),d=e.input.charCodeAt(++e.position);0!==d;){if(ge(e,!0,t),(d=e.input.charCodeAt(e.position))===a)return e.position++,e.tag=g,e.anchor=m,e.kind=s?"mapping":"sequence",e.result=o,!0;h?44===d&&ce(e,"expected the node content, but found ','"):ce(e,"missed comma between flow collection entries"),f=null,l=c=!1,63===d&&z(e.input.charCodeAt(e.position+1))&&(l=c=!0,e.position++,ge(e,!0,t)),n=e.line,i=e.lineStart,r=e.position,we(e,t,1,!1,!0),p=e.tag,u=e.result,ge(e,!0,t),d=e.input.charCodeAt(e.position),!c&&e.line!==n||58!==d||(l=!0,d=e.input.charCodeAt(++e.position),ge(e,!0,t),we(e,t,1,!1,!0),f=e.result),s?de(e,o,y,p,u,f,n,i,r):l?o.push(de(e,null,y,p,u,f,n,i,r)):o.push(u),ge(e,!0,t),44===(d=e.input.charCodeAt(e.position))?(h=!0,d=e.input.charCodeAt(++e.position)):h=!1}ce(e,"unexpected end of the stream within a flow collection")}(e,d)?y=!0:(l&&function(e,t){var i,r,o,a,l,c=1,s=!1,u=!1,p=t,f=0,d=!1;if(124===(a=e.input.charCodeAt(e.position)))r=!1;else{if(62!==a)return!1;r=!0}for(e.kind="scalar",e.result="";0!==a;)if(43===(a=e.input.charCodeAt(++e.position))||45===a)1===c?c=43===a?3:2:ce(e,"repeat of a chomping mode identifier");else{if(!((o=48<=(l=a)&&l<=57?l-48:-1)>=0))break;0===o?ce(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):u?ce(e,"repeat of an indentation width identifier"):(p=t+o-1,u=!0)}if(Q(a)){do{a=e.input.charCodeAt(++e.position)}while(Q(a));if(35===a)do{a=e.input.charCodeAt(++e.position)}while(!J(a)&&0!==a)}for(;0!==a;){for(he(e),e.lineIndent=0,a=e.input.charCodeAt(e.position);(!u||e.lineIndent<p)&&32===a;)e.lineIndent++,a=e.input.charCodeAt(++e.position);if(!u&&e.lineIndent>p&&(p=e.lineIndent),J(a))f++;else{if(e.lineIndent<p){3===c?e.result+=n.repeat("\n",s?1+f:f):1===c&&s&&(e.result+="\n");break}for(r?Q(a)?(d=!0,e.result+=n.repeat("\n",s?1+f:f)):d?(d=!1,e.result+=n.repeat("\n",f+1)):0===f?s&&(e.result+=" "):e.result+=n.repeat("\n",f):e.result+=n.repeat("\n",s?1+f:f),s=!0,u=!0,f=0,i=e.position;!J(a)&&0!==a;)a=e.input.charCodeAt(++e.position);pe(e,i,e.position,!1)}}return!0}(e,d)||function(e,t){var n,i,r;if(39!==(n=e.input.charCodeAt(e.position)))return!1;for(e.kind="scalar",e.result="",e.position++,i=r=e.position;0!==(n=e.input.charCodeAt(e.position));)if(39===n){if(pe(e,i,e.position,!0),39!==(n=e.input.charCodeAt(++e.position)))return!0;i=e.position,e.position++,r=e.position}else J(n)?(pe(e,i,r,!0),ye(e,ge(e,!1,t)),i=r=e.position):e.position===e.lineStart&&me(e)?ce(e,"unexpected end of the document within a single quoted scalar"):(e.position++,r=e.position);ce(e,"unexpected end of the stream within a single quoted scalar")}(e,d)||function(e,t){var n,i,r,o,a,l,c;if(34!==(l=e.input.charCodeAt(e.position)))return!1;for(e.kind="scalar",e.result="",e.position++,n=i=e.position;0!==(l=e.input.charCodeAt(e.position));){if(34===l)return pe(e,n,e.position,!0),e.position++,!0;if(92===l){if(pe(e,n,e.position,!0),J(l=e.input.charCodeAt(++e.position)))ge(e,!1,t);else if(l<256&&ie[l])e.result+=re[l],e.position++;else if((a=120===(c=l)?2:117===c?4:85===c?8:0)>0){for(r=a,o=0;r>0;r--)(a=ee(l=e.input.charCodeAt(++e.position)))>=0?o=(o<<4)+a:ce(e,"expected hexadecimal character");e.result+=ne(o),e.position++}else ce(e,"unknown escape sequence");n=i=e.position}else J(l)?(pe(e,n,i,!0),ye(e,ge(e,!1,t)),n=i=e.position):e.position===e.lineStart&&me(e)?ce(e,"unexpected end of the document within a double quoted scalar"):(e.position++,i=e.position)}ce(e,"unexpected end of the stream within a double quoted scalar")}(e,d)?y=!0:!function(e){var t,n,i;if(42!==(i=e.input.charCodeAt(e.position)))return!1;for(i=e.input.charCodeAt(++e.position),t=e.position;0!==i&&!z(i)&&!X(i);)i=e.input.charCodeAt(++e.position);return e.position===t&&ce(e,"name of an alias node must contain at least one character"),n=e.input.slice(t,e.position),P.call(e.anchorMap,n)||ce(e,'unidentified alias "'+n+'"'),e.result=e.anchorMap[n],ge(e,!0,-1),!0}(e)?function(e,t,n){var i,r,o,a,l,c,s,u,p=e.kind,f=e.result;if(z(u=e.input.charCodeAt(e.position))||X(u)||35===u||38===u||42===u||33===u||124===u||62===u||39===u||34===u||37===u||64===u||96===u)return!1;if((63===u||45===u)&&(z(i=e.input.charCodeAt(e.position+1))||n&&X(i)))return!1;for(e.kind="scalar",e.result="",r=o=e.position,a=!1;0!==u;){if(58===u){if(z(i=e.input.charCodeAt(e.position+1))||n&&X(i))break}else if(35===u){if(z(e.input.charCodeAt(e.position-1)))break}else{if(e.position===e.lineStart&&me(e)||n&&X(u))break;if(J(u)){if(l=e.line,c=e.lineStart,s=e.lineIndent,ge(e,!1,-1),e.lineIndent>=t){a=!0,u=e.input.charCodeAt(e.position);continue}e.position=o,e.line=l,e.lineStart=c,e.lineIndent=s;break}}a&&(pe(e,r,o,!1),ye(e,e.line-l),r=o=e.position,a=!1),Q(u)||(o=e.position+1),u=e.input.charCodeAt(++e.position)}return pe(e,r,o,!1),!!e.result||(e.kind=p,e.result=f,!1)}(e,d,1===i)&&(y=!0,null===e.tag&&(e.tag="?")):(y=!0,null===e.tag&&null===e.anchor||ce(e,"alias node should not have any properties")),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):0===g&&(y=c&&be(e,h))),null===e.tag)null!==e.anchor&&(e.anchorMap[e.anchor]=e.result);else if("?"===e.tag){for(null!==e.result&&"scalar"!==e.kind&&ce(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),s=0,u=e.implicitTypes.length;s<u;s+=1)if((f=e.implicitTypes[s]).resolve(e.result)){e.result=f.construct(e.result),e.tag=f.tag,null!==e.anchor&&(e.anchorMap[e.anchor]=e.result);break}}else if("!"!==e.tag){if(P.call(e.typeMap[e.kind||"fallback"],e.tag))f=e.typeMap[e.kind||"fallback"][e.tag];else for(f=null,s=0,u=(p=e.typeMap.multi[e.kind||"fallback"]).length;s<u;s+=1)if(e.tag.slice(0,p[s].tag.length)===p[s].tag){f=p[s];break}f||ce(e,"unknown tag !<"+e.tag+">"),null!==e.result&&f.kind!==e.kind&&ce(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+f.kind+'", not "'+e.kind+'"'),f.resolve(e.result,e.tag)?(e.result=f.construct(e.result,e.tag),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):ce(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return null!==e.listener&&e.listener("close",e),null!==e.tag||null!==e.anchor||y}function ke(e){var t,n,i,r,o=e.position,a=!1;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);0!==(r=e.input.charCodeAt(e.position))&&(ge(e,!0,-1),r=e.input.charCodeAt(e.position),!(e.lineIndent>0||37!==r));){for(a=!0,r=e.input.charCodeAt(++e.position),t=e.position;0!==r&&!z(r);)r=e.input.charCodeAt(++e.position);for(i=[],(n=e.input.slice(t,e.position)).length<1&&ce(e,"directive name must not be less than one character in length");0!==r;){for(;Q(r);)r=e.input.charCodeAt(++e.position);if(35===r){do{r=e.input.charCodeAt(++e.position)}while(0!==r&&!J(r));break}if(J(r))break;for(t=e.position;0!==r&&!z(r);)r=e.input.charCodeAt(++e.position);i.push(e.input.slice(t,e.position))}0!==r&&he(e),P.call(ue,n)?ue[n](e,n,i):se(e,'unknown document directive "'+n+'"')}ge(e,!0,-1),0===e.lineIndent&&45===e.input.charCodeAt(e.position)&&45===e.input.charCodeAt(e.position+1)&&45===e.input.charCodeAt(e.position+2)?(e.position+=3,ge(e,!0,-1)):a&&ce(e,"directives end mark is expected"),we(e,e.lineIndent-1,4,!1,!0),ge(e,!0,-1),e.checkLineBreaks&&H.test(e.input.slice(o,e.position))&&se(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&me(e)?46===e.input.charCodeAt(e.position)&&(e.position+=3,ge(e,!0,-1)):e.position<e.length-1&&ce(e,"end of the stream or a document separator is expected")}function Ce(e,t){t=t||{},0!==(e=String(e)).length&&(10!==e.charCodeAt(e.length-1)&&13!==e.charCodeAt(e.length-1)&&(e+="\n"),65279===e.charCodeAt(0)&&(e=e.slice(1)));var n=new ae(e,t),i=e.indexOf("\0");for(-1!==i&&(n.position=i,ce(n,"null byte is not allowed in input")),n.input+="\0";32===n.input.charCodeAt(n.position);)n.lineIndent+=1,n.position+=1;for(;n.position<n.length-1;)ke(n);return n.documents}var xe={loadAll:function(e,t,n){null!==t&&"object"==typeof t&&void 0===n&&(n=t,t=null);var i=Ce(e,n);if("function"!=typeof t)return i;for(var r=0,o=i.length;r<o;r+=1)t(i[r])},load:function(e,t){var n=Ce(e,t);if(0!==n.length){if(1===n.length)return n[0];throw new o("expected a single document in the stream, but found more")}}},Ie=Object.prototype.toString,Se=Object.prototype.hasOwnProperty,Oe=65279,je={0:"\\0",7:"\\a",8:"\\b",9:"\\t",10:"\\n",11:"\\v",12:"\\f",13:"\\r",27:"\\e",34:'\\"',92:"\\\\",133:"\\N",160:"\\_",8232:"\\L",8233:"\\P"},Te=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],Ne=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function Fe(e){var t,i,r;if(t=e.toString(16).toUpperCase(),e<=255)i="x",r=2;else if(e<=65535)i="u",r=4;else{if(!(e<=4294967295))throw new o("code point within a string may not be greater than 0xFFFFFFFF");i="U",r=8}return"\\"+i+n.repeat("0",r-t.length)+t}function Ee(e){this.schema=e.schema||K,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=n.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=function(e,t){var n,i,r,o,a,l,c;if(null===t)return{};for(n={},r=0,o=(i=Object.keys(t)).length;r<o;r+=1)a=i[r],l=String(t[a]),"!!"===a.slice(0,2)&&(a="tag:yaml.org,2002:"+a.slice(2)),(c=e.compiledTypeMap.fallback[a])&&Se.call(c.styleAliases,l)&&(l=c.styleAliases[l]),n[a]=l;return n}(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType='"'===e.quotingType?2:1,this.forceQuotes=e.forceQuotes||!1,this.replacer="function"==typeof e.replacer?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Me(e,t){for(var i,r=n.repeat(" ",t),o=0,a=-1,l="",c=e.length;o<c;)-1===(a=e.indexOf("\n",o))?(i=e.slice(o),o=c):(i=e.slice(o,a+1),o=a+1),i.length&&"\n"!==i&&(l+=r),l+=i;return l}function Le(e,t){return"\n"+n.repeat(" ",e.indent*t)}function _e(e){return 32===e||9===e}function De(e){return 32<=e&&e<=126||161<=e&&e<=55295&&8232!==e&&8233!==e||57344<=e&&e<=65533&&e!==Oe||65536<=e&&e<=1114111}function Ue(e){return De(e)&&e!==Oe&&13!==e&&10!==e}function qe(e,t,n){var i=Ue(e),r=i&&!_e(e);return(n?i:i&&44!==e&&91!==e&&93!==e&&123!==e&&125!==e)&&35!==e&&!(58===t&&!r)||Ue(t)&&!_e(t)&&35===e||58===t&&r}function Ye(e,t){var n,i=e.charCodeAt(t);return i>=55296&&i<=56319&&t+1<e.length&&(n=e.charCodeAt(t+1))>=56320&&n<=57343?1024*(i-55296)+n-56320+65536:i}function Re(e){return/^\n* /.test(e)}function Be(e,t,n,i,r,o,a,l){var c,s,u=0,p=null,f=!1,d=!1,h=-1!==i,g=-1,m=De(s=Ye(e,0))&&s!==Oe&&!_e(s)&&45!==s&&63!==s&&58!==s&&44!==s&&91!==s&&93!==s&&123!==s&&125!==s&&35!==s&&38!==s&&42!==s&&33!==s&&124!==s&&61!==s&&62!==s&&39!==s&&34!==s&&37!==s&&64!==s&&96!==s&&function(e){return!_e(e)&&58!==e}(Ye(e,e.length-1));if(t||a)for(c=0;c<e.length;u>=65536?c+=2:c++){if(!De(u=Ye(e,c)))return 5;m=m&&qe(u,p,l),p=u}else{for(c=0;c<e.length;u>=65536?c+=2:c++){if(10===(u=Ye(e,c)))f=!0,h&&(d=d||c-g-1>i&&" "!==e[g+1],g=c);else if(!De(u))return 5;m=m&&qe(u,p,l),p=u}d=d||h&&c-g-1>i&&" "!==e[g+1]}return f||d?n>9&&Re(e)?5:a?2===o?5:2:d?4:3:!m||a||r(e)?2===o?5:2:1}function Ke(e,t,n,i,r){e.dump=function(){if(0===t.length)return 2===e.quotingType?'""':"''";if(!e.noCompatMode&&(-1!==Te.indexOf(t)||Ne.test(t)))return 2===e.quotingType?'"'+t+'"':"'"+t+"'";var a=e.indent*Math.max(1,n),l=-1===e.lineWidth?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-a),c=i||e.flowLevel>-1&&n>=e.flowLevel;switch(Be(t,c,e.indent,l,(function(t){return function(e,t){var n,i;for(n=0,i=e.implicitTypes.length;n<i;n+=1)if(e.implicitTypes[n].resolve(t))return!0;return!1}(e,t)}),e.quotingType,e.forceQuotes&&!i,r)){case 1:return t;case 2:return"'"+t.replace(/'/g,"''")+"'";case 3:return"|"+Pe(t,e.indent)+We(Me(t,a));case 4:return">"+Pe(t,e.indent)+We(Me(function(e,t){var n,i,r=/(\n+)([^\n]*)/g,o=(l=e.indexOf("\n"),l=-1!==l?l:e.length,r.lastIndex=l,He(e.slice(0,l),t)),a="\n"===e[0]||" "===e[0];var l;for(;i=r.exec(e);){var c=i[1],s=i[2];n=" "===s[0],o+=c+(a||n||""===s?"":"\n")+He(s,t),a=n}return o}(t,l),a));case 5:return'"'+function(e){for(var t,n="",i=0,r=0;r<e.length;i>=65536?r+=2:r++)i=Ye(e,r),!(t=je[i])&&De(i)?(n+=e[r],i>=65536&&(n+=e[r+1])):n+=t||Fe(i);return n}(t)+'"';default:throw new o("impossible error: invalid scalar style")}}()}function Pe(e,t){var n=Re(e)?String(t):"",i="\n"===e[e.length-1];return n+(i&&("\n"===e[e.length-2]||"\n"===e)?"+":i?"":"-")+"\n"}function We(e){return"\n"===e[e.length-1]?e.slice(0,-1):e}function He(e,t){if(""===e||" "===e[0])return e;for(var n,i,r=/ [^ ]/g,o=0,a=0,l=0,c="";n=r.exec(e);)(l=n.index)-o>t&&(i=a>o?a:l,c+="\n"+e.slice(o,i),o=i+1),a=l;return c+="\n",e.length-o>t&&a>o?c+=e.slice(o,a)+"\n"+e.slice(a+1):c+=e.slice(o),c.slice(1)}function $e(e,t,n,i){var r,o,a,l="",c=e.tag;for(r=0,o=n.length;r<o;r+=1)a=n[r],e.replacer&&(a=e.replacer.call(n,String(r),a)),(Ve(e,t+1,a,!0,!0,!1,!0)||void 0===a&&Ve(e,t+1,null,!0,!0,!1,!0))&&(i&&""===l||(l+=Le(e,t)),e.dump&&10===e.dump.charCodeAt(0)?l+="-":l+="- ",l+=e.dump);e.tag=c,e.dump=l||"[]"}function Ge(e,t,n){var i,r,a,l,c,s;for(a=0,l=(r=n?e.explicitTypes:e.implicitTypes).length;a<l;a+=1)if(((c=r[a]).instanceOf||c.predicate)&&(!c.instanceOf||"object"==typeof t&&t instanceof c.instanceOf)&&(!c.predicate||c.predicate(t))){if(n?c.multi&&c.representName?e.tag=c.representName(t):e.tag=c.tag:e.tag="?",c.represent){if(s=e.styleMap[c.tag]||c.defaultStyle,"[object Function]"===Ie.call(c.represent))i=c.represent(t,s);else{if(!Se.call(c.represent,s))throw new o("!<"+c.tag+'> tag resolver accepts not "'+s+'" style');i=c.represent[s](t,s)}e.dump=i}return!0}return!1}function Ve(e,t,n,i,r,a,l){e.tag=null,e.dump=n,Ge(e,n,!1)||Ge(e,n,!0);var c,s=Ie.call(e.dump),u=i;i&&(i=e.flowLevel<0||e.flowLevel>t);var p,f,d="[object Object]"===s||"[object Array]"===s;if(d&&(f=-1!==(p=e.duplicates.indexOf(n))),(null!==e.tag&&"?"!==e.tag||f||2!==e.indent&&t>0)&&(r=!1),f&&e.usedDuplicates[p])e.dump="*ref_"+p;else{if(d&&f&&!e.usedDuplicates[p]&&(e.usedDuplicates[p]=!0),"[object Object]"===s)i&&0!==Object.keys(e.dump).length?(!function(e,t,n,i){var r,a,l,c,s,u,p="",f=e.tag,d=Object.keys(n);if(!0===e.sortKeys)d.sort();else if("function"==typeof e.sortKeys)d.sort(e.sortKeys);else if(e.sortKeys)throw new o("sortKeys must be a boolean or a function");for(r=0,a=d.length;r<a;r+=1)u="",i&&""===p||(u+=Le(e,t)),c=n[l=d[r]],e.replacer&&(c=e.replacer.call(n,l,c)),Ve(e,t+1,l,!0,!0,!0)&&((s=null!==e.tag&&"?"!==e.tag||e.dump&&e.dump.length>1024)&&(e.dump&&10===e.dump.charCodeAt(0)?u+="?":u+="? "),u+=e.dump,s&&(u+=Le(e,t)),Ve(e,t+1,c,!0,s)&&(e.dump&&10===e.dump.charCodeAt(0)?u+=":":u+=": ",p+=u+=e.dump));e.tag=f,e.dump=p||"{}"}(e,t,e.dump,r),f&&(e.dump="&ref_"+p+e.dump)):(!function(e,t,n){var i,r,o,a,l,c="",s=e.tag,u=Object.keys(n);for(i=0,r=u.length;i<r;i+=1)l="",""!==c&&(l+=", "),e.condenseFlow&&(l+='"'),a=n[o=u[i]],e.replacer&&(a=e.replacer.call(n,o,a)),Ve(e,t,o,!1,!1)&&(e.dump.length>1024&&(l+="? "),l+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),Ve(e,t,a,!1,!1)&&(c+=l+=e.dump));e.tag=s,e.dump="{"+c+"}"}(e,t,e.dump),f&&(e.dump="&ref_"+p+" "+e.dump));else if("[object Array]"===s)i&&0!==e.dump.length?(e.noArrayIndent&&!l&&t>0?$e(e,t-1,e.dump,r):$e(e,t,e.dump,r),f&&(e.dump="&ref_"+p+e.dump)):(!function(e,t,n){var i,r,o,a="",l=e.tag;for(i=0,r=n.length;i<r;i+=1)o=n[i],e.replacer&&(o=e.replacer.call(n,String(i),o)),(Ve(e,t,o,!1,!1)||void 0===o&&Ve(e,t,null,!1,!1))&&(""!==a&&(a+=","+(e.condenseFlow?"":" ")),a+=e.dump);e.tag=l,e.dump="["+a+"]"}(e,t,e.dump),f&&(e.dump="&ref_"+p+" "+e.dump));else{if("[object String]"!==s){if("[object Undefined]"===s)return!1;if(e.skipInvalid)return!1;throw new o("unacceptable kind of an object to dump "+s)}"?"!==e.tag&&Ke(e,e.dump,t,a,u)}null!==e.tag&&"?"!==e.tag&&(c=encodeURI("!"===e.tag[0]?e.tag.slice(1):e.tag).replace(/!/g,"%21"),c="!"===e.tag[0]?"!"+c:"tag:yaml.org,2002:"===c.slice(0,18)?"!!"+c.slice(18):"!<"+c+">",e.dump=c+" "+e.dump)}return!0}function Ze(e,t){var n,i,r=[],o=[];for(Je(e,r,o),n=0,i=o.length;n<i;n+=1)t.duplicates.push(r[o[n]]);t.usedDuplicates=new Array(i)}function Je(e,t,n){var i,r,o;if(null!==e&&"object"==typeof e)if(-1!==(r=t.indexOf(e)))-1===n.indexOf(r)&&n.push(r);else if(t.push(e),Array.isArray(e))for(r=0,o=e.length;r<o;r+=1)Je(e[r],t,n);else for(r=0,o=(i=Object.keys(e)).length;r<o;r+=1)Je(e[i[r]],t,n)}function Qe(e,t){return function(){throw new Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+t+" instead, which is now safe by default.")}}var ze=p,Xe=h,et=b,tt=O,nt=j,it=K,rt=xe.load,ot=xe.loadAll,at={dump:function(e,t){var n=new Ee(t=t||{});n.noRefs||Ze(e,n);var i=e;return n.replacer&&(i=n.replacer.call({"":i},"",i)),Ve(n,0,i,!0,!0)?n.dump+"\n":""}}.dump,lt=o,ct={binary:L,float:S,map:y,null:A,pairs:Y,set:B,timestamp:F,bool:v,int:C,merge:E,omap:U,seq:m,str:g},st=Qe("safeLoad","load"),ut=Qe("safeLoadAll","loadAll"),pt=Qe("safeDump","dump"),ft={Type:ze,Schema:Xe,FAILSAFE_SCHEMA:et,JSON_SCHEMA:tt,CORE_SCHEMA:nt,DEFAULT_SCHEMA:it,load:rt,loadAll:ot,dump:at,YAMLException:lt,types:ct,safeLoad:st,safeLoadAll:ut,safeDump:pt};e.CORE_SCHEMA=nt,e.DEFAULT_SCHEMA=it,e.FAILSAFE_SCHEMA=et,e.JSON_SCHEMA=tt,e.Schema=Xe,e.Type=ze,e.YAMLException=lt,e.default=ft,e.dump=at,e.load=rt,e.loadAll=ot,e.safeDump=pt,e.safeLoad=st,e.safeLoadAll=ut,e.types=ct,Object.defineProperty(e,"__esModule",{value:!0})}));

var LZString=function(){var r=String.fromCharCode,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",e={};function t(r,o){if(!e[r]){e[r]={};for(var n=0;n<r.length;n++)e[r][r.charAt(n)]=n}return e[r][o]}var i={compressToBase64:function(r){if(null==r)return"";var n=i._compress(r,6,function(r){return o.charAt(r)});switch(n.length%4){default:case 0:return n;case 1:return n+"===";case 2:return n+"==";case 3:return n+"="}},decompressFromBase64:function(r){return null==r?"":""==r?null:i._decompress(r.length,32,function(n){return t(o,r.charAt(n))})},compressToUTF16:function(o){return null==o?"":i._compress(o,15,function(o){return r(o+32)})+" "},decompressFromUTF16:function(r){return null==r?"":""==r?null:i._decompress(r.length,16384,function(o){return r.charCodeAt(o)-32})},compressToUint8Array:function(r){for(var o=i.compress(r),n=new Uint8Array(2*o.length),e=0,t=o.length;e<t;e++){var s=o.charCodeAt(e);n[2*e]=s>>>8,n[2*e+1]=s%256}return n},decompressFromUint8Array:function(o){if(null==o)return i.decompress(o);for(var n=new Array(o.length/2),e=0,t=n.length;e<t;e++)n[e]=256*o[2*e]+o[2*e+1];var s=[];return n.forEach(function(o){s.push(r(o))}),i.decompress(s.join(""))},compressToEncodedURIComponent:function(r){return null==r?"":i._compress(r,6,function(r){return n.charAt(r)})},decompressFromEncodedURIComponent:function(r){return null==r?"":""==r?null:(r=r.replace(/ /g,"+"),i._decompress(r.length,32,function(o){return t(n,r.charAt(o))}))},compress:function(o){return i._compress(o,16,function(o){return r(o)})},_compress:function(r,o,n){if(null==r)return"";var e,t,i,s={},u={},a="",p="",c="",l=2,f=3,h=2,d=[],m=0,v=0;for(i=0;i<r.length;i+=1)if(a=r.charAt(i),Object.prototype.hasOwnProperty.call(s,a)||(s[a]=f++,u[a]=!0),p=c+a,Object.prototype.hasOwnProperty.call(s,p))c=p;else{if(Object.prototype.hasOwnProperty.call(u,c)){if(c.charCodeAt(0)<256){for(e=0;e<h;e++)m<<=1,v==o-1?(v=0,d.push(n(m)),m=0):v++;for(t=c.charCodeAt(0),e=0;e<8;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}else{for(t=1,e=0;e<h;e++)m=m<<1|t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t=0;for(t=c.charCodeAt(0),e=0;e<16;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}0==--l&&(l=Math.pow(2,h),h++),delete u[c]}else for(t=s[c],e=0;e<h;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;0==--l&&(l=Math.pow(2,h),h++),s[p]=f++,c=String(a)}if(""!==c){if(Object.prototype.hasOwnProperty.call(u,c)){if(c.charCodeAt(0)<256){for(e=0;e<h;e++)m<<=1,v==o-1?(v=0,d.push(n(m)),m=0):v++;for(t=c.charCodeAt(0),e=0;e<8;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}else{for(t=1,e=0;e<h;e++)m=m<<1|t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t=0;for(t=c.charCodeAt(0),e=0;e<16;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}0==--l&&(l=Math.pow(2,h),h++),delete u[c]}else for(t=s[c],e=0;e<h;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;0==--l&&(l=Math.pow(2,h),h++)}for(t=2,e=0;e<h;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;for(;;){if(m<<=1,v==o-1){d.push(n(m));break}v++}return d.join("")},decompress:function(r){return null==r?"":""==r?null:i._decompress(r.length,32768,function(o){return r.charCodeAt(o)})},_decompress:function(o,n,e){var t,i,s,u,a,p,c,l=[],f=4,h=4,d=3,m="",v=[],g={val:e(0),position:n,index:1};for(t=0;t<3;t+=1)l[t]=t;for(s=0,a=Math.pow(2,2),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;switch(s){case 0:for(s=0,a=Math.pow(2,8),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;c=r(s);break;case 1:for(s=0,a=Math.pow(2,16),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;c=r(s);break;case 2:return""}for(l[3]=c,i=c,v.push(c);;){if(g.index>o)return"";for(s=0,a=Math.pow(2,d),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;switch(c=s){case 0:for(s=0,a=Math.pow(2,8),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;l[h++]=r(s),c=h-1,f--;break;case 1:for(s=0,a=Math.pow(2,16),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;l[h++]=r(s),c=h-1,f--;break;case 2:return v.join("")}if(0==f&&(f=Math.pow(2,d),d++),l[c])m=l[c];else{if(c!==h)return null;m=i+i.charAt(0)}v.push(m),l[h++]=i+m.charAt(0),i=m,0==--f&&(f=Math.pow(2,d),d++)}}};return i}();"function"==typeof define&&define.amd?define(function(){return LZString}):"undefined"!=typeof module&&null!=module?module.exports=LZString:"undefined"!=typeof angular&&null!=angular&&angular.module("LZString",[]).factory("LZString",function(){return LZString});

window.diff_match_patch=diff_match_patch;
window.pako=pako;
window.jsondiffpatch=jsondiffpatch;
window.protobuf=protobuf;
window.jsyaml=jsyaml;
window.LZString = LZString;
};
gdjs.evtsExt__OnlineMultiplayerFirebase__LoadDeltaUpdaterLibraries.userFunc0x248c430 = function(runtimeScene, eventsFunctionContext) {
"use strict";
        class DeltaUpdateError extends Error {
          constructor(message, code=101) {
            super(message);
            this.name = 'DeltaUpdateError';
            this.code = code;
          }
        }

        // Mapper for known words and their corresponding ids to lower text size
        class WordIdMapper {
            constructor(dictionary = []) {
                this.dictionary = dictionary;
                this.dictionaryEntry = Object.fromEntries(
                    dictionary.map((word, index) => [word, index])
                );
            }

            get(word) {
                if (this.dictionaryEntry[word] === undefined) {
                    throw new DeltaUpdateError(`${word} doesn't exist in the dictionary!`);
                }
                return this.dictionaryEntry[word];
            }

            read(id) {
                if (!this.dictionary[id]) {
                    throw new DeltaUpdateError(`${id} doesn't exist in the dictionary!`);
                }
                return this.dictionary[id];
            }
        }

        /*// Usage:
        const typeIds = new WordIdMapper([
            "power",
            "magic",
            "sense",
            "charm"
        ]);

        typeIds.get("power") // 0
        typeIds.read(0) // "power"
        */

        // Gzips large files, strings, array or objects into binary
        class Zipper {
          constructor(patcher, name, type="a") {
              this.name = name;
              this.patcher = patcher;
              this.type = type;
              this.dataType = "binary";
          }

          get method() {
            return this.name + this.type;
          }

          getType(variable) {
              if (variable === null) {
                  return 'null';
              } else if (Array.isArray(variable)) {
                  return 'array';
              } else {
                  return typeof variable;
              }
          }

          goodForCompression(patch) {
            return this.patcher.getSize(patch) > 12;
          }

          createPatch(originalText, newText) {
            const patch = this.patcher.createPatch(originalText, newText);

            if(!this.goodForCompression(patch)) throw new DeltaUpdateError('not good for compression');

            var compressed = (this.type=='b') ? pako.deflate(patch):pako.deflate(JSON.stringify(patch));

            if(this.decode(originalText,compressed) != newText) {
              throw new DeltaUpdateError(`decode not the same`)
            }

            return compressed;
          }

          getSize(patch) {
            return patch.byteLength;
          }

          decode(originalText, compressed) {
            if(this.type=="a") {
              var uncompressed = JSON.parse(pako.inflate(compressed, { to: 'string' }));;
            } else {
              var uncompressed = pako.inflate(compressed);;
            }
            return this.patcher.decode(originalText, uncompressed);
          }
        }

        class ZipperB {
          constructor(patcher, name) {
              this.method = name;
              this.patcher = patcher;
              this.dataType = "string";
          }

          createPatch(originalText, newText) {
            const patch = this.patcher.createPatch(originalText, newText);
            var compressed = LZString.compressToUTF16(patch);

            if(this.decode(originalText,compressed) != newText) {
              throw new DeltaUpdateError(`decode not the same`)
            }

            return compressed;
          }

          getSize(patch) {
            return new TextEncoder().encode(patch).length;
          }

          decode(originalText, compressed) {
            var uncompressed = LZString.decompressFromUTF16(compressed);

            return this.patcher.decode(originalText, uncompressed);
          }
        }

        class PatcherA {
          constructor() {
              this.method = "diffmatchpatch";
              this.dmp = new diff_match_patch();
              this.dataType = "string";
          }

          createPatch(originalText, newText) {

              var diff = this.dmp.diff_main(originalText, newText);
              this.dmp.diff_cleanupEfficiency(diff)
              const patches = this.dmp.patch_make(diff);

              // console.log(this.decode(originalText, this.dmp.patch_toText(patches)));

              return this.dmp.patch_toText(patches);

          }

          decode(originalText, patch) {
            const patches = this.dmp.patch_fromText(patch);
            return this.dmp.patch_apply(patches, originalText)[0];
          }

          getSize(patch) {
              return new TextEncoder().encode(patch).length;
          }
        }

        class PatcherB {
          constructor() {
              this.method = "full";
              this.dataType = "string";
          }

          createPatch(originalText, newText) {
              return newText;
          }

          decode(originalText, patch) {
            return patch;
          }

          getSize(patch) {
              return new TextEncoder().encode(patch).length;
          }
        }

        class PatcherC {
          constructor() {
              this.method = "jsondiffpatch";
              this.dataType = "string";
          }

          parse(strObj) {
            try {
              return JSON.parse(strObj);
            } catch(e) {
              throw new DeltaUpdateError('string cannot be converted to json')
            }
          }

          createPatch(originalText, newText) {
            const delta = jsondiffpatch.create().diff(this.parse(originalText), this.parse(newText));

            if(typeof delta === 'undefined') throw new DeltaUpdateError('no changes found');

            // console.log(this.decode(originalText,JSON.stringify(delta)))
            return JSON.stringify(delta);
          }

          decode(originalText, patch) {
            return JSON.stringify(jsondiffpatch.patch(this.parse(originalText), this.parse(patch)));
          }

          getSize(patch) {
              return new TextEncoder().encode(patch).length;
          }
        }

        class PatcherAE {
          constructor() {
              this.method = "jsondiffpatch2";
              this.dataType = "string";
          }

          parse(strObj) {
            try {
              return JSON.parse(strObj);
            } catch(e) {
              throw new DeltaUpdateError('string cannot be converted to json')
            }
          }

          getChangedKeysAndValues(obj1, obj2) {
            const result = {};

            // Get the keys of both objects
            const keys1 = Object.keys(obj1);
            const keys2 = Object.keys(obj2);

            // Compare the keys
            for (const key of [...new Set([...keys1, ...keys2])]) {
              if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
                // Recursive call for nested objects
                const nestedChanges = this.getChangedKeysAndValues(obj1[key], obj2[key]);
                if (Object.keys(nestedChanges).length > 0) {
                  result[key] = nestedChanges;
                }
              } else if (obj1[key] !== obj2[key]) {
                result[key] = obj2[key];
              }
            }

            return result;
          }

          applyChanges(obj, changedKeysAndValues) {
            for (const [key, value] of Object.entries(changedKeysAndValues)) {
              if (typeof value === 'object') {
                // Recursive call for nested objects
                if (!obj[key] || typeof obj[key] !== 'object') {
                  // If the key doesn't exist or it's not an object, create a new object
                  obj[key] = {};
                }
                this.applyChanges(obj[key], value);
              } else {
                obj[key] = value;
              }
            }
            return obj;
          }

          createPatch(originalText, newText) {
            const delta = JSON.stringify(this.getChangedKeysAndValues(this.parse(originalText), this.parse(newText)));

            if(typeof delta === "") throw new DeltaUpdateError('no changes found');

            const decode = this.decode(originalText, delta);
            // console.log(decode);

            return delta;
          }

          decode(originalText, patch) {
            return JSON.stringify(this.applyChanges(this.parse(originalText), this.parse(patch)));
          }

          getSize(patch) {
              return new TextEncoder().encode(patch).length;
          }
        }

        class PatcherQ {
          constructor() {
            this.method = "protoknockdelta";
            this.dataType = "array";
          }

          parse(strObj) {
            try {
              return JSON.parse(strObj);
            } catch(e) {
              throw new DeltaUpdateError('string cannot be converted to json')
            }
          }

          // checks of json string is a js object or if a js object already
          isJsonObject(strObj) {
            if(typeof strObj === 'object' && strObj !== null && !Array.isArray(strObj)) return true;

            try {
                const parsed = JSON.parse(strObj);
                return typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed);
            } catch (e) {
                return false;
            }
          }

          createPatch(originalText, newText) {
            if(!this.isJsonObject(originalText) || !this.isJsonObject(newText)) throw new DeltaUpdateError('string is not an json object');

            var a = new ProtoKnockOff(this.parse(originalText));
            var b = a.createBuffer(this.parse(newText));

            return b;

          }

          decode(originalText, patch) {
            var c = new ProtoKnockOff(this.parse(originalText));
            return JSON.stringify(c.readBuffer(patch));
          }

          getSize(patch) {
            return new Blob([patch]).size;
          }
        }

        class PatcherR {
          constructor() {
            this.method = "protoknockdelta-ltd";
            this.dataType = "string";
          }


          parse(strObj) {
            try {
              return JSON.parse(strObj);
            } catch(e) {
              throw new DeltaUpdateError('string cannot be converted to json')
            }
          }

          // checks of json string is a js object or if a js object already
          isJsonObject(strObj) {
            if(typeof strObj === 'object' && strObj !== null && !Array.isArray(strObj)) return true;

            try {
                const parsed = JSON.parse(strObj);
                return typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed);
            } catch (e) {
                return false;
            }
          }

          createPatch(originalText, newText) {
            if(!this.isJsonObject(originalText) || !this.isJsonObject(newText)) throw new DeltaUpdateError('string is not an json object');

            var a = new ProtoKnockOff(this.parse(originalText));
            var b = a.createBuffer(this.parse(originalText));
            var c = a.createBuffer(this.parse(newText));

            const p = new PatcherP();

            const patch =  p.createPatch(JSON.stringify(b), JSON.stringify(c));
            const decoded =  this.decode(originalText, patch);

            return patch;
          }

          decode(originalText, patch) {
            var a = new ProtoKnockOff(this.parse(originalText));
            var b = a.createBuffer(this.parse(originalText));

            const p = new PatcherP();
            const c =  p.decode(JSON.stringify(b), patch);

            return JSON.stringify(a.readBuffer(JSON.parse(c)));
          }

          getSize(patch) {
            return new Blob([patch]).size;
          }
        }

        class PatcherX {
          constructor() {
            this.method = "protoknock-hex-a";
            this.dataType = "string";
          }


          parse(strObj) {
            try {
              return JSON.parse(strObj);
            } catch(e) {
              throw new DeltaUpdateError('string cannot be converted to json')
            }
          }

          // checks of json string is a js object or if a js object already
          isJsonObject(strObj) {
            if(typeof strObj === 'object' && strObj !== null && !Array.isArray(strObj)) return true;

            try {
                const parsed = JSON.parse(strObj);
                return typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed);
            } catch (e) {
                return false;
            }
          }

          createPatch(originalText, newText) {
            if(!this.isJsonObject(originalText) || !this.isJsonObject(newText)) throw new DeltaUpdateError('string is not an json object');

            var a = new ProtoKnockOff(this.parse(originalText));
            var b = a.createBuffer(this.parse(originalText));
            var c = a.createBuffer(this.parse(newText));

            const p = new PatcherU();

            const patch =  p.createPatch(b, c);
            const decoded =  this.decode(originalText, patch);

            return patch;
          }

          decode(originalText, patch) {
            var a = new ProtoKnockOff(this.parse(originalText));
            var b = a.createBuffer(this.parse(originalText));

            const p = new PatcherU();
            const c =  p.decode(b, patch);

            return JSON.stringify(a.readBuffer(c));
          }

          getSize(patch) {
            return new Blob([patch]).size;
          }
        }

        class PatcherY {
          constructor() {
            this.method = "protoknock-hex-b";
            this.dataType = "string";
          }


          parse(strObj) {
            try {
              return JSON.parse(strObj);
            } catch(e) {
              throw new DeltaUpdateError('string cannot be converted to json')
            }
          }

          // checks of json string is a js object or if a js object already
          isJsonObject(strObj) {
            if(typeof strObj === 'object' && strObj !== null && !Array.isArray(strObj)) return true;

            try {
                const parsed = JSON.parse(strObj);
                return typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed);
            } catch (e) {
                return false;
            }
          }

          createPatch(originalText, newText) {
            if(!this.isJsonObject(originalText) || !this.isJsonObject(newText)) throw new DeltaUpdateError('string is not an json object');

            var a = new ProtoKnockOff(this.parse(originalText));
            var b = a.createBuffer(this.parse(originalText));
            var c = a.createBuffer(this.parse(newText));

            const p = new PatcherV();

            const patch =  p.createPatch(b, c);
            const decoded =  this.decode(originalText, patch);

            return patch;
          }

          decode(originalText, patch) {
            var a = new ProtoKnockOff(this.parse(originalText));
            var b = a.createBuffer(this.parse(originalText));

            const p = new PatcherV();
            const c =  p.decode(b, patch);

            return JSON.stringify(a.readBuffer(c));
          }

          getSize(patch) {
            return new Blob([patch]).size;
          }
        }

        class PatcherZ {
          constructor() {
            this.method = "protoknock-hex-c";
            this.dataType = "string";
          }


          parse(strObj) {
            try {
              return JSON.parse(strObj);
            } catch(e) {
              throw new DeltaUpdateError('string cannot be converted to json')
            }
          }

          // checks of json string is a js object or if a js object already
          isJsonObject(strObj) {
            if(typeof strObj === 'object' && strObj !== null && !Array.isArray(strObj)) return true;

            try {
                const parsed = JSON.parse(strObj);
                return typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed);
            } catch (e) {
                return false;
            }
          }

          createPatch(originalText, newText) {
            if(!this.isJsonObject(originalText) || !this.isJsonObject(newText)) throw new DeltaUpdateError('string is not an json object');

            var a = new ProtoKnockOff(this.parse(originalText));
            var b = a.createBuffer(this.parse(originalText));
            var c = a.createBuffer(this.parse(newText));

            const p = new PatcherW();

            const patch =  p.createPatch(b, c);
            const decoded =  this.decode(originalText, patch);

            return patch;
          }

          decode(originalText, patch) {
            var a = new ProtoKnockOff(this.parse(originalText));
            var b = a.createBuffer(this.parse(originalText));

            const p = new PatcherW();
            const c =  p.decode(b, patch);

            return JSON.stringify(a.readBuffer(c));
          }

          getSize(patch) {
            return new Blob([patch]).size;
          }
        }

        class PatcherT {
          constructor() {
            this.method = "yaml-diff";
            this.dataType = "string";
          }

          parse(strObj) {
            try {
              return JSON.parse(strObj);
            } catch(e) {
              throw new DeltaUpdateError('string cannot be converted to json')
            }
          }

          // checks of json string is a js object or if a js object already
          isJsonObject(strObj) {
            if(typeof strObj === 'object' && strObj !== null && !Array.isArray(strObj)) return true;

            try {
                const parsed = JSON.parse(strObj);
                return typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed);
            } catch (e) {
                return false;
            }
          }

          parseYaml(yamlText) {
            try {
                return jsyaml.load(yamlText);
            } catch {
                throw new DeltaUpdateError('string is not yaml')
            }
          }

          createPatch(originalText, newText) {
            var ya = this.parseYaml(originalText);
            var yb = this.parseYaml(newText);

            if(!this.isJsonObject(ya) || !this.isJsonObject(yb)) {
                throw new DeltaUpdateError('string is not an json object');
            }

            var a = new ProtoKnockOff(ya);
            var b = a.createBuffer(ya);
            var c = a.createBuffer(yb);

            const p = new PatcherP();
            const patch =  p.createPatch(JSON.stringify(b), JSON.stringify(c));

            return patch;
          }

          decode(originalText, patch) {
            var ya = this.parseYaml(originalText);
            var a = new ProtoKnockOff(ya);
            var b = a.createBuffer(ya);

            const p = new PatcherP();
            const c =  p.decode(JSON.stringify(b), patch);

            const decode = a.readBuffer(JSON.parse(c));
            return jsyaml.dump(decode);
          }

          getSize(patch) {
            return new Blob([patch]).size;
          }
        }

        // converts your json format into a compact binary file for efficient transmitting.
        class ProtoBuffer {
          constructor(fields) {
            // Define the schema in JSON format
            const protoSchema = {
              nested: {
                Message: {
                  fields: fields
                }
              }
            };

            // Load the schema
            const root = protobuf.Root.fromJSON(protoSchema);

            // Obtain the message type
            this.player = root.lookupType("Message");
          }

          createBuffer(obj) {
            // Create a new message
            const payload = obj;

            // Verify the payload if necessary (i.e. check if it is valid)
            const errMsg = this.player.verify(payload);
            if (errMsg) throw Error(errMsg);

            // Encode a message to an Uint8Array (buffer)
            const message = this.player.create(payload);
            const buffer = this.player.encode(message).finish();

            // trim unused bytes (only use at the last part if you are gonna chain some buffers)
            const sendBuffer = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
            // console.log(this.decode('',buffer))

            return sendBuffer;
          }

          readBuffer(buffer) {
            return this.player.decode(new Uint8Array(buffer));
          }

          getSize(patch) {
            return patch.byteLength;
          }
        }

        // just like protobuffer converts your json format but into a string instead of binary for efficient transmitting.
        class ProtoKnockOff {
          constructor(templateObject) {
            this.templateObject = templateObject;
            const flattenedObj = this.flattenObject(templateObject);
            this.keys = Object.keys(flattenedObj);
          }

          flattenObject = (obj, parent = '', res = {}) => {
            const sortedKeys = Object.keys(obj).sort();

            // for (let key in obj) {
            for (let key of sortedKeys) {
              const propName = parent ? `${parent}.${key}` : key;
              if (Array.isArray(obj[key])) {
                res[propName] = obj[key];
              } else if (typeof obj[key] === 'object' && obj[key] !== null) {
                this.flattenObject(obj[key], propName, res);
              } else {
                res[propName] = obj[key];
              }
            }
            return res;
          };

          setNestedValue = (obj, path, value) => {
            const keys = path.split(/\.|\[|\].?/).filter(Boolean);
            keys.reduce((acc, key, index) => {
              if (index === keys.length - 1) {
                acc[key] = value;
              } else {
                acc[key] = acc[key] || (isNaN(keys[index + 1]) ? {} : []);
              }
              return acc[key];
            }, obj);
          };

          // Checks if 2 js object is equal
          objectEqual(obj1, obj2) {
              if (obj1 === obj2) return true;

              if (obj1 == null || typeof obj1 !== 'object' ||
                  obj2 == null || typeof obj2 !== 'object') return false;

              let keys1 = Object.keys(obj1);
              let keys2 = Object.keys(obj2);

              if (keys1.length !== keys2.length) return false;

              for (let key of keys1) {
                  if (!keys2.includes(key) || !this.objectEqual(obj1[key], obj2[key])) return false;
              }

              return true;
          }

          // checks of json string is a js object
          isJsonObject(str) {
              try {
                  const parsed = JSON.parse(str);
                  return typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed);
              } catch (e) {
                  return false;
              }
          }

          // fix false positive if json is not equal otherwise check if its equal
          strObjectEqual(a,b) {
            if(typeof a != typeof b) return false;

            if(typeof a == 'object')
              return this.objectEqual(a, b);

            if(typeof a == 'string' && this.isJsonObject(a) && this.isJsonObject(b))
              return this.objectEqual(JSON.parse(a), JSON.parse(b));

            if(typeof a == 'string')
              return this.objectEqual(a.trim(), b.trim());

            return a==b;
          }

          createBuffer(originalObj) {
            // Input
            //  const originalObj = {
            //   person: {
            //     name: "John",
            //     age: 30,
            //     address: {
            //       city: "New York",
            //       zip: "10001"
            //     }
            //   },
            //   job: {
            //     title: "Engineer",
            //     company: "Tech Co"
            //   }
            // };


            const flattenedObj = this.flattenObject(originalObj);
            const valuesArray = Object.values(flattenedObj);
            const serializedValues = JSON.stringify(valuesArray);

            if(!this.strObjectEqual(this.readBuffer(serializedValues), originalObj)) throw new DeltaUpdateError('decode obj not the same');

            return serializedValues;  // Output: ["John", 30, "New York", "10001", "Engineer", "Tech Co"]
          }


          // Revert back to the original nested object
          readBuffer(serializedValues) {
            const deserializedValues = JSON.parse(serializedValues);
            const revertedObj = {};
            this.keys.forEach((key, index) => {
              this.setNestedValue(revertedObj, key, deserializedValues[index]);
            });
            return revertedObj;
          }

          getSize(patch) {
            return new TextEncoder().encode(patch).length;
          }
        }

        class PatcherE {
          constructor() {
            this.method = "bin2hex";
            this.dataType = "string";
          }

          binaryToHex(binaryStr) {
              let hexStr = '';
              // Pad the binary string to make its length a multiple of 4
              const paddedBinaryStr = binaryStr.padStart(Math.ceil(binaryStr.length / 4) * 4, '0');

              // Process each group of 4 binary digits
              for (let i = 0; i < paddedBinaryStr.length; i += 4) {
                  const chunk = paddedBinaryStr.substr(i, 4);
                  const hexChunk = parseInt(chunk, 2).toString(16);
                  hexStr += hexChunk;
              }

              return hexStr;
          }

          hexToBinary(hexStr) {
            let binaryStr = '';

            // Process each hexadecimal digit
            for (let i = 0; i < hexStr.length; i++) {
                const hexDigit = hexStr[i];
                const binaryChunk = parseInt(hexDigit, 16).toString(2).padStart(4, '0');
                binaryStr += binaryChunk;
            }

            return binaryStr;
          }

          createPatch(originalText, newText) {
            const hex = this.binaryToHex(newText);

            if(this.decode(originalText, hex) != newText) throw new DeltaUpdateError('decode not same');

            return hex;
          }

          decode(originalText, patch) {
            return this.hexToBinary(patch).replace(/^0+/, '') || '0';
          }

          getSize(patch) {
            return new TextEncoder().encode(patch).length;
          }
        }

        class PatcherF {
          constructor() {
            this.method = "bin2hex(leadingzero)";
            this.dataType = "string";
          }

          binaryToHex(binaryStr) {
              let hexStr = '';
              // Pad the binary string to make its length a multiple of 4
              const paddedBinaryStr = binaryStr.padStart(Math.ceil(binaryStr.length / 4) * 4, '0');

              // Process each group of 4 binary digits
              for (let i = 0; i < paddedBinaryStr.length; i += 4) {
                  const chunk = paddedBinaryStr.substr(i, 4);
                  const hexChunk = parseInt(chunk, 2).toString(16);
                  hexStr += hexChunk;
              }

              return hexStr;
          }

          hexToBinary(hexStr) {
            let binaryStr = '';

            // Process each hexadecimal digit
            for (let i = 0; i < hexStr.length; i++) {
                const hexDigit = hexStr[i];
                const binaryChunk = parseInt(hexDigit, 16).toString(2).padStart(4, '0');
                binaryStr += binaryChunk;
            }

            return binaryStr;
          }

          createPatch(originalText, newText) {
            const hex = this.binaryToHex(newText);

            if(this.decode(originalText, hex) != newText) throw new DeltaUpdateError('decode not same');

            return hex;
          }

          decode(originalText, patch) {
            return this.hexToBinary(patch);
          }

          getSize(patch) {
            return new TextEncoder().encode(patch).length;
          }
        }

        class PatcherG {
          constructor() {
            this.method = "dec2hex";
            this.dataType = "string";
          }

          decToHex(str) {
            // Attempt to convert the variable to a number
            const number = Number(str);

            // Check if the conversion to a number was successful
            if (isNaN(number)) {
                throw new DeltaUpdateError('string cannot be converted into a number');
            }

            // Convert the number to hexadecimal
            return number.toString(16);
          }

          hexToDec(hexString) {
            return parseInt(hexString, 16).toString();
          }

          createPatch(originalText, newText) {
            const hex = this.decToHex(newText);

            if(this.decode(originalText, hex) != newText) throw new DeltaUpdateError('decode not same');

            return hex;
          }

          decode(originalText, patch) {
            return this.hexToDec(patch);
          }

          getSize(patch) {
            return new TextEncoder().encode(patch).length;
          }
        }

        class PatcherK {
          constructor() {
            this.method = "increment";
            this.dataType = "number";
          }

          toNumber(str) {
            // Attempt to convert the variable to a number
            const number = Number(str);

            // Check if the conversion to a number was successful
            if (isNaN(number)) {
                throw new DeltaUpdateError('cannot be converted into a number');
            }

            // Convert the number to hexadecimal
            return number;
          }

          isBeyondSafeIntegerLimitBigInt(num) {
              return typeof num === 'bigint' || num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER;
          }

          isSumSafe(a, b) {
              let sum = a + b;
              return sum <= Number.MAX_SAFE_INTEGER && sum >= Number.MIN_SAFE_INTEGER;
          }

          isDifferenceSafe(a, b) {
              let difference = a - b;
              return difference <= Number.MAX_SAFE_INTEGER && difference >= Number.MIN_SAFE_INTEGER;
          }

          createPatch(originalText, newText) {
            // Attempt to convert the variable to a number
            const originalNumber = this.toNumber(originalText);
            const newNumber = this.toNumber(newText);

            const patch = newNumber - originalNumber;

            if(
              this.isBeyondSafeIntegerLimitBigInt(originalNumber) ||
              this.isBeyondSafeIntegerLimitBigInt(newNumber) ||
              !this.isSumSafe(originalNumber, newNumber) ||
              !this.isDifferenceSafe(originalNumber, newNumber)
            ) {
              throw new DeltaUpdateError('not safe integers');
            }

            if(this.decode(originalText, patch) != newText) throw new DeltaUpdateError('decode not same');

            return patch;
          }

          decode(originalText, newNumber) {
            const originalNumber = this.toNumber(originalText);

            return originalNumber + newNumber;
          }

          getSize(patch) {
            return new TextEncoder().encode(patch).length;
          }
        }

        class PatcherL {
          constructor() {
            this.method = "concatenate-suffix";
            this.dataType = "string";
          }

          createPatch(originalText, newText) {
            let a = originalText;
            let b = newText;

            // check if a and b root is same
            if(b.substr(0,a.length)!=a) throw new DeltaUpdateError("suffix not found")

            const patch = b.substr(a.length);

            if(this.decode(originalText, patch) != newText) throw new DeltaUpdateError('decode not same');

            return patch;
          }

          decode(originalText, patch) {
            return originalText + patch;
          }

          getSize(patch) {
            return new TextEncoder().encode(patch).length;
          }
        }

        class PatcherM {
          constructor() {
            this.method = "concatenate-prefix";
            this.dataType = "string";
          }

          createPatch(originalText, newText) {
            let a = originalText;
            let b = newText;

            if(b.substr(-a.length)!=a) throw new DeltaUpdateError("prefix not found")

            const patch = b.substr(0,b.length-a.length);

            if(this.decode(originalText, patch) != newText) throw new DeltaUpdateError('decode not same');

            return patch;
          }

          decode(originalText, patch) {
            return patch + originalText;
          }

          getSize(patch) {
            return new TextEncoder().encode(patch).length;
          }
        }

        class PatcherN {
          constructor() {
            this.method = "replace-mid";
            this.dataType = "array";
          }

          getChangedPartStartIndex(original, modified) {
              let i = 0, j = 0;
              let len1 = original.length;
              let len2 = modified.length;

              // Find the position where the strings start to differ
              while (i < len1 && j < len2 && original[i] === modified[j]) {
                  i++;
                  j++;
              }

              if(i==0) throw new DeltaUpdateError("not valid mid")

              return i;
          }

          getChangedPartEndIndex(original, modified, start) {
              let i = start, j = start;
              let len1 = original.length;
              let len2 = modified.length;

              // Find the position where the strings start to differ
              while (i < len1 && j < len2 && original[i] != modified[j]) {
                  i++;
                  j++;
              }

              if(i==len1-1) throw new DeltaUpdateError("not valid end of mid")

              return i;
          }

          createPatch(originalText, newText) {
            let a = originalText;
            let b = newText;

            if(a.length != b.length) throw new DeltaUpdateError("not replacable")

            // find index
            const start = this.getChangedPartStartIndex(a, b);
            const end   = this.getChangedPartEndIndex(a, b, start);
            const word  = b.slice(start,end);

            const patch = [start,word];

            if(this.decode(originalText, patch) != newText) throw new DeltaUpdateError('decode not same');

            return patch;
          }

          decode(originalText, patch) {
            let c = originalText.split('');
            const [start, word] = patch;
            c.splice(start, word.length, ...word.split(''));

            return c.join('');
          }

          getSize(patch) {
            // Convert the array to a Blob
            let blob = new Blob([patch]);
            // Return the size of the Blob in bytes
            return blob.size;
          }
        }

        class PatcherO {
          constructor() {
            this.method = "append-mid";
            this.dataType = "array";
          }

          getChangedPartStartIndex(original, modified) {
              let i = 0, j = 0;
              let len1 = original.length;
              let len2 = modified.length;

              // Find the position where the strings start to differ
              while (i < len1 && j < len2 && original[i] === modified[j]) {
                  i++;
                  j++;
              }

              if(i==0) throw new DeltaUpdateError("not valid mid")

              return i;
          }

          getChangedPartEndIndex(original, modified, start) {
              const a = original.slice(start);
              const b = modified.slice(start);
              let end = -1;

              if(!b.includes(a)) throw new DeltaUpdateError("not valid mid");

              end = b.indexOf(a);

              return start+end;
          }

          createPatch(originalText, newText) {
            let a = originalText;
            let b = newText;

            // find index
            const start = this.getChangedPartStartIndex(a, b);
            const end   = this.getChangedPartEndIndex(a, b, start);
            const word  = b.slice(start,end);

            const patch = [start,word];

            if(this.decode(originalText, patch) != newText) throw new DeltaUpdateError('decode not same');

            return patch;
          }

          decode(originalText, patch) {
            let c = originalText.split('');
            const [start, word] = patch;
            c.splice(start, 0, ...word.split(''));

            return c.join('');
          }

          getSize(patch) {
            // Convert the array to a Blob
            let blob = new Blob([patch]);
            // Return the size of the Blob in bytes
            return blob.size;
          }
        }

        class PatcherS {
          constructor() {
            this.method = "remove-mid";
            this.dataType = "array";
          }

          findRemovedMiddleStringIndex(original, modified) {
              // Find the longest common prefix
              let prefixLength = 0;
              while (prefixLength < original.length && prefixLength < modified.length && original[prefixLength] === modified[prefixLength]) {
                  prefixLength++;
              }

              // Find the longest common suffix
              let suffixLength = 0;
              while (suffixLength < original.length && suffixLength < modified.length &&
                     original[original.length - 1 - suffixLength] === modified[modified.length - 1 - suffixLength]) {
                  suffixLength++;
              }

              // Calculate the middle substring that was removed
              let middleStart = prefixLength;
              let middleEnd = original.length - suffixLength;

              // Check if the middle part was removed correctly
              let expectedModified = original.slice(0, middleStart) + original.slice(middleEnd);
              if (expectedModified === modified) {
                  return [middleStart, middleEnd];
              } else {
                  throw new DeltaUpdateError('not valid mid')
              }
          }

          createPatch(originalText, newText) {
            const patch = this.findRemovedMiddleStringIndex(originalText, newText);
            const decoded = this.decode(originalText, patch);

            if(decoded != newText) throw new DeltaUpdateError('decode not same ') ;

            return patch;
          }

          decode(originalText, patch) {
            let c = originalText.split('');
            const [start, end] = patch;
            c.splice(start, end-start);

            return c.join('');
          }

          getSize(patch) {
            // Convert the array to a Blob
            let blob = new Blob([patch]);
            // Return the size of the Blob in bytes
            return blob.size;
          }
        }

        class PatcherH {
          constructor() {
            this.method = "bin2hex(leadone)";
            this.dataType = "string";
          }

          createPatch(originalText, newText) {
            const patcher = new PatcherE();
            const patch = patcher.createPatch(originalText, "1" + newText);

            if(this.decode(originalText, patch) != newText) throw new DeltaUpdateError('decode not same');

            return patch;
          }

          decode(originalText, patch) {
            const patcher = new PatcherE();

            return patcher.decode(originalText, patch).split('').splice(1).join('');
          }

          getSize(patch) {
            return new TextEncoder().encode(patch).length;
          }
        }

        class PatcherP {
           constructor() {
            this.method = "legacy-text-diff";
            this.dataType = "string";
          }

          createPatch(originalText, newText) {
            const patch = this.textDiff(originalText, newText);

            if(this.decode(originalText, patch) != newText) throw new DeltaUpdateError('decode not same');

            return patch;
          }

          decode(originalText, patch) {
            return this.applyDiff(originalText, patch);
          }

          getSize(patch) {
            return new TextEncoder().encode(patch).length;
          }

          textDiff(text1, text2) {
            const diff = [];
            const maxLength = Math.max(text1.length, text2.length);
            for (let i = 0; i < maxLength; i++) {
              if (text1[i] !== text2[i]) {
                diff.push({
                  index: i,
                  char1: text1[i],
                  char2: text2[i],
                  symbol: (text2[i] == undefined) ?"-":"+"
                });
              }
            }


            // get the git diff
            const gitDiff = [];

            var lastElement = {};

            diff.forEach((e, i)=>{

              if(
                (e.index-1) == lastElement.index
                && e.symbol == lastElement.symbol
              ) {
                gitDiff.push((e.symbol=="+") ? e.char2 : e.char1);
              } else {
                if(e.symbol=="+") {
                  gitDiff.push('[+' + e.index+']');
                  gitDiff.push(e.char2);
                } else {
                  gitDiff.push('[-' + e.index+']');
                  gitDiff.push(e.char1);
                }
              }

              lastElement = e;
            });

            function alternateTextDiff(text1, text2) {
              return `[c]${text2}`;
            }

            function compressPattern(input) {
              var compressed = input.replace(/(.+?)\1+/g, function(match, group, count) {
                const repetitionCount = match.length / group.length;
                const keep = `-${group}<${repetitionCount}]`;

                // only compress if the character length is reduced
                if(keep.length < match.length) {
                  return keep;
                }

                return match;
              });

              return compressed;
            }

            function binaryToDecimal(binary) {
              return parseInt(binary, 2);
            }

            function compressWithBinary(input) {
              var compressed = input.replace(/(1[0-1]{0,50})/g, function(match, group, count) {
                const keep = `[b]${binaryToDecimal(group)};`;

                // only compress if the character length is reduced
                if(keep.length < match.length) {
                  return keep;
                }

                return match;
              });

              return compressed;
            }

            var diff1 = gitDiff.join("");
            var diff2 = alternateTextDiff(text1, text2);

            var resultA = this.applyDiff(text1, diff1);
            var resultB = this.applyDiff(text1, diff2);
            var optimal = diff1;

            if(resultA == resultB) {
              // pick the ones that smaller
              optimal = (diff2.length < diff1.length) ? diff2 : diff1;
            }

            return compressPattern(compressWithBinary(optimal));
          }

          applyDiff(oldText, difftext) {

            function convertDiffToArray(text) {
              const gitDiffObj = [];
              var regex = /(\[([\+\-])(\d+)\])([^\[]+)/g;
              let match;
              var capturedStrings = [];
              while ((match = regex.exec(text)) !== null) {
                capturedStrings.push(match);
                gitDiffObj.push({
                  index: match[3]*1,
                  symbol: match[2],
                  text: match[4]
                })
              }

              var regex = /(\[(c)\])([^\[]+)/g;
              while ((match = regex.exec(text)) !== null) {
                capturedStrings.push(match);
                gitDiffObj.push({
                  index: 0,
                  symbol: match[2],
                  text: match[3]
                })
              }

              return gitDiffObj;
            }

            function decompressPattern(compressed) {
              var decompressed = compressed.replace(/-(.+?)\<(\d+)\]/g, function(match, group, count) {
                return group.repeat(Number(count));
              });

              return decompressed;
            }

            function decompressBinary(compressed) {
              var decompressed = compressed.replace(/\[b\](\d+);/g, function(match, group, count) {
                return decimalToBinary(group*1);
              });

              return decompressed;
            }

            function decimalToBinary(decimal) {
              return decimal.toString(2);
            }

            var a = oldText.split('');
            var gitDiffObj = convertDiffToArray(decompressBinary(decompressPattern(difftext)));
            gitDiffObj.forEach(e => {

              var startIndex = e.index;
              var endIndex = e.index + e.text.length;

              if(e.symbol == "+") {
                // replace indexes
                a.splice(startIndex, e.text.length, ...e.text.split(''));
              } else if(e.symbol == "-") {
                // remove indexes
                a.splice(startIndex, e.text.length);
              } else if(e.symbol == "c") {
                // clear everything and replace text
                a = e.text.split('');
              }

            })

            return a.join('');
          }
        }

        // add a patcher for oscillating deltas
        // problem: user sends longtext -> uniquetext -> repeatedlongtext -> uniquetext -> repeatedlongtext it will result high bandwidth.
        // if you detect you already sent this to the same user, just resend the id/hash of the old text, reciever knows what to do
        class PatcherI {
          constructor() {
            this.method = "sender-reciever-cache-whole";
            this.cache = {};
            this.conversationId = "default";
            this.dataType = "string";
          }

          setConversation(conversationId) {
            this.conversationId = conversationId;
          }

          createPatch(originalText, newText) {

            if(newText.length <= 4) {
              throw new DeltaUpdateError('payload is too short to cache');
            }

            const hash = this.getShortCommitId(this.conversationId + newText, 4);

            if(!this.cache[hash]) {
              // this.saveSent(recieverId, newText); // dont save here, actually save something that is sent or recieved by and to a specific user!
              throw new DeltaUpdateError('no cache id found');
            }

            // console.log(this.decode(originalText,hash))
            return hash;
          }

          generateCommitId(input) {
            // Create a SHA-1 hash of the input string
            const hash = CryptoJS.SHA1(input).toString(CryptoJS.enc.Hex);

            return hash;
          }

          getShortCommitId(input, size=2) {
            return this.generateCommitId(input).slice(0, size);
          }

          cacheConversationMessage(conversationText) {
            this.cache[this.getShortCommitId(this.conversationId + conversationText, 4)] = conversationText;
          }

          decode(originalText, patch) {
            return this.cache[patch];
          }

          getSize(patch) {
            return new TextEncoder().encode(patch).length;
          }
        }

        class PatcherJ {
          constructor() {
            this.method = "sender-reciever-cache-words";
            this.cache = {}; // this can be optimized further using circular buffer
            this.conversationId = "default";
            this.dataType = "array";
          }

          setConversation(conversationId) {
            this.conversationId = conversationId;
          }

          createPatch(originalText, newText) {
            if(newText.length <= 4) {
              throw new DeltaUpdateError('payload is too short to cache');
            }

            const patch = this.parseWords(newText, this.conversationId);

            return patch;
          }

          parseWords(input) {
            const parsed = input.split(' ').map(w=>{
              if(this.cache[this.conversationId] && this.cache[this.conversationId].includes(w)) {
                return this.cache[this.conversationId].indexOf(w);
              } else {
                return w;
              }
            });

            return parsed;
          }

          isNumber(value) {
            return typeof value === 'number' && !isNaN(value);
          }

          cacheConversationWords(conversationText) {
            if(!this.cache[this.conversationId]) this.cache[this.conversationId] = [];

            conversationText.split(' ').forEach(w=>{
              if(this.isNumber(w)) return;
              if(this.cache[this.conversationId].includes(w)) return;

              this.cache[this.conversationId].push(w); // save it only when you recieve or sent it to a specific user
            });

            // sort cache so it remains consistent
            this.cache[this.conversationId].sort();
          }

          decode(originalText, patch) {
            const decode = patch.map(w=>{
              if(this.cache[this.conversationId] && this.cache[this.conversationId][w]) {
                return this.cache[this.conversationId][w];
              } else {
                return w;
              }
            }).join(' ');

            return decode;
          }

          getSize(patch) {
            // Convert the array to a Blob
            let blob = new Blob([patch]);
            // Return the size of the Blob in bytes
            return blob.size;
          }
        }

        class PatcherU {
          constructor() {
            this.method = "array-bin2hex-a";
            this.dataType = "string";
          }

          parse(strObj) {
            try {
              return JSON.parse(strObj);
            } catch(e) {
              throw new DeltaUpdateError('string cannot be converted to array')
            }
          }

          // checks of json string is a js object or if a js object already
          isJsonArray(strObj) {
            if(typeof strObj === 'object' && strObj !== null && Array.isArray(strObj)) return true;

            try {
                const parsed = JSON.parse(strObj);
                return typeof parsed === 'object' && parsed !== null && Array.isArray(parsed);
            } catch (e) {
                return false;
            }
          }

          createPatch(originalText, newText) {
            if(!this.isJsonArray(newText)) throw new DeltaUpdateError('string cannot be converted to array')

            const arr = this.parse(newText).join('');

            const p = new PatcherF(); // E and other
            const patch = p.createPatch(originalText, arr);
            const decode = this.decode(originalText, patch);


            if(decode != newText) throw new DeltaUpdateError('decode not the same')

            return patch;
          }

          decode(originalText, patch) {
            const p = new PatcherF();
            const bin = p.decode(originalText, patch);
            const decode = bin.split('').map(b=>b*1);

            return JSON.stringify(decode);
          }

          getSize(patch) {
            return new TextEncoder().encode(patch).length;
          }
        }

        class PatcherV {
          constructor() {
            this.method = "array-bin2hex-b";
            this.dataType = "string";
          }

          parse(strObj) {
            try {
              return JSON.parse(strObj);
            } catch(e) {
              throw new DeltaUpdateError('string cannot be converted to array')
            }
          }

          // checks of json string is a js object or if a js object already
          isJsonArray(strObj) {
            if(typeof strObj === 'object' && strObj !== null && Array.isArray(strObj)) return true;

            try {
                const parsed = JSON.parse(strObj);
                return typeof parsed === 'object' && parsed !== null && Array.isArray(parsed);
            } catch (e) {
                return false;
            }
          }

          createPatch(originalText, newText) {
            if(!this.isJsonArray(newText)) throw new DeltaUpdateError('string cannot be converted to array')

            const arr = this.parse(newText).join('');

            const p = new PatcherE(); // E and other
            const patch = p.createPatch(originalText, arr);
            const decode = this.decode(originalText, patch);


            if(decode != newText) throw new DeltaUpdateError('decode not the same')

            return patch;
          }

          decode(originalText, patch) {
            const p = new PatcherE();
            const bin = p.decode(originalText, patch);
            const decode = bin.split('').map(b=>b*1);

            return JSON.stringify(decode);
          }

          getSize(patch) {
            return new TextEncoder().encode(patch).length;
          }
        }

        class PatcherW {
          constructor() {
            this.method = "array-bin2hex-c";
            this.dataType = "string";
          }

          parse(strObj) {
            try {
              return JSON.parse(strObj);
            } catch(e) {
              throw new DeltaUpdateError('string cannot be converted to array')
            }
          }

          // checks of json string is a js object or if a js object already
          isJsonArray(strObj) {
            if(typeof strObj === 'object' && strObj !== null && Array.isArray(strObj)) return true;

            try {
                const parsed = JSON.parse(strObj);
                return typeof parsed === 'object' && parsed !== null && Array.isArray(parsed);
            } catch (e) {
                return false;
            }
          }

          createPatch(originalText, newText) {
            if(!this.isJsonArray(newText)) throw new DeltaUpdateError('string cannot be converted to array')

            const arr = this.parse(newText).join('');

            const p = new PatcherH(); // E and other
            const patch = p.createPatch(originalText, arr);
            const decode = this.decode(originalText, patch);


            if(decode != newText) throw new DeltaUpdateError('decode not the same')

            return patch;
          }

          decode(originalText, patch) {
            const p = new PatcherH();
            const bin = p.decode(originalText, patch);
            const decode = bin.split('').map(b=>b*1);

            return JSON.stringify(decode);
          }

          getSize(patch) {
            return new TextEncoder().encode(patch).length;
          }
        }

        class PatcherAA {
          constructor() {
            this.method = "string-encode";
            this.dataType = "string";
          }

          diff(prev, curr) {
            const delta = [];

            let start = 0;
            while (start < curr.length && curr[start] === prev[start]) {
                start++;
            }

            let end = 0;
            while (end < curr.length && curr[curr.length - 1 - end] === prev[prev.length - 1 - end]) {
                end++;
            }

            delta.push(start);
            delta.push(curr.substring(start, curr.length - end));
            delta.push(end);

            return delta;
          }

          undiff(prev, encoding) {
            const [start, middle, end] = encoding;
            return prev.substring(0, start) + middle + prev.substring(prev.length - end);
          }

          createPatch(originalText, newText) {
            const patch = JSON.stringify(this.diff(originalText, newText));
            const decode = this.decode(originalText, patch);

            if(decode != newText) throw new DeltaUpdateError('decode not the same')

            return patch;
          }

          decode(originalText, patch) {
            return this.undiff(originalText, JSON.parse(patch));
          }

          getSize(patch) {
            return new TextEncoder().encode(patch).length;
          }
        }

        class PatcherAB {
          constructor() {
            this.method = "split-by-line";
            this.dataType = "string";
          }

          convertZeros(arr) {
            let result = [];
            let zeroCount = 0;

            for (let i = 0; i < arr.length; i++) {
              if (arr[i] === 0) {
                zeroCount++;
              } else {
                if (zeroCount > 0) {
                  result.push(zeroCount);
                  zeroCount = 0;
                }
                result.push(arr[i]);
              }
            }

            if (zeroCount > 0) {
              result.push(zeroCount);
            }

            return result;
          }

          convertBack(arr) {
            let result = [];
            let zeroCount = 0;

            for (let i = 0; i < arr.length; i++) {
              if (typeof arr[i] === 'number') {
                zeroCount = arr[i];
              } else {
                if (zeroCount > 0) {
                  result = result.concat(Array(zeroCount).fill(0));
                  zeroCount = 0;
                }
                result.push(arr[i]);
              }
            }

            if (zeroCount > 0) {
              result = result.concat(Array(zeroCount).fill(0));
            }

            return result;
          }

          diff(prevSentence, newSentence) {
            const prevLines = prevSentence.split('\n');
            const newLines = newSentence.split('\n');
            const encoded = [];

            for (let i = 0; i < newLines.length; i++) {
              if (i < prevLines.length) {
                if(newLines[i] == prevLines[i]) encoded.push(0);
                else encoded.push(newLines[i]);
              } else {
                encoded.push(newLines[i]);
              }
            }

            return this.convertZeros(encoded);
          }

          undiff(prevSentence, deltaEncoded) {
            const prevLines = prevSentence.split('\n');
            const deltaLines = this.convertBack(deltaEncoded);
            const decoded = [];

            for (let i = 0; i < deltaLines.length; i++) {
                if(deltaLines[i] == 0) {
                  decoded.push(prevLines[i]);
                } else {
                  decoded.push(deltaLines[i]);
                }
            }

            return decoded.join('\n');
          }

          createPatch(originalText, newText) {
            const patch = JSON.stringify(this.diff(originalText, newText));
            const decode = this.decode(originalText, patch);

            if(decode != newText) throw new DeltaUpdateError('decode not the same')

            return patch;
          }

          decode(originalText, patch) {
            return this.undiff(originalText, JSON.parse(patch));
          }

          getSize(patch) {
            return new TextEncoder().encode(patch).length;
          }
        }

        class PatcherAC {
          constructor() {
            this.method = "split-by-space";
            this.dataType = "string";
          }

          convertZeros(arr) {
            let result = [];
            let zeroCount = 0;

            for (let i = 0; i < arr.length; i++) {
              if (arr[i] === 0) {
                zeroCount++;
              } else {
                if (zeroCount > 0) {
                  result.push(zeroCount);
                  zeroCount = 0;
                }
                result.push(arr[i]);
              }
            }

            if (zeroCount > 0) {
              result.push(zeroCount);
            }

            return result;
          }

          convertBack(arr) {
            let result = [];
            let zeroCount = 0;

            for (let i = 0; i < arr.length; i++) {
              if (typeof arr[i] === 'number') {
                zeroCount = arr[i];
              } else {
                if (zeroCount > 0) {
                  result = result.concat(Array(zeroCount).fill(0));
                  zeroCount = 0;
                }
                result.push(arr[i]);
              }
            }

            if (zeroCount > 0) {
              result = result.concat(Array(zeroCount).fill(0));
            }

            return result;
          }

          diff(prevSentence, newSentence) {
            const prevLines = prevSentence.split(' ');
            const newLines = newSentence.split(' ');
            const encoded = [];

            for (let i = 0; i < newLines.length; i++) {
              if (i < prevLines.length) {
                if(newLines[i] == prevLines[i]) encoded.push(0);
                else encoded.push(newLines[i]);
              } else {
                encoded.push(newLines[i]);
              }
            }

            return this.convertZeros(encoded);
          }

          undiff(prevSentence, deltaEncoded) {
            const prevLines = prevSentence.split(' ');
            const deltaLines = this.convertBack(deltaEncoded);
            const decoded = [];

            for (let i = 0; i < deltaLines.length; i++) {
                if(deltaLines[i] == 0) {
                  decoded.push(prevLines[i]);
                } else {
                  decoded.push(deltaLines[i]);
                }
            }

            return decoded.join(' ');
          }

          createPatch(originalText, newText) {
            const patch = JSON.stringify(this.diff(originalText, newText));
            const decode = this.decode(originalText, patch);

            if(decode != newText) throw new DeltaUpdateError('decode not the same')

            return patch;
          }

          decode(originalText, patch) {
            return this.undiff(originalText, JSON.parse(patch));
          }

          getSize(patch) {
            return new TextEncoder().encode(patch).length;
          }
        }

        class PatcherAD {
          constructor() {
            this.method = "split-by-length";
            this.dataType = "string";
          }

          convertZeros(arr) {
            let result = [];
            let zeroCount = 0;

            for (let i = 0; i < arr.length; i++) {
              if (arr[i] === 0) {
                zeroCount++;
              } else {
                if (zeroCount > 0) {
                  result.push(zeroCount);
                  zeroCount = 0;
                }
                result.push(arr[i]);
              }
            }

            if (zeroCount > 0) {
              result.push(zeroCount);
            }

            return result;
          }

          convertBack(arr) {
            let result = [];
            let zeroCount = 0;

            for (let i = 0; i < arr.length; i++) {
              if (typeof arr[i] === 'number') {
                zeroCount = arr[i];
              } else {
                if (zeroCount > 0) {
                  result = result.concat(Array(zeroCount).fill(0));
                  zeroCount = 0;
                }
                result.push(arr[i]);
              }
            }

            if (zeroCount > 0) {
              result = result.concat(Array(zeroCount).fill(0));
            }

            return result;
          }

          // Function to compare checksums and find differences
          findDifferences(oldData, newData, blockSize) {
            const differences = [];

            for (let i = 0; i < newData.length; i += blockSize) {
              const newblock = newData.slice(i, i + blockSize);
              const oldblock = oldData.slice(i, i + blockSize);

              if (oldblock === newblock) {
                differences.push({ type: 'match' });
              } else {
                differences.push({ type: 'difference', block: newblock });
              }
            }

            return differences;
          }

          // Simulate transferring data
          simulateTransfer(differences) {
            const transferredBlocks = [];
            differences.forEach(diff => {
              if (diff.type === 'match') {
                transferredBlocks.push(0);
              }
              if (diff.type === 'difference') {
                transferredBlocks.push(diff.block);
              }
            });

            return this.convertZeros(transferredBlocks);
          }

          transferToDiff(transferredBlocks) {
            return this.convertBack(transferredBlocks).map((t,i)=>(t==0)?{type:"match",index:i}:{type:"difference",block:t});
          }

          // Function to decode and reconstruct the updated file
          reconstructFile(differences, oldData, blockSize) {
            let updatedData = '';
            let oldIndex = 0;

            differences.forEach(diff => {
              if (diff.type === 'match') {
                // Append the matching block from the original file
                const block = oldData.slice(oldIndex, oldIndex + blockSize);
                updatedData += block;
                oldIndex += blockSize;
              } else {
                // Append the different block from the transferred data
                updatedData += diff.block;
                oldIndex += blockSize;
              }
            });

            return updatedData;
          }

          diff(oldData, newData, blockSize=10) {
            // Step 2: Find differences between the original and updated files
            const differences = this.findDifferences(oldData, newData, blockSize);

            // Step 3: Simulate transferring the differences
            return this.simulateTransfer(differences);
          }

          undiff(oldData, transferredBlocks, blockSize=10) {
            return this.reconstructFile(this.transferToDiff(transferredBlocks), oldData, blockSize)
          }

          createPatch(originalText, newText) {
            const patch = JSON.stringify(this.diff(originalText, newText));
            const decode = this.decode(originalText, patch);

            if(decode != newText) throw new DeltaUpdateError('decode not the same')

            return patch;
          }

          decode(originalText, patch) {
            return this.undiff(originalText, JSON.parse(patch));
          }

          getSize(patch) {
            return new TextEncoder().encode(patch).length;
          }
        }

        class DiffManager {
          constructor(dataTypes=['string', 'number', 'array', 'binary', 'object']) {
            this.patchers = [];
            this.showErrors = false;
            this.showResults = false;
            this.timeLimitMs = 10;

            // filter allowed outputs for your server compatibility
            this.dataTypes = dataTypes; // string', 'number', 'array', 'binary', 'object'

            // ensemble of patchers
            this.initializePatchers();
          }

          // Checks if 2 js object is equal
          objectEqual(obj1, obj2) {
              if (obj1 === obj2) return true;

              if (obj1 == null || typeof obj1 !== 'object' ||
                  obj2 == null || typeof obj2 !== 'object') return false;

              let keys1 = Object.keys(obj1);
              let keys2 = Object.keys(obj2);

              if (keys1.length !== keys2.length) return false;

              for (let key of keys1) {
                  if (!keys2.includes(key) || !this.objectEqual(obj1[key], obj2[key])) return false;
              }

              return true;
          }

          // checks of json string is a js object
          isJsonObject(str) {
              try {
                  const parsed = JSON.parse(str);
                  return typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed);
              } catch (e) {
                  return false;
              }
          }

          // fix false positive if json is not equal otherwise check if its equal
          strObjectEqual(a,b) {
            if(typeof a != typeof b) return false;

            if(typeof a == 'object')
              return this.objectEqual(a, b);

            if(typeof a == 'string' && this.isJsonObject(a) && this.isJsonObject(b))
              return this.objectEqual(JSON.parse(a), JSON.parse(b));

            if(typeof a == 'string')
              return this.objectEqual(a.trim(), b.trim());

            return a==b;
          }

          getIdFromMethodName(methodName) {
            return this.patchers.map((p,id)=>[p.method, id]).find(p=>p[0]==methodName)[1];
          }

          initializePatchers() {
            this.addPatcher(new PatcherB());
            this.addPatcher(new PatcherC());
            this.addPatcher(new PatcherN());
            this.addPatcher(new PatcherO());
            this.addPatcher(new PatcherP());
            this.addPatcher(new PatcherR());
            this.addPatcher(new PatcherAA());
            this.addPatcher(new PatcherAE());
          }

          addPatcher(patcher) {
            if (!this.dataTypes.includes(patcher.dataType)) return;
            this.patchers.push(patcher);
          }

          encodeSize(text) {
              return new TextEncoder().encode(text).length;
          }

          checkType(value) {
            if (typeof value === 'string') {
              return 'string';
            }
            if (typeof value === 'number') {
              return 'number';
            }
            if (Array.isArray(value)) {
              return 'array';
            }
            if (value instanceof ArrayBuffer || value instanceof DataView || value instanceof Blob || ArrayBuffer.isView(value)) {
              return 'binary';
            }
            if (value !== null && typeof value === 'object') {
              return 'object';
            }
            return 'unknown';
          }

          async getTransmissionMethod(originalText, newText) {
              const originalSize = this.encodeSize(originalText);
              const tasks = this.patchers.map((p,id)=>{
                return ()=>{
                  const timeLimitMs = this.timeLimitMs;
                  return new Promise((resolve, reject)=>{
                      let patch, error=false;

                      try {
                        patch = p.createPatch(originalText, newText);
                        // console.log(`${p.method}: ${this.checkType(patch)}`)
                      } catch(e) {
                        if(this.showErrors) console.log(e);
                        error=true;
                      }

                      if(!error) {
                        try {
                          const decode= p.decode(originalText, patch);
                          // if(p.decode(originalText, patch) != newText) {
                          if(!this.strObjectEqual(p.decode(originalText, patch),newText)) {
                            throw new DeltaUpdateError(`${p.method} decode not same ${decode}`);
                          }
                        } catch(e) {
                          if(this.showErrors) console.log(e);
                          error=true;
                        }
                      }

                      if(!error) {
                        if (typeof patch === 'undefined') {
                            error=true;
                        }
                      }

                      resolve({
                        method: p.method,
                        patch: patch,
                        size: (error) ? 0 : p.getSize(patch),
                        p:p,
                        error:error,
                        id:id
                      });

                      return;

                  });

                }

              });

              const results = (await Promise.all(tasks.map((task) => task()))).filter(p=>p.error==false);
              const newSize = this.encodeSize(newText);
              results.sort((a,b)=>a.size-b.size);

              if(this.showResults) console.log(results);

              return {
                  originalSize,
                  newSize:newSize,
                  patchSize: results[0].size,
                  method: results[0].method,
                  methodId: results[0].id,
                  data: results[0].patch,
                  decode: results[0].p.decode(originalText, results[0].patch),
              };
          }
        }

        class Conversation {
          constructor(recipientId, broadcastCallback, outputCallback) {
            this.expectedSequenceNumber = {};
            this.sequenceNumber = {};
            this.deltaUpdates = {};
            this.server = {};
            this.client = {};
            this.ack = {};
            this.timeElapsed = {};
            this.cacheEnabled = true;
            this.setCategory("default");
            this.broadcastCallback = broadcastCallback;
            this.outputCallback = outputCallback;
            this.recipientId = recipientId;
            this.lastPatch = "";
            this.initializeManager();
          }

          enableCache(val) {
            this.cacheEnabled = val;
          }

          initializeManager() {
            this.manager = new DiffManager(['string', 'number', 'array']);

            this.cacheObjectA = new PatcherJ();
            this.manager.addPatcher(this.cacheObjectA);

            this.cacheObjectB = new PatcherI();
            this.manager.addPatcher(this.cacheObjectB);

            this.cacheObjectA.setConversation(this.recipientId);
            this.cacheObjectB.setConversation(this.recipientId);
          }

          setCategory(category) {
            this.category = category;

            if(!this.server[this.category]) this.server[this.category] = "";
            if(!this.client[this.category]) this.client[this.category] = "";
            if(!this.deltaUpdates[this.category]) this.deltaUpdates[this.category] = [];
            if(!this.sequenceNumber[this.category]) this.sequenceNumber[this.category] = 0;
            if(!this.expectedSequenceNumber[this.category]) this.expectedSequenceNumber[this.category] = 1;
            if(!this.ack[this.category]) this.ack[this.category] = 0;
            if(!this.timeElapsed[this.category]) this.timeElapsed[this.category] = 0;
          }

          setServerData(data) {
            this.server[this.category] = data;
          }

          getServerData() {
            return this.server[this.category];
          }

          setClientData(data) {
            this.client[this.category] = data;
          }

          getClientData() {
            return this.client[this.category];
          }

          getSequenceNumber() {
            return this.sequenceNumber[this.category];
          }

          incrementSequenceNumber() {
            this.sequenceNumber[this.category]++;
          }

          getExpectedSequenceNumber() {
            return this.expectedSequenceNumber[this.category];
          }

          incrementExpectedSequenceNumber() {
            this.expectedSequenceNumber[this.category]++;
          }

          setExpectedSequenceNumber(data) {
            this.expectedSequenceNumber[this.category] = data;
          }

          getAck() {
            return this.ack[this.category];
          }

          getTimeElapsedSinceLastAckReply(category) {
            if(this.sequenceNumber[category] <= this.ack[category]) return 0;

            return Date.now() - this.timeElapsed[category];
          }

          async createDelta(newText, serverData, category) {

            const result = await this.manager.getTransmissionMethod(serverData, newText);

            this.sequenceNumber[category]++;
            this.timeElapsed[category] = Date.now();

            const packet = { id: result.methodId, data: result.data, sequenceNumber: this.sequenceNumber[category] };

            this.deltaUpdates[category].push(packet);

            // simulate failing packets at 30%
            // if(Math.random() > 0.3)
              this.broadcastCallback('delta-update', packet, 0, this.recipientId, category);

            return packet;
          }

          handleAcknowledgement(ackSequenceNumber) {
            this.deltaUpdates[this.category] = this.deltaUpdates[this.category].filter(update => update.sequenceNumber > ackSequenceNumber);
            this.ack[this.category] = ackSequenceNumber;
          }

          acknowledge() {
            this.broadcastCallback('handle-acknowlegement', {ackSequenceNumber: this.getExpectedSequenceNumber()-1}, 0, this.recipientId, this.category);
          }

          applyDeltaOwnerSide(serverData, patch, category) {
            this.server[category] = this.manager.patchers[patch.id].decode(serverData, patch.data);
          }

          applyDeltaClientSide(patch) {
            if(patch.sequenceNumber !== this.getExpectedSequenceNumber()) {
              throw new DeltaUpdateError('Unexpected sequence number.');
              return;
            }

            this.lastPatch = patch.data;
            this.setClientData(this.manager.patchers[patch.id].decode(this.getClientData(), patch.data));
            this.incrementExpectedSequenceNumber();
            this.updateCache(this.getClientData());

            this.acknowledge(); // send acknowledgement (only client side should do this)
          }

          // cache conversations whenever you send or recieve (you have to reset this if the recipient disconnects and restarts a new conversation)
          updateCache(data) {
            if(!this.cacheEnabled) return;
            this.cacheObjectA.cacheConversationWords(data);
            this.cacheObjectB.cacheConversationMessage(data);
          }

          // request missing delta from id to latest
          requestMissingDeltas() {
            this.broadcastCallback('request-missing-deltas', {fromId: this.getExpectedSequenceNumber()}, 0, this.recipientId, this.category);
          }

          handleFullSync(data, sequenceNumber) {
            // erase cache for consistency
            this.cacheObjectA.cache = {};
            this.cacheObjectB.cache = {};

            this.setClientData(data);
            this.setExpectedSequenceNumber(sequenceNumber + 1);

            this.acknowledge(); // send acknowledgement (only client side should do this)
          }

          handleMissingDeltas(deltas) {
            deltas.forEach(delta=>{
              this.applyDeltaClientSide(delta);
            });
          }

          getSize(packet) {
            return (new Blob([JSON.stringify(packet)])).size;
          }

          sendMissingDeltas(fromId) {
            if(typeof fromId == 'undefined') return;

            const deltas = this.deltaUpdates[this.category].filter(update => update.sequenceNumber >= fromId);

            if(deltas.length > 0 && (this.getSize(deltas) < this.getSize(this.getServerData()) )  ) {
              this.broadcastCallback('handle-missing-deltas', {deltas: deltas}, 0, this.recipientId, this.category);
              return;
            }

            this.sendFullSync();
          }

          sendFullSync() {
            // erase cache for consistency
            this.cacheObjectA.cache = {};
            this.cacheObjectB.cache = {};
            this.broadcastCallback('handle-full-sync', {data: this.getServerData(), sequenceNumber: this.getSequenceNumber()}, 0, this.recipientId, this.category);

          }

          async sendState(newText) {

              const serverData = this.getServerData();
              const category = this.category;

              if(serverData == newText) return;

              // console.time('calculating delta');
              const delta = await this.createDelta(newText, serverData, category);
              this.applyDeltaOwnerSide(serverData, delta, category);
              // console.timeEnd('calculating delta');

              this.outputCallback(this.server[category], this.recipientId, true, this.lastPatch);
          }

          recieveDelta(patch) {
              try {
                this.applyDeltaClientSide(patch);
                this.outputCallback(this.getClientData(), this.recipientId, false, this.lastPatch);
              } catch(err) {
                if (err instanceof DeltaUpdateError) {
                  // console.error('Patching Error:', err.message);
                  this.requestMissingDeltas();
                } else {
                  console.error('An unknown error occurred, PLEASE FIX:', err);
                }
              }
          }
        }

        /*function handleDeltas(buffer, senderId="") {
          peerGame.test.value = lad(`${buffer} ${new TextEncoder().encode(buffer).length} bytes`);

          const event = readDeltaEvent(buffer);
          const eventData = event.event;
          const eventType = event.type;

          if(!conversations[senderId]) {
            handleEvents(eventData.data, senderId, true);
            return;
          };

          conversations[senderId].setCategory(event.category);

          switch(eventType) {
              case "handle-acknowlegement":
                conversations[senderId].handleAcknowledgement(eventData.ackSequenceNumber);
              break;
              case "handle-full-sync":
                conversations[senderId].handleFullSync(eventData.data, eventData.sequenceNumber);
              break;
              case "handle-missing-deltas":
                conversations[senderId].handleMissingDeltas(eventData.deltas);
              break;
              case "request-missing-deltas":
                conversations[senderId].sendMissingDeltas(eventData.fromId);
              break;
              case "delta-update":
                conversations[senderId].recieveDelta(eventData);
              break;
          }
        }*/



window.DeltaUpdateError = DeltaUpdateError;
window.Conversation = Conversation;
window.WordIdMapper = WordIdMapper;
window.DiffManager = DiffManager;
window.PatcherJ = PatcherJ;
window.PatcherI = PatcherI;
window.ProtoBuffer = ProtoBuffer;
window.ProtoKnockOff = ProtoKnockOff;
};
gdjs.evtsExt__OnlineMultiplayerFirebase__LoadDeltaUpdaterLibraries.userFunc0x37a3d70 = function(runtimeScene, eventsFunctionContext) {
"use strict";
window.eventTypeDictionary = new WordIdMapper([
  "action",
  "Adrenaline",
  "AgressiveMob",
  "AnnouncementSent",
  "AOE",
  "Buff",
  "Casting",
  "CastingDone",
  "CastingSkill",
  "CastingSkillDone",
  "ChangeState",
  "ChatMessageSent",
  "ContinuousSkill",
  "Create",
  "CreateMob",
  "Delete",
  "disconnected",
  "DisplayShooting",
  "DodgeMaster",
  "DrillResult",
  "DropFromMobs",
  "DropItem",
  "DropItemToTarget",
  "DropRandomItem",
  "EndSkillCombo",
  "GiveItem",
  "GunShot",
  "Heal",
  "KillMob",
  "magical_soul",
  "MagicalSoul",
  "mana_arrow",
  "ManaArrow",
  "MessageCommand",
  "MovePlayer",
  "MoveRandomly",
  "NormalAttack",
  "NormalAttackDone",
  "online",
  "PickUpItem",
  "PlaceItem",
  "PlayerLevelUp",
  "PlayerLocalOff",
  "PlayerLocalOn",
  "PlayerSkillLevelUp",
  "RequestCreate",
  "SetSharedString",
  "StartSkillCombo",
  "stone_shower",
  "StoneShower",
  "StopMoving",
  "Summon",
  "SynchronizePlayerState",
  "TestCombo",
  "TestContinuousUpdateAlgorithm",
  "TestLocalOff",
  "TestLocalOn",
  "TestNormalOff",
  "TestNormalOn",
  "TestPoison",
  "Update",
  "UpdateCoordinates",
  "UpdateDrillState",
  "UpdateState",
  "WarpPlayer",
//   "LastHistoryPosition",
]);


// Replace peer Id with the sender id
class UUIDReplacer {
    constructor(peerId) {
        this.key = "!s";
        this.toReplace = peerId;
    }

    // Replace all instances of 'toReplace' with 'key'
    replaceAll(str) {
        if(str.includes(this.key)) throw new Error('key collision!');

        return str.split(this.toReplace).join(this.key);
    }

    // Replace all instances of 'key' back with 'toReplace'
    revertAll(replacedStr) {
        return replacedStr.split(this.key).join(this.toReplace);
    }
}

function compressList(dataList) {
    const list = {
        "seed": {
            "start": 123216,
            "end": 123217
        },
        "target": "7a5da262-6e6e-4190-be97-04681ddd71f7"
    };
    const listProto = new ProtoKnockOff(list);

    dataList = JSON.parse(dataList);

    for(var key in dataList) {
        dataList[key] = listProto.createBuffer(dataList[key]);
    }

    dataList = JSON.stringify(dataList);
}

function decompressList(dataList) {
    const list = {
        "seed": {
            "start": 123216,
            "end": 123217
        },
        "target": "7a5da262-6e6e-4190-be97-04681ddd71f7"
    };
    const listProto = new ProtoKnockOff(list);

    dataList = JSON.parse(dataList);

    for(var key in dataList) {
        dataList[key] = listProto.readBuffer(dataList[key]);
    }

    dataList = JSON.stringify(dataList);
}

function uint8ArrayToBase64(uint8Array) {
    return btoa(String.fromCharCode.apply(null, uint8Array));
}

function compressEvent(peerId, rawEvent) {

    const eventTemplate = {
        "type": "string",
        "data": "string",
        "delayTimestamp": 123456
    };

    const event = JSON.parse(JSON.stringify(rawEvent));
    const eventProto = new ProtoKnockOff(eventTemplate);

    if(typeof event.data['list'] != 'undefined') compressList(event.data.list);

    event.type = eventTypeDictionary.get(event.type);

    const eventBuff = eventProto.createBuffer(event);
    const replacer = new UUIDReplacer(peerId);
    const replacedStr = replacer.replaceAll(eventBuff);
    const reverted    = replacer.revertAll(replacedStr);
    const revertedEvent = eventProto.readBuffer(reverted);

    if(typeof event.data['list'] != 'undefined') decompressList(event.data.list);

    revertedEvent.type = eventTypeDictionary.read(revertedEvent.type);

    var tempA = JSON.parse(JSON.stringify(rawEvent));
    var tempB = JSON.parse(JSON.stringify(revertedEvent));

    if(typeof tempA.data['list'] != 'undefined') {
        tempA.data.list = JSON.parse(tempA.data.list);
        tempB.data.list = JSON.parse(tempB.data.list);
    }

    if(!eventProto.strObjectEqual(tempA, tempB)) throw new Error('decode not the same');

    // return replacedStr;
    return {
        d: replacedStr,
        z: LZString.compressToUTF16(replacedStr),
        b: uint8ArrayToBase64(pako.deflate(replacedStr, { to: 'string' }))
    };
}

function getSize(patch) {
  return new TextEncoder().encode(patch).length
}

function uint8ArrayToString(uint8Array) {
  // Create a TextDecoder object to decode the binary data
  const textDecoder = new TextDecoder('utf-8');

  // Use the TextDecoder to decode the Uint8Array and return the resulting string
  return textDecoder.decode(uint8Array);
}

let maxBytes = 0;
let maxMessage = "";

function sendAsDeflated(peerId, type, data, delay, senderCallback) {
    let event = {
        'type': type,
        'data': data,
        'delayTimestamp': delay
    };

    let recievedBytes = getSize(JSON.stringify(event));
    let eventPicked = event.type;

    try {
        const buff = compressEvent(peerId, event);

        // Extract entries and use reduce to find the key with the smallest value
        const picked = Object.entries(buff).reduce((minKey, [key, value]) => {
            return getSize(value) < getSize(buff[minKey]) ? key : minKey;
        }, Object.keys(buff)[0]);

        event = {
            'type': picked,
            'data': buff[picked],
            'delayTimestamp': 0
        };

        recievedBytes = getSize(buff[picked]);

        senderCallback(picked, buff[picked], 0, maxMessage);

    } catch(e) {
        console.error(e);

        senderCallback(type, JSON.parse(data), delay, maxMessage);
    }

    if(recievedBytes > maxBytes) {
        maxBytes = recievedBytes;
        maxMessage = `${maxBytes} bytes ${event.type} ${JSON.stringify(event)}`;
    }
}

window.sendAsDeflated = sendAsDeflated;


};
gdjs.evtsExt__OnlineMultiplayerFirebase__LoadDeltaUpdaterLibraries.userFunc0x384d2a0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
// Define the dictionary mapping
const generalDictionary = [
"action",
"address",
"Adrenaline",
"AgressiveMob",
"animation",
"Animation",
"AnimationIndex",
"AnnouncementSent",
"AOE",
"baseStats",
"blelb",
"bluey",
"BossRoomLayout",
"Buff",
"Bunny",
"captain",
"Casting",
"CastingDone",
"CastingSkill",
"CastingSkillDone",
"castLocally",
"cattow",
"ChangeState",
"charm",
"ChatMessageSent",
"Cheer",
"city",
"clientTime",
"color",
"compound-waste",
"ContinuousSkill",
"Create",
"CreateMob",
"critColor",
"critical",
"damage",
"data",
"delayTimestamp",
"Delete",
"disconnected",
"DisplayShooting",
"DodgeMaster",
"Dragon",
"Drill",
"DrillResult",
"DrillSequence",
"DrillStart",
"drillState",
"DrillState",
"DropFromMobs",
"DropItem",
"DropItemToTarget",
"DropRandomItem",
"email",
"EndSkillCombo",
"Fainted",
"flipState",
"from",
"GiveItem",
"gray-round-seal",
"Guide",
"Gun AP",
"Gun-Mode",
"Gun-Shoot",
"GunShot",
"gunState",
"Heal",
"health",
"heavy_carrier_card",
"Idle-A",
"Idle-B",
"isPlayer",
"ItemId",
"ItemName",
"KillMob",
"lieutenant",
"lilio",
"Lion",
"list",
"magic",
"magical_soul",
"MagicalSoul",
"Mana",
"mana_arrow",
"ManaArrow",
"MaxHp",
"MaxMp",
"message",
"MessageCommand",
"miss",
"MobName",
"MovePlayer",
"MoveRandomly",
"name",
"New York",
"NormalAttack",
"NormalAttackDone",
"online",
"peerId",
"pet_boxer_lina",
"physical",
"pickedColor",
"picker",
"PickUpItem",
"PlaceItem",
"PlayerLevelUp",
"PlayerLocalOff",
"PlayerLocalOn",
"playerName",
"PlayerSkillLevelUp",
"poolData",
"poopy",
"postalCode",
"power",
"Racoon",
"RequestCreate",
"restState",
"SandCityMapLayout",
"seed",
"sense",
"sergeant",
"SetSharedString",
"shuriken_master_card",
"skill",
"Sleep",
"Standing",
"StartSkillCombo",
"startX",
"startY",
"stone_shower",
"stone_strike_card",
"StoneShower",
"StopMoving",
"succubus",
"Summon",
"SynchronizePlayerState",
"tangerine",
"TestCombo",
"TestContinuousUpdateAlgorithm",
"TestLocalOff",
"TestLocalOn",
"TestNormalOff",
"TestNormalOn",
"TestPoison",
"timeOfDeath",
"torobbie",
"torobbie-card",
"tutankhamen",
"TutorialMapLayout",
"type",
"Update",
"UpdateAnimationState",
"UpdateCoordinates",
"UpdateDrillState",
"UpdateState",
"Walking",
"WarpPlayer",
"weightPercent",
"lastSent",
"Data",
"Type",
"DelayMillisecond",
"critAnimation",
"annoyed",
"bulb",
"coffee",
"confuse",
"cry",
"finger",
"fire",
"fizz",
"flirt",
"grudge",
"heart",
"laugh",
"love",
"penguin",
"rage",
"rice",
"sad",
"spit",
"sun",
"surprise",
"sweat",
"tongue",
"emoji",
];

const dictionary = {};
generalDictionary.forEach((g,i)=>dictionary[g]=`t${i}`);

// Create a reversed dictionary for decoding
const reversedDictionary = {};
for (let key in dictionary) {
    reversedDictionary[dictionary[key]] = key;
}

// Function to tokenize the object
function tokenizeObject(obj, dictionary) {
    if (Array.isArray(obj)) {
        return obj.map(item => tokenizeObject(item, dictionary));
    } else if (obj !== null && typeof obj === 'object') {
        const tokenizedObj = {};
        for (let key in obj) {
            const tokenizedKey = dictionary.hasOwnProperty(key) ? dictionary[key] : key;
            tokenizedObj[tokenizedKey] = tokenizeObject(obj[key], dictionary);
        }
        return tokenizedObj;
    } else if(typeof obj === 'number'){
        // floats are taking up spaces trim it
        return obj.toFixed(4)*1;
    } else {
        // If value is not an object or array, tokenize it if it's in the dictionary
        return dictionary.hasOwnProperty(obj) ? dictionary[obj] : obj;
    }
}

// Function to decode the object
function decodeObject(obj, dictionary) {
    if (Array.isArray(obj)) {
        return obj.map(item => decodeObject(item, dictionary));
    } else if (obj !== null && typeof obj === 'object') {
        const decodedObj = {};
        for (let key in obj) {
            const decodedKey = dictionary.hasOwnProperty(key) ? dictionary[key] : key;
            decodedObj[decodedKey] = decodeObject(obj[key], dictionary);
        }
        return decodedObj;
    } else {
        // If value is not an object or array, decode it if it's in the dictionary
        return dictionary.hasOwnProperty(obj) ? dictionary[obj] : obj;
    }
}

function tokenizeVariable(obj) {
    return tokenizeObject(obj, dictionary);
}

function detokenizeVariable(tokenizedObj) {
    return decodeObject(tokenizedObj, reversedDictionary);
}

window.tokenizeVariable = tokenizeVariable;
window.detokenizeVariable = detokenizeVariable;
};
gdjs.evtsExt__OnlineMultiplayerFirebase__LoadDeltaUpdaterLibraries.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__OnlineMultiplayerFirebase__LoadDeltaUpdaterLibraries.userFunc0x49fb940(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{


gdjs.evtsExt__OnlineMultiplayerFirebase__LoadDeltaUpdaterLibraries.userFunc0x248c430(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{


gdjs.evtsExt__OnlineMultiplayerFirebase__LoadDeltaUpdaterLibraries.userFunc0x37a3d70(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{


gdjs.evtsExt__OnlineMultiplayerFirebase__LoadDeltaUpdaterLibraries.userFunc0x384d2a0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__OnlineMultiplayerFirebase__LoadDeltaUpdaterLibraries.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__OnlineMultiplayerFirebase__LoadDeltaUpdaterLibraries.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__OnlineMultiplayerFirebase__LoadDeltaUpdaterLibraries.registeredGdjsCallbacks = [];