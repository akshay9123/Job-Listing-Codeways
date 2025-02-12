import React from 'react'
import "./JobsBox.css"

const JobsBox = ({job}) => {
  return (
    <div className='jobsBox-parent'>
        <h1>{job.title}</h1>
        <p className='desc'>{job.description}</p>
        <p className='comp'>{job.company}</p>
        <p className='salary'>Salary range from "$" {job.salary_from} to "$" {job.salary_to}</p>
        <p className='category'><span>Category</span> {job.job_category}</p>
    </div>
  )
}

export default JobsBox