import {Injectable,EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';    
@Injectable({    
  providedIn: 'root'    
}) 


export class AppUtilServices { 
  // invokeHamburgerMenu = new EventEmitter();    
  // subsVar: Subscription;  

  constructor() { }    
    
  // hamBurgerMenu() {    
  //   this.invokeHamburgerMenu.emit();  
    
  //   if(document.getElementById('mainNav').classList.contains("DSA_navHide")){
  //         document.getElementById('mainNav').classList.remove('DSA_navHide');
  //         document.body.style.overflow = 'auto';
  //     }
  //     else{
  //         document.getElementById('mainNav').classList.add('DSA_navHide');
  //         document.body.style.overflow = 'hidden';
  //     }
  
  // }  
    // copy code 
    codeCopyFunc(thisElement: { target: { nextElementSibling: { innerHTML: any; className: string; }; }; }){
   
        var stringVal=thisElement.target.nextElementSibling.innerHTML;
        thisElement.target.nextElementSibling.className += " " + 'ds_selectedTxt';
        var whitespace = stringVal.replace(/ +(?= )/g, "");
        var stringrep = whitespace.replace(/&lt;/g, "<");
        var stringrep2 = stringrep.replace(/&gt;/g, ">");
    
        let selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = stringrep2;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
       
      }
      


      // ripple color
      ripcolor="rgba(134,38,195,0.15)"


      //showmore DSA_showless

      showMore(thisElement: { target: { classList: { contains: (arg0: string) => any; add: (arg0: string) => void; remove: (arg0: string) => void; }; closest: (arg0: string) => { (): any; new(): any; querySelector: { (arg0: string): { (): any; new(): any; classList: { (): any; new(): any; add: { (arg0: string): void; new(): any; }; remove: { (arg0: string): void; new(): any; }; }; }; new(): any; }; }; }; }){
        if(thisElement.target.classList.contains('down-arw-icon')){
          thisElement.target.closest(".collapseCtr").querySelector('.collapseCnt').classList.add('DSA_showmore');
          thisElement.target.closest(".collapseCtr").querySelector('.collapseCnt').classList.remove('DSA_showless');
          thisElement.target.classList.add('up-arw-icon');
          thisElement.target.classList.remove('down-arw-icon')
        }
        else{
          thisElement.target.closest(".collapseCtr").querySelector('.collapseCnt').classList.add('DSA_showless');
          thisElement.target.closest(".collapseCtr").querySelector('.collapseCnt').classList.remove('DSA_showmore');
          thisElement.target.classList.add('down-arw-icon');
          thisElement.target.classList.remove('up-arw-icon')
        }
      }

      //toggle class
      chip_toggleClick(thisElement: { target: { classList: { contains: (arg0: string) => any; remove: (arg0: string) => void; add: (arg0: string) => void; }; }; }){
        if( thisElement.target.classList.contains('active')){
          thisElement.target.classList.remove('active');
        }
        else{
          thisElement.target.classList.add('active');
        }
      }

      //toggle radio
      chip_toggleRadio(thisElement: any) {
        if (thisElement.target.classList.contains('active')) {
          thisElement.target.classList.remove('active');
        }
        else {
          thisElement.target.parentNode.childNodes.forEach(function (eachList: any) {
            eachList.classList.remove('active');
          });
          thisElement.target.classList.add('active');
        }
      }

      //toggle class

      // chipIcon_toggleSelect(thisElement: { target: { classList: { contains: (arg0: string) => any; }; closest: (arg0: string) => any; }; querySelector: (arg0: string) => { (): any; new(): any; closest: { (arg0: string): { (): any; new(): any; classList: { (): any; new(): any; contains: { (arg0: string): any; new(): any; }; remove: { (arg0: string): void; new(): any; }; add: { (arg0: string): void; new(): any; }; }; }; new(): any; }; }; }){       
      //   if(thisElement.target.classList.contains('DSA_choiseChip')){
      //     thisElement= thisElement.target
      //   }
      //   else{
      //     thisElement= thisElement.target.closest('.DSA_choiseChip');
      //   }
      //   if( thisElement.querySelector(".DSA_selectionIcon").closest('.DSA_choiseChip').classList.contains('active')){
      //     thisElement.querySelector(".DSA_selectionIcon").closest('.DSA_choiseChip').classList.remove('active');
      //   }else{
      //     thisElement.querySelector(".DSA_selectionIcon").closest('.DSA_choiseChip').classList.add('active');
      //   }
      //   /* if( thisElement.querySelector(".DSA_selectionIcon").classList.contains('icon-process-complete')){
      //     thisElement.querySelector(".DSA_selectionIcon").closest('.DSA_choiseChip').classList.remove('active');
      //     thisElement.querySelector(".DSA_selectionIcon").classList.remove('icon-process-complete');
      //     thisElement.querySelector(".DSA_selectionIcon").classList.remove('purple');
      //   }
      //   else{
      //     thisElement.querySelector(".DSA_selectionIcon").closest('.DSA_choiseChip').classList.add('active');
      //     thisElement.querySelector(".DSA_selectionIcon").classList.add('icon-process-complete');
      //     thisElement.querySelector(".DSA_selectionIcon").classList.add('purple');
      //   } */
      // }
    
      //chip Close button
      chip_removeParent(closebtn: { target: { parentNode: { remove: () => void; }; }; }){
        closebtn.target.parentNode.remove();
      }

      expandCollapseMenu(eventPanel: { target: { nextSibling: { style: { display: string; }; }; }; }){
       // eventPanel.target.closest('.dc_TreeulClass').querySelector('.collapseCnt')
        if(eventPanel.target.nextSibling.style.display=="block" || eventPanel.target.nextSibling.style.display==''){
          eventPanel.target.nextSibling.style.display='none';
        }
      else{
        eventPanel.target.nextSibling.style.display='block';
      }
    }

    

    lefttwoLevelMenu(thisElement: { target: { classList: { add: (arg0: string) => void; contains: (arg0: string) => any; }; closest: (arg0: string) => { (): any; new(): any; querySelector: { (arg0: string): { (): any; new(): any; classList: { (): any; new(): any; add: { (arg0: string): void; new(): any; }; }; }; new(): any; }; classList: { (): any; new(): any; contains: { (arg0: string): any; new(): any; }; }; previousSibling: { (): any; new(): any; classList: { (): any; new(): any; add: { (arg0: string): void; new(): any; }; }; }; querySelectorAll: { (arg0: string): any; new(): any; }; }; nextSibling: { classList: { remove: (arg0: string) => void; }; }; }; }){   
      var listItems= document.querySelectorAll('.dc_ToplevelMenu a')
      listItems.forEach(function(eachList) {
        eachList.classList.remove('active');
      });
  
      thisElement.target.classList.add('active');
      if(thisElement.target.classList.contains('dc_secondlevelLI')){
        thisElement.target.closest('li').querySelector('.dc_secondlevelUL li:first-child a').classList.add('active');
      }
      else if(thisElement.target.closest('ul').classList.contains('dc_secondlevelUL')){
        thisElement.target.closest('ul').previousSibling.classList.add('active');
      }
      
      if(!thisElement.target.closest('ul').classList.contains('dc_secondlevelUL')){
          var allmenus= thisElement.target.closest('.dc_ToplevelMenu').querySelectorAll('.dc_TreeulClass');
          allmenus.forEach(function(eachMenu: { classList: { add: (arg0: string) => void; }; }) {
            eachMenu.classList.add('d-none');
          });
          if(thisElement.target.nextSibling){
            thisElement.target.nextSibling.classList.remove('d-none');
          }
         
     }
    }
    
    /* hamburdermenu */
//     DSA_mainHamburger_Click(eventObj: { stopPropagation: () => void; }){
//       eventObj.stopPropagation();
//       if(document.getElementById('mainNav').classList.contains("DSA_navHide")){
//           document.getElementById('mainNav').classList.remove('DSA_navHide');
//           document.body.style.overflow = 'hidden';
//           document.getElementById('mainNavClose').focus();
//       }
//       else{
//           document.getElementById('mainNav').classList.add('DSA_navHide');
//           document.body.style.overflow = 'auto';
//           document.getElementById('mainNav').focus();
//       }
//       }
// /* lft rmenu */
//       DSA_mainMenu_Click(){
//         if(document.getElementById('mainleftNav').classList.contains("DSA_navHideMenu")){
//             document.getElementById('mainleftNav').classList.remove('DSA_navHideMenu');
//             document.getElementById('mainleftNav').querySelector('a').focus();
//             document.body.style.overflow = 'auto';
//         }
//         else{
//             document.getElementById('mainleftNav').classList.add('DSA_navHideMenu');
//             document.body.style.overflow = 'hidden';
            
//         }
//         }
// /* mobile search */
//         DSA_mainSearch_Click(){
//           if(document.getElementById('mainSearch').classList.contains("DSA_navHideSrch")){
//             document.getElementById('mainHeader').style.display = "none";
//               document.getElementById('mainSearch').classList.remove('DSA_navHideSrch');
//           }
//           else{
//             document.getElementById('mainHeader').style.display = "block";
//               document.getElementById('mainSearch').classList.add('DSA_navHideSrch');
//           }
//           }
  
//           /*floatingright panel*/

//           DSA_toggleRightpanel_Click(){
//             if(document.getElementById('coloumnthreeFLoating').classList.contains("DSA_rightPanelHide")){           
//                 document.getElementById('coloumnthreeFLoating').classList.remove('DSA_rightPanelHide');
//                 if(document.getElementById('fLoatingClose')){
//                 document.getElementById('fLoatingClose').focus();
//                 }
//             }
//             else{
//                 document.getElementById('coloumnthreeFLoating').classList.add('DSA_rightPanelHide');               
//                 document.querySelectorAll('.DSA_RightUtil li').forEach(function(eachList) {
//                   eachList.classList.remove('DSA_active');
//                 });
//                 if(document.getElementById('togglepanelButton')){
//                     document.getElementById('togglepanelButton').focus();
//                 }
               
//             }
//             }

//             fullView_Click(){
//               if(document.querySelector('.designView').classList.contains("DSA_fullview")){
//                 document.querySelector('.designView').classList.remove('DSA_fullview');
//                 document.getElementById('ds_minimize').style.display = "none";
//              }
//              else{
//               document.querySelector('.designView').classList.add('DSA_fullview');
//               document.getElementById('ds_minimize').style.display = "block";
//              }
//             }

//    /* content area height */
//     middleHeight(){    
//       var windowHeight = window.innerHeight;
//       var windowWidth = window.innerWidth;
//       var headerHeight =  document.getElementById('scrollHeader').offsetHeight  ;
//       var footerHeight =  document.getElementById('mainfooter').offsetHeight;
     
//       //var footerHeight= 40;
//       var headerOuterHeight;
//       if(windowWidth<1024){
//         headerOuterHeight =56;
//       }
//       else{
//        headerOuterHeight =headerHeight; 
//       }  
//       var contentHt=(windowHeight)-(headerOuterHeight+footerHeight);
//       var mainCont = document.getElementById('mainCtr');
//       if(mainCont){
//       mainCont.style.paddingTop = (headerOuterHeight) + 'px';
//       }

//       var mainContentArea = document.getElementById('mainrightCnt');
//       if(mainContentArea){
//       mainContentArea.style.minHeight = (contentHt) + 'px';
//       //mainContentArea.style.paddingTop = (headerOuterHeight) + 'px';
//       }

//       var leftMenuArea = document.getElementById('mainleftNav');
//       if(leftMenuArea){
//       leftMenuArea.style.minHeight = (contentHt) + 'px';
//       leftMenuArea.style.top = (headerOuterHeight) + 'px';
//       }
//       var mainContentArea2 = document.getElementById('coloumnthree');
//       if(mainContentArea2 && windowWidth>=1024){
//         mainContentArea2.style.height = (contentHt) + 'px';
//         mainContentArea2.style.top = (headerOuterHeight) + 'px';  
//         mainContentArea2.style.paddingBottom = (footerHeight) + 'px';  
//       } 
//       var mainContentArea2Float = document.getElementById('coloumnthreeFLoating');
//       if(mainContentArea2Float){
//         mainContentArea2Float.style.minHeight = (contentHt) + 'px';
//         //mainContentArea2Float.style.paddingTop = (headerOuterHeight) + 'px';  
//         } 
//     }

//     loginHeight(){    
//       var windowHeight = window.innerHeight;
//       var windowWidth = window.innerWidth;
//       var loginContentArea = document.getElementById('DSA_pageoverlay');
//       //var loginoverlay = document.getElementById('DSA_pageoverlay');

//       var loginContentmidpanel = document.getElementById('DSA_pageMidpanel');  
//       var midpanel= document.getElementById("DSA_pageMidpanel").offsetHeight;

//       var logoMid = document.getElementById('DSA_logoMid');
//       var logoMidpanel= document.getElementById("DSA_logoMid").offsetHeight;
//       var contentHt=windowHeight;      
//       var panelpad=(windowHeight/2) -(midpanel/2);
//       var logopad=(windowHeight/2) -(logoMidpanel/2);
//       //loginoverlay.style.height = (contentHt) + 'px';
//       if(windowWidth<1024){
//         loginContentArea.style.minHeight = '';     
//         loginContentmidpanel.style.marginTop = '';
//         logoMid.style.marginTop = '';
//       }
//       else{
//       loginContentArea.style.minHeight = (contentHt) + 'px';     
//       loginContentmidpanel.style.marginTop = (panelpad) + 'px';
//       logoMid.style.marginTop = (logopad) + 'px';

//       }  
     
//     }
   

    /*menu set active*/
setActiveClass(eventObj:any){
        
        
    eventObj.stopPropagation();
    var firstlevelMenu= eventObj.target.closest('ul.DSA_frstLevel').querySelectorAll(".DSA-JS-firstlevel-link");
    var allActiveMenu= eventObj.target.closest('ul').querySelectorAll(".active");
    var innermostMenu= eventObj.target.closest('ul.DSA_frstLevel').querySelectorAll(".DSA_menuinnerLink");
    var secondlevelmenu= eventObj.target.closest('ul.DSA_frstLevel').querySelectorAll(".DSA_secLevel");
    var thirdlevelmenu= eventObj.target.closest('ul.DSA_frstLevel').querySelectorAll(".DSA_thirdLevel");

    var allcurrentactive= eventObj.target.closest('ul.DSA_frstLevel').querySelectorAll(".currentActive");
    allcurrentactive.forEach(function(eachList:any) {  
        eachList.closest('li').classList.remove('currentActive');                  
    });      
    eventObj.target.closest('li').classList.add('currentActive'); 

        firstlevelMenu.forEach(function(eachList:any) {   // click of first level links
            eachList.closest('li').classList.remove('active');
            
        })

        if(eventObj.target.closest('li').querySelector('.DSA_menuinnerLink')){  // click of inner level links
           
            if(!eventObj.target.classList.contains('ds_menuArrow')){
                innermostMenu.forEach(function(eachList:any) { // remove all innermost active menu
                    eachList.closest('li').classList.remove('active');                    
                });
                firstlevelMenu.forEach(function(eachList:any) {  // remove all firstlevel active menu
                    eachList.closest('li').classList.remove('active');                    
                });
                eventObj.target.closest('li').classList.add('active'); 
            }

            if(eventObj.target.closest('ul').classList.contains('DSA_secLevel') && !eventObj.target.classList.contains('ds_menuArrow')){  // second level code excluding dropdownclick
               
                secondlevelmenu.forEach(function(eachList:any) {
                    eachList.closest('li').classList.remove('active');                    
                });
                thirdlevelmenu.forEach(function(eachList:any) {
                    eachList.closest('li').classList.remove('active');                    
                });
                eventObj.target.closest('li.DSA-JS-seclevel-li').classList.add('active');
            }
            else if(eventObj.target.closest('ul').classList.contains('DSA_thirdLevel')){  // third level code
               
                secondlevelmenu.forEach(function(eachList:any) {
                    eachList.closest('li').classList.remove('active');                    
                });
                thirdlevelmenu.forEach(function(eachList:any) {
                    eachList.closest('li').classList.remove('active');                    
                });
                eventObj.target.closest('li.DSA-JS-thirdlevel-li').classList.add('active');
                eventObj.target.closest('li.DSA-JS-seclevel-li').classList.add('active');
            }
            
        }
        else{                                                     // clcik of other level menu links
           
            allActiveMenu.forEach(function(eachList:any) {
                eachList.closest('li').classList.remove('active');  
                eachList.closest('li').classList.remove('currentActive');                  
            });      
            eventObj.target.closest('li').classList.add('active');
            eventObj.target.closest('li').classList.add('currentActive'); 
        }
        
    
        if(eventObj.target.closest('li').querySelector('.DSA_secLevel')){  // if second level menu
            if(!eventObj.target.classList.contains('ds_menuArrow')){  // exclude dropdownclick
                allActiveMenu.forEach(function(eachList:any) {
                    eachList.closest('li').classList.remove('active');                    
                });
                eventObj.target.closest('li').classList.add('active');   
             } 
            if(eventObj.target.closest('li').querySelector('.DSA_secLevel').classList.contains('hide')){  // if second level hidden
                eventObj.target.closest('li').querySelector('.ds_menuArrow').classList.add('down-arw-icon');
                eventObj.target.closest('li').querySelector('.ds_menuArrow').classList.remove('next-icon'); 
                eventObj.target.closest('li').querySelector('ul').classList.remove('hide');     
            }
            else{            
                eventObj.target.closest('li').querySelector('.ds_menuArrow').classList.add('next-icon');
                eventObj.target.closest('li').querySelector('.ds_menuArrow').classList.remove('down-arw-icon');            
                eventObj.target.closest('li').querySelector('ul').classList.add('hide');
            }
        }    
        else if(eventObj.target.closest('li').querySelector('.DSA_thirdLevel')){ // if second level menu
            if(!eventObj.target.classList.contains('ds_menuArrow')){ // exclude dropdownclick
                allActiveMenu.forEach(function(eachList:any) {
                    eachList.closest('li').classList.remove('active');                    
                });
                eventObj.target.closest('li').classList.add('active');
            }

            if(eventObj.target.closest('li').querySelector('.DSA_thirdLevel').classList.contains('hide')){  // if third level hidden
                eventObj.target.closest('li').querySelector('.ds_menuArrow').classList.add('down-arw-icon');
                eventObj.target.closest('li').querySelector('.ds_menuArrow').classList.remove('next-icon'); 
                eventObj.target.closest('li').querySelector('ul').classList.remove('hide');     
            }
            else{            
                eventObj.target.closest('li').querySelector('.ds_menuArrow').classList.add('next-icon');
                eventObj.target.closest('li').querySelector('.ds_menuArrow').classList.remove('down-arw-icon');            
                eventObj.target.closest('li').querySelector('ul').classList.add('hide');
            }
        }  
    

}

    setActiveClass_TopNav(eventObj: { stopPropagation: () => void; target: { closest: (arg0: string) => { (): any; new(): any; querySelectorAll: { (arg0: string): any; new(): any; }; classList: { (): any; new(): any; contains: { (arg0: string): any; new(): any; }; add: { (arg0: string): void; new(): any; }; remove: { (arg0: string): void; new(): any; }; }; parentNode: { (): any; new(): any; parentNode: { (): any; new(): any; querySelectorAll: { (arg0: string): any[]; new(): any; }; }; classList: { (): any; new(): any; add: { (arg0: string): void; new(): any; }; }; querySelectorAll: { (arg0: string): any[]; new(): any; }; }; querySelector: { (arg0: string): { (): any; new(): any; classList: { (): any; new(): any; contains: { (arg0: string): any; new(): any; }; remove: { (arg0: string): void; new(): any; }; }; }; new(): any; }; }; }; }){
      eventObj.stopPropagation();
      var listItems= eventObj.target.closest('ul.DSA_frstLevel').querySelectorAll(".active");
      var listItems2= eventObj.target.closest('ul').querySelectorAll(".active");
      var listItems3= eventObj.target.closest('ul.DSA_frstLevel').querySelectorAll(".activeDark");
      if(eventObj.target.closest('ul').classList.contains('DSA_secLevel')){ 
        listItems.forEach(function(eachList: { classList: { remove: (arg0: string) => void; }; }) {
          eachList.classList.remove('active');
        });
        listItems3.forEach(function(eachList: { classList: { remove: (arg0: string) => void; }; }) {
          eachList.classList.remove('activeDark');
        });
        
        eventObj.target.closest('ul').parentNode.parentNode.querySelectorAll('ul.DSA_secLevel').forEach(function(eachList: { classList: { contains: (arg0: string) => any; add: (arg0: string) => void; }; }) {
          if(!eachList.classList.contains('hide')){
            eachList.classList.add('hide');
          }
        });
        eventObj.target.closest('ul').parentNode.classList.add('activeDark');  
        eventObj.target.closest('li').classList.add('active');  
        eventObj.target.closest('ul.DSA_secLevel').classList.remove('hide');
      }else{  
        listItems2.forEach(function(eachList: { classList: { remove: (arg0: string) => void; }; }) {
          eachList.classList.remove('active');
        });  
      
        listItems3.forEach(function(eachList: { classList: { remove: (arg0: string) => void; }; }) {
          eachList.classList.remove('activeDark');
        });
        eventObj.target.closest('li').classList.add('active');
        if(eventObj.target.closest('li').querySelector('.DSA_secLevel')){
          if(!eventObj.target.closest('li').querySelector('.DSA_secLevel').classList.contains('hide')){ 
            
            /* if(!eventObj.target.closest('li').querySelector('.DSA_secLevel').classList.contains('DSA_wb_topMenu_sec')) {
              eventObj.target.closest('li').classList.remove('active');            
              eventObj.target.closest('li').querySelector('ul').classList.add('hide');
            }  */
          }else{
           
            eventObj.target.closest('li').parentNode.querySelectorAll('ul.DSA_secLevel').forEach(function(eachList: { classList: { contains: (arg0: string) => any; add: (arg0: string) => void; }; }) {
              if(!eachList.classList.contains('hide')){
                eachList.classList.add('hide');
              }
            });     
            eventObj.target.closest('li').querySelector('ul').classList.remove('hide');
          }
        }else{        
          eventObj.target.closest('li').parentNode.querySelectorAll('ul.DSA_secLevel').forEach(function(eachList: { classList: { contains: (arg0: string) => any; add: (arg0: string) => void; }; }) {
            if(!eachList.classList.contains('hide')){
              eachList.classList.add('hide');
            }
          });
        }
      }
    }

    
    selectCardService(eventObj: { target: { closest: (arg0: string) => { (): any; new(): any; classList: { (): any; new(): any; contains: { (arg0: string): any; new(): any; }; remove: { (arg0: string): void; new(): any; }; add: { (arg0: string): void; new(): any; }; }; }; }; }) {
      if(eventObj.target.closest('.DSA_selectionCard').classList.contains('DSA_active')){ 
        eventObj.target.closest('.DSA_selectionCard').classList.remove('DSA_active');
      }
      else{
        eventObj.target.closest('.DSA_selectionCard').classList.add('DSA_active')
      }
    }
    
    // onResizeService(event: any) {
    //   this.loginHeight();
    // }

     /*chage view */
    changeViewService(thisElement: { target: { closest: (arg0: string) => { (): any; new(): any; querySelector: { (arg0: string): { (): any; new(): any; classList: { (): any; new(): any; remove: { (arg0: string): void; new(): any; }; add: { (arg0: string): void; new(): any; }; }; }; new(): any; }; }; parentElement: { classList: { add: (arg0: string) => void; }; previousSibling: { classList: { remove: (arg0: string) => void; }; }; nextSibling: { classList: { remove: (arg0: string) => void; }; }; }; }; },designViewParam: any){       
      if(designViewParam){
        thisElement.target.closest('.ds_viewContainer').querySelector('.codeView').classList.remove('active');
        thisElement.target.closest('.ds_viewContainer').querySelector('.codeView').classList.add('hide'); 
        thisElement.target.closest('.ds_viewContainer').querySelector('.designView').classList.remove('hide');
        thisElement.target.closest('.ds_viewContainer').querySelector('.designView').classList.add('active');
        thisElement.target.parentElement.classList.add('active'); 
        thisElement.target.parentElement.previousSibling.classList.remove('active'); 
      }else{
        thisElement.target.closest('.ds_viewContainer').querySelector('.designView').classList.remove('active');
        thisElement.target.closest('.ds_viewContainer').querySelector('.designView').classList.add('hide');   
        thisElement.target.closest('.ds_viewContainer').querySelector('.codeView').classList.remove('hide');
        thisElement.target.closest('.ds_viewContainer').querySelector('.codeView').classList.add('active');
        thisElement.target.parentElement.classList.add('active'); 
        thisElement.target.parentElement.nextSibling.classList.remove('active'); 
      }
      
    }

    /*timepicker border*/
    setInputFocusService(eventObj: { target: { closest: (arg0: string) => { (): any; new(): any; classList: { (): any; new(): any; add: { (arg0: string): void; new(): any; }; }; }; }; }){ 
      eventObj.target.closest('.DCA_wb_cusTimeCtr').classList.add("mat-focused");             
    }
    resetsetInputFocusService(eventObj: { target: { closest: (arg0: string) => { (): any; new(): any; classList: { (): any; new(): any; remove: { (arg0: string): void; new(): any; }; }; }; }; }){ 
      eventObj.target.closest('.DCA_wb_cusTimeCtr').classList.remove("mat-focused");             
    }


    setCrossLinkUrl(urlObj: any){
      let urlLink="http://cdgweb/Emp_Exp/DS/#/"
      let branding="innerPages/branding/";
      let components="innerPages/components/";
      let pages="innerPages/Pages/";

      switch(urlObj){
        case "ColorsandStyleComponent" : window.open( urlLink+branding+"colorsand-style", '_blank'); break;
        case "TypographyComponent" : window.open( urlLink+branding+"typography", '_blank'); break;
        case "ToneOfVoiceComponent" : window.open( urlLink+branding+"tone-of-voice", '_blank'); break;
        case "NamingComponent" : window.open( urlLink+branding+"naming", '_blank'); break;
        case "PersonalityComponent" : window.open( urlLink+branding+"personality", '_blank'); break;
        case "UsabilityComponent" : window.open( urlLink+branding+"usability", '_blank'); break;
        case "GridsAndSpacingComponent" : window.open( urlLink+branding+"grids-and-spacing", '_blank'); break;
        
        case "ButtonsComponent" : window.open( urlLink+components+"buttons", '_blank'); break;
        case "SelectionControlsComponent" : window.open( urlLink+components+"selection-controls", '_blank'); break;
        case "InputFieldComponent" : window.open( urlLink+components+"input-field", '_blank'); break;
        case "DatePickerComponent" : window.open( urlLink+components+"date-picker", '_blank'); break;
        case "ChipsComponent" : window.open( urlLink+components+"chips", '_blank'); break;
        case "CardsComponent" : window.open( urlLink+components+"cards", '_blank'); break;
        case "ListComponent" : window.open( urlLink+components+"list", '_blank'); break;
        case "DialogComponent" : window.open( urlLink+components+"dialog", '_blank'); break;
        case "ModalComponent" : window.open( urlLink+components+"modal", '_blank'); break;
        case "ChartandgraphComponent" : window.open( urlLink+components+"chartandgraph", '_blank'); break;
        case "TabsComponent" : window.open( urlLink+components+"tabs", '_blank'); break;
        case "ExpandCollapseComponent" : window.open( urlLink+components+"Expand-collapse", '_blank'); break;
        case "AttachmentComponent" : window.open( urlLink+components+"attachment", '_blank'); break;
        case "CommentComponent" : window.open( urlLink+components+"comment", '_blank'); break;
        case "BottomSheetComponent" : window.open( urlLink+components+"bottom-sheet", '_blank'); break;
        case "OverflowMenuComponent" : window.open( urlLink+components+"overflow-menu", '_blank'); break;
        case "ProfileBannerComponent" : window.open( urlLink+components+"profile-banner", '_blank'); break;
        case "AddressComponent" : window.open( urlLink+components+"address", '_blank'); break;
        case "TimelineComponent" : window.open( urlLink+components+"timeline", '_blank'); break;
        case "BottomBarsComponent" : window.open( urlLink+components+"bottom-bars", '_blank'); break;
        case "TopBarsComponent" : window.open( urlLink+components+"top-bars", '_blank'); break;
        case "HamburgerComponent" : window.open( urlLink+components+"hamburger", '_blank'); break;
        case "FiltersComponent" : window.open( urlLink+components+"filters", '_blank'); break;
        case "MessagingComponent" : window.open( urlLink+components+"messaging", '_blank'); break;
        case "ConstructsComponent" : window.open( urlLink+components+"constructs", '_blank'); break;
        case "NotificationComponent" : window.open( urlLink+components+"notification", '_blank'); break;
        case "NudgesComponent" : window.open( urlLink+components+"nudges", '_blank'); break;
        case "MicroFeedbackComponent" : window.open( urlLink+components+"micro-feedback", '_blank'); break;
        case "GuidedFlowsComponent" : window.open( urlLink+components+"guided-flows", '_blank'); break;
        case "VocabularyComponent" : window.open( urlLink+components+"vocabulary", '_blank'); break;
        case "BannerComponent" : window.open( urlLink+components+"banner", '_blank'); break;
        case "EmptyStateComponent" : window.open( urlLink+components+"empty-state", '_blank'); break;
        case "SnackbarComponent" : window.open( urlLink+components+"snackbar", '_blank'); break;
        case "DataGridComponent" : window.open( urlLink+components+"data-grid", '_blank'); break;
        case "BadgeComponent" : window.open( urlLink+components+"badge", '_blank'); break;
        case "GlobalHeaderComponent" : window.open( urlLink+components+"global-header", '_blank'); break;
        case "WebfooterComponent" : window.open( urlLink+components+"webfooter", '_blank'); break;
        case "PaginationComponent" : window.open( urlLink+components+"pagination", '_blank'); break;
        case "PopoverComponent" : window.open( urlLink+components+"popover", '_blank'); break;
        case "TooltipComponent" : window.open( urlLink+components+"tooltip", '_blank'); break;
        case "CalloutComponent" : window.open( urlLink+components+"callout", '_blank'); break;
        case "SliderComponent" : window.open( urlLink+components+"slider", '_blank'); break;
        
        case "PageFormpageComponent" : window.open( urlLink+pages+"page-formpage", '_blank'); break;
        case "FormpageSimpleComponent" : window.open( urlLink+pages+"formpage-simple", '_blank'); break;
        case "FormpageMediumComponent" : window.open( urlLink+pages+"formpage-medium", '_blank'); break;
        case "FormpageComplexComponent" : window.open( urlLink+pages+"formpage-complex", '_blank'); break;
      }
      

    }

    // bindEvent(el: HTMLElement | null, eventName: string, eventHandler: { (e: Event): void; (e: Event): void; }) {
    //   if (el.addEventListener){
    //     el.addEventListener(eventName, eventHandler, false); 
    //   } else if (el.attachEvent){
    //     el.attachEvent('on'+eventName, eventHandler);
    //   }
    // }   
    
    popoverposition(thisElement:any,
      thisElementCntID:any,
      rectLeft:any,
      rectTop:any,
      rectRight:any,
      wdth:any,
      hgth:any,
      itemhgth:any,
      itemwdth:any,
      scrollposition:any){
      if(thisElement.target.getAttribute('data-Pos')=='left'){
          thisElementCntID.style.left = (rectLeft-20-wdth)+'px';
          thisElementCntID.style.top = (rectTop-((hgth-itemhgth)/2)+scrollposition)+'px';
          thisElementCntID.classList.add('DSA_leftArrow');
        }
        if(thisElement.target.getAttribute('data-Pos')=='right'){
          thisElementCntID.style.top = (rectTop-((hgth-itemhgth)/2)+scrollposition)+'px';
          thisElementCntID.style.left = (rectRight+10)+'px';
          thisElementCntID.classList.add('DSA_rightArrow');
        }
        if(thisElement.target.getAttribute('data-Pos')=='top'){
          thisElementCntID.style.top = (rectTop-itemhgth-10-hgth+scrollposition)+'px';
          thisElementCntID.classList.add('DSA_topArrow');
          thisElementCntID.style.left = (rectLeft+(itemwdth-wdth)/2)+'px';
        }
        if(thisElement.target.getAttribute('data-Pos')=='bottom'){
          thisElementCntID.style.top = (rectTop+itemhgth+10+scrollposition)+'px';
          thisElementCntID.classList.add('DSA_bottomArrow');
          thisElementCntID.style.left = (rectLeft+(itemwdth-wdth)/2)+'px';
        }
    }

    hidepopover(){
      var popoverList= document.querySelectorAll('.DSA_popoverMainBody');
      popoverList.forEach(function(eachList) {          
        let popoverbody=<HTMLElement>document.getElementById(eachList.id)
        if(popoverbody.classList.contains('d-block') || (!popoverbody.classList.contains('d-block') && !popoverbody.classList.contains('d-none'))){       
         popoverbody.classList.remove('d-block');
         popoverbody.classList.add('d-none');
        }
     });
    }
    
  //   DSpopoverbind(thisElement:any){
  //     var popupinnerhtml;
  //     var cln;
  //     var thisElementID=thisElement.target.id;
  //     var thisElementCnt=thisElementID+'cnt';
  //     var thisElementCtr=thisElementID+'crt';
  //     var thisElementClose=thisElementID+'close';

  //     var thisElementCntID:any=thisElementCntID=<any>document.getElementById(thisElementCnt);

  //   if(thisElement.type == 'mouseenter'){

  //     var allopenpopup= document.querySelectorAll('.DSA_popoverMainBody');
      
  //     allopenpopup.forEach(function(eachList,index) {
  //         //console.log(eachList.target.id);
  //         eachList.classList.remove('d-block');
  //         eachList.classList.add('d-none')
  //       });

  //       var rectTop = thisElement.target.getBoundingClientRect().top;
  //       var rectLeft = thisElement.target.getBoundingClientRect().left;
  //       var rectRight = thisElement.target.getBoundingClientRect().right;
  //       var itemwdth = thisElement.target.offsetWidth;
  //       var itemhgth = thisElement.target.offsetHeight;
  //       var scrollposition=document.documentElement.scrollTop;
  //     if(thisElementCntID){
  //       thisElementCntID.classList.remove('d-none');
  //       thisElementCntID.classList.add('d-block');

  //       this.popoverposition(thisElement,thisElementCntID,rectLeft,rectTop,
  //         rectRight,wdth,hgth,itemhgth,itemwdth,scrollposition);
          
       
  //     }

  //     else{
      
        
        
        
  //       var iDiv = document.createElement('div');
  //       iDiv.id = thisElementCnt//'DSA_popoverMainBody';
  //       iDiv.className = 'DSA_popoverMainBody';
       
  //       document.getElementsByTagName('body')[0].appendChild(iDiv);
        
  //       cln= thisElement.target.closest(".DSA_popoverMainCtr").querySelector('.DSA_popoverInner').innerHTML;  
  //       thisElement.target.closest(".DSA_popoverMainCtr").querySelector('.DSA_popoverInner').id=thisElementCtr;   
  //       thisElementCntID=<any>document.getElementById(thisElementCnt);     
  //       thisElementCntID.innerHTML=cln;
  //       if(thisElementCntID.querySelector('.DSA_popoverclose')){
  //         thisElementCntID.querySelector('.DSA_popoverclose').id = thisElementClose;
  //       }
  //       popupinnerhtml=thisElement.target.closest(".DSA_popoverMainCtr").querySelector('.DSA_popoverInner').innerHTML;
  //       thisElement.target.closest(".DSA_popoverMainCtr").querySelector('.DSA_popoverInner').innerHTML="";
  //       var wdth = thisElementCntID.offsetWidth;
  //       var hgth = thisElementCntID.offsetHeight;
        
      
        
        
  //       //POSITION
  //       this.popoverposition(thisElement,thisElementCntID,rectLeft,rectTop,
  //         rectRight,wdth,hgth,itemhgth,itemwdth,scrollposition);

        
  //       this.bindEvent(thisElementCntID, 'mouseleave', function (e:Event) {
  //          e.preventDefault();
  //          thisElementCntID.classList.remove('d-block');
  //          thisElementCntID.classList.add('d-none');
  //          });
  //        if(thisElementCntID.querySelector('.DSA_popoverclose')){
  //         this.bindEvent(document.getElementById(thisElementClose), 'click', function (e:Event) {
  //             e.preventDefault();
  //             thisElementCntID.classList.remove('d-block');
  //             thisElementCntID.classList.add('d-none');
  //             });

  //         }
       
  //     }
        
  //   }
  //  else if(thisElement.type == 'mouseleave'){

  //   }
    
    
  }

    
   
    /* DSpopoverbind(thisElement){
        var popupinnerhtml;
        var cln;
        var thisElementID=thisElement.target.id;
        var thisElementCnt=thisElementID+'cnt';
        var thisElementCtr=thisElementID+'crt';
        var thisElementClose=thisElementID+'close';
      if(thisElement.type == 'mouseenter'){

        var allopenpopup= document.querySelectorAll('.DSA_popoverMainBody');
        
        allopenpopup.forEach(function(eachList,index) {
            //console.log(eachList.target.id);
            eachList.classList.remove('d-block');
            eachList.classList.add('d-none')
          });

          var rect = thisElement.target.getBoundingClientRect();
          var itemwdth = thisElement.target.offsetWidth;
          var itemhgth = thisElement.target.offsetHeight;
          var scrollposition=document.documentElement.scrollTop;
        if(document.getElementById(thisElementCnt)){
            //document.getElementById(thisElementCnt).parentNode.removeChild(document.getElementById(thisElementCnt));
            document.getElementById(thisElementCnt).classList.remove('d-none');
            document.getElementById(thisElementCnt).classList.add('d-block');

            
            
         
        }

        else{
        
          
          
          
          var iDiv = document.createElement('div');
          iDiv.id = thisElementCnt//'DSA_popoverMainBody';
          iDiv.className = 'DSA_popoverMainBody';
          document.getElementsByTagName('body')[0].appendChild(iDiv);
          
          cln= thisElement.target.closest(".DSA_popoverMainCtr").querySelector('.DSA_popoverInner').innerHTML;  
          thisElement.target.closest(".DSA_popoverMainCtr").querySelector('.DSA_popoverInner').id=thisElementCtr;        
          document.getElementById(thisElementCnt).innerHTML=cln;
          if(document.getElementById(thisElementCnt).querySelector('.DSA_popoverclose')){
            document.getElementById(thisElementCnt).querySelector('.DSA_popoverclose').id = thisElementClose;
          }
          popupinnerhtml=thisElement.target.closest(".DSA_popoverMainCtr").querySelector('.DSA_popoverInner').innerHTML;
          thisElement.target.closest(".DSA_popoverMainCtr").querySelector('.DSA_popoverInner').innerHTML="";
          var wdth = document.getElementById(thisElementCnt).offsetWidth;
          var hgth = document.getElementById(thisElementCnt).offsetHeight;
          
        
          
          
          if(thisElement.target.getAttribute('data-Pos')=='left'){
            document.getElementById(thisElementCnt).style.left = (rect.left-20-wdth)+'px';
            document.getElementById(thisElementCnt).style.top = (rect.top-((hgth-itemhgth)/2)+scrollposition)+'px';
            document.getElementById(thisElementCnt).classList.add('DSA_leftArrow');
          }
          if(thisElement.target.getAttribute('data-Pos')=='right'){
            document.getElementById(thisElementCnt).style.top = (rect.top-((hgth-itemhgth)/2)+scrollposition)+'px';
            document.getElementById(thisElementCnt).style.left = (rect.right+10)+'px';
            document.getElementById(thisElementCnt).classList.add('DSA_rightArrow');
          }
          if(thisElement.target.getAttribute('data-Pos')=='top'){
            document.getElementById(thisElementCnt).style.top = (rect.top-itemhgth-10-hgth+scrollposition)+'px';
            document.getElementById(thisElementCnt).classList.add('DSA_topArrow');
            document.getElementById(thisElementCnt).style.left = (rect.left+(itemwdth-wdth)/2)+'px';
          }
          if(thisElement.target.getAttribute('data-Pos')=='bottom'){
            document.getElementById(thisElementCnt).style.top = (rect.top+itemhgth+10+scrollposition)+'px';
            document.getElementById(thisElementCnt).classList.add('DSA_bottomArrow');
            document.getElementById(thisElementCnt).style.left = (rect.left+(itemwdth-wdth)/2)+'px';
          }
  
  
          
          this.bindEvent(document.getElementById(thisElementCnt), 'mouseleave', function (e) {
             //document.getElementById(thisElementCnt).parentNode.removeChild(document.getElementById(thisElementCnt));
             e.preventDefault();
             document.getElementById(thisElementCnt).classList.remove('d-block');
             document.getElementById(thisElementCnt).classList.add('d-none');
             //thisElement.target.closest(".DSA_popoverMainCtr").querySelector('.DSA_popoverInner').innerHTML=popupinnerhtml;
           });
           if(document.getElementById(thisElementCnt).querySelector('.DSA_popoverclose')){
            this.bindEvent(document.getElementById(thisElementClose), 'click', function (e) {
                //document.getElementById(thisElementCnt).parentNode.removeChild(document.getElementById(thisElementCnt));
                e.preventDefault();
                document.getElementById(thisElementCnt).classList.remove('d-block');
                document.getElementById(thisElementCnt).classList.add('d-none');
                //thisElement.target.closest(".DSA_popoverMainCtr").querySelector('.DSA_popoverInner').innerHTML=popupinnerhtml;
                //|| thisElement.type == 'mouseout'|| thisElement.type == 'mousedown'
            });
            

            }
         
        }
          
      }
     else if(thisElement.type == 'mouseleave'){

      }
      
      
    } */



    /*top menu right util active*/
    // clickactiveClass(eventObj: { target: { closest: (arg0: string) => { (): any; new(): any; classList: { (): any; new(): any; contains: { (arg0: string): any; new(): any; }; remove: { (arg0: string): void; new(): any; }; add: { (arg0: string): void; new(): any; }; }; querySelectorAll: { (arg0: string): any; new(): any; }; }; }; }){
    //   if(eventObj.target.closest('li').classList.contains('DSA_active')){ 
    //     eventObj.target.closest('li').classList.remove('DSA_active');       
    //   }
    //   else{
    //     var listItems= eventObj.target.closest('ul').querySelectorAll('li');
    //   listItems.forEach(function(eachList: { classList: { remove: (arg0: string) => void; }; }) {
    //     eachList.classList.remove('DSA_active');
    //   });
    //     //eventObj.target.closest('ul').querySelector('li').classList.remove('DSA_active');
    //     eventObj.target.closest('li').classList.add('DSA_active')
    //   }

    // }

    // setActiveClass_list(eventObj: { target: { closest: (arg0: string) => { (): any; new(): any; querySelectorAll: { (arg0: string): any; new(): any; }; classList: { (): any; new(): any; add: { (arg0: string): void; new(): any; }; }; }; }; }){
    //   var listItems = eventObj.target.closest('ul').querySelectorAll("li");
    //   listItems.forEach(function(eachList: { classList: { remove: (arg0: string) => void; }; }) {
    //     eachList.classList.remove('active');
    //   });      
    //   eventObj.target.closest('li').classList.add('active');    
    // }


    // ClickselectedTreeitem(eventObj: { target: { classList: { contains: (arg0: string) => any; remove: (arg0: string) => void; add: (arg0: string) => void; }; closest: (arg0: string) => { (): any; new(): any; querySelectorAll: { (arg0: string): any[]; new(): any; }; }; }; }) {
    //   if(eventObj.target.classList.contains('DSA_active')){ 
    //     eventObj.target.classList.remove('DSA_active');
    //   }
    //   else{
    //     eventObj.target.closest('.DSA_wb_tree').querySelectorAll(".DSA_treemenuitem").forEach(function(eachList: { querySelector: (arg0: string) => { (): any; new(): any; classList: { (): any; new(): any; remove: { (arg0: string): void; new(): any; }; }; }; }) {console.log(1);
    //       eachList.querySelector('.mat-tree-node').classList.remove('DSA_active');
    //     });        
    //     eventObj.target.classList.add('DSA_active')
    //   }
    // }



    // chatbotHeight(thiselement: { target: { closest: (arg0: string) => { (): any; new(): any; querySelector: { (arg0: string): any; new(): any; }; querySelectorAll: { (arg0: string): any; new(): any; }; }; }; }){    
    //   var windowHeight = window.innerHeight;
    //   var windowWidth = window.innerWidth;
    //   if(document.getElementById('scrollHeader')){
    //   var headerHeight =  document.getElementById('scrollHeader').offsetHeight ;
    //   }
    //   else{
    //     var headerHeight=80;
    //   }
    //   if(document.getElementById('mainfooter')){
    //   var footerHeight =  document.getElementById('mainfooter').offsetHeight;
    //   }
    //   else{
    //     var footerHeight=40;
    //   }
    //   var chatboticonposition=50;
    //   var chatbotfooter=200;
    //   var chatbotfooterhome=130;
    
    //   //var footerHeight= 40;
    //   var headerOuterHeight;
    //   if(windowWidth<1024){
    //     headerOuterHeight =56;
    //   }
    //   else{
    //    headerOuterHeight =headerHeight; 
    //   }  
    //   var chatbotHt=(windowHeight)-(headerOuterHeight+footerHeight)-chatboticonposition;
    //   var selectelem=thiselement.target.closest('.JS_DSA_chatbotCtr').querySelector('.DSA_chatbotCtr');
    //   var selectelem2=thiselement.target.closest('.JS_DSA_chatbotCtr').querySelector('.DSA_WidgetinnerCtr');
    //   var selectelem3=thiselement.target.closest('.JS_DSA_chatbotCtr').querySelectorAll('.DSA_widgetCtr');
    //   var chatbothome=thiselement.target.closest('.JS_DSA_chatbotCtr').querySelector('.DSA_Widgethome');

    //   //var chatbotfooterHt=thiselement.target.closest('.JS_DSA_chatbotCtr').querySelector('.DSA_Widgetfooter');
    //   //var mainContentArea = document.getElementById('mainrightCnt');
    //   //var chatbotContentArea = document.querySelector('.DSA_chatbotCtr')[0];alert(chatbotContentArea)
    //   if(selectelem){
    //     selectelem.style.height = (chatbotHt) + 'px';
    //     selectelem2.style.height = (chatbotHt) + 'px';
      
    //     selectelem3.forEach(function(eachList: { style: { height: string; }; }) {
    //       eachList.style.height = (chatbotHt-chatbotfooter) + 'px';
    //     });
        
    //   //mainContentArea.style.paddingTop = (headerOuterHeight) + 'px';
    //   }
    //   if(chatbothome){
    //     chatbothome.style.height = (chatbotHt-chatbotfooterhome) + 'px';
    //   }
 
    // }
    

    // multimenu_menuCollapse(eventObj: { target: { closest: (arg0: string) => { (): any; new(): any; querySelector: { (arg0: string): { (): any; new(): any; classList: { (): any; new(): any; contains: { (arg0: string): any; new(): any; }; add: { (arg0: string): void; new(): any; }; remove: { (arg0: string): void; new(): any; }; }; }; new(): any; }; }; }; }){    
    //     if(eventObj.target.closest('li').querySelector('.collapsibleCnt').classList.contains('d-none')){
    //         eventObj.target.closest('a').querySelector('.DSAinneraccordionIcon').classList.add('down-arw-icon');
    //         eventObj.target.closest('a').querySelector('.DSAinneraccordionIcon').classList.remove('next-icon');
    //         eventObj.target.closest('li').querySelector('.collapsibleCnt').classList.remove('d-none')
    //     }
    //     else{
    //         eventObj.target.closest('a').querySelector('.DSAinneraccordionIcon').classList.add('next-icon');
    //         eventObj.target.closest('a').querySelector('.DSAinneraccordionIcon').classList.remove('down-arw-icon');
    //         eventObj.target.closest('li').querySelector('.collapsibleCnt').classList.add('d-none')
    //     }
    //   }


    //   equalHT(className: any) {
    //     var findClass = document.querySelectorAll(className);
    //     var largest=0;
    //     findClass.forEach(function(eachList) {
    //         if(largest < eachList.offsetHeight) {
    //              largest = eachList.offsetHeight;
    //         }
    //     });
    //     findClass.forEach(function(eachList) {
    //         var largeht=largest+48;
    //         eachList.style.minHeight = largeht+'px';  
    //     });
    // }

    
// }


