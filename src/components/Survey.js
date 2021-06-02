import React, { useState } from 'react';
import { GetUserAvgTennisRating, SetUserTennisRatings } from '../services/user'
import { getCurrentUser } from "../services/auth"

const containerStyle = {
  padding: "20px"
}

const inputRnage = {
  width: "300px"
}

const isBrowser = typeof window !== "undefined"

const Survey = () => {
  let current_rating;

  const [inputFields, setInputFields] = useState([
    {
      id: "forehand",
      text: "How do you rate your forehand",
      val: 50
    },
    {
      id: "backhand",
      text: "How do you rate your backhand",
      val: 50
    },
    {
      id: "return_serve",
      text: "How do you rate your reture server",
      val: 50
    },
    {
      id: "volleys",
      text: "How do you rate your volleys",
      val: 50
    },
    {
      id: "overheads",
      text: "How do you rate your overheads",
      val: 50
    },
    {
      id: "serve",
      text: "How do you rate your serve",
      val: 50
    },
  ]);

  const [userAvgR, setUserAvgR] = useState(0)

  const handleChangeInput = (event) => {
    const newInputFields = inputFields.map(i => {
      if(event.target.getAttribute('id') === i.id) {
        i.val = event.target.value
      }
      return i;
    })

    setInputFields(newInputFields);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(inputFields[0].val);
    SetUserTennisRatings(getCurrentUser(),
                         parseInt(inputFields[0].val, 10),
                         parseInt(inputFields[1].val, 10),
                         parseInt(inputFields[2].val, 10),
                         parseInt(inputFields[3].val, 10),
                         parseInt(inputFields[4].val, 10),
                         parseInt(inputFields[5].val, 10))
    setUserAvgR(GetUserAvgTennisRating(getCurrentUser()))
  }

  const inputForm = inputFields.map((skill) =>
    <div class="container" style={containerStyle}>
      <div className="row justify-content-center">
        <label for="customRange2" class="form-label">{skill.text} : {skill.val}</label>
      </div>
      <div className="row justify-content-center">
        <input type="range" class="form-range" id={skill.id} style={inputRnage} onChange={handleChangeInput} data-bs-toggle="tooltip" title={skill.val} />
      </div>
    </div>
  )


  if (isBrowser) {
    current_rating =
      <label for="customRange2" class="form-label"> Welcome to HIRO, your current rating is {userAvgR} </label>
  }

  return (
    <div>
      <div class="container" style={containerStyle}>
        <div className="row justify-content-center">
          {current_rating}
        </div>
      </div>
      {inputForm}
      <div class="container" style={containerStyle}>
        <div className="row justify-content-center">
          <button type="button" class="btn btn-outline-dark" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Survey;
