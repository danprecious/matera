import axios from "axios";


export async function GetMaterials() {
  
     const response = await axios("http://localhost:3000/materials");
      const data = await response.data;
      // console.log(data)
      
      return data;
}

export const PostMaterials = async () => {
  try {
    const post = await axios.post(""); 
  } catch (error) {
    console.error(error);
    return error;
  }
};

export async function FetchData() {
  let response;
  const data = await fetch("http://localhost:3000/materials");
  // console.log(data);
  response = await data.json();
  console.log(response);
  return { response };
}
