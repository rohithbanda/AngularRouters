import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  text:string='';
  constructor(private router: Router) { }

  ngOnInit() {
  }
  redirect(){
    this.router.navigate(['/'+this.text]);
  }
}
