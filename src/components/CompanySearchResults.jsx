import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Job from './Job'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getJobsAction } from '../redux/actions'

const CompanySearchResults = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const jobs = useSelector(state => state.job.jobs)

  useEffect(() => {
    dispatch(getJobsAction(params.companyName))
  }, [])


  return (
    <Container>
      <Row>
        <Col>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default CompanySearchResults
