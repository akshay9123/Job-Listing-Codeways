import React, { useEffect, useState } from "react";
import "./Body.css";
import JobsBox from "../JobsBox/JobsBox";
import FilterBox from "../FilterBox/FilterBox";

const Body = () => {
  const [jobs, setJobs] = useState([]);
  const [visibleJobs, setVisibleJobs] = useState(8);

  const [filterjobs, setFilterjobs] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {

    const fetchJobs = async () => {
      try {
        const response = await fetch("https://jsonfakery.com/jobs")


        const data = await response.json()

        setJobs(data)
      } catch (error) {
        console.error("Error fetching jobs:", error)
  }
    };

    fetchJobs()
  }, [])

 
  let displayedJobs = jobs;



  if (filterjobs !== "") {
    displayedJobs = displayedJobs.filter((job) => job.company === filterjobs)
  }


  if (searchTerm !== "") {
    displayedJobs = displayedJobs.filter((job) => job.title === searchTerm)
  }

  // THIS IS THE FUNCTION THAT HANDLE THE LOAD MORE JOB BUTTON'S FUNCTIONALITY
  const loadMoreJobs = () => {
  setVisibleJobs((prev) => prev + 8);
  };


  // THIS FUNCTION IS USED FOR SEARCH JOB FUNCTIONALITY
  const handleSubmit = (e) => {
    e.preventDefault()

    setSearchTerm(searchItem)

  };

  return (
    <>
      <div className="search-box-parent">

        <div className="search-box">

          <form className="input-box" onSubmit={handleSubmit}>

            <input
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            type="text"
            placeholder="Search by Title..."
            />
            <button type="submit">Search</button>

          </form>

        </div>

      </div>

    {/* THIS IS FOR THE FILTER THE JOBS */}
      <div className="filter-options">


        <FilterBox 
        setFilterjobs={setFilterjobs} />
      </div>

     {/* job section  */}
      <div className="job-section">


        <div className="jobs-field">

          {jobs.length > 0 ? (displayedJobs.slice(0, visibleJobs).map((job) => (<JobsBox key={job.id} job={job} />
))
          ) : (
            <p>Loading Jobs...</p>
          )}
        </div>

        <div className="load-more-section">
          {visibleJobs < displayedJobs.length && (
            <button className="load-more-btn" onClick={loadMoreJobs}>
              Load More
            </button>
          )}

        </div>
        </div>
    </>
  );
};

export default Body;
