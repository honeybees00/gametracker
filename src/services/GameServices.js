

const url=import.meta.env.VITE_SUPABASE_URL;
const token=import.meta.env.VITE_SUPABASE_TOKEN;


export const getGames=async() =>{

  const response = await fetch(url, {
		method: "Get",
		headers: {
			"Content-Type": "application/json",
			apikey: token,
		},
	});
  if (!response.ok){
    
console.error("error fetching games", response.error)

      
      
    }else{const data = await response.json();
		return data;}
  };
  export const addGame=async (gameData)=>{
    const response = await fetch(url, {
			method: "Post",
			headers: {
        "Content-Type":"application/json",
				apikey: token,
			},
			body: JSON.stringify(gameData),
		});
    
  }
export const deleteGame= async (gameId)=> {
  const response=await fetch(`${url}?id=eq.${gameId}`,{
    method:"Delete",
    headers:{
      "content-Type":"application/json",
				apikey: token,

    }

  })
  if(!response.ok) throw new Error("failed to delete game")
    return true
}