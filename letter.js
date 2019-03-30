function Letter(char){
    this.char = char;
    this.guessed ;

    this.toString = function(){
        if(this.guessed){
            console.log(char);
        }
        else
            console.log("_")
    }

    this.check = function(char){
        if(char === this.char){
            this.guessed = true;
        }
        else 
            this.guessed = false;
    }

}

module.exports = Letter