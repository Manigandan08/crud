import axios from "axios";

export async function getData(){
    const url=" http://localhost:4200/product";
    return await axios.get(url);
}

export async function deleteData(id){
    const url=" http://localhost:4200/product";
    return await axios.delete(url+"/"+id);
    
}

export async function addData(data){
    const url=" http://localhost:4200/product";
    return await axios.post(url,data,{headers:{
        'Content-Type':'application/json'
    }});
    
}

export async function editData(id,data){
    const url=" http://localhost:4200/product";
    return await axios.put(url+"/"+id,data,{headers:{
        'Content-Type':'application/json'
    }});
}

export async function getDataid(id){
    const url=" http://localhost:4200/product";
    return await axios.get(url+"/"+id);
}

