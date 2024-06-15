"use strict";(self.webpackChunklp_compat=self.webpackChunklp_compat||[]).push([[903],{8860:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>y});var n=a(7953);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(a),h=o,y=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return a?n.createElement(y,r(r({ref:t},c),{},{components:a})):n.createElement(y,r({ref:t},c))}));function y(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=h;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:o,r[1]=p;for(var l=2;l<i;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5460:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(9055),o=a(6328),i=a(8133),r=a(5278);const p=(0,a(3330).A)("MuiBox",["root"]),s=(0,i.A)(),l=(0,n.A)({themeId:r.A,defaultTheme:s,defaultClassName:p.root,generateClassName:o.A.generate})},2472:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>w,frontMatter:()=>u,metadata:()=>y,toc:()=>m});var n=a(5265),o=(a(7953),a(8860));const i=a.p+"assets/images/create_modified_apk-ce294b3f390b9ebc58a0e3f6ee09ca91.jpg",r=a.p+"assets/images/rebuild_categories_selection-3c13e0e7eaf5c3fccdd053dd85d76690.jpg",p=a.p+"assets/images/ad_patches-7868e231ca5d1d343b88e9378d9a8034.jpg",s=a.p+"assets/images/iap_patches-f5b772900ac0f2d6007b66ecb9627e31.jpg",l=a.p+"assets/images/LP_App_patching_step_5-39aa3b38e1f7d1f83d4ecfdb816a3fcc.jpg",c=a.p+"assets/images/LP_App_patching_step_6-6eaac48deb427b164c5f0ca1e923c7db.jpg";var d=a(5460);const u={sidebar_position:2},h="Patching an app",y={unversionedId:"intro",id:"intro",title:"Patching an app",description:"The download link on the official Lucky Patcher website frequently breaks and spams you with pop-ups in the browser. Use an adblocker - uBlock Origin for desktop browsers and AdGuard DNS for Android - if you plan to visit the website.",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/lp-compat/docs/intro",draft:!1,editUrl:"https://github.com/Flixbox/lp-compat/blob/main/docs/intro.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Lucky Patcher - Important information",permalink:"/lp-compat/docs/lp-info"},next:{title:"Update an existing app",permalink:"/lp-compat/docs/update"}},g={},m=[{value:"Set up Lucky Patcher",id:"set-up-lucky-patcher",level:2},{value:"Create the modified APK file",id:"create-the-modified-apk-file",level:2},{value:"Reinstall the app",id:"reinstall-the-app",level:2},{value:"Cleanup",id:"cleanup",level:2}],f={toc:m},b="wrapper";function w(e){let{components:t,...a}=e;return(0,o.yg)(b,(0,n.A)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"patching-an-app"},"Patching an app"),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"The download link on the official Lucky Patcher website frequently breaks and spams you with pop-ups in the browser. Use an adblocker - ",(0,o.yg)("a",{parentName:"p",href:"https://ublockorigin.com"},"uBlock Origin")," for desktop browsers and ",(0,o.yg)("a",{parentName:"p",href:"https://adguard-dns.io/en/public-dns.html"},"AdGuard DNS")," for Android - if you plan to visit the website."),(0,o.yg)("p",{parentName:"admonition"},"Alternatively, you can use a direct download link from the ",(0,o.yg)("a",{parentName:"p",href:"http://chelpus.com/luckypatcher/LuckyPatcherInstaller.apk"},"developer's website")," or ",(0,o.yg)("a",{parentName:"p",href:"https://discord.gg/RS5ddYf7mw"},"the #resources channel on the unofficial Lucky Patcher Discord server")," (the former is sometimes down).")),(0,o.yg)("h2",{id:"set-up-lucky-patcher"},"Set up Lucky Patcher"),(0,o.yg)("p",null,"Read the ",(0,o.yg)("a",{parentName:"p",href:"/lp-compat/docs/lp-info"},"important info about LP")," section."),(0,o.yg)("p",null,'Follow the tutorial on the official website. For patching inapp purchases, make sure to give LP the "Draw over other apps" or "Display pop-up windows" permission. This permission is needed because LP replaces the Google Play purchase popup window that normally shows when you try to purchase something in an app with its own popup containing some settings that can help in getting the item for free.'),(0,o.yg)("p",null,"This special permission can be found in the app's settings. The app settings can be found by long pressing the app in your phone's app drawer. The location of this permission depends on your firmware."),(0,o.yg)("p",null,"Examples:"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"App info > scroll down to Advanced > Display over other apps")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"App info > Other permissions")),(0,o.yg)("h2",{id:"create-the-modified-apk-file"},"Create the modified APK file"),(0,o.yg)("p",null,"Follow these screenshots to create your modified APK file. Read any pop-ups you may come across and try to follow their advice, but don't worry too much about them."),(0,o.yg)("p",null,"First, open Lucky Patcher and tap the app you'd like to modify."),(0,o.yg)("p",null,'On this screen, tap the "APK with multi patch" option. The two most useful patches are the ad-free and IAP (InApp Purchase) patches.'),(0,o.yg)("img",{src:i,style:{height:700}}),(0,o.yg)(d.A,{m:2,display:"inline",mdxType:"Box"}),(0,o.yg)("img",{src:r,style:{height:700}}),(0,o.yg)("p",null,"Apply some patches."),(0,o.yg)("img",{src:p,style:{height:700}}),(0,o.yg)(d.A,{m:2,display:"inline",mdxType:"Box"}),(0,o.yg)("img",{src:s,style:{height:700}}),(0,o.yg)("p",null,"If the patched app crashes or shows an error when you open it, try applying the ",(0,o.yg)("em",{parentName:"p"},"Removes integrity check and signature verification")," and ",(0,o.yg)("em",{parentName:"p"},"Fake a modified APK archive from the original")," patches as well. This helps sometimes."),(0,o.yg)("p",null,'Finally, install the modified APK file by tapping the "Go to file" button and then the "Uninstall and install" button.'),(0,o.yg)("img",{src:l,style:{height:700}}),(0,o.yg)(d.A,{m:2,display:"inline",mdxType:"Box"}),(0,o.yg)("img",{src:c,style:{height:700}}),(0,o.yg)("h2",{id:"reinstall-the-app"},"Reinstall the app"),(0,o.yg)("p",null,"When you reinstall (uninstall the original app and install the patched one) you will no longer be able to use Google features like Google Play sign-in in that app anymore. However, some patchable apps like Merge Dragons and City Island 5 allow signing in via Facebook, which usually works. However, if you have the Facebook app installed on your device you have to uninstall/disable it to be able to sign in to apps with Facebook."),(0,o.yg)("p",null,"Whenever APKs for Android are modified in any way, the APK must be signed before it can be installed. The signature of a Play Store app will always be different and cannot be spoofed. Android does not allow updating an app using an APK with a different signature. As a result, you will have to uninstall the unmodified app before installing the patched one. However, if you already patched an app with LP, and are patching over the patched version again, you can update it as the signatures will match."),(0,o.yg)("h2",{id:"cleanup"},"Cleanup"),(0,o.yg)("p",null,"You'll also be able to find the patched APK files in LP under the \"Rebuild & Install\" option in the menu. If you'd like to clean up some storage, remove these APK files manually."),(0,o.yg)("p",null,"You can also clean up all of your patched APK files at once. Go to your stock file manager (it needs elevated access, the stock file manager usually has elevated access), then go to this path:"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"/Android/data/ru.<random letters>.<random letters>/files/LuckyPatcher/Modified")),(0,o.yg)("p",null,"If your file manager is not letting you access the /Android/data/ directory, try uninstalling updates of the system Files app or using ",(0,o.yg)("a",{parentName:"p",href:"https://apkcombo.com/mt-manager/bin.mt.plus"},"MT Manager"),"."),(0,o.yg)("p",null,"You can delete everything in this ",(0,o.yg)("inlineCode",{parentName:"p"},"Modified")," folder. It only contains your patched APKs and some metadata. If you can't find a way to access the folder you can simply clear the data of LP as a last resort, deleting any settings you have set already."))}w.isMDXComponent=!0}}]);