import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  constructor(private api: ApiService) {
    this.fetchQuotes()
   }
  
  fetchQuotes = () => {
    this.api.getAllQuotes().subscribe((data) => { this.getQuotes = data })
  }
  
  getQuotes: any = [];

  ngOnInit(): void {
  }

}
