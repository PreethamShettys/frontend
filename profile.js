import './App.css';
import { useState } from 'react';

function App() {

  const [formData, setFormData] = useState({
     Name: '',
    Dob: '',
    Place: '',
    Phone : '',
    Description: '',
    ImageUpload:'' ,
    Community : [],
  })

  const onChangeHandler = (event) => {

    console.log(event)
    if (event.target.name === 'Community') {

      let copy = { ...formData }

      if (event.target.checked) {
        copy.Community.push(event.target.value)
      } else {
        copy.Community = copy.Community.filter(el => el !== event.target.value)
      }

      setFormData(copy)

    } else {
      setFormData(() => ({
        ...formData,
        [event.target.name]: event.target.value
      }))
    }
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    console.log(formData)
  }
  return (
    <div className="App">
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="Name" className="form-label">Name</label>
          <input className="form-control" name="Full Name" onChange={onChangeHandler} value={formData.Name} />
        </div>
        <div className="form-group">
          <label htmlFor="Dob" className="form-label">Dob</label>
          <input className="form-control" name="Dob" onChange={onChangeHandler} value={formData.Dob} />
        </div>
        <div className="form-group">
          <label htmlFor="Place" className="form-label">Place</label>
          <select className="form-select" name="Place" onChange={onChangeHandler} value={formData.Place}>
            <option value="Mangalore">Mangalore</option>
            <option value="Bengaluru">Bengaluru</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="Phone" className="form-label">Phone</label>
          <input className="form-control" name="Phone" onChange={onChangeHandler} value={formData.Phone} />
        </div>
        <div className="form-group">
          <label htmlFor="Description" className="form-label">Description</label>
          <input className="form-control" name="Description" onChange={onChangeHandler} value={formData.Description} />
        </div>
        <div className="form-group">
          <label htmlFor="ImageUpload" className="form-label">ImageUpload</label>
          <input type="file" onChange={onChangeHandler} />
          <button type="submit">ImageUpload</button>
        </div>

        <div className="form-group">
          <label htmlFor="Community" className="form-label">Community</label>
          <div>
            <div>
              <input type="checkbox" name="Community" value="" onChange={onChangeHandler} checked={formData.Community.indexOf('') !== -1} />
              <label htmlFor="">blank</label>
            </div>
            <div>
              <input type="checkbox" name="Community" value="" onChange={onChangeHandler} checked={formData.Community.indexOf('') !== -1} />
              <label htmlFor="">blank</label>
            </div>
            <div>
              <input type="checkbox" name="Community" value="" onChange={onChangeHandler} checked={formData.Community.indexOf('') !== -1} />
              <label htmlFor="">blank</label>
            </div>
            <div>
              <input type="checkbox" name="Community" value="" onChange={onChangeHandler} checked={formData.Community.indexOf('') !== -1} />
              <label htmlFor="">blank</label>
            </div>
            <div>
              <input type="checkbox" name="Community" value="" onChange={onChangeHandler} checked={formData.Community.indexOf('') !== -1} />
              <label htmlFor="">blank</label>
            </div>
            <div>
              <input type="checkbox" name="Community" value="" onChange={onChangeHandler} checked={formData.Community.indexOf('') !== -1} />
              <label htmlFor="">blank</label>
            </div>
            <div>
              <input type="checkbox" name="Community" value="" onChange={onChangeHandler} checked={formData.Community.indexOf('') !== -1} />
              <label htmlFor="">blank</label>
            </div>
            <div>
              <input type="checkbox" name="Community" value="" onChange={onChangeHandler} checked={formData.Community.indexOf('') !== -1} />
              <label htmlFor="">blank</label>
            </div>
            <div>
              <input type="checkbox" name="Community" value="" onChange={onChangeHandler} checked={formData.Community.indexOf('') !== -1} />
              <label htmlFor="">blank</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <button className="btn" type="submit" >Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
