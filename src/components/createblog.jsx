import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";

const CreateBlog = () => {
    const [blogImage, setBlogImage] = useState('');
    const [title, setTitle] = useState('');
    const [blogText, setBlogText] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const blog = { blogImage, title, blogText };
            const response = await fetch('/api/blog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(blog)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error);
            }

            // Reset form inputs and clear error state on successful submission
            setBlogImage('');
            setTitle('');
            setBlogText('');
            setError('');

            const responseData = await response.json();
            console.log('New blog added:', responseData);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="Blogs mt-5">
            <Container className='bg-success px-4 pt-4'>
                <div className="form-values pt-5">
                    <form className="form bg-warning d-flex flex-column" onSubmit={handleSubmit}>
                        <label htmlFor="file">Image</label>
                        <input 
                            type="file"
                            value={blogImage}
                            onChange={(e) => setBlogImage(e.target.value)}
                        />

                        <label htmlFor="title">Title</label>
                        <input 
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        <label htmlFor="text">Body</label>
                        <textarea
                            className="Header-text"
                            onChange={(e) => setBlogText(e.target.value)}
                            value={blogText}
                            cols="8"
                            rows="8"
                        />

                        <Button variant="info" type="submit">Submit</Button>

                        {error && <div className="form text-bg-danger"><p className="text-danger">{error}</p></div>}
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default CreateBlog;
