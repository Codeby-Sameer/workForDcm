import data from "../../data/data.json"
import CourseCard from "./Coursecard"
const Mycourses = () => {
    // const courses = data.courses
    const courses = [
  {
    name: 'React Fundamentals',
    badge: 'React',
    tutor: 'Ananya Sharma',
    progress: 78,
    nextClass: 'July 10, 9:30 AM',
    status: 'Active',
    syllabus: ['JSX', 'Components', 'Hooks', 'Routing'],
    assignments: 2,
    feedback: 'Reviewed',
    resources: ['GitHub Repo', 'Live Demo']
  },
  {
    name: 'UI/UX Design',
    badge: 'Design',
    tutor: 'Rahul Mehra',
    progress: 42,
    nextClass: 'July 12, 11:00 AM',
    status: 'Active',
    syllabus: ['Wireframing', 'Prototyping', 'Color Theory'],
    assignments: 1,
    feedback: 'Pending',
    resources: ['Figma Files', 'Lecture PDFs']
  },
  {
    name: 'Advanced JavaScript',
    badge: 'JavaScript',
    tutor: 'Priya Verma',
    progress: 90,
    nextClass: 'July 15, 2:00 PM',
    status: 'Active',
    syllabus: ['ES6+', 'Closures', 'Async/Await'],
    assignments: 3,
    feedback: 'Reviewed',
    resources: ['CodeSandbox Projects', 'Reference Docs']
  },
  {
    name: 'Responsive Web Design',
    badge: 'Bootstrap',
    tutor: 'Mohit Agarwal',
    progress: 65,
    nextClass: 'July 17, 4:00 PM',
    status: 'Active',
    syllabus: ['Grid System', 'Media Queries', 'Flexbox'],
    assignments: 2,
    feedback: 'Reviewed',
    resources: ['CSSPlayground', 'Bootstrap Docs']
  },
  {
    name: 'API Integration',
    badge: 'Backend',
    tutor: 'Sneha Kapoor',
    progress: 55,
    nextClass: 'July 18, 10:30 AM',
    status: 'Active',
    syllabus: ['REST APIs', 'Axios', 'Authentication'],
    assignments: 2,
    feedback: 'Pending',
    resources: ['Postman Collections', 'API Docs']
  }
];
    return <div className="content-page bg-light">
        <h3 className="m-3">Enrolled Courses</h3>
        <div className="row m-2">


            <div class="col-sm-6 col-xl-3">
                <div class="card d-block">
                    <img class="card-img-top rounded-top" src="/img/javaImg.png" alt="Card image cap" />
                    <div class="card-body">
                        <h4 class="card-title">JAVA</h4>
                        <p class="card-text text-muted">Some quick example text to build on the card..</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Cras justo odio</li>
                    </ul>
                    <div class="card-body">
                        <a href="javascript: void(0);" class="card-link fw-medium">Card link</a>
                        <a href="javascript: void(0);" class="card-link fw-medium">Another link</a>
                    </div>
                    {/* <!-- end card-body--> */}
                </div>
                {/* <!-- end card--> */}
            </div>
            {/* <!-- end col --> */}
const Mycourses=()=>{
    const courses=data.enrollcourses
    
    return<div className="content-page">
<h3 className="m-3">Enrolled Courses</h3>
                            <div className="row m-2">                           
                           {courses.map((course,index)=>{
                            return  <div class="col-sm-6 col-xl-3">
                                    <div class="card d-block">
                                    <img class="card-img-top rounded-top" style={{height:"200px"}} src={course.img} alt="Card image cap"/>
                                    <div class="card-body">
                                        <h4 class="card-title">{course.coursesName}</h4>
                                        <p class="card-text text-muted">Some quick example text to build on the card..</p>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Cras justo odio</li>
                                    </ul>
                                    <div class="card-body">
                                        <a href="javascript: void(0);" class="card-link fw-medium">Card link</a>
                                        <a href="javascript: void(0);" class="card-link fw-medium">Another link</a>
                                    </div>
                                     {/* <!-- end card-body--> */}
                                </div>
                                 {/* <!-- end card--> */}
                            </div>
                           })}


                            {/* <!-- end col --> */}



            <div class="col-xl-6">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title mb-0">Ratio Video 16:9</h5>
                    </div>
                    {/* <!-- end card header --> */}

                    <div class="card-body">
                        <div class="ratio ratio-16x9">
                            <iframe src="https://www.youtube.com/embed/O151OAc3nqQ" title="YouTube video" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                {/* <!-- end card--> */}



            </div>
        </div>

 <div className="container py-4">
      <h4 className="mb-4 text-dark">📚 All Enrolled Courses</h4>
      <div className="row g-4">
        {courses.map((course, idx) => (
          <div key={idx} className="col-md-6 col-lg-4">
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </div>




        <div>
            <div>
                <h3>Live Classes</h3>
            </div>
        </div>





    </div>



}
export default Mycourses