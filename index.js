function superbowlWin(record){
   const found = record.find((object)=>object.result ==="W");
   console.log("this is the value of found:", found)
   if (found===undefined) {
    return found
   } else return found.year
}
    
