import { useEffect,useState } from "react"
import axios from 'axios'
import './Product.css'
let Product=()=>{
    let [posts,setposts]=useState([])
   
    let [comp,setcomp]=useState([])
    useEffect(()=>{axios.get("https://fakestoreapi.com/products").then((res)=>{
        setposts(res.data)
    }).catch((err)=>{console.log(err)})},[])
    let com=(index)=>{
        setcomp([...comp,posts[index]])
        del(index)
        

    }
    let del=(index)=>{
        posts.splice(index,1)
        setposts([...posts])
    }
    let comdel=(index)=>{
        comp.splice(index,1)
        setcomp([...comp])
    }
    let dec=()=>{
        
    }
    let inc=()=>{

    }
    return(
        <>{
        posts.map((item,index)=>{
            return(
                <div className="cont">
                <div className="cart">
                <p><span>Id:</span>   {item.id}</p>
                <p><span>Title:</span>  {item.title}</p>
                <p> <span>Price: </span>  {item.price}</p>
                <p><span>Description:</span>  {item.description}</p>
                <p> <span>Category: </span> {item.category}</p>
                <div className="im">
                <div><img src={item.image} alt="img"/></div>
                

                <div className="add-to-cart">
                <button onClick={dec}><i class="fa-solid fa-minus"></i></button>
                <button onClick={()=>com(index)}>AddCart</button>
                <button onClick={inc}><i class="fa-solid fa-plus"></i></button>
                
                </div>
                </div>
                </div>
                </div>
            )
        }
        
        )
        }
        {
        comp.map((item,index)=>{
            return(
                <div className="cont1">
                <div className="cart1">
                <p><span>Id:</span>   {item.id}</p>
                <p><span>Title:</span>  {item.title}</p>
                <p> <span>Price: </span>  {item.price}</p>
                <p><span>Description:</span>  {item.description}</p>
                <p> <span>Category: </span> {item.category}</p>
                <div className="im">
                <div><img src={item.image}  alt="img"/></div>
                <div><button onClick={()=>comdel(index)}>Delete</button></div>
               
                </div>
                </div>
                </div>
            )
        }
        
        )
        }
        </>
    )
}
export default Product