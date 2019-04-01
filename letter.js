function Letter(char){
    this.char = char;
    this.guessed = false;
    this.string;
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
       
    }

}

module.exports = Letter