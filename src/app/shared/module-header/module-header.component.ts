import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-module-header',
  templateUrl: './module-header.component.html',
  styleUrls: ['./module-header.component.scss']
})
export class ModuleHeaderComponent implements OnInit {

  @Input() title!:string;

  constructor() { 
  }


    

  ngOnInit(): void {
  }

}
