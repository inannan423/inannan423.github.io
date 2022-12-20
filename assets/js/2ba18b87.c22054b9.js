"use strict";(self.webpackChunkjetzihan=self.webpackChunkjetzihan||[]).push([[1329],{3905:(n,t,e)=>{e.d(t,{Zo:()=>u,kt:()=>f});var r=e(67294);function a(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function o(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function i(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?o(Object(e),!0).forEach((function(t){a(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function c(n,t){if(null==n)return{};var e,r,a=function(n,t){if(null==n)return{};var e,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e])}return a}var l=r.createContext({}),s=function(n){var t=r.useContext(l),e=t;return n&&(e="function"==typeof n?n(t):i(i({},t),n)),e},u=function(n){var t=s(n.components);return r.createElement(l.Provider,{value:t},n.children)},m={inlineCode:"code",wrapper:function(n){var t=n.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(n,t){var e=n.components,a=n.mdxType,o=n.originalType,l=n.parentName,u=c(n,["components","mdxType","originalType","parentName"]),p=s(e),f=a,h=p["".concat(l,".").concat(f)]||p[f]||m[f]||o;return e?r.createElement(h,i(i({ref:t},u),{},{components:e})):r.createElement(h,i({ref:t},u))}));function f(n,t){var e=arguments,a=t&&t.mdxType;if("string"==typeof n||a){var o=e.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=n,c.mdxType="string"==typeof n?n:a,i[1]=c;for(var s=2;s<o;s++)i[s]=e[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,e)}p.displayName="MDXCreateElement"},60646:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=e(87462),a=(e(67294),e(3905));const o={slug:"videoprocess",title:"\u6570\u5b57\u89c6\u9891\u5904\u7406\u57fa\u672c\u65b9\u6cd5",authors:"Chengzihan",tags:["java","opencv"]},i=void 0,c={permalink:"/blog/videoprocess",editUrl:"https://github.com/inannan423/inannan423.github.io/tree/main/blog/2022-12-20-videoprocess.md",source:"@site/blog/2022-12-20-videoprocess.md",title:"\u6570\u5b57\u89c6\u9891\u5904\u7406\u57fa\u672c\u65b9\u6cd5",description:"\u5173\u952e\u5e27\u63d0\u53d6",date:"2022-12-20T00:00:00.000Z",formattedDate:"December 20, 2022",tags:[{label:"java",permalink:"/blog/tags/java"},{label:"opencv",permalink:"/blog/tags/opencv"}],readingTime:14.27,hasTruncateMarker:!1,authors:[{name:"Chengzihan",title:"Orange Chengzihan",url:"https://github.com/inannan423",imageURL:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20220710133634.png",key:"Chengzihan"}],frontMatter:{slug:"videoprocess",title:"\u6570\u5b57\u89c6\u9891\u5904\u7406\u57fa\u672c\u65b9\u6cd5",authors:"Chengzihan",tags:["java","opencv"]},nextItem:{title:"chatGPT \u63a5\u5165\u5fae\u4fe1",permalink:"/blog/chatGPT"}},l={authorsImageUrls:[void 0]},s=[{value:"\u5173\u952e\u5e27\u63d0\u53d6",id:"\u5173\u952e\u5e27\u63d0\u53d6",level:2},{value:"\u5206\u6c34\u5cad\u7b97\u6cd5",id:"\u5206\u6c34\u5cad\u7b97\u6cd5",level:3},{value:"\u6700\u5927\u71b5\u7b97\u6cd5",id:"\u6700\u5927\u71b5\u7b97\u6cd5",level:3},{value:"\u76f4\u65b9\u56fe\u53cc\u5cf0\u6cd5",id:"\u76f4\u65b9\u56fe\u53cc\u5cf0\u6cd5",level:3},{value:"\u89c6\u9891\u589e\u5f3a\u548c\u6ee4\u6ce2",id:"\u89c6\u9891\u589e\u5f3a\u548c\u6ee4\u6ce2",level:2},{value:"\u6539\u53d8\u89c6\u9891\u4eae\u5ea6",id:"\u6539\u53d8\u89c6\u9891\u4eae\u5ea6",level:3},{value:"\u6539\u53d8\u89c6\u9891\u5bf9\u6bd4\u5ea6",id:"\u6539\u53d8\u89c6\u9891\u5bf9\u6bd4\u5ea6",level:3},{value:"\u76f4\u65b9\u56fe\u5747\u8861\u5316",id:"\u76f4\u65b9\u56fe\u5747\u8861\u5316",level:3},{value:"\u5747\u503c\u6ee4\u6ce2",id:"\u5747\u503c\u6ee4\u6ce2",level:3},{value:"\u5176\u4ed6\u6ee4\u6ce2",id:"\u5176\u4ed6\u6ee4\u6ce2",level:3},{value:"\u8fd0\u52a8\u76ee\u6807\u68c0\u6d4b",id:"\u8fd0\u52a8\u76ee\u6807\u68c0\u6d4b",level:2},{value:"\u5e27\u5dee\u6cd5",id:"\u5e27\u5dee\u6cd5",level:3},{value:"\u80cc\u666f\u51cf\u6cd5",id:"\u80cc\u666f\u51cf\u6cd5",level:3},{value:"\u8fb9\u7f18\u68c0\u6d4b",id:"\u8fb9\u7f18\u68c0\u6d4b",level:3},{value:"\u4e09\u5e27\u5dee\u6cd5",id:"\u4e09\u5e27\u5dee\u6cd5",level:3}],u={toc:s};function m(n){let{components:t,...e}=n;return(0,a.kt)("wrapper",(0,r.Z)({},u,e,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5173\u952e\u5e27\u63d0\u53d6"},"\u5173\u952e\u5e27\u63d0\u53d6"),(0,a.kt)("p",null,"\u5b9e\u73b0\u89c6\u9891",(0,a.kt)("inlineCode",{parentName:"p"},"(.avi)"),"\u955c\u5934\u7a81\u53d8\u68c0\u6d4b\u5e76\u63d0\u53d6\u51fa\u5173\u952e\u5e27\uff0c\u7136\u540e\u5bf9\u5176\u505a\u5e27\u5185\u56fe\u50cf\u5206\u5272\uff0c\u663e\u793a\u5206\u5272\u7ed3\u679c\uff08\u5173\u952e\u5e27\u63d0\u53d6\u53ca\u56fe\u50cf\u5206\u5272\u65b9\u6cd5\u81ea\u9009\uff0c\u5404\u5b8c\u6210\u4e00\u79cd\u5373\u53ef\uff0c\u5982\u5b8c\u6210\u591a\u79cd\u65b9\u6cd5\uff0c\u53ef\u52a0\u5206\uff09\u3002"),(0,a.kt)("h3",{id:"\u5206\u6c34\u5cad\u7b97\u6cd5"},"\u5206\u6c34\u5cad\u7b97\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'void watershed(Mat& _img)\n{\n    Mat image = _img;\n    Mat huidu;\n    // \u8f6c\u6362\u6210\u7070\u5ea6\u56fe\u50cf\n    cvtColor(image, huidu, CV_RGB2GRAY);\n    // \u9ad8\u65af\u6ee4\u6ce2\u548c\u8fb9\u7f18\u68c0\u6d4b\n    GaussianBlur(huidu, huidu, Size(3, 3), 0, 0);\n    Canny(huidu, huidu, 50, 150, 3);\n    // \u8f6e\u5ed3\n    vector<vector<Point>> contours;\n    vector<Vec4i> hierarchy;\n    // \u627e\u5230\u8f6e\u5ed3\n    findContours(huidu, contours, hierarchy, RETR_TREE, CHAIN_APPROX_SIMPLE, Point());\n    // \u751f\u6210\u5206\u6c34\u5cad\u56fe\u50cf\n    Mat imageContours = Mat::zeros(image.size(), CV_8UC1);\n    Mat biaoji(image.size(), CV_32S);\n    biaoji = Scalar::all(0);\n    int index = 0, n1 = 0;\n    // \u7ed8\u5236\u8f6e\u5ed3\n    for (; index >= 0; index = hierarchy[index][0], n1++)\n    {\n    drawContours(biaoji, contours, index, Scalar::all(n1 + 1), 1, 8, hierarchy); // \u7ed8\u5236\u8f6e\u5ed3\n    drawContours(imageContours, contours, index, Scalar(255), 1, 8, hierarchy); // \u7ed8\u5236\u8f6e\u5ed3\n    }\n\n    Mat biaojiShows;\n    convertScaleAbs(biaoji, biaojiShows);\n    watershed(image, biaoji);\n\n    Mat w1; // \u5206\u6c34\u5cad\u540e\u7684\u56fe\u50cf\n    convertScaleAbs(biaoji, w1); // \u8f6c\u6362\u62108\u4f4d\u56fe\u50cf\n    imshow("\u5206\u6c34\u5cad\u7b97\u6cd5", w1);\n    waitKey(10);\n}\n')),(0,a.kt)("h3",{id:"\u6700\u5927\u71b5\u7b97\u6cd5"},"\u6700\u5927\u71b5\u7b97\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'/**\n* @brief \u6700\u5927\u71b5\u6cd5\n* @param currentframe \u8f93\u5165\u56fe\u50cf\n* @param threshImage \u8f93\u51fa\u56fe\u50cf\n*/\n\nvoid threshEntroy(Mat currentframe)\n{\n int hist_t[256] = { 0 }; //\u6bcf\u4e2a\u50cf\u7d20\u503c\u4e2a\u6570\n int index = 0;//\u6700\u5927\u71b5\u5bf9\u5e94\u7684\u7070\u5ea6\n double Property = 0.0;// \u50cf\u7d20\u5360\u6709\u6bd4\u7387\n double maxEntropy = -1.0;//\u6700\u5927\u71b5\n double frontEntropy = 0.0;//\u524d\u666f\u71b5\n double backEntropy = 0.0;//\u80cc\u666f\u71b5\n int sum_t = 0; //\u50cf\u7d20\u603b\u6570\n int nCol = currentframe.cols;//\u6bcf\u884c\u7684\u50cf\u7d20\u6570\n // \u8ba1\u7b97\u6bcf\u4e2a\u50cf\u7d20\u503c\u7684\u4e2a\u6570\n for (int i = 0; i < currentframe.rows; i++)\n {\n  uchar* pData = currentframe.ptr<uchar>(i);\n    for (int j = 0; j < nCol; ++j)\n    {\n        ++sum_t;\n        hist_t[pData[j]] += 1;\n    }\n }\n // \u8ba1\u7b97\u6700\u5927\u71b5\n for (int i = 0; i < 256; i++)\n {\n  // \u80cc\u666f\u50cf\u7d20\u6570\n  double sum_back = 0;\n  for (int j = 0; j < i; j++)\n  {\n    sum_back += hist_t[j];\n  }\n\n  //\u80cc\u666f\u71b5\n  for (int j = 0; j < i; j++)\n  {\n    if (hist_t[j] != 0)\n    {\n        Property = hist_t[j] / sum_back;\n        backEntropy += -Property * logf((float)Property);\n    }\n  }\n  //\u524d\u666f\u71b5\n  for (int k = i; k < 256; k++)\n  {\n    if (hist_t[k] != 0)\n    {\n        Property = hist_t[k] / (sum_t - sum_back);\n        frontEntropy += -Property * logf((float)Property);\n    }\n  }\n\n  if (frontEntropy + backEntropy > maxEntropy)// \u6c42\u6700\u5927\u71b5\n  {\n        maxEntropy = frontEntropy + backEntropy;\n        index = i;\n  }\n  frontEntropy = 0.0; // \u524d\u666f\u71b5\u6e05\u96f6\n  backEntropy = 0.0; // \u80cc\u666f\u71b5\u6e05\u96f6\n }\n Mat threshImage;\n threshold(currentframe, threshImage, index, 255, 0); //\u8fdb\u884c\u9608\u503c\u5206\u5272\n imshow("\u6700\u5927\u71b5\u6cd5", threshImage);\n}\n')),(0,a.kt)("h3",{id:"\u76f4\u65b9\u56fe\u53cc\u5cf0\u6cd5"},"\u76f4\u65b9\u56fe\u53cc\u5cf0\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'/**\n* @brief \u8ba1\u7b97\u76f4\u65b9\u56fe\uff0c\u4e24\u4e2a\u5cf0\u503c\uff0c\u7136\u540e\u6ce2\u8c37\u9608\u503c\u6cd5\n* @param currentframe \u8f93\u5165\u56fe\u50cf\n*/\n\nvoid threshBasic(const Mat& currentframe)\n{\n    // \u8ba1\u7b97\u7070\u5ea6\u76f4\u65b9\u56fe\uff0czero\u51fd\u6570\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a\u5927\u5c0f\u4e3a256\u7684Mat\u5bf9\u8c61\uff0c\u7c7b\u578b\u4e3aCV_32F\uff0c\u5168\u90e8\u521d\u59cb\u5316\u4e3a0\n    Mat histogram = Mat::zeros(Size(256, 1), CV_32SC1);\n    // \u83b7\u53d6\u884c\u9ad8\n    int rows = currentframe.rows;\n    int cols = currentframe.cols;\n    // \u904d\u5386\u56fe\u50cf\uff0c\u8ba1\u7b97\u7070\u5ea6\u76f4\u65b9\u56fe\n    for (int i = 0; i < rows; i++){\n        for (int j = 0; j < cols; j++){\n            int index = int(currentframe.at<uchar>(i, j));\n            histogram.at<int>(0, index) += 1;\n        }\n    }\n    // \u627e\u5230\u7070\u5ea6\u76f4\u65b9\u56fe\u6700\u5927\u5cf0\u503c\u5bf9\u5e94\u7684\u7070\u5ea6\u503c\n    Point peak1;\n    // \u5728\u6570\u7ec4\u4e2d\u627e\u5230\u5168\u5c40\u6700\u5c0f\u548c\u6700\u5927\u503c\n    minMaxLoc(histogram, NULL, NULL, NULL, &peak1);\n    int p1 = peak1.x;\n    Mat gray_2 = Mat::zeros(Size(256, 1), CV_32FC1);\n    for (int k = 0; k < 256; k++)\n    {\n        int hist_k = histogram.at<int>(0, k);\n        gray_2.at<float>(0, k) = pow(float(k - p1), 2) * hist_k;\n    }\n    Point peak2;\n    minMaxLoc(gray_2, NULL, NULL, NULL, &peak2);\n    int p2 = peak2.x;\n    //\u627e\u5230\u4e24\u4e2a\u5cf0\u503c\u4e4b\u95f4\u7684\u6700\u5c0f\u503c\u5bf9\u5e94\u7684\u7070\u5ea6\u503c\uff0c\u4f5c\u4e3a\u9608\u503c\n    Point threshLoc;\n    int thresh = 0;\n    if (p1 < p2) {\n        minMaxLoc(histogram.colRange(p1, p2), NULL, NULL, &threshLoc);\n        thresh = p1 + threshLoc.x + 1;\n    }\n    else {\n        minMaxLoc(histogram.colRange(p2, p1), NULL, NULL, &threshLoc);\n        thresh = p2 + threshLoc.x + 1;\n    }\n    /**\n     * CV_EXPORTS_W double threshold( InputArray src, OutputArray dst,\n             double thresh, double maxval, int type );\n    * src:\u8f93\u5165\u56fe\u50cf\n    * dst:\u8f93\u51fa\u56fe\u50cf\n    * thresh:\u9608\u503c\n    * maxval:\u8f93\u51fa\u56fe\u50cf\u4e2d\u6700\u5927\u503c\n    * type:\u9608\u503c\u7c7b\u578b\uff0cTHRESH_BINARY \u6307\u4e8c\u503c\u5316\n    */\n    Mat threshImage;\n    threshold(currentframe, threshImage, thresh, 255, THRESH_BINARY);\n    imshow("\u76f4\u65b9\u56fe\u9608\u503c\u5206\u5272\u7ed3\u679c", threshImage);\n}\n')),(0,a.kt)("h2",{id:"\u89c6\u9891\u589e\u5f3a\u548c\u6ee4\u6ce2"},"\u89c6\u9891\u589e\u5f3a\u548c\u6ee4\u6ce2"),(0,a.kt)("p",null,"\u7f16\u7a0b\u5b9e\u73b0\u5177\u6709\u89c6\u9891\u589e\u5f3a\u53ca\u6ee4\u6ce2\u529f\u80fd\u7684\u89c6\u9891\u64ad\u653e\u5668\uff0c\u5305\u62ec\u4ee5\u4e0b\u529f\u80fd\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u63a7\u5236\u89c6\u9891\u7684\u64ad\u653e\u4e0e\u6682\u505c\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u63a7\u5236\u89c6\u9891\u64ad\u653e\u8fdb\u5ea6\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u53ef\u8c03\u8282\u5f53\u524d\u89c6\u9891\u7684\u5bf9\u6bd4\u5ea6\u4e0e\u4eae\u5ea6\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u53ef\u5bf9\u89c6\u9891\u8fdb\u884c\u589e\u5f3a\uff08\u5982\u76f4\u65b9\u56fe\u5747\u8861\u5316\uff09\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u53ef\u5bf9\u89c6\u9891\u8fdb\u884c\u6ee4\u6ce2\uff08\u4efb\u610f\u5b9e\u73b0\u4e00\u79cd\u6ee4\u6ce2\u5668\uff0c\u591a\u505a\u52a0\u5206\uff09")),(0,a.kt)("h3",{id:"\u6539\u53d8\u89c6\u9891\u4eae\u5ea6"},"\u6539\u53d8\u89c6\u9891\u4eae\u5ea6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"void changeLight(int x) {\n x = x - 255;\n for (int r = 0; r < nowRate.rows; r++) {\n  for (int c = 0; c < nowRate.cols; java) {\n   int B = nowRate.at<Vec3b>(r, c)[0];\n   int G = nowRate.at<Vec3b>(r, c)[1];\n   int R = nowRate.at<Vec3b>(r, c)[2];\n   B += x;\n   G += x;\n   R += x;\n   if (B > 255)B = 255;\n   if (G > 255)G = 255;\n   if (R > 255)R = 255;\n   if (B < 0)B = 0;\n   if (G < 0)G = 0;\n   if (R < 0)R = 0;\n   nowRate.at<Vec3b>(r, c)[0] = B;\n   nowRate.at<Vec3b>(r, c)[1] = G;\n   nowRate.at<Vec3b>(r, c)[2] = R;\n  }\n }\n}\n")),(0,a.kt)("h3",{id:"\u6539\u53d8\u89c6\u9891\u5bf9\u6bd4\u5ea6"},"\u6539\u53d8\u89c6\u9891\u5bf9\u6bd4\u5ea6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"void Contrast(int x) {\n float k = 0;\n if (x - 50 == 0)\n  return;\n else if (x - 50 > 0) {\n     k = 1 + (x - 50) / 100.0;\n }\n else\n     k = 1 - (50 - x) / 100.0;\n    \n for (int r = 0; r < nowRate.rows; r++) {\n  for (int c = 0; c < nowRate.cols; java) {\n   int B = nowRate.at<Vec3b>(r, c)[0];\n   int G = nowRate.at<Vec3b>(r, c)[1];\n   int R = nowRate.at<Vec3b>(r, c)[2];\n   B *= k;\n   G *= k;\n   R *= k;\n   if (B > 255)B = 255;\n   if (G > 255)G = 255;\n   if (R > 255)R = 255;\n   nowRate.at<Vec3b>(r, c)[0] = B;\n   nowRate.at<Vec3b>(r, c)[1] = G;\n   nowRate.at<Vec3b>(r, c)[2] = R;\n  }\n }\n}\n")),(0,a.kt)("h3",{id:"\u76f4\u65b9\u56fe\u5747\u8861\u5316"},"\u76f4\u65b9\u56fe\u5747\u8861\u5316"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// \u76f4\u65b9\u56fe\u5747\u8861\u5316\nvoid histVideo() {\n // \u4e09\u4e2a\u901a\u9053\u5206\u522b\u8fdb\u884c\u5747\u8861\u5316\u5904\u7406\n float sum_p = nowRate.rows * nowRate.cols;\n int hist[3][256] = { 0 };//BGR\n // \u6784\u9020 3 \u901a\u9053\u7684\u76f4\u65b9\u56fe\n for (int r = 0; r < nowRate.rows; r++) {\n  for (int c = 0; c < nowRate.cols; java) {\n   hist[0][nowRate.at<Vec3b>(r, c)[0]]++;\n   hist[1][nowRate.at<Vec3b>(r, c)[1]]++;\n   hist[2][nowRate.at<Vec3b>(r, c)[2]]++;\n  }\n }\n float CDF[3][256] = { 0 };//3 \u4e2a\u901a\u9053\u7684\u7d2f\u8ba1\u5206\u5e03\n // \u8ba1\u7b97 3 \u901a\u9053\u7684\u6240\u6709\u7d2f\u8ba1\u5206\u5e03\u51fd\u6570\u7684\u503c\n for (int i = 0; i < 256; i++) {\n  float sum[3] = { 0 };\n  for (int k = 0; k <= i; k++) {\n   sum[0] += hist[0][k];\n   sum[1] += hist[1][k];\n   sum[2] += hist[2][k];\n  }\n  CDF[0][i] = sum[0] / sum_p;\n  CDF[1][i] = sum[1] / sum_p;\n  CDF[2][i] = sum[2] / sum_p;\n }\n for (int r = 0; r < nowRate.rows; r++) {\n  for (int c = 0; c < nowRate.cols; java) {\n   for (int i = 0; i < 3; i++)\n    nowRate.at<Vec3b>(r, c)[i] = 255 * CDF[i][nowRate.at<Vec3b>(r, c)[i]];\n  }\n }\n}\n")),(0,a.kt)("h3",{id:"\u5747\u503c\u6ee4\u6ce2"},"\u5747\u503c\u6ee4\u6ce2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"void Filter(int x)  \n{\n Mat temp = nowRate.clone();\n int num = x * x; // \u6ee4\u6ce2\u5668\u7684\u5927\u5c0f\n // \u904d\u5386\u56fe\u50cf\n for (int r = x / 2; r < nowRate.rows - x / 2; r++) {\n  for (int c = x / 2; c < nowRate.cols - x / 2; java) {\n   // \u904d\u5386\u6ee4\u6ce2\u5668\n   for (int i = 0; i < 3; i++) {\n    // 3 \u4e2a\u901a\u9053\n    int sum = 0;\n    // \u904d\u5386\u6ee4\u6ce2\u5668\n    for (int dr = - x / 2; dr <= x / 2; dr++) {\n     for (int dc = - x / 2; dc <= x / 2; djava) {\n      sum += temp.at<Vec3b>(r + dr, c + dc)[i];\n     }\n    }\n    // \u6ee4\u6ce2\u5668\u7684\u503c\n    nowRate.at<Vec3b>(r, c)[i] = (float)sum / num;\n   }\n  }\n }\n}\n")),(0,a.kt)("h3",{id:"\u5176\u4ed6\u6ee4\u6ce2"},"\u5176\u4ed6\u6ee4\u6ce2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"void Filter2(int x)\n{\n Mat temp = nowRate.clone();\n boxFilter(temp, nowRate, -1, Size(x, x)); // \u65b9\u6846\u6ee4\u6ce2\n}\n\nvoid Filter3(int x)\n{\n Mat temp = nowRate.clone();\n GaussianBlur(temp, nowRate, Size(x, x), 0, 0); // \u9ad8\u65af\u6ee4\u6ce2\n}\n\nvoid Filter4(int x)\n{\n Mat temp = nowRate.clone();\n // \u4e2d\u503c\u6ee4\u6ce2\n medianBlur(temp, nowRate, x);\n}\n")),(0,a.kt)("h2",{id:"\u8fd0\u52a8\u76ee\u6807\u68c0\u6d4b"},"\u8fd0\u52a8\u76ee\u6807\u68c0\u6d4b"),(0,a.kt)("p",null,"\u7ed9\u5b9a\u4e00\u6bb5\u89c6\u9891\uff0c\u7f16\u7a0b\u5b9e\u73b0\u5e27\u5dee\u6cd5\u6216\u80cc\u666f\u51cf\u6cd5\u68c0\u6d4b\u89c6\u9891\u4e2d\u7684\u8fd0\u52a8\u76ee\u6807\uff0c\u5e76\u5206\u6790\u5b9e\u9a8c\u7ed3\u679c\u3002"),(0,a.kt)("h3",{id:"\u5e27\u5dee\u6cd5"},"\u5e27\u5dee\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'/*\n @ temp \u4e34\u65f6\u5e27\n @ frame \u5f53\u524d\u5e27\n return result \u5e27\u5dee\u6cd5\u8fd0\u52a8\u76ee\u6807\u68c0\u6d4b\u7ed3\u679c\uff0c\u4e3a\u6bcf\u4e2a\u8fd0\u52a8\u76ee\u6807\u52a0\u4e0a\u7eff\u8272\u7684\u77e9\u5f62\u6846\n*/\n\nMat frameDiff(Mat temp, Mat frame)\n{\n Mat result;\n // \u5c06\u5f53\u524d\u5e27\u8f6c\u6362\u4e3a\u7070\u5ea6\u56fe\u50cf\n cvtColor(frame, frame, COLOR_BGR2GRAY);\n // \u5c06\u4e34\u65f6\u5e27\u8f6c\u6362\u4e3a\u7070\u5ea6\u56fe\u50cf\n cvtColor(temp, temp, COLOR_BGR2GRAY);\n // \u5c06\u5f53\u524d\u5e27\u4e0e\u4e34\u65f6\u5e27\u8fdb\u884c\u5e27\u5dee\u8fd0\u7b97\n absdiff(frame, temp, result);\n // \u5c06\u5e27\u5dee\u8fd0\u7b97\u7ed3\u679c\u4e8c\u503c\u5316\n threshold(result, result, 50, 255, THRESH_BINARY);\n // \u5bf9\u4e8c\u503c\u5316\u7ed3\u679c\u8fdb\u884c\u8150\u8680\u81a8\u80c0\u8fd0\u7b97\n //erode(result, result, Mat());\n //dilate(result, result, Mat());\n\n // \u5bf9\u4e8c\u503c\u5316\u7ed3\u679c\u8fdb\u884c\u5f62\u6001\u5b66\u5f00\u8fd0\u7b97\n Mat kernel = getStructuringElement(MORPH_RECT, Size(3, 3));\n morphologyEx(result, result, MORPH_OPEN, kernel);\n // \u5bf9\u4e8c\u503c\u5316\u7ed3\u679c\u8fdb\u884c\u5f62\u6001\u5b66\u95ed\u8fd0\u7b97\n morphologyEx(result, result, MORPH_CLOSE, kernel);\n imshow("biyunsuan", result);\n // \u67e5\u627e\u4e8c\u503c\u5316\u7ed3\u679c\u4e2d\u7684\u8f6e\u5ed3\n vector<vector<Point>> contours;\n findContours(result, contours, RETR_EXTERNAL, CHAIN_APPROX_SIMPLE);\n // \u904d\u5386\u8f6e\u5ed3\n for (size_t t = 0; t < contours.size(); t++)\n {\n  // \u7ed8\u5236\u8f6e\u5ed3\n  drawContours(frame, contours, t, Scalar(0, 0, 255), 2);\n  \n  \n  // \u83b7\u53d6\u5f53\u524d\u8f6e\u5ed3\u7684\u77e9\u5f62\u8fb9\u754c\u6846\n  Rect rect = boundingRect(contours[t]);\n  // \u5982\u679c\u5728\u56fe\u5f62\u7684\u4e0a\u534a\u90e8\u5206\uff0c\u5ffd\u7565\u5c0f\u4e8e  \u7684\u6846\n  //if (rect.y < frame.rows / 4 && rect.area() < 500)\n  // continue;\n  //// \u5982\u679c\u5728\u56fe\u5f62\u7684\u4e0b\u534a\u90e8\u5206\uff0c\u5ffd\u7565\u5c0f\u4e8e  \u7684\u6846\n  //if (rect.y > frame.rows / 4 && rect.area() < 900)\n  // continue;\n  if (rect.area() < 400)\n    continue;\n  // \u5728\u5f53\u524d\u5e27\u4e2d\u7ed8\u5236\u77e9\u5f62\u8fb9\u754c\u6846\n  rectangle(frame, rect, Scalar(0, 255, 0), 2, 8, 0);\n }\n return frame;\n}\n')),(0,a.kt)("h3",{id:"\u80cc\u666f\u51cf\u6cd5"},"\u80cc\u666f\u51cf\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'/*\n @ temp \u4e34\u65f6\u5e27\n @ frame \u5f53\u524d\u5e27\n return result \u68c0\u6d4b\u7ed3\u679c\uff0c\u4e3a\u6bcf\u4e2a\u8fd0\u52a8\u76ee\u6807\u52a0\u4e0a\u7eff\u8272\u7684\u77e9\u5f62\u6846,\u4f7f\u7528 BackgroundSubtractorMOG \u51fd\u6570\n*/\n\nMat detectMotion(Mat frame) {\n Mat result;\n frame.copyTo(result);\n //\u521b\u5efa\u80cc\u666f\u51cf\u6cd5\u5668\n Ptr<BackgroundSubtractorMOG2> bgModel = createBackgroundSubtractorMOG2();\n //\u80cc\u666f\u51cf\u6cd5\n Mat fgMask;\n bgModel->apply(frame, fgMask);\n //\u81a8\u80c0\n Mat kernel = getStructuringElement(MORPH_RECT, Size(3, 3));\n dilate(fgMask, fgMask, kernel);\n imshow("fgmask", fgMask);\n //\u67e5\u627e\u8f6e\u5ed3\n vector<vector<Point>> contours;\n findContours(fgMask, contours, RETR_EXTERNAL, CHAIN_APPROX_SIMPLE);\n //\u7ed8\u5236\u8fb9\u7f18\n for (size_t t = 0; t < contours.size(); t++)\n {\n  // \u7ed8\u5236\u8f6e\u5ed3-\u7ea2\u8910\u8272\n  drawContours(result, contours, t, Scalar(0, 0, 255), 2);\n  //\u5982\u679c\u5728\u56fe\u5f62\u7684\u4e0a1/3\u90e8\u5206\uff0c\u5ffd\u7565\u9762\u79ef\u5c0f\u4e8e 400 \u7684\u6846\n  Rect rect = boundingRect(contours[t]);\n  if (rect.y < frame.rows / 4 && rect.area() < 200)\n   continue;\n  // \u5982\u679c\u5728\u56fe\u5f62\u7684\u4e0b2/3\u90e8\u5206\uff0c\u5ffd\u7565\u9762\u79ef\u5c0f\u4e8e 1000 \u7684\u6846\n  if (rect.y > frame.rows * 1 / 4 && rect.area() < 900)\n   continue;\n\n  rectangle(result, rect, Scalar(0, 255, 0), 2, 8, 0);\n\n }\n return result;\n}\n')),(0,a.kt)("h3",{id:"\u8fb9\u7f18\u68c0\u6d4b"},"\u8fb9\u7f18\u68c0\u6d4b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'/*\n @ temp \u4e34\u65f6\u5e27\n @ frame \u5f53\u524d\u5e27\n return result \u68c0\u6d4b\u7ed3\u679c\uff0c\u4e3a\u6bcf\u4e2a\u8fd0\u52a8\u76ee\u6807\u52a0\u4e0a\u7eff\u8272\u7684\u77e9\u5f62\u6846,\u4f7f\u7528 canny \u7b97\u6cd5\n*/\n\nMat MotionDetectByCanny(Mat temp, Mat frame)\n{\n Mat result;\n frame.copyTo(result);\n // 1. \u5c06\u5f53\u524d\u5e27\u548c\u4e34\u65f6\u5e27\u8f6c\u6362\u4e3a\u7070\u5ea6\u56fe\n Mat gray1, gray2;\n cvtColor(temp, gray1, COLOR_BGR2GRAY);\n cvtColor(frame, gray2, COLOR_BGR2GRAY);\n // 2. \u5bf9\u5f53\u524d\u5e27\u548c\u4e34\u65f6\u5e27\u8fdb\u884c\u9ad8\u65af\u6ee4\u6ce2\n GaussianBlur(gray1, gray1, Size(3, 3), 0, 0);\n GaussianBlur(gray2, gray2, Size(3, 3), 0, 0);\n // 3. \u5bf9\u5f53\u524d\u5e27\u548c\u4e34\u65f6\u5e27\u8fdb\u884c\u8fd0\u52a8\u76ee\u6807\u68c0\u6d4b\n Mat motion = gray1 - gray2;\n // 4. \u5bf9\u8fd0\u52a8\u76ee\u6807\u8fdb\u884c\u4e8c\u503c\u5316\u5904\u7406\n threshold(motion, motion, 50, 255, THRESH_BINARY);\n // 5. \u5bf9\u4e8c\u503c\u5316\u56fe\u50cf\u8fdb\u884c\u5f62\u6001\u5b66\u64cd\u4f5c\n Mat element = getStructuringElement(MORPH_RECT, Size(3, 3));\n morphologyEx(motion, motion, MORPH_OPEN, element);\n // 6. \u5bf9\u4e8c\u503c\u5316\u56fe\u50cf\u8fdb\u884c\u8fb9\u7f18\u68c0\u6d4b\n // \u540e\u9762\u4e24\u4e2a\u53c2\u6570\u5206\u522b\u4ee3\u8868 threshold1 \u548c threshold2 \u7684\u503c\u4ee5\u53ca apertureSize\n Canny(motion, motion, 3, 9, 3);\n imshow("motion", motion);\n // 7. \u67e5\u627e\u8f6e\u5ed3\n vector<vector<Point>> contours;\n findContours(motion, contours, RETR_EXTERNAL, CHAIN_APPROX_NONE);\n // 8. \u7ed8\u5236\u8f6e\u5ed3\n for (size_t t = 0; t < contours.size(); t++)\n {\n  // \u7ed8\u5236\u8f6e\u5ed3-\u7ea2\u8910\u8272\n  drawContours(result, contours, t, Scalar(0, 0, 255), 2);\n  //\u5982\u679c\u5728\u56fe\u5f62\u7684\u4e0a1/3\u90e8\u5206\uff0c\u5ffd\u7565\u9762\u79ef\u5c0f\u4e8e 400 \u7684\u6846\n  Rect rect = boundingRect(contours[t]);\n  if (rect.y < frame.rows / 4 && rect.area() < 200)\n   continue;\n  // \u5982\u679c\u5728\u56fe\u5f62\u7684\u4e0b2/3\u90e8\u5206\uff0c\u5ffd\u7565\u9762\u79ef\u5c0f\u4e8e 1000 \u7684\u6846\n  if (rect.y > frame.rows * 1 / 4 && rect.area() < 900)\n   continue;\n  \n  rectangle(result, rect, Scalar(0, 255, 0), 2, 8, 0);\n\n }\n return result;\n}\n')),(0,a.kt)("h3",{id:"\u4e09\u5e27\u5dee\u6cd5"},"\u4e09\u5e27\u5dee\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'Mat frameDiff3(Mat temp, Mat frame)\n{\n Mat result;\n Mat gray1, gray2, gray3;\n Mat diff1, diff2, diff3;\n Mat diff;\n Mat threshold_output;\n vector<vector<Point> > contours;\n vector<Vec4i> hierarchy;\n int thresh = 100;\n int max_thresh = 255;\n RNG rng(12345);\n // \u5c06\u5f53\u524d\u5e27\u8f6c\u6362\u4e3a\u7070\u5ea6\u56fe\u50cf\n cvtColor(temp, gray1, CV_BGR2GRAY);\n cvtColor(frame, gray2, CV_BGR2GRAY);\n absdiff(gray1, gray2, diff1); // \u7b2c\u4e00\u5e27\u4e0e\u7b2c\u4e8c\u5e27\u7684\u5dee\n cvtColor(frame, gray3, CV_BGR2GRAY);\n absdiff(gray2, gray3, diff2); // \u7b2c\u4e8c\u5e27\u4e0e\u7b2c\u4e09\u5e27\u7684\u5dee\n absdiff(diff1, diff2, diff3); // \u4e24\u5e27\u5dee\u7684\u5dee\n threshold(diff3, threshold_output, thresh, 255, THRESH_BINARY);\n findContours(threshold_output, contours, hierarchy, CV_RETR_TREE, CV_CHAIN_APPROX_SIMPLE, Point(0, 0));\n imshow("threshold_output", threshold_output);\n vector<vector<Point> > contours_poly(contours.size());\n vector<Rect> boundRect(contours.size());\n // \u904d\u5386\u8f6e\u5ed3\n for (int i = 0; i < contours.size(); i++)\n {\n  approxPolyDP(Mat(contours[i]), contours_poly[i], 3, true); // \u591a\u8fb9\u5f62\u903c\u8fd1\n  boundRect[i] = boundingRect(Mat(contours_poly[i])); // \u83b7\u53d6\u5f53\u524d\u8f6e\u5ed3\u7684\u77e9\u5f62\u8fb9\u754c\u6846\n }\n result = frame.clone();\n for (int i = 0; i < contours.size(); i++)\n {\n  // \u7ed8\u5236\u8f6e\u5ed3-\u7ea2\u8910\u8272\n  drawContours(result, contours_poly, i, Scalar(0, 0, 255), 1, 8, vector<Vec4i>(), 0, Point());\n\n  //\u5982\u679c\u5728\u56fe\u5f62\u7684\u4e0a1/3\u90e8\u5206\uff0c\u5ffd\u7565\u9762\u79ef\u5c0f\u4e8e 400 \u7684\u6846\n  if (boundRect[i].y < frame.rows / 4 && boundRect[i].area() < 200)\n   continue;\n  //\u5982\u679c\u5728\u56fe\u5f62\u7684\u4e0b2/3\u90e8\u5206\uff0c\u5ffd\u7565\u9762\u79ef\u5c0f\u4e8e 900 \u7684\u6846\n  if (boundRect[i].y > frame.rows / 4 && boundRect[i].area() < 600)\n   continue; \n  //if ( boundRect[i].area() < 200)\n  // continue;\n  \n  rectangle(result, boundRect[i].tl(), boundRect[i].br(), Scalar(0, 255, 0), 2, 8, 0);\n }\n return result;\n}\n')))}m.isMDXComponent=!0}}]);