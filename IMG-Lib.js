let IMG_Lib = function(){
    let self = this;

    self.base64String; 

    self.getBase64 = function(){
        return self.base64String;
    }

    self.imgPreview = function(Target){
        document.getElementById(Target).src = self.base64String;
    }

    self.readFile = function(){
        if (this.files && this.files[0]) {
          
            var FR = new FileReader();
            
            FR.addEventListener("load", function(e) {
              self.base64String = e.target.result;
            }); 
            
            FR.readAsDataURL( this.files[0] );
        }
    }
}