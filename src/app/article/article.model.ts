export class Article{
    title:string;
    link:string;
    votes:number;

    constructor(title:string, link:string, votes?:number){
        this.title=title;
        this.link=link;
        this.votes=votes||0;
        console.log("Created new Article object");

    }
    upVote(){
        this.votes++;
    }
    downVote(){
        this.votes--;
    }
}