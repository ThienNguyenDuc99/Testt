import{M as r,Q as f,a as h,d as a,m as l}from"./chunk-ZCUXDVPO.js";var p=(()=>{let s=class s{constructor(){this.activeTheme="light",this._config={ripple:!1,inputStyle:"outlined",menuMode:"static",colorScheme:"light",theme:"lara-light-indigo",scale:14},this.config=r(this._config),this.state={staticMenuDesktopInactive:!1,overlayMenuActive:!1,profileSidebarVisible:!1,configSidebarVisible:!1,staticMenuMobileActive:!1,menuHoverActive:!1},this.configUpdate=new a,this.overlayOpen=new a,this.configUpdate$=this.configUpdate.asObservable(),this.overlayOpen$=this.overlayOpen.asObservable(),f(()=>{let e=this.config();this.updateStyle(e)&&this.changeTheme(),this.changeScale(e.scale),this.onConfigUpdate()})}updateStyle(e){return e.theme!==this._config.theme||e.colorScheme!==this._config.colorScheme}getTheme(){return this.activeTheme}setTheme(e){let t=document.getElementById("theme-css");t&&(t.href=e+".css"),this.activeTheme=e}onMenuToggle(){this.isOverlay()&&(this.state.overlayMenuActive=!this.state.overlayMenuActive,this.state.overlayMenuActive&&this.overlayOpen.next(null)),this.isDesktop()?this.state.staticMenuDesktopInactive=!this.state.staticMenuDesktopInactive:(this.state.staticMenuMobileActive=!this.state.staticMenuMobileActive,this.state.staticMenuMobileActive&&this.overlayOpen.next(null))}showProfileSidebar(){this.state.profileSidebarVisible=!this.state.profileSidebarVisible,this.state.profileSidebarVisible&&this.overlayOpen.next(null)}showConfigSidebar(){this.state.configSidebarVisible=!0}isOverlay(){return this.config().menuMode==="overlay"}isDesktop(){return window.innerWidth>991}isMobile(){return!this.isDesktop()}onConfigUpdate(){this._config=h({},this.config()),this.configUpdate.next(this.config())}changeTheme(){let e=this.config(),i=document.getElementById("theme-css").getAttribute("href").split("/").map(o=>o==this._config.theme?o=e.theme:o==`theme-${this._config.colorScheme}`?o=`theme-${e.colorScheme}`:o).join("/");console.log(i),this.replaceThemeLink(i)}replaceThemeLink(e){let t="theme-css",n=document.getElementById(t),i=n.cloneNode(!0);i.setAttribute("href",e),i.setAttribute("id",t+"-clone"),n.parentNode.insertBefore(i,n.nextSibling),i.addEventListener("load",()=>{n.remove(),i.setAttribute("id",t)})}changeScale(e){document.documentElement.style.fontSize=`${e}px`}};s.\u0275fac=function(t){return new(t||s)},s.\u0275prov=l({token:s,factory:s.\u0275fac,providedIn:"root"});let c=s;return c})();export{p as a};