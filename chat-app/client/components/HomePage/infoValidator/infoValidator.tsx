export const infoValitaor = (text:string) =>{
    if(text.length < 3 || text.length > 25){
        return {error:'Input must be 3-20 characters'}
      } 
      if(text.toLowerCase().includes('admin')){
        return {error:'Input must not include the word: "Admin".'}
      } 
}