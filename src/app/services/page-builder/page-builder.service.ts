import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageBuilderService {

  constructor() { }

  createNavArray(pages: any[]) {
    let mainNavItems = pages.filter((p: any) => p.pageType === 'main');
    mainNavItems.forEach((mNavItem: any) => {
      const subNavItems = pages.filter((sNavItem: any) => sNavItem.mainLink === mNavItem.url);
      mNavItem.subPages = subNavItems;
    })

    return mainNavItems;
  }
}
