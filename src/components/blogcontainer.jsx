
import { Link } from "react-router-dom";

const Blogs = ({ blog }) => {
  
  console.log(blog)


  return (

    

          <div className=" bg-warning rounded  " >
<div className="px-4">


</div>
            <img className="project-im " src={blog.blogimage} alt="house" />


            <div className="box bg-white justify-content-start d-flex flex-column">


            <Link to={`/Fullblogs/${blog._id}`} className="text-decoration-none text-dark">
         
    <h5 className="img text pt-4 px-2   fw-bold">{blog.blogtitle}</h5>
            <p className="P-text  pt-2 text-truncate Like px-2 " style={{color:"blue"}}>{blog.blogtext}</p>

</Link>  




            <p className="pt-2  px-2 fw-normal ">{new Date(`${blog.updatedAt}`).toLocaleString(
              "en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric"
            }

            )
            }

            </p>

          
</div>

       
          </div>

     





  );
}

export default Blogs;