import { Article } from './article/article.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles:Article[];

  constructor(){
    this.articles=[new Article("test title", "test link", 4)];

  }

  addArticle(title:HTMLInputElement, link:HTMLInputElement):boolean{
    this.articles.push(new Article(title.value,link.value,0));
    console.log("Added a new article to articles array");
    title.value='';
    link.value='';
    return false;
  }
}
