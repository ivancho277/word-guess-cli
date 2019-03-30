function Letter(char){
    this.char = char;
    this.guessed;

    this.toString = function(){
        if(guessed){
            console.log(char);
        }
        else
            console.log("_")
    }

    this.check = function(char){
        if(char === this.char){
            guessed = true;
        }
        else 
            guessed = false;
    }

}

module.exports = Letter