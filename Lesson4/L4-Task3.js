"use strict";
function fPost(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

fPost.prototype.edit = function (text) {
    this.text = text;
}

function fAttachedPost(author, text, date) {
    fPost.call(this, author, text, date);
    this.highlighted = false;

}

fAttachedPost.prototype = Object.create(fPost.prototype);
fAttachedPost.prototype.constructor = fAttachedPost;
fAttachedPost.prototype.makeTextHighlighted=function(){
    this.highlighted=true;
}
let ob1 = new fAttachedPost("ddd", "text", "date");

class Post{
    constructor(author, text, date){
        this.author=author;
        this.text=text;
        this.date=date;
    }
    edit(tex1){
        this.text=tex1;
    }
}

class AttachedPost extends Post{
    constructor(author, text, date){
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted(){
        this.highlighted = true;
    }
}
let ob2 = new AttachedPost("ddd", "text", "date");