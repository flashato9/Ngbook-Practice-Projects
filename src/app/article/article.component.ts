import { Article } from './article.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article:Article;
  
  constructor() { }

  ngOnInit(): void {
  }
  upVote():boolean{
    this.article.upVote();
    return false;
  }
  downVote():boolean{
    this.article.downVote();
    return false;
  }
}
