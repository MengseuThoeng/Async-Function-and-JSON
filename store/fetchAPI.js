const BASE_URL = "http://127.0.0.1:5502/data/"
export async function getData(endPoint){
    try{
        const res = await fetch(BASE_URL+endPoint+".json")
        const data = await res.json()
        return data
    }catch (error){
        console.log(error)
    }
}