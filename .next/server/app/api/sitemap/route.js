"use strict";(()=>{var e={};e.id=436,e.ids=[436],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},3862:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>m,patchFetch:()=>d,requestAsyncStorage:()=>u,routeModule:()=>l,serverHooks:()=>h,staticGenerationAsyncStorage:()=>c});var a={};r.r(a),r.d(a,{GET:()=>s});var o=r(9303),i=r(8716),p=r(670),n=r(7070);async function s(){let e=`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Home page (Chinese) -->
  <url>
    <loc>https://exoti.app/zh</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Quiz page (Chinese) -->
  <url>
    <loc>https://exoti.app/zh/quiz</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Home page (Korean) -->
  <url>
    <loc>https://exoti.app/ko</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Quiz page (Korean) -->
  <url>
    <loc>https://exoti.app/ko/quiz</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Home page (English) -->
  <url>
    <loc>https://exoti.app/en</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Quiz page (English) -->
  <url>
    <loc>https://exoti.app/en/quiz</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;return new n.NextResponse(e,{headers:{"Content-Type":"application/xml","Cache-Control":"s-maxage=86400, stale-while-revalidate"}})}let l=new o.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/sitemap/route",pathname:"/api/sitemap",filename:"route",bundlePath:"app/api/sitemap/route"},resolvedPagePath:"/Users/Zhuanz/Documents/Obsidian Vault/exoti/app/api/sitemap/route.ts",nextConfigOutput:"standalone",userland:a}),{requestAsyncStorage:u,staticGenerationAsyncStorage:c,serverHooks:h}=l,m="/api/sitemap/route";function d(){return(0,p.patchFetch)({serverHooks:h,staticGenerationAsyncStorage:c})}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[380,972],()=>r(3862));module.exports=a})();