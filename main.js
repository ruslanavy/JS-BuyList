

$(function(){
     var $blList = $(".bl-list");
    var template = $(".row-template").html();
    var blockTemplate = $(".block-template").html();
    var $listPnames = $(".list-pnames");
    var $nlistPnames = $(".nlist-pnames");
    console.log(template);
    function addOneItem(name){
        var quantity = 1;
        var $node = $(template);
        var $listNode = $(blockTemplate);
        $blList.append($node);
        $listPnames.append($listNode);
        $node.find(".name-prod").text(name);
        $listNode.find(".box-name-prod").text(name);
        
        var $plus = $node.find(".bl-plus");
        var $minus = $node.find(".bl-minus");
        var $blLabel =  $node.find(".bl-label");
        var $bX = $node.find(".b-x");
        var $prodName = $node.find(".name-prod");
        var $prodRename = $node.find(".rename-prod");
        var $boxCounter = $listNode.find(".prod-counter");
        $boxCounter.text(quantity);
        if(quantity == 1){
        $minus.addClass("minus-disable");
        $minus.attr('disabled', 'disabled');
        }
        $plus.click(function(){
            if(quantity == 1){
                $minus.removeClass("minus-disable");
                $minus.removeAttr('disabled');
            }
            quantity++;
            $blLabel.text(quantity);
            $boxCounter.text(quantity);
        });
        
        $minus.click(function(){
            if(quantity == 2){
               $minus.addClass("minus-disable");
                $minus.attr('disabled', 'disabled');
            }
            quantity--;
            $blLabel.text(quantity);
            $boxCounter.text(quantity);
        });
        $blLabel.text(quantity);
        $bX.click(function(){
            $node.remove();
            $listNode.remove();
        });
        
        $node.addClass("state-non-rename");
        $prodName.click(function(){
           
           $node.addClass("state-rename");
            $node.removeClass("state-non-rename");
            $prodRename.attr('value', $prodName.text());
            $prodRename.focus();
           
            
        });
        $(document).click(function(){
            if($node.hasClass("state-rename")&&!($prodRename.is(":focus"))){
                $node.addClass("state-non-rename");
                $node.removeClass("state-rename");
                $prodName.text($prodRename.val());
                    
            }
        })
       
        
         var $bought = $node.find(".b-bought");
        var $unbought = $node.find(".unbought");  
       
       
        $node.addClass("state-not-bought");
        $bought.click(function(){
            $node.addClass("state-bought");
            $node.removeClass("state-not-bought");
            $listNode.remove();
            $listNode.find("span").addClass("cross");
            $nlistPnames.append($listNode);
            
            
           
            
        });
        $unbought.click(function(){
            $node.addClass("state-not-bought");
            $node.removeClass("state-bought");
            $listNode.remove();
            $listNode.find("span").removeClass("cross");
            $listPnames.append($listNode);
            
        });
        
       
        
        
        
    } 
    var $input = $(".in-product");
    function addProduct(a){
        var text = $input.val();
       if(text.length > 0){
            addOneItem(text);
            $input.val("");
       }
       $input.focus();
        return;
    }
    
   $(".b-in-product").click(function(){
       
      addProduct($input);
           
   })
   
   $input.keypress(function(event){
       if(event.keyCode == 13){
           addProduct($input);
       }
   });
    
   
   addOneItem("Eggs");
    addOneItem("Chicken");
    addOneItem("Potatoes");
});