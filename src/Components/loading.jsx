const Loading =()=>{
    return (
    <>
    <p
     style={{height: "200px"}}
     className="placeholder-glow col-md-6 d-flex flex-column align-items-center justify-content-center">  
     
     <span className="placeholder-lg placeholder w-75"></span>
     <span className="placeholder-lg placeholder w-100"></span>
     <span className="placeholder-lg placeholder w-25"></span> 
     </p>

     <div className="d-flex w-100 gap-2 justify-content-center">
     <span className="placeholder-lg placeholder w-25"></span>
     </div>

    
    <span
    style={{height: "200px"}}
    className="placeholder rounded col-md-6 placeholder-lg placeholder-wave">
        
    </span>
    </>
    )
}
    
 

export default Loading