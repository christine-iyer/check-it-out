import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



export default function CreateBlog ({
  createBlog,
  blog,
  handleChange
}
) {
  return (
    <div className={styles.CreateBlog}>
      <h2 className={styles.NewBlog}>Create A Blog</h2>
      <div className={styles.container}>
        <Form 
          className={styles.F}
          onSubmit={(e) => {
            e.preventDefault()
            createBlog()
          }}
        >
          
          <Form.Label>Title
            <input 
            className={styles.title}
            type='text' 
            value={blog.title} 
            name='title' 
            onChange={handleChange} 
            placeholder='Title' 
            />
          </Form.Label>

          <Form.Label>Url
            <input className={styles.url}
            type='text' 
            value={blog.url} 
            name='url' 
            onChange={handleChange} 
            placeholder='URL' />
          </Form.Label>

          <Form.Label>Pick a category:
            <Form.Select 
            
            options={blog.category} 
            value={blog.category} 
            onChange={handleChange} 
            placeholder='Category'
            name="category">
              <option value="Family">Family</option>
              <option  value="Friends">Friends</option>
              <option  value="Work">Work</option>
              <option  value="Code">Code</option>
              <option  value="Misc">Misc</option>
            </Form.Select>
            </Form.Label>

          <Button className={styles.button} 
          type='submit' 
          value='Create Blog' />

        </Form>
      </div>
     
    </div>
  )
}
