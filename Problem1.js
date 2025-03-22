
function mergeShippingLists(...lists){
    let mergedItems = {};
    for(let list of lists){
        for(let item of list){
            let key = item.name.toLowerCase();
            if(mergedItems[key]){
                mergedItems[key].quantity+=item.quantity;
            }else{
                mergedItems[key] = {name:item.name,quantity:item.quantity,category:item.category}
            }
        }
    }

   let categorizedItems = {};
   for(let key in mergedItems){
    let item = mergedItems[key];
    if(!categorizedItems[item.category]){
        categorizedItems[item.category] = []
    }
    categorizedItems[item.category].push({name:item.name,quantity:item.quantity})
   }

   return categorizedItems

}

let list1 = [
    { name: "Apples", quantity: 5, category: "Fruits" },
    { name: "Milk", quantity: 1, category: "Dairy" },
    { name: "Bread", quantity: 2, category: "Bakery" }
  ]
  
  let list2 = [
    { name: "Bananas", quantity: 4, category: "Fruits" },
    { name: "Milk", quantity: 2, category: "Dairy" },
    { name: "Eggs", quantity: 12, category: "Dairy" }
  ]
  
  let list3 = [
    { name: "Apples", quantity: 3, category: "Fruits" },
    { name: "Cereal", quantity: 1, category: "Breakfast" }
  ]
  
  console.log(mergeShippingLists(list1,list2,list3))