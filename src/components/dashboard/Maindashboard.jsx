import { Link } from "react-router-dom"

import FocusOfDay from "./focusofday";
import GoalProgressWidget from "./goalporgresswidget";
import TaskWidget from "./taskwidget";
import TutorCard from "./tutorcard";
import EnrolledCourses from "./enrolledcouser";
import UpcomingClasses from "./upcomingclasses";
import TodoListCard from "./focusofday";



const Maindashboard = () => {


    return <>

        <div className="content-page bg-light">
            <div className="content">
                <div className="container-fluid">
                    <div className="m-2 p-3">

                        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="img/small/img-8.jpg" class="d-block w-100" style={{ height: '200px' }} alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="img/small/img-6.jpg" class="d-block w-100" style={{ height: '200px' }} alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="img/small/img-7.jpg" class="d-block w-100" style={{ height: '200px' }} alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>





                <div className="container-fluid">
                    {/* <!-- Start Content--> */}
                    <div className="container-fluid mt-3">
                        <div className="row g-3 justify-content-around">

                            {/* Daily Focus & Productivity Insight */}
                            <div className="col-md-7">
                                <TodoListCard />
                            </div>
                            {/* <div className="col-md-6">
                                <GoalProgressWidget goalTitle="Weekly Goal" percentage={64} />
                            </div> */}

                            {/* Task Cards */}
                          <div className="col-md-4">
                              <div className="row g-5">
                                  <div className="col-md-12">
                                <TaskWidget title="Tasks Pending" count={29} trend="-1.5%" />
                            </div>
                            <div className="col-md-12">
                                <TaskWidget title="Tasks Completed" count={43} trend="+3.2%" />
                            </div>
                              </div>
                          </div>
                            {/* <div className="col-md-4">
                                <GoalProgressWidget goalTitle="Project Completion" percentage={82} />
                            </div> */}
                            <div className="col-md-5">
                                <EnrolledCourses />
                            </div>

                            <div className="col-md-3">
                                <TutorCard />
                            </div>
                               <div className="col-md-3">
              <UpcomingClasses />
            </div>



                        </div>
                    </div>
                </div>




            </div>
            {/* <!-- container-fluid --> */}
        </div>
        {/* <!-- content --> */}



    </>
}
export default Maindashboard