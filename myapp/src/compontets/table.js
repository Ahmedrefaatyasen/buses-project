import React, {   useState } from 'react';
import './table.css'


const Table = () => { 
    
    
   
    const[mood,setmood]=useState(false);
    const[mood3,setmood3]=useState(false);
   ;
    const[Data,setData]=useState(JSON.parse(localStorage.getItem("test")));
    const[formdata,setformdata]=useState({ value1:"",value2:"",value3:"",value4:"",value5:"",value6:""})
   
    const[useredit,setuseredit]=useState({ value1:"",value2:"",value3:"",value4:"",value5:"",value6:""});
   

    
    function handle(e){
        setformdata({...formdata,[e.target.name]:e.target.value})
       
    }
    


   
  
   
    
   
    
    function create(){
        setmood(!mood)
      
    }
    function add(){
        
        
        setmood(!mood)
        const formdatas={
            id:Date.now(),
           
            ...formdata
        }
       setData([...Data,formdatas])
        
        localStorage.setItem("test",JSON.stringify(Data))
      
    }
    function delet(id){
    
   const arr= Data.filter((b)=> b.id!==id)
   setData(arr)
   localStorage.setItem('test',JSON.stringify(arr))

    
  
    }
    function edit(task){
        
        setmood3(!mood)
      
        
        setuseredit(task)
    }
  function handledit(){
    setmood3(!mood3)
   const updateuser=Data.map((user)=>{if (user.id === useredit.id
   ) {
    return {...user,...useredit}
    

   }
   return user;
   
  })
setData(updateuser)

  }
    

    
   
    
   
   
    
    return(
        <div className='table'>
            <div className='text'>
                <h3>اسعار الباقه</h3>
            </div>
            { mood&& <div style={{display:"flex",flexDirection:"column"}}>
            
                
            <div className='bob'>
                <h1>اضافه باقه جديده</h1>

            <div className='flex'>
                <label htmlFor='one'>نوع الباقه:</label>
            <input type='text' id='one'    name='value1' onChange={handle} value={formdata.value1} placeholder='اختار نوع الباقه:شهريه\اسبوعيه\دائمه'/>
            
                <label htmlFor='two'>نوع الرحله:</label>
            <input type='text' id='two' name='value2' onChange={handle} value={formdata.value2} placeholder='اختار نوع الباقه :ذهاب\عوده\ذهاب وعوده'/>
            
            </div>
           
            <div className='flex'>
            
                <label htmlFor='three'>سعر الباقه:</label>
            <input type='text' id='three'  name='value3' onChange={handle} value={formdata.value3} placeholder='ادخل عدد الرحلات'/>
            
            
            <label htmlFor='four'>عنوان الاستلام:</label>
            <input type='text'  onChange={handle} value={formdata.value4} name='value4' placeholder="نوع الباقه"/>
            
            </div>
            
            <div className='flex' >
                <label htmlFor='five'>عنوان الوصول:</label>
           <input type='text' id='five'  name='value5' onChange={handle} value={formdata.value5} placeholder='نوع الباقه'/>:
            <label htmlFor='six'>تاريخ انتهاءالباقه:</label>
            <input type='text' id='six' name='value6' onChange={handle} value={formdata.value6}  placeholder= ""/>
            </div>
            
               
        
            <div style={{display:"flex",justifyContent:"space-between",gap:"30px",marginTop:"30px"}}>
            < button onClick={()=>add()}>حفظ</button>
            <button onClick={()=>setmood(false)}>الغاء</button>
            </div>
            </div>
            </div>}

        
            { mood3 && <div style={{display:"flex",flexDirection:"column"}}>
            
                
            <div className='bob'>
                <h1>تعديل الباقه</h1>

            <div className='flex'>
                <label htmlFor='one'>نوع الباقه:</label>
            <input type='text' id='one'    name='value1' onChange={(e)=>setuseredit({...useredit,[e.target.name]:e.target.value})} value={useredit.value1} placeholder='اختار نوع الباقه:شهريه\اسبوعيه\دائمه'/>
            
                <label htmlFor='two'>نوع الرحله:</label>
            <input type='text' id='two' name='value2' onChange={(e)=>setuseredit({...useredit,[e.target.name]:e.target.value})}  value={useredit.value2} placeholder='اختار نوع الباقه :ذهاب\عوده\ذهاب وعوده'/>
            
            </div>
           
            <div className='flex'>
            
                <label htmlFor='tree'>سعر الباقه:</label>
            <input type='text' id='three' name='value3' onChange={(e)=>setuseredit({...useredit,value3:e.target.value})}  value={useredit.value3} placeholder='ادخل عدد الرحلات'/>
            
            
            <label htmlFor='four'>عنوان الاستلام:</label>
            <input type='text' id='four' name='value4' onChange={(e)=>setuseredit({...useredit,value4:e.target.value})}  value={useredit.value4}  placeholder="نوع الباقه"/>
            
            </div>
            
            <div className='flex' >
                <label htmlFor='five'>عنوان الوصول:</label>
           <input type='text' id='five'  name='value5' onChange={(e)=>setuseredit({...useredit,value5:e.target.value})}  value={useredit.value5} placeholder='نوع الباقه'/>:
            <label htmlFor='six'>تاريخ انتهاءالباقه:</label>
            <input type='text' id='six' name='value6' onChange={(e)=>setuseredit({...useredit,value6:e.target.value})}  value={useredit.value6}  placeholder= ""/>
            </div>
            
               
        
            <div style={{display:"flex",justifyContent:"space-between",gap:"30px",marginTop:"30px"}}>
            < button onClick={()=>handledit()}>تعديل</button>
            <button onClick={()=>setmood3(!mood3)}>الغاء</button>
            </div>
            </div>
            </div>}
        
            
              
                
                
              
                
                
            <table>
                <tr cla ssName='tr'>
                    <th>الباقه</th>
                    <th>نوع الرحله</th>
                    <th>عدد الرحلات</th>
                    <th>من-الي</th>
                    <th>تاريخ انتهاء الباقه</th>
                    <th>الحاله</th>
                    
                </tr>
           
            {Data.map((c)=>
            <tr>
                <td>{c.id}</td>
                <td>{c.value1}</td>
                <td>{c.value2}</td>
                <td>{c.value3}</td>
                <td>{c.value4}</td>
                <td>{c.value5}</td>
                <td>{c.value6}</td>
                <button onClick={()=>{delet(c.id)}}>حذف</button>
                <button onClick={()=>edit(c)}>تعديل</button>
                </tr>
)}
           
            </table>
           
            <button onClick={create} className='btn'>اضافه</button>
        </div>
    );
}

export default Table;
