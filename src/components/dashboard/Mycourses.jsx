import data from "../../data/data.json"
const Mycourses=()=>{
    const courses=data.courses
    return<div className="content-page">
        <div className="d-flex flex-row flex-wrap">
    {
        courses.map((course, index)=>(
            <div class="card m-4" style={{width: "20em"}} key={index}>
            <div className="d-flex "> 
            <img src={course.img} class="card-img-top m-2" style={{width: "300px", height:"200px"}} alt={course.title}/></div>
            <div class="card-body">
            <h5 class="card-title">{course.title}</h5>
            <p class="card-text">{course.description}</p>
            <a href="#" class="btn btn-primary">view Cousers</a>
            </div>
            
            </div>
        ))
    }
</div>




    </div>
    
        
}
export default Mycourses