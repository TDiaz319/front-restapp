import { Component, OnInit } from '@angular/core';
import { MainMenuService } from '../services/main-menu.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  constructor(private mainMenuService: MainMenuService) { }

  ngOnInit(): void { 
    this.mainMenuService.getProducto().subscribe();
  } 
    
}
