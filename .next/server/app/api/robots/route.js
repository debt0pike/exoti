"use strict";(()=>{var e={};e.id=45,e.ids=[45],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},9921:(e,t,o)=>{o.r(t),o.d(t,{originalPathname:()=>x,patchFetch:()=>m,requestAsyncStorage:()=>u,routeModule:()=>l,serverHooks:()=>c,staticGenerationAsyncStorage:()=>d});var r={};o.r(r),o.d(r,{GET:()=>p});var a=o(9303),i=o(8716),n=o(670),s=o(7070);async function p(){let e=`# EXOTI - EXO Type Indicator
# Robot instructions

User-agent: *
Allow: /

# Sitemap location
Sitemap: https://exoti.app/sitemap.xml

# Block certain paths if needed
# Disallow: /api/
# Disallow: /_next/

# Specific bot instructions
User-agent: Googlebot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /`;return new s.NextResponse(e,{headers:{"Content-Type":"text/plain","Cache-Control":"s-maxage=86400, stale-while-revalidate"}})}let l=new a.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/robots/route",pathname:"/api/robots",filename:"route",bundlePath:"app/api/robots/route"},resolvedPagePath:"/Users/Zhuanz/Documents/Obsidian Vault/exoti/app/api/robots/route.ts",nextConfigOutput:"standalone",userland:r}),{requestAsyncStorage:u,staticGenerationAsyncStorage:d,serverHooks:c}=l,x="/api/robots/route";function m(){return(0,n.patchFetch)({serverHooks:c,staticGenerationAsyncStorage:d})}}};var t=require("../../../webpack-runtime.js");t.C(e);var o=e=>t(t.s=e),r=t.X(0,[380,972],()=>o(9921));module.exports=r})();