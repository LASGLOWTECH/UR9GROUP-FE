
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";

import instance from "../axios.config";

const FullBlogs = () => {
	
	const [blogs, setBlogs] = useState({})

	const [loading, setLoading] = useState(true)
	const { id } = useParams();



	useEffect(() => {
		const fetchData = async () => {
		  try {
			const response = await instance.get('/api/Blog');
			const blog = response.data;
			const foundItem = blog.find(blogs=>blogs._id === id); // Find item by ID
			setBlogs(foundItem); // Update state with the found item
			setLoading(true)


		  } 
		  
		  catch (error) {
			console.error('Error fetching item:', error);


			
		  }

		  setLoading(false)


		
		};
	
		fetchData(); // Call the fetchData function
	  }, [id]);

	

	return (

		<div className="clasName" style={{ backgroundColor: '#DADDE4' }}  >

			<Container className="mt-5 py-5">

				{loading && <div className="loading"><p className="P-text pt-4">Please Wait</p></div>}
				{blogs &&


					<div className="   " >
						<div className="">
							<h3 className="img text-center pt-4  pb-4 px-2  display-4 fs-5 fw-bold">{blogs.blogtitle}</h3>

						</div>
						<img className="project-im  rounded-2" src={blogs.blogimage} alt="house" />
						<p className="P-text Like py-4 ">{blogs.blogtext}</p>




					</div>


				}

				<Link to="/blog" className="text-decoration-none">

					<button class="btn btn-warning mb-4  py-3 fw-bold d-flex  text-dark " style={{ fontSize: '16px' }} > View more Blogs

					</button>
				</Link>









			</Container>
		</div>



	);
}

export default FullBlogs;